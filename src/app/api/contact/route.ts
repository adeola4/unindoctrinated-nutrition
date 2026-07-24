import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    if (!email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const googleScriptUrl = process.env.CONTACT_GOOGLE_SCRIPT_URL

    // Send to Google Sheets
    if (googleScriptUrl) {
      const res = await fetch(googleScriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'contact', name, email, message }),
      })

      const result = await res.json()

      if (!result.success) {
        console.error('GAS error:', result.error || 'unknown')
      }
    }

    // Send Discord notification directly from server
    const discordWebhook = process.env.CONTACT_DISCORD_WEBHOOK_URL
    if (discordWebhook) {
      try {
        await fetch(discordWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            embeds: [{
              title: 'New Contact Form Submission',
              color: 0x5F8651,
              fields: [
                { name: 'Name', value: name, inline: true },
                { name: 'Email', value: email, inline: true },
                { name: 'Message', value: message.length > 1000 ? message.substring(0, 1000) + '…' : message },
              ],
              footer: { text: `Submitted at ${new Date().toLocaleString()}` },
            }],
          }),
        })
      } catch (err) {
        console.error('Discord webhook error:', err)
      }
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
