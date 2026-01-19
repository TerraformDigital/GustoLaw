import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Mergers & Acquisitions Lawyer Calgary | M&A Advisory | Gusto Law',
  description: 'Strategic M&A legal counsel for Alberta businesses. Buy-side and sell-side representation, due diligence, deal structuring, and transaction management. Calgary M&A lawyers.',
  keywords: 'M&A lawyer Calgary, mergers acquisitions Alberta, business acquisition lawyer, sell business Calgary, buy business lawyer, due diligence Calgary',
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
              Strategic guidance through the complete M&A process—from initial due diligence to closing. 
              We help established Alberta businesses navigate acquisitions, divestitures, and strategic 
              transactions with confidence.
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

      {/* Stakes Section - Why This Matters */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Buying or Selling a Business Is One of the Largest Financial Decisions You'll Make
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're acquiring a competitor, selling the company you've built over decades, 
              or merging with a strategic partner, the stakes are significant. A single oversight 
              in due diligence can expose you to hidden liabilities. Poor deal structuring can cost 
              you hundreds of thousands in unnecessary taxes. And unclear transaction documents can 
              lead to years of post-closing disputes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Hidden Liabilities</h3>
              <p className="text-gray-600 text-sm">Undisclosed debts, pending litigation, or tax obligations can surface after closing</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tax Inefficiency</h3>
              <p className="text-gray-600 text-sm">Asset vs. share purchase decisions alone can swing tax liability by six figures</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Post-Closing Disputes</h3>
              <p className="text-gray-600 text-sm">Ambiguous representations and warranties lead to costly indemnification claims</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                M&A Counsel That Understands Both Sides of the Table
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our founder spent years at a national law firm advising on complex transactions before 
                serving as in-house general counsel for PE-backed companies. That dual perspective—outside 
                counsel rigor combined with in-house commercial pragmatism—shapes how we approach every deal.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We don't just paper transactions. We help you evaluate whether a deal makes strategic 
                sense, identify the risks that actually matter, and structure agreements that protect 
                your interests while getting deals closed.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Gus Lu, Founder</p>
                  <p className="text-sm text-gray-600">Yale Law School · Former PE-Backed Company GC · National Firm M&A Practice</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-6 text-lg">Our M&A Philosophy</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-700 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <div>
                    <p className="font-medium text-gray-900">Commercial First</p>
                    <p className="text-sm text-gray-600">We focus on business objectives, not just legal technicalities</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-700 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <p className="font-medium text-gray-900">Risk-Calibrated Diligence</p>
                    <p className="text-sm text-gray-600">Deep dives where it matters, proportionate review elsewhere</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-700 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <p className="font-medium text-gray-900">Deal Certainty</p>
                    <p className="text-sm text-gray-600">We solve problems to close transactions, not create roadblocks</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-teal-700 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                  <div>
                    <p className="font-medium text-gray-900">Post-Closing Protection</p>
                    <p className="text-sm text-gray-600">Clear documentation that minimizes future disputes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Handle</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive M&A legal services for mid-market transactions in Alberta and across Canada
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Buy-Side */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Buy-Side Representation</h3>
              <p className="text-gray-600 mb-6">
                Acquiring a business requires thorough investigation and careful negotiation. 
                We protect buyers from inheriting unknown problems while keeping deals on track.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Due diligence planning and execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Letter of intent negotiation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Purchase agreement drafting and negotiation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Representations and warranties negotiation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Closing coordination and post-closing matters</span>
                </li>
              </ul>
            </div>

            {/* Sell-Side */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sell-Side Representation</h3>
              <p className="text-gray-600 mb-6">
                Selling your business is often a once-in-a-lifetime event. We help owners 
                maximize value while limiting post-closing exposure and liability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Sale process preparation and structuring</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Confidentiality and exclusivity agreements</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Data room organization and management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Purchase price allocation and earnouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Indemnification cap and basket negotiation</span>
                </li>
              </ul>
            </div>

            {/* Due Diligence */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Due Diligence</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive investigation of legal, financial, and operational risks. 
                We help you understand what you're really buying—and what could go wrong.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Corporate records and governance review</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Material contract analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Employment and labour matters</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Intellectual property assessment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Litigation and regulatory review</span>
                </li>
              </ul>
            </div>

            {/* Deal Structuring */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Deal Structuring</h3>
              <p className="text-gray-600 mb-6">
                The right structure can save hundreds of thousands in taxes and limit liability. 
                We work with your accountants to optimize the transaction structure.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Asset vs. share purchase analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Tax-efficient structuring (Section 85 rollovers)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Earnout and deferred payment structures</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Holdback and escrow arrangements</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Risk allocation between parties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How We Work Together</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              From initial consultation to closing, here's what to expect when you engage Gusto Law for your transaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-lg font-bold mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">Initial Consultation</h3>
              <p className="text-gray-400 text-sm">
                We discuss your transaction goals, timeline, and concerns. You'll leave with a clear understanding of the process and potential issues.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-lg font-bold mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">Diligence & Analysis</h3>
              <p className="text-gray-400 text-sm">
                We investigate the target (or prepare your company for sale), identifying risks and opportunities that inform the negotiation.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-lg font-bold mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">Negotiation & Documentation</h3>
              <p className="text-gray-400 text-sm">
                We draft or review transaction documents, negotiate key terms, and ensure your interests are protected throughout.
              </p>
            </div>
            <div className="relative">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-lg font-bold mb-4">4</div>
              <h3 className="text-lg font-semibold mb-2">Closing & Beyond</h3>
              <p className="text-gray-400 text-sm">
                We coordinate closing logistics, ensure all conditions are satisfied, and remain available for post-closing matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
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
                In an asset purchase, the buyer acquires specific assets and assumes specific liabilities—leaving 
                behind anything they don't want. In a share purchase, the buyer acquires the entire company, including 
                all assets and liabilities (known and unknown). Asset purchases typically favour buyers (more control, 
                less risk), while share purchases often favour sellers (cleaner exit, potentially better tax treatment 
                via the lifetime capital gains exemption). The right structure depends on your specific situation, tax 
                position, and the nature of the business.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How long does a typical M&A transaction take in Alberta?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Most mid-market transactions (under $20M) take 60-120 days from signed letter of intent to closing. 
                Simpler deals with motivated parties can close in 30-45 days. Complex transactions with regulatory 
                approvals, third-party consents, or financing conditions may take 4-6 months. The biggest variables 
                are the scope of due diligence required and how quickly both parties can make decisions.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What is the typical fee structure for M&A legal work?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We typically work on an hourly basis for M&A transactions, with estimates provided upfront based on 
                deal complexity. For straightforward acquisitions, we can sometimes offer fixed fees for specific 
                phases (e.g., due diligence review, purchase agreement negotiation). We're transparent about costs 
                and provide regular budget updates throughout the engagement.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do I need both a lawyer and an accountant for an M&A transaction?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes—and ideally a business valuator or M&A advisor as well, depending on the transaction size. 
                Your accountant handles tax planning and financial due diligence. Your lawyer handles legal due 
                diligence, deal structuring, and documentation. We work closely with your other advisors to ensure 
                everyone is aligned and the deal is structured optimally from both legal and tax perspectives.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What should I prepare before meeting with an M&A lawyer?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If you're selling: recent financial statements, a summary of key contracts and employees, your 
                corporate minute book, and any existing offers or LOIs. If you're buying: information about 
                the target business, your financing plan, timeline requirements, and any deal points already 
                discussed. The more context you can provide upfront, the more productive our initial consultation will be.
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
              <p className="text-gray-600 text-sm">Ongoing strategic legal support for your post-acquisition integration or growth phase.</p>
            </Link>
            <Link 
              href="/services/corporate-commercial" 
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Corporate & Commercial</h3>
              <p className="text-gray-600 text-sm">Shareholder agreements, governance structures, and commercial contracts.</p>
            </Link>
            <Link 
              href="/services/business-formation" 
              className="bg-white p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Business Formation</h3>
              <p className="text-gray-600 text-sm">Structuring new entities for acquisitions, joint ventures, or spin-offs.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
