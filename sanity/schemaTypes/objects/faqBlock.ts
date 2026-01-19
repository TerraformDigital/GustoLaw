import { defineField, defineType } from 'sanity'

export const faqBlock = defineType({
  name: 'faqBlock',
  title: 'FAQ Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'Frequently Asked Questions',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'faq' }] }],
      description: 'Select specific FAQs to display',
    }),
    defineField({
      name: 'filterByCategory',
      title: 'Filter by Category',
      type: 'string',
      options: {
        list: [
          { title: 'All Categories', value: 'all' },
          { title: 'General', value: 'general' },
          { title: 'Mergers & Acquisitions', value: 'mergers-acquisitions' },
          { title: 'Business Formation', value: 'business-formation' },
          { title: 'Corporate & Commercial', value: 'corporate-commercial' },
          { title: 'Fractional General Counsel', value: 'fractional-gc' },
          { title: 'Dispute Resolution', value: 'dispute-resolution' },
          { title: 'Technology Law', value: 'technology-law' },
          { title: 'Pricing & Fees', value: 'pricing' },
        ],
      },
      initialValue: 'all',
    }),
    defineField({
      name: 'showCategoryTabs',
      title: 'Show Category Tabs',
      type: 'boolean',
      description: 'Allow users to filter by category',
      initialValue: false,
    }),
    defineField({
      name: 'limit',
      title: 'Limit',
      type: 'number',
      description: 'Maximum number of FAQs to show (leave empty for all)',
    }),
  ],
  preview: {
    select: {
      title: 'headline',
    },
    prepare({ title }) {
      return {
        title: title || 'FAQ Section',
        subtitle: 'FAQ Block',
      }
    },
  },
})
