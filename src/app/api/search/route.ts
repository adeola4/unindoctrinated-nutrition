import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')
  const topic = searchParams.get('topic')
  const tag = searchParams.get('tag')

  return NextResponse.json({
    results: [],
    total: 0,
    query,
    filters: { topic, tag },
  })
}