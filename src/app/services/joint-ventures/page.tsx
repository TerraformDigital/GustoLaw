import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Joint Venture Lawyer Calgary | JV Agreements | Gusto Law',
  description: 'Calgary joint venture lawyers for Alberta businesses. JV agreement drafting, partnership structuring, strategic alliances, and franchise law. Protect your collaboration.',
  keywords: 'joint venture lawyer Calgary, JV agreement Alberta, partnership lawyer Calgary, strategic alliance, consortium agreement, franchise lawyer Alberta, collaboration agreement',
  openGraph: {
    title: 'Joint Venture Lawyer Calgary | JV Agreements | Gusto Law',
    description: 'Calgary joint venture lawyers for Alberta businesses. JV agreement drafting, partnership structuring, strategic alliances, and franchise law.',
    url: 'https://gustolaw.ca/services/joint-ventures',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Joint Venture Lawyer Calgary | JV Agreements | Gusto Law',
    description: 'Calgary joint venture lawyers. JV agreement drafting, partnership structuring, strategic alliances.',
  },
  alternates: { canonical: 'https://gustolaw.ca/services/joint-ventures' },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://gustolaw.ca/services/joint-ventures#service",
      "name": "Joint Venture & Strategic Alliance Legal Services",
      "description": "Comprehensive joint venture legal services including JV agreement drafting, partnership structuring, strategic alliances, consortium arrangements, franchise law, and collaboration agreements for Alberta businesses.",
      "provider": { "@type": "LegalService", "@id": "https://gustolaw.ca/#organization" },
      "areaServed": [{ "@type": "City", "name": "Calgary" }, { "@type": "AdministrativeArea", "name": "Alberta" }],
      "serviceType": ["Joint Venture Agreements", "Strategic Alliances", "Partnership Structuring", "Franchise Agreements", "Collaboration Agreements", "R&D Agreements"],
      "url": "https://gustolaw.ca/services/joint-ventures"
    },
    {
      "@type": "LegalService",
      "@id": "https://gustolaw.ca/#organization",
      "name": "Gusto Law",
      "legalName": "Augustine Lu Professional Corporation",
      "url": "https://gustolaw.ca",
      "logo": "https://gustolaw.ca/images/gusto-law-logo.png",
      "address": { "@type": "PostalAddress", "streetAddress": "Suite 206, 110 11 Avenue SW", "addressLocality": "Calgary", "addressRegion": "AB", "postalCode": "T2R 0B8", "addressCountry": "CA" },
      "telephone": "+1-403-988-8382",
      "email": "inquiries@gustolaw.ca"
    },
    {
      "@type": "FAQPage",
      "@id": "https://gustolaw.ca/services/joint-ventures#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What's the difference between a joint venture and a partnership?", "acceptedAnswer": { "@type": "Answer", "text": "A partnership is a specific legal structure governed by provincial legislation. A 'joint venture' is a broader term for any collaborative business arrangement—it might be structured as a partnership, a corporation, or a contractual relationship. Partnerships typically involve an ongoing business, while JVs are often formed for specific projects." } },
        { "@type": "Question", "name": "Do we need a separate legal entity for our joint venture?", "acceptedAnswer": { "@type": "Answer", "text": "Not necessarily. The right structure depends on liability concerns, tax implications, duration and complexity of the venture, and preferences of the parties. For simpler or shorter-term projects, a contractual JV may suffice. For larger ventures with significant liability exposure, a corporate JV makes more sense." } },
        { "@type": "Question", "name": "How should we handle disagreements between JV partners?", "acceptedAnswer": { "@type": "Answer", "text": "Every JV agreement should include deadlock resolution mechanisms: escalation procedures, mediation requirements, 'shotgun' buy-sell provisions, or dissolution triggers. The right approach depends on the nature of the venture and relationship. Address this upfront—resolving mechanisms during an actual deadlock is nearly impossible." } },
        { "@type": "Question", "name": "What happens to the joint venture when the project is complete?", "acceptedAnswer": { "@type": "Answer", "text": "The JV agreement should specify wind-down procedures: asset distribution, ongoing liabilities, IP handling, and final accounting. For corporate JVs, this may involve dissolution or buyout by one party. Planning for the end at the beginning ensures a smooth exit." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://gustolaw.ca/services/joint-ventures#breadcrumb",
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

        {/* Breadcrumb */}
        <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-6 py-3">
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
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Formation & Structuring</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {['Joint Venture Agreement Drafting', 'Joint Venture Agreement Negotiation', "Shareholders' or Partnership Agreements", 'Governance Structure Design', 'Capital Contribution Arrangements', 'IP Licensing & Contribution Agreements', 'Co-Development Agreements', 'Research & Development (R&D) Agreements', 'Strategic Alliance Agreements', 'Memorandum of Understanding (MOU)', 'Collaboration Agreements'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
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

        {/* FAQs - Accordion Style */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>What's the difference between a joint venture and a partnership?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">A partnership is a specific legal structure governed by provincial legislation. A "joint venture" is a broader term for any collaborative business arrangement—it might be structured as a partnership, a corporation, or a contractual relationship. Partnerships typically involve an ongoing business, while JVs are often formed for specific projects.</div>
              </details>
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>Do we need a separate legal entity for our joint venture?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">Not necessarily. The right structure depends on liability concerns, tax implications, duration and complexity of the venture, and preferences of the parties. For simpler or shorter-term projects, a contractual JV may suffice. For larger ventures with significant liability exposure, a corporate JV makes more sense.</div>
              </details>
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>How should we handle disagreements between JV partners?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">Every JV agreement should include deadlock resolution mechanisms: escalation procedures, mediation requirements, "shotgun" buy-sell provisions, or dissolution triggers. The right approach depends on the nature of the venture and relationship. Address this upfront—resolving mechanisms during an actual deadlock is nearly impossible.</div>
              </details>
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>What happens to the joint venture when the project is complete?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">The JV agreement should specify wind-down procedures: asset distribution, ongoing liabilities, IP handling, and final accounting. For corporate JVs, this may involve dissolution or buyout by one party. Planning for the end at the beginning ensures a smooth exit.</div>
              </details>
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

      </main>
    </>
  )
}
