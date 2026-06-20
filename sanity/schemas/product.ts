import { defineField, defineType } from 'sanity'
import { CubeIcon } from '@sanity/icons'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  icon: CubeIcon,
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (rule) => rule.required().max(100) }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 }, validation: (rule) => rule.required() }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'text', rows: 3, validation: (rule) => rule.max(200) }),
    defineField({ name: 'description', title: 'Full Description', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', type: 'string', title: 'Alt Text', validation: (rule) => rule.required() }] }),
    defineField({ name: 'affiliateUrl', title: 'Affiliate URL', type: 'url', validation: (rule) => rule.required().uri({ scheme: ['http', 'https'] }) }),
    defineField({ name: 'price', title: 'Price', type: 'string', description: 'Display price (e.g., "$29.99")' }),
    defineField({ name: 'originalPrice', title: 'Original Price', type: 'string', description: 'If on sale' }),
    defineField({ name: 'category', title: 'Category', type: 'string', options: { list: ['supplements', 'books', 'courses', 'testing', 'devices', 'other'] } }),
    defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'rating', title: 'Rating', type: 'number', validation: (rule) => rule.min(0).max(5) }),
    defineField({ name: 'reviewCount', title: 'Review Count', type: 'number', initialValue: 0 }),
    defineField({ name: 'isActive', title: 'Active', type: 'boolean', initialValue: true }),
    defineField({ name: 'isFeatured', title: 'Featured', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'name', subtitle: 'category', media: 'image' } },
})