import Link from 'next/link'

export const metadata = {
  title: 'Corporate Lawyer Calgary | Commercial Contracts',
  description: 'Calgary corporate and commercial lawyers. Shareholder agreements, business contracts, corporate governance, and technology agreements for Alberta businesses.',
  keywords: 'corporate lawyer Calgary, commercial lawyer Alberta, shareholder agreement, business contracts Calgary, corporate governance, SaaS agreements',
  openGraph: {
    title: 'Corporate Lawyer Calgary | Commercial Contracts',
    description: 'Calgary corporate and commercial lawyers. Shareholder agreements, business contracts, corporate governance.',
    url: 'https://gustolaw.ca/services/corporate-commercial',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Corporate Lawyer Calgary | Commercial Contracts',
    description: 'Calgary corporate and commercial lawyers.',
  },
  alternates: { canonical: 'https://gustolaw.ca/services/corporate-commercial' },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://gustolaw.ca/services/corporate-commercial#service",
      "name": "Corporate & Commercial Legal Services",
      "description": "Corporate and commercial law services including shareholder agreements, corporate governance, commercial contracts, and technology agreements for Alberta businesses.",
      "provider": { "@type": "LegalService", "@id": "https://gustolaw.ca/#organization" },
      "areaServed": [{ "@type": "City", "name": "Calgary" }, { "@type": "AdministrativeArea", "name": "Alberta" }],
      "serviceType": ["Corporate Governance", "Shareholder Agreements", "Commercial Contracts", "SaaS Agreements", "NDAs", "Corporate Reorganization"],
      "url": "https://gustolaw.ca/services/corporate-commercial"
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
        { "@type": "Question", "name": "What should be included in a shareholder agreement?", "acceptedAnswer": { "@type": "Answer", "text": "A comprehensive shareholder agreement addresses: how major decisions are made, restrictions on transferring shares, what happens if a shareholder leaves, how the company is valued for buyouts, non-compete obligations, and dispute resolution." }},
        { "@type": "Question", "name": "How much do commercial contracts cost to draft?", "acceptedAnswer": { "@type": "Answer", "text": "It depends on complexity. A straightforward NDA might be $500-$1,500. A comprehensive MSA could be $3,000-$8,000. We provide fixed-fee quotes for defined scope work." }},
        { "@type": "Question", "name": "Are non-compete agreements enforceable in Alberta?", "acceptedAnswer": { "@type": "Answer", "text": "They can be, but Alberta courts scrutinize them carefully. To be enforceable, a non-compete must be reasonable in duration, geographic scope, and activities restricted." }},
        { "@type": "Question", "name": "How often should we update our corporate minute book?", "acceptedAnswer": { "@type": "Answer", "text": "At minimum, annually. Also update it for significant events: share issuances, changes to directors, or major corporate decisions." }}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gustolaw.ca" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gustolaw.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Corporate & Commercial", "item": "https://gustolaw.ca/services/corporate-commercial" }
      ]
    }
  ]
}

export default function CorporateCommercialPage() {
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
            <li><span className="text-gray-900 font-medium">Corporate & Commercial</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity" style={{ backgroundImage: "url('https://gustolaw.ca/wp-content/uploads/2022/01/corporate-lawyer-scaled.jpg')" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-medium mb-4">Services</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Corporate & Commercial Law</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              The legal foundation for how your business operates, grows, and protects itself. From shareholder relationships to commercial contracts, we help Alberta businesses structure their affairs for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/guslu-gustolaw/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</a>
              <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Checklists */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Corporate & Commercial Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive legal support for established businesses</p>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Corporate Governance</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Board of Directors Advisory', 'Corporate Governance Policy Development', 'Director & Officer Duties Training', 'Corporate Minute Book Maintenance', 'Annual Corporate Resolutions', 'Special Resolutions & Filings', 'Alberta Corporate Registry Filings', 'Annual Return Filings', 'Notice of Change of Directors'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Corporate Changes & Reorganization</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Name Change (Corporate)', 'Registered Office Address Change', 'Share Capital Amendments', 'Amalgamation (Short-Form & Long-Form)', 'Continuance (Into/Out of Alberta)', 'Corporate Reorganization (Section 86)', 'Estate Freeze Planning', 'Spin-Off & Subsidiary Creation', 'Voluntary Dissolution & Wind-Up'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Commercial Contracts</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Service Agreements (B2B & B2C)', 'Master Services Agreements (MSA)', 'Statement of Work (SOW) Templates', 'Consulting & Professional Services', 'Sales Terms & Conditions', 'Contract Review & Negotiation', 'Distribution Agreements', 'Reseller & Agency Agreements', 'Referral & Commission Agreements'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Technology & Software Contracts</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['SaaS Agreements', 'Software Licensing (Perpetual & Subscription)', 'End User License Agreements (EULA)', 'Software Development Agreements', 'Cloud Services Agreements', 'Data Processing Agreements (DPA)', 'API Licensing & Terms of Use', 'Platform Terms of Service', 'Website & Mobile App Development'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Confidentiality & IP Protection</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['NDAs (Mutual & Unilateral)', 'Confidentiality Agreements', 'Trade Secret Protection', 'Employee IP Agreements', 'Contractor IP Assignment', 'Non-Compete Agreements (Alberta)', 'Non-Solicitation Agreements'].map((item) => (
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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 sm:mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What should be included in a shareholder agreement?", a: "A comprehensive shareholder agreement addresses: how major decisions are made (voting thresholds), restrictions on transferring shares (right of first refusal, tag-along, drag-along), what happens if a shareholder dies, becomes disabled, or wants to leave (buy-sell provisions), how the company is valued for buyouts, non-compete obligations, and dispute resolution mechanisms." },
              { q: "How much do commercial contracts cost to draft?", a: "It depends on complexity. A straightforward NDA might be $500-$1,500. A comprehensive MSA or distribution contract could be $3,000-$8,000. Complex technology licensing runs higher. We provide fixed-fee quotes for defined scope work." },
              { q: "Can I use contract templates I find online?", a: "You can, but proceed carefully. Generic templates often miss provisions specific to Alberta law. For material contracts—key customers, significant vendors—professional drafting is worth it." },
              { q: "Are non-compete agreements enforceable in Alberta?", a: "They can be, but Alberta courts scrutinize them carefully. To be enforceable, a non-compete must be reasonable in duration (typically 6-24 months), geographic scope, and activities restricted. Well-drafted non-solicitation clauses are often more reliably enforceable." },
              { q: "How often should we update our corporate minute book?", a: "At minimum, annually—to document annual meetings. Also update it for significant events: share issuances or transfers, changes to directors or officers, amendments to articles or bylaws, or major corporate decisions." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-lg shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
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
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <Link href="/services/fractional-general-counsel" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Fractional General Counsel</h3>
              <p className="text-gray-600 text-sm">Ongoing legal support for all your corporate and commercial needs.</p>
            </Link>
            <Link href="/services/mergers-acquisitions" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3>
              <p className="text-gray-600 text-sm">When corporate transactions move beyond day-to-day operations.</p>
            </Link>
            <Link href="/services/business-formation" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Business Formation</h3>
              <p className="text-gray-600 text-sm">Setting up new corporate structures and entities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Need Corporate or Commercial Legal Support?</h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-8">Let's discuss your business needs and how we can help.</p>
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
