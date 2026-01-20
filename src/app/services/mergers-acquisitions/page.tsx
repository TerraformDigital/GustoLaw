import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Mergers & Acquisitions Lawyer Calgary | M&A Advisory | Gusto Law',
  description: 'Strategic M&A guidance for Alberta businesses. Buy-side and sell-side representation, due diligence, deal structuring, and transaction support from experienced Calgary M&A lawyers.',
  keywords: 'M&A lawyer Calgary, mergers acquisitions Alberta, business sale lawyer, buy-side M&A, sell-side M&A, due diligence Calgary, corporate transaction lawyer',
}

export default function MergersAcquisitionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <Image 
              src="/images/gusto-law-logo.png" 
              alt="Gusto Law" 
              width={180} 
              height={40}
              className="h-10 w-auto"
            />
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Mergers & Acquisitions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Strategic guidance through the complete M&A process—from initial due 
              diligence to closing. We help established Alberta businesses navigate 
              acquisitions, divestitures, and strategic transactions with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="inline-block bg-white text-gray-900 px-8 py-4 rounded font-semibold hover:bg-gray-100 text-center"
              >
                Schedule a Consultation
              </Link>
              <a 
                href="tel:4039888382" 
                className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 text-center"
              >
                (403) 988-8382
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stakes Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Buying or Selling a Business Is One of the Largest Financial Decisions You'll Make
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're acquiring a competitor, selling the company you've built over decades, or 
              bringing in a strategic partner, the stakes are significant. A single overlooked issue 
              in due diligence can expose you to unforeseen liabilities. And poorly structured transaction 
              documents can lead to years of post-closing disputes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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

      {/* Our Approach */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                M&A Counsel That Understands Both Sides of the Table
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our founder spent years as in-house general counsel for PE-backed companies—on the buy-side 
                of numerous transactions. That experience shapes how we approach deals today.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We don't just paper transactions. We help you evaluate whether a deal makes strategic 
                sense, identify the risks that actually matter, structure deals appropriately for your 
                situation, and protect your interests while getting to closing.
              </p>
              <div className="flex items-center gap-4 mt-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden">
                    <Image 
                      src="/images/gus-headshot.jpg" 
                      alt="Gus Lu" 
                      width={64} 
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Gus Lu</p>
                  <p className="text-sm text-gray-600">Yale LL.M. | Former PE-Backed GC | Alberta Dealmaker</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-6 text-lg">Our M&A Philosophy</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <p className="font-medium text-gray-900">Commercially Practical</p>
                    <p className="text-sm text-gray-600">We focus on risks that might actually materialize, not theoretical issues</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <p className="font-medium text-gray-900">Due Diligence Discipline</p>
                    <p className="text-sm text-gray-600">Thorough review with clear, actionable reporting—no 100-page memos</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <p className="font-medium text-gray-900">Deal-Closing Mentality</p>
                    <p className="text-sm text-gray-600">We solve problems to get deals done, not create obstacles</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <p className="font-medium text-gray-900">Post-Closing Foresight</p>
                    <p className="text-sm text-gray-600">Structure documents to minimize disputes after the deal closes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Checklist */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete M&A Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end transaction support for buyers, sellers, and strategic partners
            </p>
          </div>

          {/* Transaction Advisory */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Transaction Advisory</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Buy-Side M&A Representation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Sell-Side M&A Representation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Business Valuation Support & Negotiation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Deal Sourcing & Target Identification</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">M&A Due Diligence (Legal)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">M&A Due Diligence (Financial Review)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">M&A Due Diligence (Operational & HR)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Quality of Earnings Analysis Support</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Environmental & Regulatory Due Diligence</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">LOI Drafting & Negotiation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Term Sheet Preparation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Deal Structure Advisory (Asset vs. Share)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Tax-Efficient Transaction Structuring</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Earnout & Holdback Negotiation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Escrow Agreement Drafting</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Vendor Take-Back Financing</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Purchase Price Adjustments</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Representations & Warranties Review</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Indemnification Clause Negotiation</span>
              </div>
            </div>
          </div>

          {/* Transaction Documentation */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Transaction Documentation</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Share Purchase Agreements (SPA)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Asset Purchase Agreements (APA)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Merger Agreements</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Amalgamation Agreements</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Business Transfer Agreements</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Disclosure Schedules Preparation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Closing Checklists & Document Management</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Post-Closing Adjustment Documentation</span>
              </div>
            </div>
          </div>

          {/* Specialized M&A */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Specialized M&A Transactions</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Private Equity Transaction Support</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Management Buyouts (MBO)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Management Buy-Ins (MBI)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Leveraged Buyouts (LBO) Legal Support</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Strategic Acquisition Planning</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Roll-Up Strategy & Execution</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Distressed Asset Acquisitions</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Business Succession & Exit Strategy</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Family Business Transfers</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Cross-Border M&A (Canada-US)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Reverse Takeovers (RTO)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Minority Stake Acquisitions</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Majority Stake Acquisitions</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Acqui-Hire Transactions</span>
              </div>
            </div>
          </div>

          {/* Post-Transaction */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Post-Transaction Support</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Post-Closing Integration Legal Support</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Transition Services Agreements (TSA)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Employment Transition Management</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Asset Transfer & Title Work</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Regulatory Filings & Notifications</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Post-Closing Dispute Resolution</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Earnout Dispute Resolution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work Together</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From initial consultation to closing, here's what to expect when we engage.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-lg font-bold mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
              <p className="text-gray-400 text-sm">
                We discuss the transaction, your objectives, timeline, and key concerns. We assess fit and outline the engagement.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-lg font-bold mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">Diligence & Analysis</h3>
              <p className="text-gray-400 text-sm">
                Thorough review of the target or your business, identifying risks and opportunities that impact deal terms.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-lg font-bold mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">Negotiation & Documentation</h3>
              <p className="text-gray-400 text-sm">
                Draft or review transaction documents, negotiate key terms, and resolve issues that arise.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-lg font-bold mb-4">4</div>
              <h3 className="text-lg font-semibold mb-2">Closing & Beyond</h3>
              <p className="text-gray-400 text-sm">
                Coordinate closing mechanics, ensure conditions are satisfied, and support post-closing integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's the difference between an asset purchase and a share purchase?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                In a share purchase, you buy the company itself—including all assets, liabilities, contracts, and history. 
                In an asset purchase, you select specific assets and liabilities to acquire, leaving the corporate shell 
                behind. Share deals are often simpler and may have tax advantages for sellers, while asset deals give 
                buyers more control over what they're acquiring. The right structure depends on tax considerations, 
                liability concerns, and the nature of the business.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does a typical M&A transaction take in Alberta?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Simple transactions can close in 4-8 weeks. More complex deals—those involving regulatory approvals, 
                extensive due diligence, or complicated financing—typically take 3-6 months. Competitive auction 
                processes or transactions requiring shareholder approvals may take longer. We can give you a more 
                specific timeline once we understand the details of your transaction.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's the typical fee structure for M&A legal work?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We typically work on an hourly basis for M&A transactions, with regular billing and clear communication 
                about budget. For certain aspects—like standard due diligence—we can provide fixed-fee arrangements. 
                We'll discuss fee structure and provide estimates during our initial consultation so you can make 
                informed decisions about scope and approach.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do I need both a lawyer and an accountant for an M&A transaction?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, typically. Lawyers handle due diligence, transaction documents, and legal risk assessment. 
                Accountants handle financial due diligence, quality of earnings analysis, tax structuring, and 
                valuation support. We work closely with your accountants (or can recommend trusted ones) to ensure 
                coordinated advice. Many deal issues sit at the intersection of legal and financial concerns.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What should I prepare before meeting with an M&A lawyer?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If you're selling, gather your corporate records, financial statements (3+ years), material contracts, 
                employee information, and any known issues or liabilities. If you're buying, bring whatever information 
                you have about the target, your acquisition criteria, financing plans, and timeline expectations. 
                The more context you can provide upfront, the more productive our initial discussion will be.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/services/fractional-general-counsel" 
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Fractional General Counsel</h3>
              <p className="text-gray-600 text-sm">Ongoing strategic legal support for growing businesses.</p>
            </Link>
            <Link 
              href="/services/corporate-commercial" 
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Corporate & Commercial</h3>
              <p className="text-gray-600 text-sm">Shareholder agreements, governance, and commercial contracts.</p>
            </Link>
            <Link 
              href="/services/dispute-resolution" 
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
            >
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
          <p className="text-xl text-teal-100 mb-8">
            Whether you're buying, selling, or exploring your options, let's discuss how we can support your M&A objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-teal-800 px-8 py-4 rounded font-semibold hover:bg-gray-100"
            >
              Schedule a Consultation
            </Link>
            <a 
              href="tel:4039888382" 
              className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10"
            >
              Call (403) 988-8382
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-semibold text-lg mb-4">Gusto Law</h4>
              <p className="text-gray-400 text-sm">
                Corporate counsel for established Alberta businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services/mergers-acquisitions" className="text-gray-400 hover:text-white">Mergers & Acquisitions</Link></li>
                <li><Link href="/services/fractional-general-counsel" className="text-gray-400 hover:text-white">Fractional General Counsel</Link></li>
                <li><Link href="/services/business-formation" className="text-gray-400 hover:text-white">Business Formation</Link></li>
                <li><Link href="/services/corporate-commercial" className="text-gray-400 hover:text-white">Corporate & Commercial</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Firm</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/team" className="text-gray-400 hover:text-white">Our Team</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Insights</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Suite 206, 110 11 Avenue SW</li>
                <li>Calgary, AB T2R 0B8</li>
                <li><a href="tel:4039888382" className="hover:text-white">(403) 988-8382</a></li>
                <li><a href="mailto:inquiries@gustolaw.ca" className="hover:text-white">inquiries@gustolaw.ca</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">© 2026 Augustine Lu Professional Corporation. All rights reserved.</p>
            <p className="text-gray-500 text-xs mt-4">
              This content is for informational purposes only and does not constitute legal advice. 
              For legal guidance tailored to your situation, please consult a qualified lawyer.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
