import Link from 'next/link'

export const metadata = {
  title: 'Industries We Serve',
  description: 'Industry-specific legal services for technology, software, energy, and resources sectors in Calgary and Alberta. Specialized corporate counsel for key business sectors.',
  keywords: 'industry-specific legal services Calgary, technology law firm Alberta, energy law Calgary, SaaS legal services, oil and gas lawyers Calgary',
  openGraph: {
    title: 'Industries We Serve',
    description: 'Industry-specific legal services for technology, software, energy, and resources sectors in Calgary and Alberta. Specialized corporate counsel for key business sectors.',
    url: 'https://gustolaw.ca/industries',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Industries We Serve',
    description: 'Industry-specific legal services for technology, software, energy, and resources sectors in Calgary and Alberta.',
  },
  alternates: {
    canonical: 'https://gustolaw.ca/industries',
  },
}

const industries = [
  {
    title: 'Technology & Software',
    description: 'Deep expertise in the technology sector. We handle SaaS agreements, intellectual property protection, venture capital financing, and technology-specific contracts for software companies and digital innovators.',
    href: '/industries/technology',
  },
  {
    title: 'Energy & Resources',
    description: 'Strategic counsel across Alberta\'s energy sector. We advise on oil and gas transactions, joint ventures, regulatory compliance, and infrastructure projects that fuel the province\'s economy.',
    href: '/industries/oil-gas',
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <header className="bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Industries We Serve</h1>
          <p className="text-xl text-teal-100 max-w-2xl">
            Deep experience across Alberta's key business sectors. We bring specialized legal expertise to the unique challenges your industry faces.
          </p>
        </div>
      </header>

      {/* Industries Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="group bg-white p-8 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {industry.title}
                </h2>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <span className="text-teal-700 font-medium group-hover:translate-x-1 transition-transform inline-block">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry-Specific Expertise */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Industry-Specific Expertise Matters</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              Every industry operates under its own set of challenges, regulations, and business practices. A one-size-fits-all approach to legal counsel leaves your business exposed to risks and opportunities you may not see coming.
            </p>
            <p>
              At Gusto Law, we have invested in deep knowledge of the sectors we serve. We understand the regulatory landscape, the competitive dynamics, and the strategic considerations that matter most to your business.
            </p>
            <p>
              Whether you're navigating complex IP considerations in technology or managing regulatory compliance in energy, our specialized counsel is tailored to your industry's realities. We don't just provide legal services—we provide strategic counsel that aligns with your sector's opportunities and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss how our industry expertise can support your business objectives.
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
