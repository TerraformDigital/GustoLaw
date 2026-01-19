import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'gusto-law',
  title: 'Gusto Law',
  
  projectId,
  dataset,
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Site Settings (singleton)
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            
            S.divider(),
            
            // Pages
            S.documentTypeListItem('page').title('Pages'),
            
            S.divider(),
            
            // Services & Industries
            S.documentTypeListItem('service').title('Services'),
            S.documentTypeListItem('industry').title('Industries'),
            
            S.divider(),
            
            // Team
            S.documentTypeListItem('teamMember').title('Team Members'),
            
            S.divider(),
            
            // Content
            S.documentTypeListItem('blogPost').title('Blog Posts'),
            S.documentTypeListItem('testimonial').title('Testimonials'),
            S.documentTypeListItem('faq').title('FAQs'),
          ]),
    }),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
