import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'firmName',
      title: 'Firm Name',
      type: 'string',
      initialValue: 'Gusto Law',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Main tagline for the firm',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      description: 'Default meta description for SEO',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Main logo (SVG preferred)',
    }),
    defineField({
      name: 'logoAlt',
      title: 'Logo (Light/Dark Variant)',
      type: 'image',
      description: 'Alternative logo for different backgrounds',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'Google Maps URL',
      type: 'url',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'linkedIn', title: 'LinkedIn', type: 'url' },
        { name: 'twitter', title: 'Twitter/X', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
      ],
    }),
    defineField({
      name: 'clioGrowFormId',
      title: 'Clio Grow Form ID',
      type: 'string',
      description: 'Form ID for consultation booking embed',
    }),
    defineField({
      name: 'clioGrowScript',
      title: 'Clio Grow Embed Script',
      type: 'text',
      rows: 5,
      description: 'Full embed code from Clio Grow',
    }),
    defineField({
      name: 'elfsightWidgetId',
      title: 'Elfsight Widget ID',
      type: 'string',
      description: 'Google Reviews widget ID',
    }),
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
      description: 'GA4 Measurement ID (G-XXXXXXXXXX)',
    }),
    defineField({
      name: 'disclaimer',
      title: 'Legal Disclaimer',
      type: 'text',
      rows: 4,
      description: 'Footer disclaimer text',
      initialValue: 'This content is for informational purposes only and does not constitute legal advice. For legal guidance tailored to your situation, please consult a qualified lawyer.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
