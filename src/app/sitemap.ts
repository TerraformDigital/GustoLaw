import { MetadataRoute } from 'next'
import { client, postSlugsQuery } from '@/lib/sanity'

// Hardcoded blog slugs as fallback when Sanity is empty
const fallbackBlogSlugs = [
  'selling-your-business-calgary',
  'fractional-general-counsel-calgary',
  'alberta-vs-federal-incorporation',
  'do-you-need-a-shareholder-agreement',
  'canadian-privacy-law-guide',
  'intellectual-property-basics-canadian-business',
  'holding-company-share-classes-canada',
  'negotiate-oil-gas-leases',
  'software-licensing-agreements-guide',
  'reseller-distributor-software-licensing',
  'outsourcing-vs-inhouse-legal-counsel-oil-gas',
  'saas-agreement-must-have-elements',
  'saas-agreements-framework-success',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://gustolaw.ca'
  const lastModified = new Date()

  // Fetch blog slugs from Sanity (with fallback)
  let blogSlugs: string[] = fallbackBlogSlugs
  try {
    const sanityPosts = await client.fetch<{ slug: string }[]>(postSlugsQuery)
    if (sanityPosts.length > 0) {
      blogSlugs = sanityPosts.map((p) => p.slug)
    }
  } catch {
    // Use fallback slugs
  }

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/team`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/team/gus-lu`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/team/tyler-anthony`, lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/industries`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/technology`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/oil-gas`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/business-formation`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/mergers-acquisitions`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/corporate-commercial`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/fractional-general-counsel`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/dispute-resolution`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/joint-ventures`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
