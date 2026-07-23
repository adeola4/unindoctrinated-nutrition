# Article Maker — Unindoctrinated Nutrition Science

**GitHub repo:** https://github.com/isiraglobal/Nutrition-TAN

Use this guide to generate new articles that fit the site's structure and style.

> ⚠️ **AI Agent Instruction:** Read this entire file and the example at `articles/gut-health/butyrate-metabolic-health.tsx` to understand the article format. **Do not edit any existing files.** Only generate the new article file at `articles/<topic>/<slug>.tsx` and tell the user which route file to create. This file + the example are the complete reference — no other context is needed.

---

## Directory Structure

Add your article to the correct route:

```
src/app/
├── topics/
│   ├── page.tsx                     # /topics (listing page — no edits needed)
│   ├── [topic]/
│   │   ├── page.tsx                 # /topics/:topic (topic landing — add topic data here)
│   │   └── [slug]/
│   │       └── page.tsx             # ← NEW ARTICLE GOES HERE
```

Or for standalone articles (no topic parent):

```
articles/
├── [slug]/
│   └── page.tsx                     # /articles/:slug
```

## Available Topics

| Slug | Display Name |
|------|-------------|
| `gut-health` | Gut Health |
| `metabolic-health` | Metabolic Health |
| `nutrition-science` | Nutrition Science |
| `supplementation` | Supplementation |
| `sleep-circadian` | Sleep & Circadian Biology |
| `brain-health` | Brain Health |
| `weight-management` | Weight Management |
| `heart-health` | Heart Health |
| `longevity` | Longevity & Aging |
| `hormones` | Hormones |
| `inflammation` | Inflammation |
| `detoxification` | Detoxification |
| `mood-support` | Mood Support |
| `stress-management` | Stress Management |
| `skin-care` | Skin Care |
| `oral-health` | Oral Health |
| `liver-health` | Liver Health |
| `lymphatic-system` | Lymphatic System |
| `womens-health` | Women's Health |
| `mens-health` | Men's Health |
| `exercise-recovery` | Exercise & Recovery |
| `mitochondrial-health` | Mitochondrial Health |
| `inflammation-immunity` | Inflammation & Immunity |

---

## Article Data Shape

```ts
{
  title: string              // Headline (e.g. "The Role of Butyrate in Metabolic Health")
  excerpt: string            // 1-2 sentence summary (used in listings + meta description)
  content: PortableText[]    // Body content (see Content Blocks below)
  tags: string[]             // e.g. ["Gut Health", "Metabolism", "Microbiome"]
  topic: string              // Display name from table above (e.g. "Gut Health")
  publishedAt: string        // ISO date "2026-06-15T08:00:00Z"
  updatedAt?: string         // Optional — shows "Last updated" banner if present
  readingTime: number        // Minutes
  featuredImage?: string     // Optional hero image URL
  relatedArticles?: string[] // Optional slugs
  showMedicalDisclaimer: boolean
}
```

---

## Content Blocks (Portable Text)

### Heading 2 (Major Section)
```ts
{ _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Section Title' }] }
```

### Heading 3 (Sub-section)
```ts
{ _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Sub-section Title' }] }
```

### Body Paragraph
```ts
{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Your paragraph text here.' }] }
```

### Inline Bold / Italic / Link
```ts
{ _type: 'span', text: 'bold text', marks: ['strong'] }
{ _type: 'span', text: 'italic text', marks: ['em'] }
{ _type: 'span', text: 'linked text', marks: [{ _type: 'link', href: 'https://...' }] }
```

### Callout Box
```ts
{
  _type: 'callout',
  type: 'research' | 'warning' | 'keytakeaway',
  title: 'Optional Title',
  content: [
    { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Callout content.' }] }
  ]
}
```

### Figure / Image Placeholder
```ts
{
  _type: 'figure',
  caption: 'Caption text',
  attribution: 'Source (optional)'
}
```

### Table
```ts
{
  _type: 'table',
  headers: ['Column A', 'Column B'],
  rows: [
    ['Row 1 A', 'Row 1 B'],
    ['Row 2 A', 'Row 2 B'],
  ]
}
```

### Blockquote
```ts
{ _type: 'block', style: 'blockquote', children: [{ _type: 'span', text: 'Quote text.' }] }
```

---

## Full Article Template

Copy this template, replace the content, and save as `src/app/topics/<topic-slug>/<your-slug>/page.tsx`:

```tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { Section } from '@/components/layout/Section'
import { Container } from '@/components/layout/Container'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { NewsletterInline } from '@/components/article/NewsletterInline'
import { ShareButtons } from '@/components/article/ShareButtons'
import { TableOfContents } from '@/components/article/TableOfContents'
import { formatDate, slugify } from '@/lib/utils'
import { PortableTextRenderer } from '@/components/article/PortableTextRenderer'

const article = {
  title: 'Your Article Title Here',
  excerpt: 'One to two sentence summary of the article for listings and SEO.',
  content: [
    // ── Paste content blocks here ──
  ],
  tags: ['Tag1', 'Tag2', 'Tag3'],
  topic: 'Topic Display Name',
  publishedAt: '2026-01-01T08:00:00Z',
  readingTime: 10,
  showMedicalDisclaimer: true,
}

export async function generateMetadata(): Promise<Metadata> {
  return { title: article.title, description: article.excerpt }
}

export default async function ArticlePage(props: { params: Promise<{ topic: string; slug: string }> }) {
  const { topic: topicSlug } = await props.params

  const tableOfContents = article.content
    .filter((b: any) => b._type === 'block' && ['h2', 'h3'].includes(b.style))
    .map((b: any) => {
      const text = b.children?.map((c: any) => c.text).join('') || b.children?.[0]?.text || ''
      return {
        id: slugify(text),
        text,
        level: b.style === 'h3' ? 3 : 2,
      }
    })

  return (
    <>
      <Section variant="default" padding="md">
        <Container size="md">
          <Link href={`/topics/${topicSlug}/`} className="inline-flex items-center gap-2 font-body text-sm text-muted hover:text-green mb-8 transition-colors">
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to {article.topic}
          </Link>
        </Container>
      </Section>

      <article>
        <Section variant="default" padding="none">
          <Container size="md">
            <header className="mb-12 max-w-[760px] mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="topic" size="md">{article.topic}</Badge>
                {article.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="tag" size="sm">{tag}</Badge>
                ))}
              </div>
              <h1 className="font-heading text-[2.75rem] md:text-[3.25rem] text-charcoal mb-6 leading-tight">
                {article.title}
              </h1>
              <p className="font-body text-xl text-stone leading-relaxed mb-8">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-5 font-body text-sm text-muted border-b border-warm-border pb-6 mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {formatDate(article.publishedAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {article.readingTime} min read
                </span>
                <span className="text-charcoal font-medium">By Adeola James</span>
              </div>
            </header>
          </Container>
        </Section>

        <Container size="md">
          <div className="flex gap-12 max-w-[760px] mx-auto">
            <aside className="hidden lg:block w-56 flex-shrink-0">
              <div className="sticky top-24">
                <TableOfContents items={tableOfContents} />
              </div>
            </aside>
            <div className="flex-1 min-w-0">
              <div className="article-content">
                <PortableTextRenderer content={article.content} />
              </div>
              <div className="mt-16 pt-8 border-t border-warm-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-body text-sm text-charcoal font-medium">Share this article:</span>
                    <ShareButtons url={`/topics/${topicSlug}/your-slug/`} title={article.title} />
                  </div>
                  {article.updatedAt && (
                    <span className="font-body text-sm text-muted">
                      Last updated {formatDate(article.updatedAt)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </article>

      <Section variant="ivory" padding="lg">
        <Container size="md">
          <NewsletterInline />
        </Container>
      </Section>

      {article.showMedicalDisclaimer && (
        <Section variant="default" padding="md">
          <Container size="md">
            <Card variant="outlined" padding="md" className="bg-ivory">
              <p className="font-body text-sm text-stone leading-relaxed">
                <strong className="text-charcoal">Medical Disclaimer:</strong> The content on this website is for informational and educational purposes only and is not intended as medical advice. It should not be used to diagnose, treat, cure, or prevent any disease or health condition. Always consult with a qualified healthcare professional before making any changes to your diet, exercise routine, supplement regimen, or medical treatment. The author is not a licensed physician. Reliance on any information provided here is solely at your own risk.
              </p>
            </Card>
          </Container>
        </Section>
      )}
    </>
  )
}
```

---

## Live Example

A complete, working example is at `articles/gut-health/butyrate-metabolic-health.tsx`. This is the article live at `/topics/gut-health/butyrate-metabolic-health/`. Copy it as a starting point.

---

## AI Agent Instructions

When asked to create a new article for this site, follow these steps in order:

### Step 1 — Pick the topic
Find the correct topic slug from the Available Topics table above. If the user doesn't specify a topic, ask or default to `nutrition-science`.

### Step 2 — Create the article file
Generate a file at `articles/<topic-slug>/<article-slug>.tsx` inside this project. Use the **Full Article Template** above and replace:
- The `article` object data (title, excerpt, content blocks, tags, topic, dates, readingTime)
- The `ShareButtons` URL to match the slug
- The file is a **`.tsx`** file — it's React/TypeScript, placed as a reference copy in the `articles/` directory

### Step 3 — Content checklist
Every article must include:
- A strong **opening paragraph** that states the importance/significance
- At least **one callout block** (`research`, `warning`, or `keytakeaway`)
- If data/comparisons are involved, use a **table block**
- At least **one h2 section** and optionally **h3 sub-sections**
- A **conclusion or clinical implications** section at the end
- Tags should include the main topic + subtopics (3-5 tags)

### Step 4 — Add the route
After the article file is created in `articles/`, also instruct the user to:
1. Copy the `content` array from the file
2. Create `src/app/topics/<topic-slug>/<article-slug>/page.tsx`
3. Use the same template but import the article data or inline it
4. If the topic doesn't exist yet in `src/app/topics/[topic]/page.tsx`, add a new entry in the `topicsData` object

### Step 5 — Git workflow
After creating the files, guide the user to add them to the repo:

```bash
# Stage the new article reference
git add articles/<topic-slug>/<article-slug>.tsx

# Stage the route file
git add src/app/topics/<topic-slug>/<article-slug>/page.tsx

# If new topic was added, stage the topic page too
git add src/app/topics/<topic-slug>/page.tsx

# Commit with a descriptive message
git commit -m "add article: <Article Title>"

# Push to deploy
git push origin main
```

### Step 6 — Verify
After adding the article, run `npm run build` to confirm:
- No TypeScript errors
- The article slug appears in the build output under `├ ● /topics/<topic-slug>/[slug]`
- Static generation succeeds for the new path

### Refer Sample (currently deployed article - /topics/gut-health/butyrate-metabolic-health)

at : https://nutrition.isira.club/topics/gut-health/butyrate-metabolic-health