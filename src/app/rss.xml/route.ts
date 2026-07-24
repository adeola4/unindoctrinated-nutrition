import { NextResponse } from 'next/server'

const SITE_URL = 'https://unindoctrinated-nutrition.vercel.app'
const AUTHOR = 'Adeola James'
const DESCRIPTION = 'Research-backed, industry-uninfluenced nutrition science.'
const LANGUAGE = 'en-us'

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Unindoctrinated Nutrition Science</title>
    <link>${SITE_URL}</link>
    <description>${DESCRIPTION}</description>
    <language>${LANGUAGE}</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>adeola@vibecodr.space (${AUTHOR})</managingEditor>
    <webMaster>adeola@vibecodr.space (${AUTHOR})</webMaster>
    <generator>Next.js</generator>
  </channel>
</rss>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
