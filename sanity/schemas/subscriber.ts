import { defineField, defineType } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const subscriber = defineType({
  name: 'subscriber',
  title: 'Newsletter Subscriber',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.max(100),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      description: 'Optional phone number for SMS',
    }),
    defineField({
      name: 'tags',
      title: 'Interest Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'tag' }] }],
      description: 'Topics subscriber is interested in',
    }),
    defineField({
      name: 'source',
      title: 'Signup Source',
      type: 'string',
      options: {
        list: [
          'homepage',
          'article-inline',
          'article-footer',
          'topic-page',
          'footer',
          'popup',
          'landing-page',
        ],
      },
    }),
    defineField({
      name: 'confirmed',
      title: 'Confirmed',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'confirmedAt',
      title: 'Confirmed At',
      type: 'datetime',
    }),
    defineField({
      name: 'unsubscribedAt',
      title: 'Unsubscribed At',
      type: 'datetime',
    }),
    defineField({
      name: 'convertKitId',
      title: 'ConvertKit Subscriber ID',
      type: 'string',
      description: 'Synced from ConvertKit',
    }),
  ],
  preview: { select: { title: 'email', subtitle: 'name', confirmed: 'confirmed' } },
})