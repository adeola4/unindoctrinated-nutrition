import { defineField, defineType } from 'sanity'
export const legalConfig = defineType({
  name: 'legalConfig',
  title: 'Legal Configuration',
  type: 'document',
  fields: [
    defineField({
      name: 'medicalDisclaimer',
      title: 'Medical Disclaimer',
      type: 'text',
      rows: 8,
      description: 'Shown at end of articles when enabled',
      validation: (rule) => rule.required(),
      initialValue: `The content on this website is for informational and educational purposes only and is not intended as medical advice. It should not be used to diagnose, treat, cure, or prevent any disease or health condition. Always consult with a qualified healthcare professional before making any changes to your diet, exercise routine, supplement regimen, or medical treatment. The author is not a licensed physician. Reliance on any information provided here is solely at your own risk.`,
    }),
    defineField({
      name: 'affiliateDisclosure',
      title: 'Affiliate Disclosure',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
      initialValue: `This website contains affiliate links. If you purchase through these links, I may earn a commission at no additional cost to you. I only recommend products I genuinely believe in and have researched. Your support helps keep this content free.`,
    }),
    defineField({
      name: 'fdaDisclaimer',
      title: 'FDA Disclaimer',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
      initialValue: `These statements have not been evaluated by the Food and Drug Administration. Products mentioned are not intended to diagnose, treat, cure, or prevent any disease.`,
    }),
    defineField({
      name: 'privacyPolicy',
      title: 'Privacy Policy',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'termsOfService',
      title: 'Terms of Service',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
  ],
  preview: { prepare() { return { title: 'Legal Configuration' } } },
})