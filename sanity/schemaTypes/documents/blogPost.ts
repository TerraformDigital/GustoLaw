import { defineField, defineType } from 'sanity'
import { DocumentTextIcon } from '@sanity/icons'

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Posts',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief summary for blog listings and SEO',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'teamMember' }],
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Optional subtitle shown below the title',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      description: 'Estimated reading time, e.g. "12 min read"',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
    defineField({
      name: 'faqItems',
      title: 'FAQ Items',
      type: 'array',
      of: [{
        type: 'object',
        name: 'faqItem',
        fields: [
          { name: 'question', title: 'Question', type: 'string', validation: (Rule: any) => Rule.required() },
          { name: 'answer', title: 'Answer', type: 'text', rows: 4, validation: (Rule: any) => Rule.required() },
        ],
        preview: {
          select: { title: 'question' },
        },
      }],
      description: 'FAQ items for structured data / FAQ schema markup',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Business Formation', value: 'business-formation' },
          { title: 'Corporate & Commercial', value: 'corporate-commercial' },
          { title: 'Mergers & Acquisitions', value: 'mergers-acquisitions' },
          { title: 'Technology Law', value: 'technology-law' },
          { title: 'Oil & Gas', value: 'oil-gas' },
          { title: 'Dispute Resolution', value: 'dispute-resolution' },
          { title: 'General Counsel', value: 'general-counsel' },
          { title: 'Intellectual Property', value: 'intellectual-property' },
          { title: 'Privacy & Compliance', value: 'privacy-compliance' },
          { title: 'Business Tips', value: 'business-tips' },
        ],
      },
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPost' }] }],
      description: 'Related blog posts shown at the bottom of the article',
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'publishedAt',
      media: 'featuredImage',
    },
    prepare({ title, author, date, media }) {
      return {
        title,
        subtitle: `${author || 'No author'} | ${date ? new Date(date).toLocaleDateString() : 'No date'}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
