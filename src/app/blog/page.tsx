import Link from 'next/link'

export const metadata = {
  title: 'Legal Insights | Gusto Law Calgary',
  description: 'Practical guidance for Alberta business owners navigating corporate law, transactions, and growth.',
}

const posts = [
  {
    title: 'Selling Your Business: What to Expect in the M&A Process',
    excerpt: 'You have spent years building your company. Here is what the sale process actually looks like—from initial preparation through closing day.',
    category: 'Mergers & Acquisitions',
    date: 'January 2026',
    readTime: '12 min read',
    href: '/blog/selling-your-business-calgary',
  },
  {
    title: 'What Is a Fractional General Counsel—And Does Your Business Need One?',
    excerpt: 'Executive-level legal strategy without the executive-level salary. How growing Alberta businesses are getting sophisticated legal guidance on a flexible basis.',
    category: 'Business Strategy',
    date: 'January 2026',
    readTime: '10 min read',
    href: '/blog/fractional-general-counsel-calgary',
  },
  {
    title: 'Alberta vs. Federal Incorporation: Which Is Right for Your Business?',
    excerpt: 'One of the first decisions when incorporating in Canada is whether to incorporate provincially or federally. Here is how to decide.',
    category: 'Business Formation',
    date: 'January 2026',
    readTime: '9 min read',
    href: '/blog/alberta-vs-federal-incorporation',
  },
  {
    title: 'Do You Need a Shareholder Agreement?',
    excerpt: 'If your corporation has more than one shareholder, a shareholder agreement is not optional—it is essential protection for everyone involved.',
    category: 'Corporate Governance',
    date: 'January 2026',
    readTime: '10 min read',
    href: '/blog/do-you-need-a-shareholder-agreement',
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <header className="bg-gradient-to-br from-gray-50 to-teal-50 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Legal Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Practical guidance for Alberta business owners navigating corporate law, transactions, and growth.
          </p>
        </div>
      </header>

      {/* Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.href} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-teal-700 font-medium text-sm">{post.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    <Link href={post.href} className="hover:text-teal-700 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500 text-sm">{post.date}</span>
                    <Link href={post.href} className="text-teal-700 font-medium hover:text-teal-800">
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Legal Question?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Our team is here to help Alberta businesses navigate complex legal matters.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
