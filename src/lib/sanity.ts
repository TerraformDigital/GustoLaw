import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper for fetching data
export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: Record<string, unknown>
  tags?: string[]
}): Promise<T> {
  return client.fetch<T>(query, params, {
    next: {
      revalidate: process.env.NODE_ENV === 'development' ? 0 : 3600,
      tags,
    },
  })
}

// ============================================================
// Blog GROQ Queries
// ============================================================

// Category label mapping
export const categoryLabels: Record<string, string> = {
  'business-formation': 'Business Formation',
  'corporate-commercial': 'Corporate & Commercial',
  'mergers-acquisitions': 'Mergers & Acquisitions',
  'technology-law': 'Technology Law',
  'oil-gas': 'Oil & Gas',
  'dispute-resolution': 'Dispute Resolution',
  'general-counsel': 'General Counsel',
  'intellectual-property': 'Intellectual Property',
  'privacy-compliance': 'Privacy & Compliance',
  'business-tips': 'Business Tips',
}

// Fields shared across blog queries
const blogPostFields = `
  _id,
  title,
  subtitle,
  "slug": slug.current,
  excerpt,
  featuredImage,
  publishedAt,
  readTime,
  categories,
  "author": author->{name, "slug": slug.current, photo},
  seo
`

// All blog posts for the listing page (no content body needed)
export const allPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  ${blogPostFields}
}`

// Single blog post by slug (full content)
export const postBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  ${blogPostFields},
  content,
  faqItems,
  "relatedPosts": relatedPosts[]->{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    categories,
    featuredImage
  }
}`

// All slugs for generateStaticParams
export const postSlugsQuery = `*[_type == "blogPost" && defined(slug.current)]{"slug": slug.current}`

// ============================================================
// TypeScript Types
// ============================================================

export interface SanityBlogPost {
  _id: string
  title: string
  subtitle?: string
  slug: string
  excerpt?: string
  featuredImage?: SanityImageSource & { alt?: string }
  publishedAt: string
  readTime?: string
  categories?: string[]
  author?: {
    name: string
    slug: string
    photo?: SanityImageSource
  }
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: SanityImageSource
    noIndex?: boolean
  }
  content?: any[]
  faqItems?: { question: string; answer: string }[]
  relatedPosts?: {
    _id: string
    title: string
    slug: string
    excerpt?: string
    categories?: string[]
    featuredImage?: SanityImageSource
  }[]
}
