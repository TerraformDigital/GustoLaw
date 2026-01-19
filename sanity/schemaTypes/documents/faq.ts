import { defineField, defineType } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export const faq = defineType({
  name: 'faq',
  title: 'FAQs',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Mergers & Acquisitions', value: 'mergers-acquisitions' },
          { title: 'Business Formation', value: 'business-formation' },
          { title: 'Corporate & Commercial', value: 'corporate-commercial' },
          { title: 'Fractional General Counsel', value: 'fractional-gc' },
          { title: 'Dispute Resolution', value: 'dispute-resolution' },
          { title: 'Technology Law', value: 'technology-law' },
          { title: 'Oil & Gas', value: 'oil-gas' },
          { title: 'Pricing & Fees', value: 'pricing' },
          { title: 'Process', value: 'process' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order within category (lower = first)',
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'category',
    },
  },
  orderings: [
    {
      title: 'Category, then Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
})
