/**
 * Google Apps Script — Unified Form Handler
 * Routes submissions to separate sheets: Contacts, Newsletters
 *
 * SECURITY: Never hardcode secrets here. Use Script Properties.
 *
 * ── SETUP ──
 * 1. Open the Google Sheet linked below
 * 2. Extensions > Apps Script > paste this file
 * 3. Run setupSheets() once to create sheet structure
 * 4. Project Settings > Script Properties > add DISCORD_WEBHOOK_URL
 * 5. Deploy > New deployment > Web app > Execute as "Me", Access "Anyone"
 * 6. Copy the web app URL → set as CONTACT_GOOGLE_SCRIPT_URL in .env.local
 * ───────────
 *
 * Sheet: https://docs.google.com/spreadsheets/d/1Onedq7l_6eISm8-lDO1TuNaEwXzsjBuMSSGKUfRF91U/edit
 */

var SHEET_ID = '1Onedq7l_6eISm8-lDO1TuNaEwXzsjBuMSSGKUfRF91U'

// ── IMPORTANT ──
// If you get "unable to open the file" errors:
//   1. Make sure this Google Sheet exists and is accessible
//   2. Go to Extensions > Apps Script from within the Sheet itself
//   3. Paste this code, run setupSheets(), then Deploy > New deployment
// Alternatively, share the Sheet with the email used to deploy this script.
// ────────────────

// ── Sheet Names & Headers ──
var SHEETS = {
  Contacts: ['Timestamp', 'Name', 'Email', 'Message'],
  Newsletters: ['Timestamp', 'Name', 'Email', 'Source'],
}

// ── Router ──
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents)
    var type = data.type || 'contact'

    if (type === 'newsletter') return handleNewsletter(data)
    return handleContact(data)
  } catch (error) {
    return jsonResponse({ success: false, error: error.toString() })
  }
}

function doGet() {
  return ContentService
    .createTextOutput('Form handler is active.')
    .setMimeType(ContentService.MimeType.TEXT)
}

// ── Handlers ──

function handleContact(data) {
  var name = (data.name || '').trim()
  var email = (data.email || '').trim()
  var message = (data.message || '').trim()

  if (!name || !email || !message) {
    return jsonResponse({ success: false, error: 'Name, email, and message are required' })
  }

  var timestamp = new Date()
  appendRow('Contacts', [timestamp, name, email, message])
  sendDiscordNotification('New Contact Form Submission', [
    { name: 'Name', value: name, inline: true },
    { name: 'Email', value: email, inline: true },
    { name: 'Message', value: message.length > 1000 ? message.substring(0, 1000) + '…' : message }
  ], timestamp)

  return jsonResponse({ success: true })
}

function handleNewsletter(data) {
  var name = (data.name || '').trim()
  var email = (data.email || '').trim()
  var source = (data.source || 'website').trim()

  if (!email) {
    return jsonResponse({ success: false, error: 'Email is required' })
  }

  var timestamp = new Date()
  appendRow('Newsletters', [timestamp, name, email, source])
  sendDiscordNotification('New Newsletter Subscription', [
    { name: 'Name', value: name || '—', inline: true },
    { name: 'Email', value: email, inline: true },
    { name: 'Source', value: source, inline: true }
  ], timestamp)

  return jsonResponse({ success: true })
}

// ── Sheets ──

function setupSheets() {
  var ss = SpreadsheetApp.openById(SHEET_ID)

  for (var name in SHEETS) {
    var sheet = ss.getSheetByName(name)
    if (!sheet) {
      sheet = ss.insertSheet(name)
    }
    sheet.clear()
    sheet.getRange(1, 1, 1, SHEETS[name].length)
      .setValues([SHEETS[name]])
      .setFontWeight('bold')
  }
}

function ensureSheet(name) {
  var ss = SpreadsheetApp.openById(SHEET_ID)
  var sheet = ss.getSheetByName(name)
  if (sheet) return sheet

  sheet = ss.insertSheet(name)
  sheet.getRange(1, 1, 1, SHEETS[name].length)
    .setValues([SHEETS[name]])
    .setFontWeight('bold')
  return sheet
}

function getSheetUrl() {
  return 'https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/edit'
}

function appendRow(sheetName, row) {
  var sheet = ensureSheet(sheetName)
  sheet.appendRow(row)
}

// ── Discord ──

var DEFAULT_DISCORD_WEBHOOK = 'https://discord.com/api/webhooks/1524497859267788820/MUWTDT_2VyxfiRwbPJJ8ign2Z9OZIhBarWtCSwXOCOn68Occy3f0aEolWfNAhozM91Fi'

function sendDiscordNotification(title, fields, timestamp) {
  var webhookUrl = PropertiesService.getScriptProperties().getProperty('DISCORD_WEBHOOK_URL') || DEFAULT_DISCORD_WEBHOOK
  if (!webhookUrl) return

  var payload = {
    embeds: [{
      title: title,
      color: 0x5F8651,
      fields: fields,
      footer: { text: 'Submitted at ' + (timestamp || new Date()).toLocaleString() },
    }],
  }

  try {
    UrlFetchApp.fetch(webhookUrl, {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload),
      muteHttpExceptions: true,
    })
  } catch (e) {
    Logger.log('Discord webhook failed: ' + e.toString())
  }
}

// ── Helpers ──

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON)
}
