import Link from 'next/link'

export const metadata = {
  title: 'Legal Insights & Blog',
  description: 'Practical legal insights for Alberta business owners. Expert articles on M&A, business formation, corporate governance, shareholder agreements, and more from Gusto Law.',
  keywords: 'Calgary business law blog, Alberta corporate law articles, legal insights Calgary, M&A articles, business formation guides',
  openGraph: {
    title: 'Legal Insights & Blog',
    description: 'Practical legal insights for Alberta business owners from Gusto Law.',
    url: 'https://gustolaw.ca/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Legal Insights & Blog',
    description: 'Practical legal insights for Alberta business owners from Gusto Law.',
  },
  alternates: {
    canonical: 'https://gustolaw.ca/blog',
  },
}

const posts = [
  {
    title: 'Selling Your Business: What to Expect in the M&A Process',
    excerpt: 'You have spent years building your company. Here is what the sale process actually looks like—from initial preparation through closing day.',
    category: 'Mergers & Acquisitions',
    date: 'January 2026',
    readTime: '12 min read',
    href: '/blog/selling-your-business-calgary',
    image: 'https://gustolaw.ca/wp-content/uploads/2022/01/corporate-lawyer-scaled.jpg',
  },
  {
    title: 'What Is a Fractional General Counsel—And Does Your Business Need One?',
    excerpt: 'Executive-level legal strategy without the executive-level salary. How growing Alberta businesses are getting sophisticated legal guidance on a flexible basis.',
    category: 'Business Strategy',
    date: 'January 2026',
    readTime: '10 min read',
    href: '/blog/fractional-general-counsel-calgary',
    image: 'https://gustolaw.ca/wp-content/uploads/2022/01/General-Counsel-scaled.jpg',
  },
  {
    title: 'Alberta vs. Federal Incorporation: Which Is Right for Your Business?',
    excerpt: 'One of the first decisions when incorporating in Canada is whether to incorporate provincially or federally. Here is how to decide.',
    category: 'Business Formation',
    date: 'January 2026',
    readTime: '9 min read',
    href: '/blog/alberta-vs-federal-incorporation',
    image: 'https://gustolaw.ca/wp-content/uploads/2022/01/Business-Formation-scaled.jpg',
  },
  {
    title: 'Do You Need a Shareholder Agreement?',
    excerpt: 'If your corporation has more than one shareholder, a shareholder agreement is not optional—it is essential protection for everyone involved.',
    category: 'Corporate Governance',
    date: 'January 2026',
    readTime: '10 min read',
    href: '/blog/do-you-need-a-shareholder-agreement',
    image: 'https://gustolaw.ca/wp-content/uploads/2022/01/corporate-lawyer-scaled.jpg',
  },
  {
    title: 'Intro to Canadian Privacy Law: An Essential Guide for Alberta Businesses',
    excerpt: 'Understanding PIPEDA, Alberta\'s PIPA, and the 10 Fair Information Principles that govern how your business collects, uses, and protects personal data.',
    category: 'Business Law',
    date: 'August 2025',
    readTime: '14 min read',
    href: '/blog/canadian-privacy-law-guide',
    image: 'https://gustolaw.ca/wp-content/uploads/2025/08/Workplace-Privacy-Critical-Considerations-for-Alberta-Employers.jpg',
  },
  {
    title: 'Intellectual Property Basics Every Canadian Business Owner Should Know',
    excerpt: 'From copyrights and patents to trademarks and trade secrets—how to protect your business\'s most valuable intangible assets under Canadian law.',
    category: 'Business Law',
    date: 'July 2025',
    readTime: '12 min read',
    href: '/blog/intellectual-property-basics-canadian-business',
    image: 'https://gustolaw.ca/wp-content/uploads/2025/07/Intellectual-Property-Basics.jpg',
  },
  {
    title: 'Why Your Lawyer Recommends a Holding Company and Separate Share Classes',
    excerpt: 'How holding companies and separate share classes create tax efficiency, creditor protection, and flexibility for Canadian business owners and their partners.',
    category: 'Business Formation',
    date: 'June 2025',
    readTime: '11 min read',
    href: '/blog/holding-company-share-classes-canada',
    image: 'https://gustolaw.ca/wp-content/uploads/2025/06/Holding-Company-and-Separate-Share-Classes.jpg',
  },
  {
    title: 'How to Negotiate Oil & Gas Leases',
    excerpt: 'A guide for Alberta landowners on negotiating fair compensation, protecting property rights, and avoiding common pitfalls in oil and gas lease agreements.',
    category: 'Oil & Gas',
    date: 'May 2025',
    readTime: '11 min read',
    href: '/blog/negotiate-oil-gas-leases',
    image: 'https://gustolaw.ca/wp-content/uploads/2025/05/Negotiate-Oil-Gas-Leases.jpg',
  },
  {
    title: 'Understanding Software Licensing Agreements: A Legal Guide for Canadian Businesses',
    excerpt: 'From proprietary EULAs to open source copyleft, explore the licensing models that shape software ownership, distribution, and compliance under Canadian law.',
    category: 'Technology',
    date: 'April 2025',
    readTime: '13 min read',
    href: '/blog/software-licensing-agreements-guide',
    image: 'https://gustolaw.ca/wp-content/uploads/2025/04/Types-of-Software-Licensing-Models.png',
  },
  {
    title: 'Reseller and Distributor Software Licensing: What Software Companies Need to Know',
    excerpt: 'How to structure reseller licenses and distributor agreements that protect your IP, control pricing, and ensure compliance across borders.',
    category: 'Technology',
    date: 'March 2025',
    readTime: '12 min read',
    href: '/blog/reseller-distributor-software-licensing',
    image: 'https://gustolaw.ca/wp-content/uploads/2025/01/Calgary-Software-Lawyer.jpg',
  },
  {
    title: 'Outsourcing vs. In-House Legal Counsel: What\'s Best for Your Oil & Gas Business?',
    excerpt: 'Comparing the cost, flexibility, and expertise of outsourced legal services versus building an in-house legal team for energy companies in Alberta.',
    category: 'Oil & Gas',
    date: 'March 2025',
    readTime: '10 min read',
    href: '/blog/outsourcing-vs-inhouse-legal-counsel-oil-gas',
    image: 'https://gustolaw.ca/wp-content/uploads/2022/01/Oil-and-Gas-Lawyer-scaled.jpg',
  },
  {
    title: '7 Must-Have Elements in Your SaaS Agreement for Canadian Businesses',
    excerpt: 'SLAs, IP ownership, data privacy, payment terms, liability caps, warranties, and termination clauses—the essential components of every SaaS contract.',
    category: 'Technology',
    date: 'February 2025',
    readTime: '14 min read',
    href: '/blog/saas-agreement-must-have-elements',
    image: 'https://gustolaw.ca/wp-content/uploads/2025/01/7-must-have-elements-in-SaaS-contract.jpg',
  },
  {
    title: 'SaaS Agreements: A Framework for Success',
    excerpt: 'The interconnected contracts and policies every SaaS company needs—from Terms of Use and EULAs to Master Service Agreements and Data Processing Addendums.',
    category: 'Technology',
    date: 'January 2025',
    readTime: '11 min read',
    href: '/blog/saas-agreements-framework-success',
    image: 'https://gustolaw.ca/wp-content/uploads/2024/11/SaaS-Agreements-scaled.jpeg',
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
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
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
          <a
            href="https://calendly.com/guslu-gustolaw/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </>
  )
}
