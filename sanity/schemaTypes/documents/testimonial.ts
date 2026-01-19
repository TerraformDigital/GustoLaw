import { defineField, defineType } from 'sanity'
import { CommentIcon } from '@sanity/icons'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'attribution',
      title: 'Attribution',
      type: 'string',
      description: 'Name of the person (can be anonymized, e.g., "Tech Startup Founder")',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'Company name (optional)',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'e.g., "CEO", "Founder", "Business Owner"',
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      options: {
        list: [
          { title: 'Google Review', value: 'google' },
          { title: 'Direct Testimonial', value: 'direct' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false,
    }),
    defineField({
      name: 'relatedService',
      title: 'Related Service',
      type: 'reference',
      to: [{ type: 'service' }],
      description: 'Associate with a specific service (optional)',
    }),
  ],
  preview: {
    select: {
      title: 'quote',
      subtitle: 'attribution',
    },
    prepare({ title, subtitle }) {
      return {
        title: title?.substring(0, 60) + '...',
        subtitle: subtitle || 'Anonymous',
      }
    },
  },
})
