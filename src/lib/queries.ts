import { groq } from 'next-sanity'

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    firmName,
    tagline,
    description,
    logo,
    logoAlt,
    phone,
    email,
    address,
    googleMapsUrl,
    socialLinks,
    clioGrowFormId,
    clioGrowScript,
    elfsightWidgetId,
    googleAnalyticsId,
    disclaimer
  }
`

// Services
export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    order
  }
`

export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    heroImage,
    overview,
    features[] {
      title,
      description,
      icon
    },
    faqs[]-> {
      _id,
      question,
      answer
    },
    relatedServices[]-> {
      _id,
      title,
      slug,
      shortDescription,
      icon
    },
    seo
  }
`

// Team Members
export const allTeamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    slug,
    role,
    headshot,
    shortBio,
    order
  }
`

export const teamMemberBySlugQuery = groq`
  *[_type == "teamMember" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    role,
    headshot,
    shortBio,
    fullBio,
    education,
    admissions,
    practiceAreas[]-> {
      _id,
      title,
      slug
    },
    email,
    phone,
    linkedIn,
    seo
  }
`

// Industries
export const allIndustriesQuery = groq`
  *[_type == "industry"] | order(order asc) {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    order
  }
`

export const industryBySlugQuery = groq`
  *[_type == "industry" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    icon,
    heroImage,
    overview,
    challenges[] {
      title,
      description,
      icon
    },
    relatedServices[]-> {
      _id,
      title,
      slug,
      shortDescription
    },
    faqs[]-> {
      _id,
      question,
      answer
    },
    seo
  }
`

// Blog Posts
export const allBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author-> {
      name,
      slug,
      headshot
    },
    publishedAt,
    categories
  }
`

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author-> {
      name,
      slug,
      headshot,
      shortBio
    },
    publishedAt,
    content,
    categories,
    relatedServices[]-> {
      _id,
      title,
      slug
    },
    seo
  }
`

export const recentBlogPostsQuery = groq`
  *[_type == "blogPost"] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    publishedAt
  }
`

// Testimonials
export const featuredTestimonialsQuery = groq`
  *[_type == "testimonial" && featured == true] {
    _id,
    quote,
    attribution,
    company,
    role,
    rating
  }
`

export const allTestimonialsQuery = groq`
  *[_type == "testimonial"] {
    _id,
    quote,
    attribution,
    company,
    role,
    rating,
    featured,
    relatedService-> {
      title,
      slug
    }
  }
`

// FAQs
export const allFaqsQuery = groq`
  *[_type == "faq"] | order(category asc, order asc) {
    _id,
    question,
    answer,
    category,
    order
  }
`

export const faqsByCategoryQuery = groq`
  *[_type == "faq" && category == $category] | order(order asc) {
    _id,
    question,
    answer,
    category,
    order
  }
`

// Pages
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    pageType,
    blocks[] {
      _type,
      ...
    },
    seo
  }
`
