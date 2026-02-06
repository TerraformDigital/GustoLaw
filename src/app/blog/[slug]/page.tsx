import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText, PortableTextComponents } from '@portabletext/react'
import {
  sanityFetch,
  urlFor,
  postBySlugQuery,
  postSlugsQuery,
  categoryLabels,
  SanityBlogPost,
} from '@/lib/sanity'

// ============================================================
// Static Params — pre-generate all blog post pages at build time
// ============================================================
export async function generateStaticParams() {
  const slugs = await sanityFetch<{ slug: string }[]>({
    query: postSlugsQuery,
    tags: ['blogPost'],
  })
  return slugs.map((s) => ({ slug: s.slug }))
}

// ============================================================
// Dynamic Metadata — SEO, OG image, Twitter cards
// ============================================================
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await sanityFetch<SanityBlogPost | null>({
    query: postBySlugQuery,
    params: { slug },
    tags: ['blogPost'],
  })

  if (!post) return { title: 'Post Not Found' }

  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt || ''
  const ogImage = post.seo?.ogImage
    ? urlFor(post.seo.ogImage).width(1200).height(630).url()
    : post.featuredImage
      ? urlFor(post.featuredImage).width(1200).height(630).url()
      : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://gustolaw.ca/blog/${slug}`,
      siteName: 'Gusto Law',
      locale: 'en_CA',
      type: 'article',
      publishedTime: post.publishedAt,
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://gustolaw.ca/blog/${slug}`,
    },
  }
}

// ============================================================
// Portable Text Components — custom renderers for Sanity blocks
// ============================================================
const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-gray-900 mb-2 mt-6">{children}</h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-600 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-teal-600 pl-6 italic text-gray-700 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6 ml-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-600 space-y-2 mb-6 ml-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-gray-600">{children}</li>,
    number: ({ children }) => <li className="text-gray-600">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    underline: ({ children }) => <u>{children}</u>,
    link: ({ children, value }) => {
      const target = value?.blank ? '_blank' : undefined
      const rel = value?.blank ? 'noopener noreferrer' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={rel}
          className="text-teal-700 hover:text-teal-800 underline"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      const imageUrl = urlFor(value).width(800).url()
      return (
        <figure className="my-8">
          <img
            src={imageUrl}
            alt={value.alt || ''}
            className="rounded-lg w-full"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="text-sm text-gray-500 mt-2 text-center">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

// ============================================================
// Page Component
// ============================================================
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await sanityFetch<SanityBlogPost | null>({
    query: postBySlugQuery,
    params: { slug },
    tags: ['blogPost'],
  })

  if (!post) notFound()

  const categoryLabel = post.categories?.[0]
    ? categoryLabels[post.categories[0]] || post.categories[0]
    : null

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-CA', {
        year: 'numeric',
        month: 'long',
      })
    : null

  // Build structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || '',
    author: {
      '@type': 'Organization',
      name: post.author?.name || 'Gusto Law',
      url: 'https://gustolaw.ca',
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    ...(post.featuredImage && {
      image: urlFor(post.featuredImage).width(1200).height(630).url(),
    }),
    publisher: {
      '@type': 'LegalService',
      name: 'Gusto Law',
      url: 'https://gustolaw.ca',
    },
  }

  // FAQ schema if faqItems exist
  const faqSchema = post.faqItems?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqItems.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero Header */}
      <header className="bg-gradient-to-br from-gray-50 to-teal-50 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li><Link href="/" className="text-teal-700 hover:text-teal-800">Home</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="text-teal-700 hover:text-teal-800">Insights</Link></li>
              <li>/</li>
              <li className="text-gray-900 truncate max-w-[200px]">{post.title}</li>
            </ol>
          </nav>
          <Link href="/blog" className="text-teal-700 hover:text-teal-800 mb-4 inline-block">
            ← Back to Insights
          </Link>
          {categoryLabel && (
            <p className="text-teal-700 font-medium mb-2">{categoryLabel}</p>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          {post.subtitle && (
            <p className="text-gray-600 text-lg mb-2">{post.subtitle}</p>
          )}
          <p className="text-gray-500">
            {formattedDate}
            {post.readTime && ` · ${post.readTime}`}
          </p>
        </div>
      </header>

      {/* Article Body */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6">
          {post.content && (
            <div className="prose prose-lg max-w-none">
              <PortableText value={post.content} components={portableTextComponents} />
            </div>
          )}

          {/* Legal Disclaimer */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic">
              This content is for informational purposes only and does not constitute legal advice.
              For legal guidance tailored to your situation, please consult a qualified lawyer.
              Gusto Law (Augustine Lu Professional Corporation) is a Calgary corporate law firm.
            </p>
          </section>
        </div>
      </article>

      {/* Related Posts */}
      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {post.relatedPosts.map((related) => (
                <Link key={related._id} href={`/blog/${related.slug}`} className="group">
                  <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6">
                    {related.categories?.[0] && (
                      <p className="text-teal-700 font-medium mb-2">
                        {categoryLabels[related.categories[0]] || related.categories[0]}
                      </p>
                    )}
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-teal-700 transition-colors mb-2">
                      {related.title}
                    </h3>
                    {related.excerpt && (
                      <p className="text-gray-600 text-sm line-clamp-2">{related.excerpt}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-800 to-teal-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Legal Guidance?
          </h2>
          <p className="text-teal-100 mb-8 text-lg">
            Book a consultation with our experienced Calgary business lawyers.
          </p>
          <a
            href="https://calendly.com/guslu-gustolaw/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-teal-800 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule Your Consultation
          </a>
        </div>
      </section>
    </>
  )
}
