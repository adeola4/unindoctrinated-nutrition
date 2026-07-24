import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { CalloutBox } from './CalloutBox'
import { CodeBlock } from './CodeBlock'
import { DataTable } from './DataTable'
import { slugify } from '@/lib/utils'

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      const text = value.children?.map((c) => ('text' in c && typeof c.text === 'string' ? c.text : '')).join('') || ''
      const id = slugify(text)
      return <h2 id={id} className="font-heading text-[2rem] text-charcoal mt-12 mb-4 scroll-mt-24">{children}</h2>
    },
    h3: ({ children, value }) => {
      const text = value.children?.map((c) => ('text' in c && typeof c.text === 'string' ? c.text : '')).join('') || ''
      const id = slugify(text)
      return <h3 id={id} className="font-heading text-[1.5rem] text-charcoal mt-10 mb-3 scroll-mt-24">{children}</h3>
    },
    h4: ({ children }) => (
      <h4 className="font-heading text-[1.25rem] text-charcoal mt-8 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="font-body text-lg text-stone leading-relaxed mb-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-green bg-white pl-8 py-6 pr-6 my-10">
        <p className="font-body text-lg text-charcoal italic leading-relaxed">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-6 space-y-2 font-body text-lg text-stone">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 font-body text-lg text-stone">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-charcoal">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-ivory px-1.5 py-0.5 rounded text-sm font-mono text-charcoal">{children}</code>
    ),
    link: ({ children, value }) => {
      const rel = value?.blank ? 'noopener noreferrer' : undefined
      const target = value?.blank ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} rel={rel} className="text-green underline underline-offset-2 decoration-warm-border hover:decoration-green transition-colors">
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-12">
          <Image
            src={urlFor(value).width(800).height(500).url() || ''}
            alt={value?.alt || ''}
            width={800}
            height={500}
            className="w-full rounded-xl"
          />
          {value?.caption && (
            <figcaption className="text-center font-body text-sm text-muted mt-3">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
    callout: ({ value }) => <CalloutBox type={value.type} title={value.title} content={value.content} />,
    code: ({ value }) => <CodeBlock language={value.language} code={value.code} filename={value.filename} />,
    table: ({ value }) => <DataTable headers={value.headers} rows={value.rows} caption={value.caption} />,
    figure: ({ value }) => {
      if (!value?.image?.asset) return null
      return (
        <figure className={`my-12 ${value.fullWidth ? '-mx-4 sm:-mx-8' : ''}`}>
          <Image
            src={urlFor(value.image).width(value.fullWidth ? 1200 : 800).height(value.fullWidth ? 600 : 500).url() || ''}
            alt={value?.image?.alt || ''}
            width={value.fullWidth ? 1200 : 800}
            height={value.fullWidth ? 600 : 500}
            className="w-full rounded-xl"
          />
          {value?.caption && (
            <figcaption className="text-center font-body text-sm text-muted mt-3">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
    blockquote: ({ value }) => (
      <blockquote className="border-l-[3px] border-green bg-white pl-8 py-6 pr-6 my-10">
        <p className="font-body text-lg text-charcoal italic leading-relaxed">{value.quote}</p>
        {value?.author && (
          <footer className="mt-3 font-body text-sm text-muted">&mdash; {value.author}{value?.source ? `, ${value.source}` : ''}</footer>
        )}
      </blockquote>
    ),
  },
}

interface PortableTextRendererProps {
  content: unknown[]
}

export function PortableTextRenderer({ content }: PortableTextRendererProps) {
  if (!content || content.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="font-body text-base text-muted">Content coming soon.</p>
      </div>
    )
  }

  return (
    <div className="article-content">
      <PortableText value={content} components={components} />
    </div>
  )
}
