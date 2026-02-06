import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Corporate & Business Lawyers in Calgary',
  description: 'Calgary corporate law firm providing M&A, business formation, commercial advisory, and fractional general counsel services. Trusted legal counsel for Alberta businesses, startups, and entrepreneurs.',
  keywords: 'corporate lawyer Calgary, business lawyer Calgary, M&A lawyer Alberta, Calgary law firm, business formation Calgary, commercial lawyer Calgary',
  openGraph: {
    title: 'Corporate & Business Lawyers in Calgary',
    description: 'Calgary corporate law firm providing M&A, business formation, commercial advisory, and fractional general counsel services.',
    url: 'https://gustolaw.ca',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Corporate & Business Lawyers in Calgary',
    description: 'Calgary corporate law firm providing M&A, business formation, commercial advisory, and fractional general counsel services.',
  },
  alternates: {
    canonical: 'https://gustolaw.ca',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Gusto Law',
            url: 'https://gustolaw.ca',
            telephone: '+1-403-IT-GUSTO',
            description: 'Calgary corporate law firm specializing in M&A, business formation, corporate commercial law, and fractional general counsel services for Alberta businesses.',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Calgary',
              addressRegion: 'Alberta',
              addressCountry: 'CA',
            },
            areaServed: {
              '@type': 'Province',
              name: 'Alberta',
            },
            priceRange: '$$',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '24',
            },
          }),
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[600px] bg-teal-900 pt-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 grid md:grid-cols-2 gap-12 items-end">
          <div className="py-16">
            <p className="text-teal-300 font-medium mb-4 tracking-wide uppercase text-sm">Calgary Corporate Law</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
              Legal Insight.<br />Business Instincts.
            </h1>
            <p className="text-xl text-teal-100 mb-8 leading-relaxed">
              Strategic legal counsel for established businesses navigating growth, transactions, and complex commercial matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/guslu-gustolaw/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors text-center"
              >
                Schedule a Consultation
              </a>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/images/team/gus-lu.png"
              alt="Gus Lu - Founder of Gusto Law"
              width={420}
              height={560}
              className="w-full max-w-md ml-auto block"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 items-center">
          <Image src="/images/logos/law-society-alberta.png" alt="Law Society of Alberta" width={120} height={60} className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <Image src="/images/logos/canadian-bar-association.png" alt="Canadian Bar Association" width={120} height={60} className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
          <Image src="/images/logos/university-calgary.png" alt="University of Calgary" width={120} height={60} className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity" />
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Corporate Counsel With Executive Experience
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Gusto Law, we focus on providing established businesses with strategic legal counsel. We act as your trusted partner, offering personalized support for complex transactions and ongoing business needs.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With experience as general counsel for private equity portfolio companies and in M&A at a national firm, we bring both the technical acumen and practical business perspective that growing companies need.
            </p>
            <Link href="/about" className="text-teal-700 font-medium hover:text-teal-800 inline-flex items-center gap-2">
              Learn more about our approach
              <span>→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Corporate Law</h3>
              <p className="text-gray-600 text-sm">Governance, compliance, and day-to-day business operations</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Commercial Advisory</h3>
              <p className="text-gray-600 text-sm">Contracts, partnerships, and stakeholder relationships</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Fractional GC</h3>
              <p className="text-gray-600 text-sm">Ongoing legal support without full-time overhead</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Formation</h3>
              <p className="text-gray-600 text-sm">Incorporations, partnerships, and joint ventures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Help</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive legal services for businesses at every stage of growth
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mergers & Acquisitions</h3>
              <p className="text-gray-600 mb-4">Buy-side and sell-side representation through due diligence, negotiation, and closing.</p>
              <Link href="/services/mergers-acquisitions" className="text-teal-700 font-medium hover:text-teal-800">Learn more →</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fractional General Counsel</h3>
              <p className="text-gray-600 mb-4">Executive-level legal guidance on a flexible, cost-effective basis.</p>
              <Link href="/services/fractional-general-counsel" className="text-teal-700 font-medium hover:text-teal-800">Learn more →</Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Corporate & Commercial</h3>
              <p className="text-gray-600 mb-4">Contracts, governance, compliance, and ongoing business operations.</p>
              <Link href="/services/corporate-commercial" className="text-teal-700 font-medium hover:text-teal-800">Learn more →</Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded font-medium hover:border-teal-700 hover:text-teal-700 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep experience across Alberta's key business sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-teal-800 to-teal-900 p-8 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-3">Technology & Software</h3>
              <p className="text-teal-100 mb-4">SaaS agreements, IP protection, venture financing, and tech-specific commercial contracts.</p>
              <Link href="/industries/technology" className="text-white font-medium hover:underline">Learn more →</Link>
            </div>
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-3">Energy & Resources</h3>
              <p className="text-gray-300 mb-4">Oil & gas transactions, joint ventures, regulatory compliance, and infrastructure projects.</p>
              <Link href="/industries/oil-gas" className="text-white font-medium hover:underline">Learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-teal-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Discuss Your Business Needs?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Schedule a consultation to explore how we can support your company's growth and transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/guslu-gustolaw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors"
            >
              Schedule a Consultation
            </a>
            <a 
              href="tel:+14039888382" 
              className="border-2 border-white text-white px-8 py-4 rounded font-medium hover:bg-white/10 transition-colors"
            >
              Call (403) 988-8382
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
