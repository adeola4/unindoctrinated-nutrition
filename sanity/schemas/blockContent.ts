import { defineField, defineType } from 'sanity'

export const tocItem = defineType({
  name: 'tocItem',
  title: 'Table of Contents Item',
  type: 'object',
  fields: [
    defineField({ name: 'id', title: 'Anchor ID', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'text', title: 'Heading Text', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'level', title: 'Heading Level', type: 'number', validation: (rule) => rule.min(2).max(4) }),
  ],
  preview: { select: { title: 'text', subtitle: 'level' }, prepare({ title, subtitle }) { return { title, subtitle: `H${subtitle}` } } },
})

export const callout = defineType({
  name: 'callout',
  title: 'Callout Box',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: { list: ['info', 'warning', 'tip', 'research', 'disclaimer'], layout: 'radio' },
      initialValue: 'info',
    }),
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }], validation: (rule) => rule.required() }),
  ],
  preview: { select: { title: 'title', type: 'type' }, prepare({ title, type }) { return { title: title || 'Callout', subtitle: `Type: ${type}` } } },
})

export const codeBlock = defineType({
  name: 'code',
  title: 'Code Block',
  type: 'object',
  fields: [
    defineField({ name: 'language', title: 'Language', type: 'string', options: { list: ['typescript', 'javascript', 'python', 'bash', 'json', 'yaml', 'markdown', 'sql', 'rust', 'go'] } }),
    defineField({ name: 'code', title: 'Code', type: 'text', rows: 10, validation: (rule) => rule.required() }),
    defineField({ name: 'filename', title: 'Filename', type: 'string' }),
    defineField({ name: 'highlightLines', title: 'Highlight Lines', type: 'string', description: 'e.g., "1-3, 5, 10-15"' }),
  ],
  preview: { select: { language: 'language', code: 'code' }, prepare({ language, code }) { return { title: `${language || 'Code'}`, subtitle: code?.slice(0, 50) } } },
})

export const tableBlock = defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
    defineField({ name: 'headers', title: 'Headers', type: 'array', of: [{ type: 'string' }], validation: (rule) => rule.required().min(1) }),
    defineField({ name: 'rows', title: 'Rows', type: 'array', of: [{ type: 'array', of: [{ type: 'string' }] }], validation: (rule) => rule.required().min(1) }),
    defineField({ name: 'striped', title: 'Striped Rows', type: 'boolean', initialValue: true }),
    defineField({ name: 'hoverable', title: 'Hoverable', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { headers: 'headers', rows: 'rows' }, prepare({ headers, rows }) { return { title: 'Table', subtitle: `${headers?.length} cols × ${rows?.length} rows` } } },
})

export const figureBlock = defineType({
  name: 'figure',
  title: 'Figure with Caption',
  type: 'object',
  fields: [
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required() }),
    defineField({ name: 'caption', title: 'Caption', type: 'string' }),
    defineField({ name: 'attribution', title: 'Attribution', type: 'string' }),
    defineField({ name: 'fullWidth', title: 'Full Width', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { media: 'image', caption: 'caption' }, prepare({ media, caption }) { return { title: 'Figure', subtitle: caption || 'No caption', media } } },
})

export const blockquoteBlock = defineType({
  name: 'blockquote',
  title: 'Blockquote',
  type: 'object',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4, validation: (rule) => rule.required() }),
    defineField({ name: 'author', title: 'Author', type: 'string' }),
    defineField({ name: 'source', title: 'Source', type: 'string' }),
    defineField({ name: 'citation', title: 'Citation URL', type: 'url' }),
  ],
  preview: { select: { quote: 'quote', author: 'author' }, prepare({ quote, author }) { return { title: 'Blockquote', subtitle: author ? `— ${author}` : quote?.slice(0, 60) } } },
})