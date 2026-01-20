import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Corporate & Commercial Lawyer Calgary | Business Contracts | Gusto Law',
  description: 'Experienced corporate and commercial lawyers in Calgary. Shareholder agreements, commercial contracts, corporate governance, and ongoing business legal support for Alberta companies.',
  keywords: 'corporate lawyer Calgary, commercial lawyer Alberta, shareholder agreement, business contracts Calgary, corporate governance, commercial agreements',
}

export default function CorporateCommercialPage() {
  return (
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Corporate & Commercial Law</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              The legal foundation for how your business operates, grows, and protects itself. From shareholder relationships to commercial contracts, we help Alberta businesses structure their affairs for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</Link>
              <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Checklists */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Corporate & Commercial Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive legal support for established businesses</p>
          </div>

          {/* Corporate Governance */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Corporate Governance</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              {['Board of Directors Advisory', 'Corporate Governance Policy Development', 'Director & Officer Duties Training', 'Corporate Minute Book Maintenance', 'Annual Corporate Resolutions', 'Special Resolutions & Filings', 'Corporate Records Management', 'Alberta Corporate Registry Filings', 'Annual Return Filings', 'Notice of Change of Directors', 'Notice of Change of Registered Office'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Changes & Reorganization */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Corporate Changes & Reorganization</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              {['Name Change (Corporate)', 'Registered Office Address Change', 'Share Capital Amendments', 'Amalgamation (Short-Form)', 'Amalgamation (Long-Form)', 'Continuance (Into Alberta)', 'Continuance (Out of Alberta)', 'Corporate Reorganization (Section 86)', 'Estate Freeze Planning', 'Spin-Off & Subsidiary Creation', 'Voluntary Dissolution & Wind-Up', 'Involuntary Dissolution', 'Corporate Revival'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Commercial Contracts */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Commercial Contracts</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              {['Service Agreements (B2B & B2C)', 'Master Services Agreements (MSA)', 'Statement of Work (SOW) Templates', 'Consulting & Professional Services', 'Purchase Orders & Terms', 'Sales Terms & Conditions', 'Contract Review & Negotiation', 'Contract Amendments & Variations', 'Contract Termination & Exit', 'Distribution Agreements', 'Reseller & Agency Agreements', 'Referral & Commission Agreements', 'Territory & Exclusivity Agreements'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Software */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Technology & Software Contracts</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              {['SaaS Agreements', 'Software Licensing (Perpetual & Subscription)', 'End User License Agreements (EULA)', 'Software Development Agreements', 'Software Maintenance & Support', 'Cloud Services Agreements', 'Hosting Agreements', 'Data Processing Agreements (DPA)', 'API Licensing & Terms of Use', 'Platform Terms of Service', 'Software Escrow Agreements', 'Website & Mobile App Development'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confidentiality */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Confidentiality & IP Protection</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              {['NDAs (Mutual & Unilateral)', 'Confidentiality Agreements (Employees)', 'Confidentiality Agreements (Contractors)', 'Confidentiality Agreements (Third Parties)', 'Trade Secret Protection', 'Employee IP Agreements', 'Contractor IP Assignment', 'Non-Compete Agreements (Alberta)', 'Non-Solicitation Agreements'].map((item) => (
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
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What should be included in a shareholder agreement?</h3>
              <p className="text-gray-600 leading-relaxed">A comprehensive shareholder agreement addresses: how major decisions are made (voting thresholds), restrictions on transferring shares (right of first refusal, tag-along, drag-along), what happens if a shareholder dies, becomes disabled, or wants to leave (buy-sell provisions), how the company is valued for buyouts, non-compete obligations, dividend policies, and dispute resolution mechanisms.</p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How much do commercial contracts cost to draft?</h3>
              <p className="text-gray-600 leading-relaxed">It depends on complexity. A straightforward NDA might be $500-$1,500. A comprehensive MSA or distribution contract could be $3,000-$8,000. Complex technology licensing runs higher. We provide fixed-fee quotes for defined scope work. For ongoing needs, our fractional GC service often makes more sense economically.</p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I use contract templates I find online?</h3>
              <p className="text-gray-600 leading-relaxed">You can, but proceed carefully. Generic templates often miss provisions specific to Alberta law, don't address your particular business risks, and may include unenforceable terms. For low-stakes agreements, templates might be fine. For material contracts—key customers, significant vendors, key personnel—professional drafting is worth it.</p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Are non-compete agreements enforceable in Alberta?</h3>
              <p className="text-gray-600 leading-relaxed">They can be, but Alberta courts scrutinize them carefully. To be enforceable, a non-compete must be reasonable in duration (typically 6-24 months), geographic scope, and activities restricted. It must protect a legitimate business interest—not just prevent competition. Well-drafted non-solicitation clauses are often more reliably enforceable.</p>
            </div>
            <div className="pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How often should we update our corporate minute book?</h3>
              <p className="text-gray-600 leading-relaxed">At minimum, annually—to document annual meetings. Also update it for significant events: share issuances or transfers, changes to directors or officers, amendments to articles or bylaws, or major corporate decisions. A current minute book is essential for financing, sale of the business, or any due diligence process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/fractional-general-counsel" className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Fractional General Counsel</h3>
              <p className="text-gray-600 text-sm">Ongoing legal support for all your corporate and commercial needs.</p>
            </Link>
            <Link href="/services/mergers-acquisitions" className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3>
              <p className="text-gray-600 text-sm">When corporate transactions move beyond day-to-day operations.</p>
            </Link>
            <Link href="/services/business-formation" className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Business Formation</h3>
              <p className="text-gray-600 text-sm">Setting up new corporate structures and entities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Corporate or Commercial Legal Support?</h2>
          <p className="text-xl text-teal-100 mb-8">Let's discuss your business needs and how we can help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-teal-800 px-8 py-4 rounded font-semibold hover:bg-gray-100">Schedule a Consultation</Link>
            <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10">Call (403) 988-8382</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div><h4 className="font-semibold text-lg mb-4">Gusto Law</h4><p className="text-gray-400 text-sm">Corporate counsel for established Alberta businesses.</p></div>
            <div><h4 className="font-semibold mb-4">Services</h4><ul className="space-y-2 text-sm"><li><Link href="/services/mergers-acquisitions" className="text-gray-400 hover:text-white">Mergers & Acquisitions</Link></li><li><Link href="/services/fractional-general-counsel" className="text-gray-400 hover:text-white">Fractional General Counsel</Link></li><li><Link href="/services/business-formation" className="text-gray-400 hover:text-white">Business Formation</Link></li><li><Link href="/services/corporate-commercial" className="text-gray-400 hover:text-white">Corporate & Commercial</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Firm</h4><ul className="space-y-2 text-sm"><li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li><li><Link href="/team" className="text-gray-400 hover:text-white">Our Team</Link></li><li><Link href="/blog" className="text-gray-400 hover:text-white">Insights</Link></li><li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li></ul></div>
            <div><h4 className="font-semibold mb-4">Contact</h4><ul className="space-y-2 text-sm text-gray-400"><li>Suite 206, 110 11 Avenue SW</li><li>Calgary, AB T2R 0B8</li><li><a href="tel:4039888382" className="hover:text-white">(403) 988-8382</a></li><li><a href="mailto:inquiries@gustolaw.ca" className="hover:text-white">inquiries@gustolaw.ca</a></li></ul></div>
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
