import { defineField, defineType } from 'sanity'

export const servicesGridBlock = defineType({
  name: 'servicesGridBlock',
  title: 'Services Grid Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'What We Do',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'services',
      title: 'Services to Display',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      description: 'Select specific services, or leave empty to show all',
    }),
    defineField({
      name: 'showAll',
      title: 'Show All Services',
      type: 'boolean',
      description: 'If checked, displays all services (ignores selection above)',
      initialValue: false,
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'number',
      options: {
        list: [2, 3, 4],
      },
      initialValue: 3,
    }),
    defineField({
      name: 'showDescriptions',
      title: 'Show Descriptions',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'headline',
    },
    prepare({ title }) {
      return {
        title: title || 'Services Grid',
        subtitle: 'Services Grid Block',
      }
    },
  },
})
