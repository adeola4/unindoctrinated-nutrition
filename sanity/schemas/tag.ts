import { defineField, defineType } from 'sanity'
import { TagIcon } from '@sanity/icons'

export const tag = defineType({
  name: 'tag',
  title: 'Tag',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required().max(40),
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
      rows: 3,
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description: 'Hex color for tag badge',
      validation: (rule) => rule.regex(/^#[0-9A-Fa-f]{6}$/),
      initialValue: '#E9C46A',
    }),
    defineField({
      name: 'isCategory',
      title: 'Is Category Tag',
      type: 'boolean',
      description: 'Show in main filter UI',
      initialValue: true,
    }),
  ],
  preview: { select: { title: 'name', subtitle: 'description' } },
})