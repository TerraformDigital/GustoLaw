import Link from 'next/link'

export const metadata = {
  title: 'M&A Lawyer Calgary | Mergers & Acquisitions',
  description: 'Calgary M&A lawyers helping Alberta businesses buy, sell, and merge. Due diligence, deal structuring, SPAs, and transaction support. Book a consultation today.',
  keywords: 'M&A lawyer Calgary, mergers acquisitions Alberta, business sale lawyer Calgary, buy-side M&A, sell-side M&A, due diligence lawyer, corporate transaction lawyer Alberta',
  openGraph: {
    title: 'M&A Lawyer Calgary | Mergers & Acquisitions | Gusto Law',
    description: 'Calgary M&A lawyers helping Alberta businesses buy, sell, and merge. Due diligence, deal structuring, SPAs, and transaction support.',
    url: 'https://gustolaw.ca/services/mergers-acquisitions',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'M&A Lawyer Calgary | Mergers & Acquisitions | Gusto Law',
    description: 'Calgary M&A lawyers helping Alberta businesses buy, sell, and merge.',
  },
  alternates: { canonical: 'https://gustolaw.ca/services/mergers-acquisitions' },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://gustolaw.ca/services/mergers-acquisitions#service",
      "name": "Mergers & Acquisitions Legal Services",
      "description": "Comprehensive M&A legal services including buy-side and sell-side representation, due diligence, deal structuring, share purchase agreements, asset purchase agreements, and post-closing support for Alberta businesses.",
      "provider": { "@type": "LegalService", "@id": "https://gustolaw.ca/#organization" },
      "areaServed": [{ "@type": "City", "name": "Calgary" }, { "@type": "AdministrativeArea", "name": "Alberta" }],
      "serviceType": ["Buy-Side M&A", "Sell-Side M&A", "Due Diligence", "Share Purchase Agreements", "Asset Purchase Agreements", "Deal Structuring", "Post-Closing Integration"],
      "url": "https://gustolaw.ca/services/mergers-acquisitions"
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
        { "@type": "Question", "name": "What's the difference between an asset purchase and a share purchase?", "acceptedAnswer": { "@type": "Answer", "text": "In a share purchase, you buy the company itself—including all assets, liabilities, contracts, and history. In an asset purchase, you select specific assets and liabilities to acquire, leaving the corporate shell behind." }},
        { "@type": "Question", "name": "How long does a typical M&A transaction take in Alberta?", "acceptedAnswer": { "@type": "Answer", "text": "Simple transactions can close in 4-8 weeks. More complex deals typically take 3-6 months." }},
        { "@type": "Question", "name": "What's the typical fee structure for M&A legal work?", "acceptedAnswer": { "@type": "Answer", "text": "We typically work on an hourly basis for M&A transactions, with regular billing and clear communication about budget." }},
        { "@type": "Question", "name": "Do I need both a lawyer and an accountant for an M&A transaction?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, typically. Lawyers handle due diligence and transaction documents. Accountants handle financial due diligence, tax structuring, and valuation support." }},
        { "@type": "Question", "name": "What should I prepare before meeting with an M&A lawyer?", "acceptedAnswer": { "@type": "Answer", "text": "If selling, gather corporate records, financial statements (3+ years), material contracts, employee information. If buying, bring information about the target, acquisition criteria, and financing plans." }}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gustolaw.ca" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gustolaw.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Mergers & Acquisitions", "item": "https://gustolaw.ca/services/mergers-acquisitions" }
      ]
    }
  ]
}

export default function MergersAcquisitionsPage() {
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
            <li><span className="text-gray-900 font-medium">Mergers & Acquisitions</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-medium mb-4">Services</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Mergers & Acquisitions</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Strategic guidance through the complete M&A process—from initial due diligence to closing. We help established Alberta businesses navigate acquisitions, divestitures, and strategic transactions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</Link>
              <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stakes */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Buying or Selling a Business Is One of the Largest Financial Decisions You'll Make</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Whether you're acquiring a competitor, selling the company you've built over decades, or bringing in a strategic partner, the stakes are significant. A single overlooked issue in due diligence can expose you to unforeseen liabilities.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hidden Liabilities</h3>
              <p className="text-gray-600 text-sm">Undisclosed debts, pending litigation, or regulatory issues that surface after closing</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tax Inefficiency</h3>
              <p className="text-gray-600 text-sm">Deal structures that leave money on the table or create unexpected tax burdens</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Post-Closing Disputes</h3>
              <p className="text-gray-600 text-sm">Earnout disagreements, indemnification claims, and purchase price adjustments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Complete M&A Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">End-to-end transaction support for buyers, sellers, and strategic partners</p>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Transaction Advisory</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Buy-Side M&A Representation', 'Sell-Side M&A Representation', 'Business Valuation Support & Negotiation', 'Deal Sourcing & Target Identification', 'M&A Due Diligence (Legal)', 'M&A Due Diligence (Financial Review)', 'M&A Due Diligence (Operational & HR)', 'Quality of Earnings Analysis Support', 'Environmental & Regulatory Due Diligence', 'LOI Drafting & Negotiation', 'Term Sheet Preparation', 'Deal Structure Advisory (Asset vs. Share)', 'Tax-Efficient Transaction Structuring', 'Earnout & Holdback Negotiation', 'Escrow Agreement Drafting', 'Vendor Take-Back Financing', 'Purchase Price Adjustments', 'Representations & Warranties Review', 'Indemnification Clause Negotiation'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Transaction Documentation</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Share Purchase Agreements (SPA)', 'Asset Purchase Agreements (APA)', 'Merger Agreements', 'Amalgamation Agreements', 'Business Transfer Agreements', 'Disclosure Schedules Preparation', 'Closing Checklists & Document Management', 'Post-Closing Adjustment Documentation'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Specialized M&A Transactions</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Private Equity Transaction Support', 'Management Buyouts (MBO)', 'Management Buy-Ins (MBI)', 'Leveraged Buyouts (LBO) Legal Support', 'Strategic Acquisition Planning', 'Roll-Up Strategy & Execution', 'Distressed Asset Acquisitions', 'Business Succession & Exit Strategy', 'Family Business Transfers', 'Cross-Border M&A (Canada-US)', 'Reverse Takeovers (RTO)', 'Minority Stake Acquisitions', 'Majority Stake Acquisitions', 'Acqui-Hire Transactions'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Post-Transaction Support</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Post-Closing Integration Legal Support', 'Transition Services Agreements (TSA)', 'Employment Transition Management', 'Asset Transfer & Title Work', 'Regulatory Filings & Notifications', 'Post-Closing Dispute Resolution', 'Earnout Dispute Resolution'].map((item) => (
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
              { q: "What's the difference between an asset purchase and a share purchase?", a: "In a share purchase, you buy the company itself—including all assets, liabilities, contracts, and history. In an asset purchase, you select specific assets and liabilities to acquire, leaving the corporate shell behind. Share deals are often simpler and may have tax advantages for sellers, while asset deals give buyers more control over what they're acquiring. The right structure depends on tax considerations, liability concerns, and the nature of the business." },
              { q: "How long does a typical M&A transaction take in Alberta?", a: "Simple transactions can close in 4-8 weeks. More complex deals—those involving regulatory approvals, extensive due diligence, or complicated financing—typically take 3-6 months. Competitive auction processes or transactions requiring shareholder approvals may take longer." },
              { q: "What's the typical fee structure for M&A legal work?", a: "We typically work on an hourly basis for M&A transactions, with regular billing and clear communication about budget. For certain aspects—like standard due diligence—we can provide fixed-fee arrangements. We'll discuss fee structure and provide estimates during our initial consultation." },
              { q: "Do I need both a lawyer and an accountant for an M&A transaction?", a: "Yes, typically. Lawyers handle due diligence, transaction documents, and legal risk assessment. Accountants handle financial due diligence, quality of earnings analysis, tax structuring, and valuation support. We work closely with your accountants to ensure coordinated advice." },
              { q: "What should I prepare before meeting with an M&A lawyer?", a: "If you're selling, gather your corporate records, financial statements (3+ years), material contracts, employee information, and any known issues or liabilities. If you're buying, bring whatever information you have about the target, your acquisition criteria, financing plans, and timeline expectations." }
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
            <Link href="/services/fractional-general-counsel" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Fractional General Counsel</h3>
              <p className="text-gray-600 text-sm">Ongoing strategic legal support for growing businesses.</p>
            </Link>
            <Link href="/services/corporate-commercial" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate & Commercial</h3>
              <p className="text-gray-600 text-sm">Shareholder agreements, governance, and commercial contracts.</p>
            </Link>
            <Link href="/services/dispute-resolution" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
              <p className="text-gray-600 text-sm">Support for post-closing disputes and earnout disagreements.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Considering a Transaction?</h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-8">Whether you're buying, selling, or exploring your options, let's discuss how we can support your M&A objectives.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-teal-800 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100">Schedule a Consultation</Link>
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
