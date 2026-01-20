import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'M&A Lawyer Calgary | Mergers & Acquisitions | Gusto Law',
  description: 'Calgary M&A lawyers for business sales, acquisitions & due diligence. Strategic transaction support for Alberta companies. Book a consultation today.',
  keywords: 'M&A lawyer Calgary, mergers acquisitions Alberta, business sale lawyer, buy-side M&A, sell-side M&A, due diligence Calgary, corporate transaction lawyer',
  openGraph: {
    title: 'M&A Lawyer Calgary | Mergers & Acquisitions | Gusto Law',
    description: 'Calgary M&A lawyers for business sales, acquisitions & due diligence. Strategic transaction support for Alberta companies.',
    url: 'https://gustolaw.ca/services/mergers-acquisitions',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'M&A Lawyer Calgary | Mergers & Acquisitions | Gusto Law',
    description: 'Calgary M&A lawyers for business sales, acquisitions & due diligence. Strategic transaction support for Alberta companies.',
  },
  alternates: {
    canonical: 'https://gustolaw.ca/services/mergers-acquisitions',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': 'https://gustolaw.ca/services/mergers-acquisitions#service',
      'name': 'Mergers & Acquisitions Legal Services',
      'description': 'Comprehensive M&A legal services including buy-side and sell-side representation, due diligence, deal structuring, and transaction documentation for Alberta businesses.',
      'provider': {
        '@type': 'LegalService',
        'name': 'Gusto Law',
        'url': 'https://gustolaw.ca',
        'telephone': '+1-403-988-8382',
        'email': 'inquiries@gustolaw.ca',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Suite 206, 110 11 Avenue SW',
          'addressLocality': 'Calgary',
          'addressRegion': 'AB',
          'postalCode': 'T2R 0B8',
          'addressCountry': 'CA'
        },
        'geo': {
          '@type': 'GeoCoordinates',
          'latitude': 51.0447,
          'longitude': -114.0719
        },
        'areaServed': [
          { '@type': 'City', 'name': 'Calgary' },
          { '@type': 'AdministrativeArea', 'name': 'Alberta' },
          { '@type': 'Country', 'name': 'Canada' }
        ],
        'priceRange': '$$'
      },
      'serviceType': [
        'Buy-Side M&A Representation',
        'Sell-Side M&A Representation',
        'M&A Due Diligence',
        'Share Purchase Agreements',
        'Asset Purchase Agreements',
        'Business Valuation Support',
        'Deal Structuring',
        'Post-Closing Integration'
      ],
      'areaServed': {
        '@type': 'AdministrativeArea',
        'name': 'Alberta'
      }
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://gustolaw.ca' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://gustolaw.ca/services' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Mergers & Acquisitions', 'item': 'https://gustolaw.ca/services/mergers-acquisitions' }
      ]
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': "What's the difference between an asset purchase and a share purchase?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "In a share purchase, you buy the company itself—including all assets, liabilities, contracts, and history. In an asset purchase, you select specific assets and liabilities to acquire, leaving the corporate shell behind. Share deals are often simpler and may have tax advantages for sellers, while asset deals give buyers more control over what they're acquiring. The right structure depends on tax considerations, liability concerns, and the nature of the business."
          }
        },
        {
          '@type': 'Question',
          'name': 'How long does a typical M&A transaction take in Alberta?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Simple transactions can close in 4-8 weeks. More complex deals—those involving regulatory approvals, extensive due diligence, or complicated financing—typically take 3-6 months. Competitive auction processes or transactions requiring shareholder approvals may take longer.'
          }
        },
        {
          '@type': 'Question',
          'name': "What's the typical fee structure for M&A legal work?",
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We typically work on an hourly basis for M&A transactions, with regular billing and clear communication about budget. For certain aspects—like standard due diligence—we can provide fixed-fee arrangements. We discuss fee structure and provide estimates during initial consultation.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Do I need both a lawyer and an accountant for an M&A transaction?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, typically. Lawyers handle due diligence, transaction documents, and legal risk assessment. Accountants handle financial due diligence, quality of earnings analysis, tax structuring, and valuation support. We work closely with your accountants to ensure coordinated advice.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What should I prepare before meeting with an M&A lawyer?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': "If you're selling, gather your corporate records, financial statements (3+ years), material contracts, employee information, and any known issues or liabilities. If you're buying, bring whatever information you have about the target, your acquisition criteria, financing plans, and timeline expectations."
          }
        }
      ]
    }
  ]
}

export default function MergersAcquisitionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/">
              <Image src="/images/gusto-law-logo.png" alt="Gusto Law" width={180} height={40} className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-700 hover:text-teal-700 font-medium">Services</Link>
              <Link href="/team" className="text-gray-600 hover:text-teal-700">Team</Link>
              <Link href="/about" className="text-gray-600 hover:text-teal-700">About</Link>
              <Link href="/blog" className="text-gray-600 hover:text-teal-700">Insights</Link>
              <Link href="/contact" className="bg-teal-700 text-white px-5 py-2 rounded hover:bg-teal-800">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-teal-400 font-medium mb-4">Services</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Mergers & Acquisitions</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Strategic guidance through the complete M&A process—from initial due diligence to closing. We help established Alberta businesses navigate acquisitions, divestitures, and strategic transactions with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</Link>
                <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
              </div>
            </div>
          </div>
        </section>

        {/* Stakes Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Buying or Selling a Business Is One of the Largest Financial Decisions You'll Make</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're acquiring a competitor, selling the company you've built over decades, or bringing in a strategic partner, the stakes are significant. A single overlooked issue in due diligence can expose you to unforeseen liabilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Hidden Liabilities</h3>
                <p className="text-gray-600 text-sm">Undisclosed debts, pending litigation, or regulatory issues that surface after closing</p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Tax Inefficiency</h3>
                <p className="text-gray-600 text-sm">Deal structures that leave money on the table or create unexpected tax burdens</p>
              </div>
              <div className="text-center p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Post-Closing Disputes</h3>
                <p className="text-gray-600 text-sm">Earnout disagreements, indemnification claims, and purchase price adjustments</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Services Checklist */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete M&A Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">End-to-end transaction support for buyers, sellers, and strategic partners</p>
            </div>

            {/* Transaction Advisory */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Transaction Advisory</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {['Buy-Side M&A Representation', 'Sell-Side M&A Representation', 'Business Valuation Support & Negotiation', 'Deal Sourcing & Target Identification', 'M&A Due Diligence (Legal)', 'M&A Due Diligence (Financial Review)', 'M&A Due Diligence (Operational & HR)', 'Quality of Earnings Analysis Support', 'Environmental & Regulatory Due Diligence', 'LOI Drafting & Negotiation', 'Term Sheet Preparation', 'Deal Structure Advisory (Asset vs. Share)', 'Tax-Efficient Transaction Structuring', 'Earnout & Holdback Negotiation', 'Escrow Agreement Drafting', 'Vendor Take-Back Financing', 'Purchase Price Adjustments', 'Representations & Warranties Review', 'Indemnification Clause Negotiation'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transaction Documentation */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Transaction Documentation</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {['Share Purchase Agreements (SPA)', 'Asset Purchase Agreements (APA)', 'Merger Agreements', 'Amalgamation Agreements', 'Business Transfer Agreements', 'Disclosure Schedules Preparation', 'Closing Checklists & Document Management', 'Post-Closing Adjustment Documentation'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized M&A */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Specialized M&A Transactions</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {['Private Equity Transaction Support', 'Management Buyouts (MBO)', 'Management Buy-Ins (MBI)', 'Leveraged Buyouts (LBO) Legal Support', 'Strategic Acquisition Planning', 'Roll-Up Strategy & Execution', 'Distressed Asset Acquisitions', 'Business Succession & Exit Strategy', 'Family Business Transfers', 'Cross-Border M&A (Canada-US)', 'Reverse Takeovers (RTO)', 'Minority Stake Acquisitions', 'Majority Stake Acquisitions', 'Acqui-Hire Transactions'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Post-Transaction */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Post-Transaction Support</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
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

        {/* FAQs - Accordion Style */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>What's the difference between an asset purchase and a share purchase?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  In a share purchase, you buy the company itself—including all assets, liabilities, contracts, and history. In an asset purchase, you select specific assets and liabilities to acquire, leaving the corporate shell behind. Share deals are often simpler and may have tax advantages for sellers, while asset deals give buyers more control over what they're acquiring. The right structure depends on tax considerations, liability concerns, and the nature of the business.
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>How long does a typical M&A transaction take in Alberta?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  Simple transactions can close in 4-8 weeks. More complex deals—those involving regulatory approvals, extensive due diligence, or complicated financing—typically take 3-6 months. Competitive auction processes or transactions requiring shareholder approvals may take longer. We can give you a more specific timeline once we understand the details of your transaction.
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>What's the typical fee structure for M&A legal work?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  We typically work on an hourly basis for M&A transactions, with regular billing and clear communication about budget. For certain aspects—like standard due diligence—we can provide fixed-fee arrangements. We'll discuss fee structure and provide estimates during our initial consultation so you can make informed decisions about scope and approach.
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>Do I need both a lawyer and an accountant for an M&A transaction?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  Yes, typically. Lawyers handle due diligence, transaction documents, and legal risk assessment. Accountants handle financial due diligence, quality of earnings analysis, tax structuring, and valuation support. We work closely with your accountants (or can recommend trusted ones) to ensure coordinated advice. Many deal issues sit at the intersection of legal and financial concerns.
                </div>
              </details>

              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>What should I prepare before meeting with an M&A lawyer?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  If you're selling, gather your corporate records, financial statements (3+ years), material contracts, employee information, and any known issues or liabilities. If you're buying, bring whatever information you have about the target, your acquisition criteria, financing plans, and timeline expectations. The more context you can provide upfront, the more productive our initial discussion will be.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/services/fractional-general-counsel" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">Fractional General Counsel</h3>
                <p className="text-gray-600 text-sm">Ongoing strategic legal support for growing businesses.</p>
              </Link>
              <Link href="/services/corporate-commercial" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">Corporate & Commercial</h3>
                <p className="text-gray-600 text-sm">Shareholder agreements, governance, and commercial contracts.</p>
              </Link>
              <Link href="/services/dispute-resolution" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
                <p className="text-gray-600 text-sm">Support for post-closing disputes and earnout disagreements.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-teal-800 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Considering a Transaction?</h2>
            <p className="text-xl text-teal-100 mb-8">Whether you're buying, selling, or exploring your options, let's discuss how we can support your M&A objectives.</p>
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
