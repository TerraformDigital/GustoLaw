import Link from 'next/link'

export const metadata = {
  title: 'Business Incorporation Calgary | Formation Lawyer',
  description: 'Calgary business incorporation and formation lawyers. Alberta & federal incorporation, shareholder agreements, corporate structuring for startups and SMEs.',
  keywords: 'business incorporation Calgary, incorporation lawyer Alberta, incorporate business Calgary, startup lawyer, shareholder agreement, corporate structuring',
  openGraph: {
    title: 'Business Incorporation Calgary | Formation Lawyer',
    description: 'Calgary business incorporation and formation lawyers. Alberta & federal incorporation, shareholder agreements.',
    url: 'https://gustolaw.ca/services/business-formation',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
    images: [{
      url: 'https://gustolaw.ca/wp-content/uploads/2022/01/Business-Formation-scaled.jpg',
      width: 1200,
      height: 630,
      alt: 'Business Incorporation Calgary | Formation Lawyer',
    }],
  },
  twitter: {
    card: 'summary',
    title: 'Business Incorporation Calgary | Formation Lawyer',
    description: 'Calgary business incorporation and formation lawyers.',
  },
  alternates: { canonical: 'https://gustolaw.ca/services/business-formation' },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://gustolaw.ca/services/business-formation#service",
      "name": "Business Formation & Incorporation Services",
      "description": "Business incorporation and formation legal services in Calgary including Alberta and federal incorporation, shareholder agreements, partnership formation, and corporate structuring.",
      "provider": { "@type": "LegalService", "@id": "https://gustolaw.ca/#organization" },
      "areaServed": [{ "@type": "City", "name": "Calgary" }, { "@type": "AdministrativeArea", "name": "Alberta" }],
      "serviceType": ["Business Incorporation (Alberta)", "Business Incorporation (Federal)", "Shareholder Agreements", "Partnership Formation", "Corporate Structuring"],
      "url": "https://gustolaw.ca/services/business-formation"
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
        { "@type": "Question", "name": "How much does it cost to incorporate in Alberta?", "acceptedAnswer": { "@type": "Answer", "text": "A basic Alberta incorporation typically costs $1,500-$2,500 in legal fees plus government filing fees (~$275 for Alberta, ~$200 for federal)." }},
        { "@type": "Question", "name": "Do I really need a shareholder agreement if I'm the only owner?", "acceptedAnswer": { "@type": "Answer", "text": "If you're the sole shareholder, a shareholder agreement isn't necessary. However, if you plan to bring in partners, investors, or key employees with equity, you'll want one before issuing additional shares." }},
        { "@type": "Question", "name": "Should I set up a holding company?", "acceptedAnswer": { "@type": "Answer", "text": "Holding companies can provide asset protection, tax deferral opportunities, and flexibility for future transactions. They're valuable if you expect significant retained earnings or are planning for eventual sale." }},
        { "@type": "Question", "name": "What's the difference between Alberta and federal incorporation?", "acceptedAnswer": { "@type": "Answer", "text": "Alberta incorporation is simpler and cheaper, suitable if you'll operate primarily in Alberta. Federal incorporation provides name protection across Canada and is better if you plan to expand nationally." }},
        { "@type": "Question", "name": "Can I incorporate myself using an online service?", "acceptedAnswer": { "@type": "Answer", "text": "You can, but generic templates often miss provisions specific to Alberta law. For material matters—partners, tax-efficient structures, shareholder protections—professional drafting is worth the investment." }}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gustolaw.ca" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gustolaw.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Business Formation", "item": "https://gustolaw.ca/services/business-formation" }
      ]
    }
  ]
}

export default function BusinessFormationPage() {
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
            <li><span className="text-gray-900 font-medium">Business Formation</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity" style={{ backgroundImage: "url('https://gustolaw.ca/wp-content/uploads/2022/01/Business-Formation-scaled.jpg')" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-medium mb-4">Services</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Business Formation</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Build your business on a solid legal foundation. From incorporation to shareholder agreements, we help Alberta entrepreneurs structure their companies for growth, protection, and long-term success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/guslu-gustolaw/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</a>
              <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Structure Matters */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">The Decisions You Make Now Will Shape Your Business for Years</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">How you structure your business affects everything—personal liability, tax obligations, ability to raise capital, partnership dynamics, and eventual exit options. Getting it right from the start is far easier than fixing problems later.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Liability Protection</h3>
              <p className="text-gray-600 text-sm">Proper incorporation separates personal assets from business risks</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tax Efficiency</h3>
              <p className="text-gray-600 text-sm">Corporate structures unlock significant tax planning opportunities</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Growth Ready</h3>
              <p className="text-gray-600 text-sm">The right structure makes it easier to bring in partners, investors, or sell</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Business Formation Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">From simple incorporations to complex multi-entity structures</p>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Business Formation & Structure</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Business Incorporation (Alberta - ABCA)', 'Business Incorporation (Federal - CBCA)', 'Corporate Name Reservation & Search', 'Extra-Provincial Registration', 'Corporate Structure Planning', 'Holding Company Structure Design', 'Family Trust Integration', 'General Partnership Formation', 'Limited Partnership Formation', 'LLP Formation', 'Joint Venture Formation'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Shareholder & Partnership Agreements</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {["Shareholders' Agreements (Standard)", "Shareholders' Agreements (Multi-Class)", 'Unanimous Shareholder Agreements (USA)', 'Buy-Sell Provisions & Shotgun Clauses', 'Drag-Along & Tag-Along Rights', 'Right of First Refusal (ROFR)', 'Shareholder Loan Agreements', 'Partnership Agreements (General)', 'Partnership Agreements (Limited)'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Share Capital & Equity</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Share Issuance (Common & Preferred)', 'Multi-Class Share Structure Design', 'Share Certificate Preparation', 'Share Transfer Documentation', 'Cap Table Management', 'Stock Option Plans (ESOP)', 'RSU & Phantom Stock Plans', 'Employee Share Purchase Plans'].map((item) => (
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
              { q: "How much does it cost to incorporate in Alberta?", a: "A basic Alberta incorporation with articles, bylaws, organizational resolutions, and initial share issuances typically costs $1,500-$2,500 in legal fees plus government filing fees (currently ~$275 for Alberta, ~$200 for federal). More complex structures cost more. We provide fixed-fee quotes after understanding your specific needs." },
              { q: "Do I really need a shareholder agreement if I'm the only owner?", a: "If you're the sole shareholder, a shareholder agreement isn't necessary. However, if you ever plan to bring in partners, investors, or key employees with equity, you'll want one in place before issuing additional shares." },
              { q: "What's the difference between Alberta and federal incorporation?", a: "Alberta incorporation is simpler, cheaper, and suitable if you'll operate primarily in Alberta. Federal incorporation provides name protection across Canada and is better if you plan to expand nationally or want a stronger brand presence." },
              { q: "Should I set up a holding company?", a: "Holding companies can provide asset protection, tax deferral opportunities, and flexibility for future transactions. They're valuable if you expect significant retained earnings, own multiple businesses, or are planning for eventual sale. However, they add complexity and cost, so they're not right for every situation." },
              { q: "Can I incorporate myself using an online service?", a: "You can, but proceed carefully. Generic templates often miss provisions specific to Alberta law. For material matters—partners, tax-efficient structures, shareholder protections—professional drafting is worth the investment." }
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
              <p className="text-gray-600 text-sm">Ongoing corporate maintenance, governance, and commercial contracts.</p>
            </Link>
            <Link href="/services/fractional-general-counsel" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Fractional General Counsel</h3>
              <p className="text-gray-600 text-sm">Ongoing legal support as your business grows.</p>
            </Link>
            <Link href="/services/mergers-acquisitions" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3>
              <p className="text-gray-600 text-sm">When you're ready to buy, sell, or merge.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Incorporate Your Business?</h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-8">Let's discuss the right structure for your business goals.</p>
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
