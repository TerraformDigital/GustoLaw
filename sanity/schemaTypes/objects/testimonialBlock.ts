import { defineField, defineType } from 'sanity'

export const testimonialBlock = defineType({
  name: 'testimonialBlock',
  title: 'Testimonial Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'What Our Clients Say About Us',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
      description: 'Select specific testimonials, or leave empty to show featured ones',
    }),
    defineField({
      name: 'showFeatured',
      title: 'Show Featured Testimonials',
      type: 'boolean',
      description: 'If checked, shows testimonials marked as featured',
      initialValue: true,
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Single Quote', value: 'single' },
          { title: 'Carousel', value: 'carousel' },
          { title: 'Grid', value: 'grid' },
        ],
      },
      initialValue: 'single',
    }),
    defineField({
      name: 'showElfsight',
      title: 'Show Google Reviews Widget',
      type: 'boolean',
      description: 'Display Elfsight Google Reviews widget instead of Sanity testimonials',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'headline',
    },
    prepare({ title }) {
      return {
        title: title || 'Testimonial Section',
        subtitle: 'Testimonial Block',
      }
    },
  },
})
