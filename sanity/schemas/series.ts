import { defineField, defineType } from 'sanity'
import { DocumentIcon } from '@sanity/icons'

export const series = defineType({
  name: 'series',
  title: 'Series',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Series Name',
      type: 'string',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
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
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt Text', validation: (rule) => rule.required() },
      ],
    }),
    defineField({
      name: 'articles',
      title: 'Articles (in order)',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'article' }] }],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: ['active', 'completed', 'archived'], layout: 'radio' },
      initialValue: 'active',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title', validation: (rule) => rule.max(60) },
        { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3, validation: (rule) => rule.max(160) },
        { name: 'ogImage', type: 'image', title: 'Open Graph Image', options: { hotspot: true } },
      ],
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'description', media: 'coverImage' } },
})