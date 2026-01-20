import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Business Incorporation Calgary | Formation Lawyer | Gusto Law',
  description: 'Calgary business incorporation & formation lawyers. Alberta/federal incorporation, shareholder agreements & corporate structuring. Start your business right.',
  keywords: 'business incorporation Calgary, incorporation lawyer Alberta, incorporate business Calgary, startup lawyer, shareholder agreement, corporate structuring, ABCA, CBCA',
  openGraph: {
    title: 'Business Incorporation Calgary | Formation Lawyer | Gusto Law',
    description: 'Calgary business incorporation & formation lawyers. Alberta/federal incorporation, shareholder agreements & corporate structuring.',
    url: 'https://gustolaw.ca/services/business-formation',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Business Incorporation Calgary | Formation Lawyer | Gusto Law',
    description: 'Calgary business incorporation & formation lawyers. Alberta/federal incorporation, shareholder agreements.',
  },
  alternates: { canonical: 'https://gustolaw.ca/services/business-formation' },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': 'https://gustolaw.ca/services/business-formation#service',
      'name': 'Business Formation & Incorporation Services',
      'description': 'Comprehensive business incorporation and formation legal services including Alberta and federal incorporation, shareholder agreements, partnership formation, and corporate structuring for startups and established businesses.',
      'provider': {
        '@type': 'LegalService',
        'name': 'Gusto Law',
        'url': 'https://gustolaw.ca',
        'telephone': '+1-403-988-8382',
        'email': 'inquiries@gustolaw.ca',
        'address': { '@type': 'PostalAddress', 'streetAddress': 'Suite 206, 110 11 Avenue SW', 'addressLocality': 'Calgary', 'addressRegion': 'AB', 'postalCode': 'T2R 0B8', 'addressCountry': 'CA' },
        'areaServed': [{ '@type': 'City', 'name': 'Calgary' }, { '@type': 'AdministrativeArea', 'name': 'Alberta' }]
      },
      'serviceType': ['Business Incorporation (Alberta)', 'Business Incorporation (Federal)', 'Shareholder Agreements', 'Partnership Formation', 'Corporate Structuring', 'Holding Company Setup', 'Stock Option Plans']
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://gustolaw.ca' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://gustolaw.ca/services' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Business Formation', 'item': 'https://gustolaw.ca/services/business-formation' }
      ]
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'How much does it cost to incorporate in Alberta?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'A basic Alberta incorporation with articles, bylaws, organizational resolutions, and initial share issuances typically costs $1,500-$2,500 in legal fees plus government filing fees (currently ~$275 for Alberta, ~$200 for federal). More complex structures cost more.' } },
        { '@type': 'Question', 'name': 'Do I really need a shareholder agreement if I\'m the only owner?', 'acceptedAnswer': { '@type': 'Answer', 'text': "If you're the sole shareholder, a shareholder agreement isn't necessary. However, if you ever plan to bring in partners, investors, or key employees with equity, you'll want one in place before issuing additional shares." } },
        { '@type': 'Question', 'name': 'What\'s the difference between a shareholder agreement and corporate bylaws?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Bylaws are internal governance rules required by corporate law—meeting procedures, officer roles, banking authorities. A shareholder agreement is a private contract between shareholders covering ownership issues—buy-sell provisions, transfer restrictions, decision-making rights.' } },
        { '@type': 'Question', 'name': 'Should I set up a holding company?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Holding companies can provide asset protection, tax deferral opportunities, and flexibility for future transactions. They're valuable if you expect significant retained earnings, own multiple businesses, or are planning for eventual sale or succession." } },
        { '@type': 'Question', 'name': 'Can I incorporate myself using an online service?', 'acceptedAnswer': { '@type': 'Answer', 'text': "You can, but proceed carefully. Generic templates often miss provisions specific to Alberta law and don't address your particular business risks. For material matters—partners, tax-efficient structures, shareholder protections—professional drafting is worth the investment." } }
      ]
    }
  ]
}

export default function BusinessFormationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <main className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/"><Image src="/images/gusto-law-logo.png" alt="Gusto Law" width={180} height={40} className="h-10 w-auto" /></Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-700 hover:text-teal-700 font-medium">Services</Link>
              <Link href="/team" className="text-gray-600 hover:text-teal-700">Team</Link>
              <Link href="/about" className="text-gray-600 hover:text-teal-700">About</Link>
              <Link href="/blog" className="text-gray-600 hover:text-teal-700">Insights</Link>
              <Link href="/contact" className="bg-teal-700 text-white px-5 py-2 rounded hover:bg-teal-800">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-teal-400 font-medium mb-4">Services</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Business Formation</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">Build your business on a solid legal foundation. From incorporation to shareholder agreements, we help Alberta entrepreneurs structure their companies for growth, protection, and long-term success.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</Link>
                <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Structure Matters */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Decisions You Make Now Will Shape Your Business for Years</h2>
              <p className="text-lg text-gray-600 leading-relaxed">How you structure your business affects everything—personal liability, tax obligations, ability to raise capital, partnership dynamics, and eventual exit options. Getting it right from the start is far easier than fixing problems later.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                <h3 className="font-semibold text-gray-900 mb-2">Liability Protection</h3>
                <p className="text-gray-600 text-sm">Proper incorporation separates personal assets from business risks</p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                <h3 className="font-semibold text-gray-900 mb-2">Tax Efficiency</h3>
                <p className="text-gray-600 text-sm">Corporate structures unlock significant tax planning opportunities</p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4"><svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div>
                <h3 className="font-semibold text-gray-900 mb-2">Growth Ready</h3>
                <p className="text-gray-600 text-sm">The right structure makes it easier to bring in partners, investors, or sell</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Checklist */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Formation Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">From simple incorporations to complex multi-entity structures</p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Business Formation & Structure</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {['Business Incorporation (Alberta - ABCA)', 'Business Incorporation (Federal - CBCA)', 'Corporate Name Reservation & Search', 'Extra-Provincial Registration', 'Corporate Structure Planning & Optimization', 'Entity Selection Advisory', 'Holding Company Structure Design', 'Family Trust Integration', 'Multi-Tier Corporate Structure Planning', 'General Partnership Formation', 'Limited Partnership Formation', 'LLP Formation', 'Joint Venture Formation', 'Co-Ownership Agreements', 'Sole Proprietorship Conversion'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Shareholder & Partnership Agreements</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {["Shareholders' Agreements (Standard)", "Shareholders' Agreements (Multi-Class)", 'Unanimous Shareholder Agreements (USA)', 'Buy-Sell Provisions & Shotgun Clauses', 'Drag-Along & Tag-Along Rights', 'Right of First Refusal (ROFR)', 'Pre-Emptive Rights Documentation', 'Shareholder Loan Agreements', 'Partnership Agreements (General)', 'Partnership Agreements (Limited)', 'Voting Trust Agreements', 'Proxy Agreements'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Share Capital & Equity</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {['Share Issuance (Common & Preferred)', 'Multi-Class Share Structure Design', 'Share Certificate Preparation', 'Share Transfer Documentation', 'Share Redemption & Buyback', 'Cap Table Management', 'Stock Option Plans (ESOP)', 'RSU & Phantom Stock Plans', 'Employee Share Purchase Plans'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>How much does it cost to incorporate in Alberta?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">A basic Alberta incorporation with articles, bylaws, organizational resolutions, and initial share issuances typically costs $1,500-$2,500 in legal fees plus government filing fees (currently ~$275 for Alberta, ~$200 for federal). More complex structures cost more. We provide fixed-fee quotes after understanding your specific needs.</div>
              </details>
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>Do I really need a shareholder agreement if I'm the only owner?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">If you're the sole shareholder, a shareholder agreement isn't necessary. However, if you ever plan to bring in partners, investors, or key employees with equity, you'll want one in place before issuing additional shares. Many clients start without one and add it later.</div>
              </details>
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>What's the difference between a shareholder agreement and corporate bylaws?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">Bylaws are internal governance rules required by corporate law—meeting procedures, officer roles, banking authorities. A shareholder agreement is a private contract between shareholders covering ownership issues—buy-sell provisions, transfer restrictions, decision-making rights. Most businesses with multiple owners need both.</div>
              </details>
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>Should I set up a holding company?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">Holding companies can provide asset protection, tax deferral opportunities, and flexibility for future transactions. They're valuable if you expect significant retained earnings, own multiple businesses, or are planning for eventual sale or succession. However, they add complexity and cost, so they're not right for every situation.</div>
              </details>
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>Can I incorporate myself using an online service?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">You can, but proceed carefully. Generic templates often miss provisions specific to Alberta law and don't address your particular business risks. For low-stakes situations, templates might be fine. For material matters—partners, tax-efficient structures, shareholder protections—professional drafting is worth the investment.</div>
              </details>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/corporate-commercial" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"><h3 className="font-semibold text-gray-900 mb-2">Corporate & Commercial</h3><p className="text-gray-600 text-sm">Ongoing corporate maintenance, governance, and commercial contracts.</p></Link>
              <Link href="/services/fractional-general-counsel" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"><h3 className="font-semibold text-gray-900 mb-2">Fractional General Counsel</h3><p className="text-gray-600 text-sm">Ongoing legal support as your business grows.</p></Link>
              <Link href="/services/mergers-acquisitions" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"><h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3><p className="text-gray-600 text-sm">When you're ready to buy, sell, or merge with another business.</p></Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-teal-800 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Incorporate Your Business?</h2>
            <p className="text-xl text-teal-100 mb-8">Let's discuss the right structure for your business goals.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-block bg-white text-teal-800 px-8 py-4 rounded font-semibold hover:bg-gray-100">Schedule a Consultation</Link>
              <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10">Call (403) 988-8382</a>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
