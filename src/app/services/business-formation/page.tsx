import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Business Formation Lawyer Calgary | Incorporation Services | Gusto Law',
  description: 'Expert business incorporation and formation services in Calgary. Alberta and federal incorporation, corporate structuring, shareholder agreements, and startup legal services.',
  keywords: 'business formation Calgary, incorporation lawyer Alberta, incorporate business Calgary, startup lawyer, corporate structuring, shareholder agreement Calgary',
}

export default function BusinessFormationPage() {
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
              Business Formation
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Build your business on a solid legal foundation. From incorporation to shareholder 
              agreements, we help Alberta entrepreneurs structure their companies for growth, 
              protection, and long-term success.
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

      {/* Why Structure Matters */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              The Decisions You Make Now Will Shape Your Business for Years
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              How you structure your business affects everything—personal liability, tax obligations, 
              ability to raise capital, partnership dynamics, and eventual exit options. Getting it 
              right from the start is far easier than fixing problems later.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Liability Protection</h3>
              <p className="text-gray-600 text-sm">Proper incorporation separates personal assets from business risks</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tax Efficiency</h3>
              <p className="text-gray-600 text-sm">Corporate structures unlock significant tax planning opportunities</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Growth Ready</h3>
              <p className="text-gray-600 text-sm">The right structure makes it easier to bring in partners, investors, or sell</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Checklist */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Formation Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From simple incorporations to complex multi-entity structures
            </p>
          </div>

          {/* Business Formation & Structure */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Business Formation & Structure</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Business Incorporation (Alberta - ABCA)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Business Incorporation (Federal - CBCA)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Corporate Name Reservation & Search</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Extra-Provincial Registration</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Corporate Structure Planning & Optimization</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Entity Selection Advisory</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Holding Company Structure Design</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Family Trust Integration</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Multi-Tier Corporate Structure Planning</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">General Partnership Formation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Limited Partnership Formation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">LLP Formation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Joint Venture Formation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Co-Ownership Agreements</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Sole Proprietorship Conversion</span>
              </div>
            </div>
          </div>

          {/* Shareholder & Partnership Agreements */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Shareholder & Partnership Agreements</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Shareholders' Agreements (Standard)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Shareholders' Agreements (Multi-Class)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Unanimous Shareholder Agreements (USA)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Buy-Sell Provisions & Shotgun Clauses</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Drag-Along & Tag-Along Rights</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Right of First Refusal (ROFR)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Pre-Emptive Rights Documentation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Shareholder Loan Agreements</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Partnership Agreements (General)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Partnership Agreements (Limited)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Voting Trust Agreements</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Proxy Agreements</span>
              </div>
            </div>
          </div>

          {/* Share Capital & Equity */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Share Capital & Equity</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Share Issuance (Common & Preferred)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Multi-Class Share Structure Design</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Share Certificate Preparation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Share Transfer Documentation</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Share Redemption & Buyback</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Cap Table Management</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Stock Option Plans (ESOP)</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">RSU & Phantom Stock Plans</span>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-sm">Employee Share Purchase Plans</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alberta vs Federal */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Alberta vs. Federal Incorporation
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                One of the first decisions you'll make is whether to incorporate provincially 
                in Alberta or federally under the Canada Business Corporations Act.
              </p>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-teal-700 text-white rounded-full flex items-center justify-center text-sm">AB</span>
                  Alberta Provincial
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Lower incorporation and annual costs</li>
                  <li>• Simpler compliance requirements</li>
                  <li>• No NUANS name reservation required</li>
                  <li>• Best for Alberta-focused businesses</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-red-700 text-white rounded-full flex items-center justify-center text-sm">CA</span>
                  Federal (CBCA)
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Name protection across all provinces</li>
                  <li>• Carry on business in any province</li>
                  <li>• Greater perceived credibility</li>
                  <li>• Better for multi-province operations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How much does it cost to incorporate in Alberta?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A basic Alberta incorporation with articles, bylaws, organizational resolutions, and initial 
                share issuances typically costs $1,500-$2,500 in legal fees plus government filing fees 
                (currently ~$275 for Alberta, ~$200 for federal). More complex structures cost more. 
                We provide fixed-fee quotes after understanding your specific needs.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do I really need a shareholder agreement if I'm the only owner?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                If you're the sole shareholder, a shareholder agreement isn't necessary. However, if you 
                ever plan to bring in partners, investors, or key employees with equity, you'll want one 
                in place before issuing additional shares. Many clients start without one and add it later.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's the difference between a shareholder agreement and corporate bylaws?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bylaws are internal governance rules required by corporate law—meeting procedures, officer 
                roles, banking authorities. A shareholder agreement is a private contract between shareholders 
                covering ownership issues—buy-sell provisions, transfer restrictions, decision-making rights. 
                Most businesses with multiple owners need both.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Should I set up a holding company?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Holding companies can provide asset protection, tax deferral opportunities, and flexibility 
                for future transactions. They're valuable if you expect significant retained earnings, own 
                multiple businesses, or are planning for eventual sale or succession. However, they add 
                complexity and cost, so they're not right for every situation.
              </p>
            </div>

            <div className="pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I incorporate myself using an online service?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You can, but proceed carefully. Generic templates often miss provisions specific to Alberta 
                law and don't address your particular business risks. For low-stakes situations, templates 
                might be fine. For material matters—partners, tax-efficient structures, shareholder 
                protections—professional drafting is worth the investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/corporate-commercial" className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate & Commercial</h3>
              <p className="text-gray-600 text-sm">Ongoing corporate maintenance, governance, and commercial contracts.</p>
            </Link>
            <Link href="/services/fractional-general-counsel" className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Fractional General Counsel</h3>
              <p className="text-gray-600 text-sm">Ongoing legal support as your business grows.</p>
            </Link>
            <Link href="/services/mergers-acquisitions" className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3>
              <p className="text-gray-600 text-sm">When you're ready to buy, sell, or merge with another business.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Incorporate Your Business?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss the right structure for your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-teal-800 px-8 py-4 rounded font-semibold hover:bg-gray-100">
              Schedule a Consultation
            </Link>
            <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10">
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
              <p className="text-gray-400 text-sm">Corporate counsel for established Alberta businesses.</p>
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
            <p className="text-gray-500 text-xs mt-4">This content is for informational purposes only and does not constitute legal advice.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
