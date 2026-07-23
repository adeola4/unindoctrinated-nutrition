import { defineField, defineType } from 'sanity'
import { FolderIcon } from '@sanity/icons'

export const healthTopic = defineType({
  name: 'healthTopic',
  title: 'Health Topic',
  type: 'document',
  icon: FolderIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required().max(60),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed description shown on topic landing page',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Emoji or icon name (e.g., "🦠", "🧠", "💤")',
      validation: (rule) => rule.max(10),
    }),
    defineField({
      name: 'color',
      title: 'Topic Color',
      type: 'string',
      description: 'Hex color for topic branding',
      validation: (rule) => rule.regex(/^#[0-9A-Fa-f]{6}$/),
      initialValue: '#2D5A27',
    }),
    defineField({
      name: 'parent',
      title: 'Parent Topic',
      type: 'reference',
      to: [{ type: 'healthTopic' }],
      description: 'For hierarchical topics (optional)',
    }),
    defineField({
      name: 'subTopics',
      title: 'Sub-Topics',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'healthTopic' }] }],
      description: 'Child topics for navigation',
    }),
    defineField({
      name: 'featuredArticles',
      title: 'Featured Articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'article' }] }],
      description: 'Manually curated featured articles (max 3)',
      validation: (rule) => rule.max(3),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Order in topic grid (lower = first)',
      initialValue: 0,
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Show in topic index',
      initialValue: true,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title', validation: (rule) => rule.max(60) },
        { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3, validation: (rule) => rule.max(160) },
        { name: 'ogImage', type: 'image', title: 'Open Graph Image', options: { hotspot: true } },
        { name: 'noIndex', type: 'boolean', title: 'No Index', initialValue: false },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'icon',
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle?.slice(0, 100),
      }
    },
  },
  orderings: [
    { title: 'Display Order', name: 'displayOrderAsc', by: [{ field: 'displayOrder', direction: 'asc' }] },
    { title: 'Name A-Z', name: 'nameAsc', by: [{ field: 'name', direction: 'asc' }] },
  ],
})