import { NextRequest, NextResponse } from 'next/server'

const NVIDIA_API_URL = 'https://integrate.api.nvidia.com/v1/chat/completions'

const SYSTEM_PROMPT = `You are a helpful nutrition science assistant for "Unindoctrinated Nutrition Science" — a research-backed, evidence-based nutrition science platform created by Adeola James.

Your role is to answer questions about nutrition science, diet, supplementation, metabolic health, and biochemistry. Always base your answers on current scientific evidence.

Guidelines:
- Be accurate, clear, and concise
- Cite scientific principles when relevant
- Acknowledge when a topic has mixed or insufficient evidence
- Do not give medical advice or diagnose conditions
- Stay focused on nutrition and health science topics
- If asked about topics outside nutrition science, politely redirect to the site's focus
- Keep responses brief and conversational (2-4 paragraphs max)

The site covers: nutrition science, evidence-based diet analysis, supplementation, metabolic health, biochemistry, gut health, and related topics.`

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Messages array is required' }, { status: 400 })
    }

    const apiKey = process.env.NVIDIA_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: 'AI service not configured' }, { status: 500 })
    }

    const response = await fetch(NVIDIA_API_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'meta/llama-3.1-8b-instruct',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        temperature: 0.3,
        top_p: 0.7,
        max_tokens: 1024,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error?.message || 'AI service error' },
        { status: response.status }
      )
    }

    return NextResponse.json(data)
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
