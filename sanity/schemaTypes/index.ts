import { service } from './documents/service'
import { teamMember } from './documents/teamMember'
import { industry } from './documents/industry'
import { blogPost } from './documents/blogPost'
import { testimonial } from './documents/testimonial'
import { faq } from './documents/faq'
import { siteSettings } from './documents/siteSettings'
import { page } from './documents/page'

import { feature } from './objects/feature'
import { seo } from './objects/seo'
import { blockContent } from './objects/blockContent'
import { heroBlock } from './objects/heroBlock'
import { ctaBlock } from './objects/ctaBlock'
import { servicesGridBlock } from './objects/servicesGridBlock'
import { teamGridBlock } from './objects/teamGridBlock'
import { testimonialBlock } from './objects/testimonialBlock'
import { faqBlock } from './objects/faqBlock'
import { textImageBlock } from './objects/textImageBlock'

export const schemaTypes = [
  // Documents
  service,
  teamMember,
  industry,
  blogPost,
  testimonial,
  faq,
  siteSettings,
  page,
  
  // Objects
  feature,
  seo,
  blockContent,
  heroBlock,
  ctaBlock,
  servicesGridBlock,
  teamGridBlock,
  testimonialBlock,
  faqBlock,
  textImageBlock,
]
