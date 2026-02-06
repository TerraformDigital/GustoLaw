import Link from 'next/link'

export const metadata = {
  title: 'Joint Venture Lawyer Calgary | JV Agreements',
  description: 'Calgary joint venture lawyers for Alberta businesses. JV agreements, partnership structures, consortium arrangements, and strategic alliance documentation.',
  keywords: 'joint venture lawyer Calgary, JV agreement Alberta, partnership lawyer, consortium agreement, strategic alliance lawyer, collaboration agreement Calgary',
  openGraph: {
    title: 'Joint Venture Lawyer Calgary | JV Agreements',
    description: 'Calgary joint venture lawyers for Alberta businesses. JV agreements, partnership structures, and strategic alliances.',
    url: 'https://gustolaw.ca/services/joint-ventures',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Joint Venture Lawyer Calgary | JV Agreements',
    description: 'Calgary joint venture lawyers for Alberta businesses.',
  },
  alternates: { canonical: 'https://gustolaw.ca/services/joint-ventures' },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://gustolaw.ca/services/joint-ventures#service",
      "name": "Joint Venture Legal Services",
      "description": "Joint venture formation and documentation including JV agreements, partnership structures, consortium arrangements, and strategic alliance documentation for Alberta businesses.",
      "provider": { "@type": "LegalService", "@id": "https://gustolaw.ca/#organization" },
      "areaServed": [{ "@type": "City", "name": "Calgary" }, { "@type": "AdministrativeArea", "name": "Alberta" }],
      "serviceType": ["Joint Venture Agreements", "Partnership Structures", "Consortium Arrangements", "Strategic Alliances", "Collaboration Agreements"],
      "url": "https://gustolaw.ca/services/joint-ventures"
    },
    {
      "@type": "LegalService",
      "@id": "https://gustolaw.ca/#organization",
      "name": "Gusto Law",
      "legalName": "Augustine Lu Professional Corporation",
      "url": "https://gustolaw.ca",
      "telephone": "+1-403-988-8382",
      "email": "inquiries@gustolaw.ca",
      "address": { "@type": "PostalAddress", "streetAddress": "Suite 206, 110 11 Avenue SW", "addressLocality": "Calgary", "addressRegion": "AB", "postalCode": "T2R 0B8", "addressCountry": "CA" }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "What's the difference between a joint venture and a partnership?", "acceptedAnswer": { "@type": "Answer", "text": "A partnership is typically an ongoing business relationship. A joint venture is usually project-specific or time-limited. JVs can be structured as separate entities, contractual arrangements, or partnerships depending on goals." }},
        { "@type": "Question", "name": "Should our joint venture be a separate legal entity?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on liability concerns, tax considerations, financing needs, and exit plans. A separate entity provides liability protection but adds complexity." }},
        { "@type": "Question", "name": "What happens if a JV partner wants to exit?", "acceptedAnswer": { "@type": "Answer", "text": "This should be addressed in your JV agreement with buy-sell provisions, rights of first refusal, and valuation mechanisms." }},
        { "@type": "Question", "name": "How do you handle intellectual property in a joint venture?", "acceptedAnswer": { "@type": "Answer", "text": "IP is often the most complex JV issue. The agreement should address background IP, who owns jointly developed IP, and licensing terms." }}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gustolaw.ca" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gustolaw.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Joint Ventures", "item": "https://gustolaw.ca/services/joint-ventures" }
      ]
    }
  ]
}

export default function JointVenturesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-500 hover:text-teal-700">Home</Link></li>
            <li><span className="text-gray-400 mx-2">/</span></li>
            <li><Link href="/services" className="text-gray-500 hover:text-teal-700">Services</Link></li>
            <li><span className="text-gray-400 mx-2">/</span></li>
            <li><span className="text-gray-900 font-medium">Joint Ventures</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-medium mb-4">Services</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Joint Ventures</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Strategic collaborations require careful legal structuring. We help Alberta businesses form joint ventures, partnerships, and strategic alliances that protect each party's interests while enabling shared success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/guslu-gustolaw/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</a>
              <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why JV Structure Matters */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Joint Ventures Can Create Tremendous Value—Or Tremendous Problems</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">When businesses collaborate well, they can achieve things neither could alone. But joint ventures also create complex relationships where interests don't always align. The difference between success and costly disputes often comes down to how well the arrangement is structured from the start.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Clear Governance</h3>
              <p className="text-gray-600 text-sm">Define decision-making rights, voting thresholds, and deadlock resolution</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Economic Clarity</h3>
              <p className="text-gray-600 text-sm">Capital contributions, profit sharing, and ongoing financial obligations</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Exit Planning</h3>
              <p className="text-gray-600 text-sm">Buy-sell provisions, term limits, and orderly wind-down procedures</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Joint Venture Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive support for collaborative business arrangements</p>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">JV Structure & Formation</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Joint Venture Agreement Drafting', 'JV Structure Selection & Planning', 'Incorporated JV Formation', 'Contractual JV Arrangements', 'Partnership-Based JV Structures', 'Consortium Agreements', 'Strategic Alliance Agreements', 'Collaboration Agreements', 'Co-Development Agreements'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">JV Governance & Operations</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Management Committee Structure', 'Voting Rights & Thresholds', 'Deadlock Resolution Mechanisms', 'Reserved Matters & Veto Rights', 'Reporting & Information Rights', 'Audit Rights & Financial Oversight', 'Non-Compete & Exclusivity Provisions', 'Related Party Transaction Policies', 'JV Operating Procedures'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Exit & Restructuring</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Buy-Sell Provisions', 'Right of First Refusal (ROFR)', 'Tag-Along & Drag-Along Rights', 'Put & Call Options', 'JV Valuation Mechanisms', 'JV Term & Termination Rights', 'Wind-Down Procedures', 'JV Restructuring & Amendments', 'JV Dispute Resolution'].map((item) => (
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
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 sm:mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What's the difference between a joint venture and a partnership?", a: "A partnership is typically an ongoing business relationship with shared profits, losses, and liability. A joint venture is usually project-specific or time-limited. JVs can be structured as separate corporations, contractual arrangements, or partnerships depending on goals, liability concerns, and tax considerations." },
              { q: "Should our joint venture be a separate legal entity?", a: "It depends. A separate entity (corporation or LP) provides liability protection and clearer separation of assets. But it adds complexity and cost. Contractual JVs are simpler but may expose parties to joint liability. We'll help you evaluate the trade-offs for your specific situation." },
              { q: "What happens if a JV partner wants to exit?", a: "This should be addressed in your JV agreement from the start—buy-sell provisions, rights of first refusal, put/call options, and valuation mechanisms. Without these, exits can become contentious and expensive. The more clearly you address this upfront, the smoother any future transition will be." },
              { q: "How do you handle intellectual property in a joint venture?", a: "IP is often the most complex JV issue. The agreement should clearly address: what background IP each party brings, who owns IP developed jointly, licensing terms for shared IP, what happens to IP when the JV ends, and non-compete restrictions on using JV-developed IP independently." }
            ].map((faq, i) => (
              <details key={i} className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <Link href="/services/corporate-commercial" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate & Commercial</h3>
              <p className="text-gray-600 text-sm">Shareholder agreements and commercial contracts for your JV.</p>
            </Link>
            <Link href="/services/mergers-acquisitions" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3>
              <p className="text-gray-600 text-sm">When JV partners consider full acquisition or exit.</p>
            </Link>
            <Link href="/services/dispute-resolution" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
              <p className="text-gray-600 text-sm">Support when JV relationships encounter difficulties.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Exploring a Joint Venture?</h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-8">Let's discuss how to structure your collaboration for success.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/guslu-gustolaw/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-teal-800 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100">Schedule a Consultation</a>
            <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-white/10">Call (403) 988-8382</a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs text-gray-500 text-center">
            This content is for informational purposes only and does not constitute legal advice. For legal guidance tailored to your situation, please consult a qualified lawyer.
          </p>
        </div>
      </section>
    </>
  )
}
