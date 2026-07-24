import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, source } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    const googleScriptUrl = process.env.CONTACT_GOOGLE_SCRIPT_URL

    if (googleScriptUrl) {
      const res = await fetch(googleScriptUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'newsletter',
          name: name || '',
          email,
          source: source || 'website',
        }),
      })

      const result = await res.json()

      if (!result.success) {
        console.error('GAS error:', result.error || 'unknown')
        return NextResponse.json({ error: result.error || 'Failed to subscribe' }, { status: 500 })
      }
    }

    return NextResponse.json({ success: true, message: 'Subscribed successfully' })
  } catch (err) {
    console.error('Newsletter API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
