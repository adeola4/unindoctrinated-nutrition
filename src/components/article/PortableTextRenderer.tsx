import { PortableText } from '@portabletext/react'
import type { PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { CalloutBox } from './CalloutBox'
import { CodeBlock } from './CodeBlock'
import { DataTable } from './DataTable'

const components: PortableTextComponents = {
  block: {
    h2: ({ children, value }) => {
      const id = `section-${value._key || Math.random().toString(36).slice(2, 8)}`
      return <h2 id={id} className="text-xl text-[#222222] mt-10 mb-4 scroll-mt-24">{children}</h2>
    },
    h3: ({ children, value }) => {
      const id = `section-${value._key || Math.random().toString(36).slice(2, 8)}`
      return <h3 id={id} className="text-lg text-[#222222] mt-8 mb-3 scroll-mt-24">{children}</h3>
    },
    h4: ({ children }) => (
      <h4 className="text-base text-[#222222] mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-[#222222] text-base leading-relaxed mb-5">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#b5dfe1] bg-[#f7f8f9] pl-6 py-4 pr-4 my-6 rounded">
        <p className="text-[#222222] text-base italic">{children}</p>
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-5 space-y-2 text-[#222222] text-base">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 mb-5 space-y-2 text-[#222222] text-base">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="pl-2">{children}</li>,
    number: ({ children }) => <li className="pl-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-[#222222]">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-[#f0f0f0] px-1.5 py-0.5 rounded text-sm font-mono text-[#222222]">{children}</code>
    ),
    link: ({ children, value }) => {
      const rel = value?.blank ? 'noopener noreferrer' : undefined
      const target = value?.blank ? '_blank' : undefined
      return (
        <a href={value?.href} target={target} rel={rel} className="text-[#1e73be] underline underline-offset-2 hover:text-[#000000] transition-colors">
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-8">
          <Image
            src={urlFor(value).width(800).height(500).url() || ''}
            alt={value?.alt || ''}
            width={800}
            height={500}
            className="w-full"
          />
          {value?.caption && (
            <figcaption className="text-center text-[#575760] text-sm mt-2">{value.caption}</figcaption>
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
        <figure className={`my-8 ${value.fullWidth ? '-mx-4 sm:-mx-8' : ''}`}>
          <Image
            src={urlFor(value.image).width(value.fullWidth ? 1200 : 800).height(value.fullWidth ? 600 : 500).url() || ''}
            alt={value?.image?.alt || ''}
            width={value.fullWidth ? 1200 : 800}
            height={value.fullWidth ? 600 : 500}
            className="w-full"
          />
          {value?.caption && (
            <figcaption className="text-center text-[#575760] text-sm mt-2">{value.caption}</figcaption>
          )}
        </figure>
      )
    },
    blockquote: ({ value }) => (
      <blockquote className="border-l-4 border-[#b5dfe1] bg-[#f7f8f9] pl-6 py-4 pr-4 my-6 rounded">
        <p className="text-[#222222] text-base italic">{value.quote}</p>
        {value?.author && (
          <footer className="mt-2 text-[#575760] text-sm">— {value.author}{value?.source ? `, ${value.source}` : ''}</footer>
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
        <p className="text-[#575760]">Content coming soon.</p>
      </div>
    )
  }

  return (
    <div className="article-content">
      <PortableText value={content} components={components} />
    </div>
  )
}
