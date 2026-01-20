import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Joint Venture Lawyer Calgary | JV Agreements | Gusto Law',
  description: 'Experienced joint venture lawyers in Calgary. JV agreement drafting, partnership structuring, consortium arrangements, and strategic alliance legal services for Alberta businesses.',
  keywords: 'joint venture lawyer Calgary, JV agreement Alberta, partnership lawyer Calgary, strategic alliance, consortium agreement, business partnership lawyer',
}

export default function JointVenturesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Joint Ventures & Strategic Alliances</h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Collaborate without losing control. We help Alberta businesses structure joint ventures, partnerships, and strategic alliances that align interests, manage risk, and create value for all parties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</Link>
              <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why JVs */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">When Collaboration Makes More Sense Than Going It Alone</h2>
            <p className="text-lg text-gray-600 leading-relaxed">Joint ventures allow businesses to pursue opportunities that would be too risky, too capital-intensive, or simply beyond their capabilities alone. The right structure makes all the difference between success and costly disputes.</p>
          </div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Joint Venture Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From initial structuring through ongoing operations and eventual exit</p>
          </div>

          {/* Formation & Structuring */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Formation & Structuring</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              {['Joint Venture Agreement Drafting', 'Joint Venture Agreement Negotiation', 'Shareholders\' or Partnership Agreements', 'Governance Structure Design', 'Capital Contribution Arrangements', 'IP Licensing & Contribution Agreements', 'Co-Development Agreements', 'Research & Development (R&D) Agreements', 'Strategic Alliance Agreements', 'Memorandum of Understanding (MOU)', 'Collaboration Agreements'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operations & Exit */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Operations & Exit</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              {['Management & Operating Agreements', 'Deadlock Resolution Mechanisms', 'Buy-Sell & Exit Provisions', 'Dispute Resolution Procedures', 'JV Restructuring & Amendment', 'Wind-Down Procedures', 'IP Rights on Termination'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specialized Arrangements */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Specialized Arrangements</h3>
            <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
              {['Franchise Agreements (Franchisor/Franchisee)', 'Franchise System Design', 'Franchise Compliance (Alberta)', 'Sponsorship Agreements', 'Advertising & Marketing Agreements', 'Influencer & Brand Ambassador Agreements', 'Event Contracts & Venue Agreements'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Structure Options */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Choosing the Right Structure</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate JV</h3>
              <p className="text-gray-600 text-sm mb-4">A separate corporation owned by the JV partners. Provides limited liability and clear separation.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Limited liability protection</li>
                <li>✓ Clear governance structure</li>
                <li>✗ More complex to establish</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contractual JV</h3>
              <p className="text-gray-600 text-sm mb-4">Partners collaborate through detailed agreement without forming a separate entity.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Faster to implement</li>
                <li>✓ Lower administrative burden</li>
                <li>✗ Partners may be jointly liable</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partnership (LP/LLP)</h3>
              <p className="text-gray-600 text-sm mb-4">Including limited partnerships and LLPs. Common for investment and professional ventures.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>✓ Flow-through taxation</li>
                <li>✓ Flexible profit allocation</li>
                <li>✗ Varying liability exposure</li>
              </ul>
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
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What's the difference between a joint venture and a partnership?</h3>
              <p className="text-gray-600 leading-relaxed">A partnership is a specific legal structure governed by provincial legislation. A "joint venture" is a broader term for any collaborative business arrangement—it might be structured as a partnership, a corporation, or a contractual relationship. Partnerships typically involve an ongoing business, while JVs are often formed for specific projects.</p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do we need a separate legal entity for our joint venture?</h3>
              <p className="text-gray-600 leading-relaxed">Not necessarily. The right structure depends on liability concerns, tax implications, duration and complexity of the venture, and preferences of the parties. For simpler or shorter-term projects, a contractual JV may suffice. For larger ventures with significant liability exposure, a corporate JV makes more sense.</p>
            </div>
            <div className="border-b border-gray-200 pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How should we handle disagreements between JV partners?</h3>
              <p className="text-gray-600 leading-relaxed">Every JV agreement should include deadlock resolution mechanisms: escalation procedures, mediation requirements, "shotgun" buy-sell provisions, or dissolution triggers. The right approach depends on the nature of the venture and relationship. Address this upfront—resolving mechanisms during an actual deadlock is nearly impossible.</p>
            </div>
            <div className="pb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What happens to the joint venture when the project is complete?</h3>
              <p className="text-gray-600 leading-relaxed">The JV agreement should specify wind-down procedures: asset distribution, ongoing liabilities, IP handling, and final accounting. For corporate JVs, this may involve dissolution or buyout by one party. Planning for the end at the beginning ensures a smooth exit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Considering a Joint Venture?</h2>
          <p className="text-xl text-teal-100 mb-8">Let's discuss your partnership opportunity and how to structure it for success.</p>
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
