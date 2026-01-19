import { defineField, defineType } from 'sanity'

export const teamGridBlock = defineType({
  name: 'teamGridBlock',
  title: 'Team Section',
  type: 'object',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      initialValue: 'Meet Our Team',
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members to Display',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
      description: 'Select specific team members, or leave empty to show all',
    }),
    defineField({
      name: 'showAll',
      title: 'Show All Team Members',
      type: 'boolean',
      description: 'If checked, displays all team members (ignores selection above)',
      initialValue: true,
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'Featured (Side by Side)', value: 'featured' },
        ],
      },
      initialValue: 'featured',
    }),
    defineField({
      name: 'showBio',
      title: 'Show Short Bio',
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
        title: title || 'Team Section',
        subtitle: 'Team Grid Block',
      }
    },
  },
})
