import Link from 'next/link'

export const metadata = {
  title: 'Dispute Resolution Lawyer Calgary | Commercial Disputes',
  description: 'Calgary dispute resolution lawyers for commercial and shareholder disputes. Negotiation, mediation, arbitration, and litigation support for Alberta businesses.',
  keywords: 'dispute resolution Calgary, commercial dispute lawyer, shareholder dispute Alberta, business litigation Calgary, mediation lawyer, arbitration lawyer Alberta',
  openGraph: {
    title: 'Dispute Resolution Lawyer Calgary | Commercial Disputes',
    description: 'Calgary dispute resolution lawyers for commercial and shareholder disputes. Negotiation, mediation, and arbitration support.',
    url: 'https://gustolaw.ca/services/dispute-resolution',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Dispute Resolution Lawyer Calgary | Commercial Disputes',
    description: 'Calgary dispute resolution lawyers for commercial and shareholder disputes.',
  },
  alternates: { canonical: 'https://gustolaw.ca/services/dispute-resolution' },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://gustolaw.ca/services/dispute-resolution#service",
      "name": "Dispute Resolution Legal Services",
      "description": "Dispute resolution services including commercial disputes, shareholder disputes, contract disputes, negotiation, mediation, and arbitration support for Alberta businesses.",
      "provider": { "@type": "LegalService", "@id": "https://gustolaw.ca/#organization" },
      "areaServed": [{ "@type": "City", "name": "Calgary" }, { "@type": "AdministrativeArea", "name": "Alberta" }],
      "serviceType": ["Commercial Dispute Resolution", "Shareholder Disputes", "Contract Disputes", "Mediation", "Arbitration", "Negotiation"],
      "url": "https://gustolaw.ca/services/dispute-resolution"
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
        { "@type": "Question", "name": "What's the difference between mediation and arbitration?", "acceptedAnswer": { "@type": "Answer", "text": "In mediation, a neutral mediator helps parties negotiate a resolution, but can't impose a decision. In arbitration, the arbitrator hears evidence and makes a binding decision. Mediation is collaborative; arbitration is more like private court." }},
        { "@type": "Question", "name": "How long does commercial dispute resolution typically take?", "acceptedAnswer": { "@type": "Answer", "text": "Negotiated settlements can happen in weeks. Mediation typically takes 1-3 months. Arbitration usually takes 6-12 months. Litigation can take 2-4 years." }},
        { "@type": "Question", "name": "Should I try to resolve a dispute before involving lawyers?", "acceptedAnswer": { "@type": "Answer", "text": "It depends. Early legal advice can help you understand your position, preserve evidence, and avoid statements that could hurt your case later. We can advise behind the scenes while you continue direct discussions." }},
        { "@type": "Question", "name": "What if my contract requires arbitration?", "acceptedAnswer": { "@type": "Answer", "text": "Most arbitration clauses are enforceable, meaning you typically must arbitrate rather than litigate. We can help you navigate the arbitration process effectively." }}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gustolaw.ca" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gustolaw.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Dispute Resolution", "item": "https://gustolaw.ca/services/dispute-resolution" }
      ]
    }
  ]
}

export default function DisputeResolutionPage() {
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
            <li><span className="text-gray-900 font-medium">Dispute Resolution</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-medium mb-4">Services</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Dispute Resolution</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Business disputes are costly—in money, time, and relationships. We help Alberta businesses resolve conflicts efficiently through negotiation, mediation, and when necessary, arbitration or litigation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</Link>
              <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
            </div>
          </div>
        </div>
      </section>

      {/* The Cost of Disputes */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Business Disputes Are About More Than Legal Rights</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">When business relationships break down, the real cost goes beyond legal fees. There's the distraction from running your business, the stress on your team, and often the loss of a relationship that took years to build. Our goal is to help you resolve disputes efficiently and, where possible, preserve important business relationships.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Time & Distraction</h3>
              <p className="text-gray-600 text-sm">Every hour spent on disputes is an hour not spent on your business</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Financial Cost</h3>
              <p className="text-gray-600 text-sm">Litigation can cost tens or hundreds of thousands of dollars</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Relationship Damage</h3>
              <p className="text-gray-600 text-sm">Aggressive tactics can permanently damage valuable relationships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Dispute Resolution Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">From early intervention to formal proceedings</p>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Commercial Disputes</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Contract Disputes', 'Breach of Contract Claims', 'Payment Disputes', 'Vendor & Supplier Disputes', 'Customer Disputes', 'Service Agreement Disputes', 'Software & Technology Disputes', 'Licensing & Royalty Disputes', 'Construction & Project Disputes'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Shareholder & Partnership Disputes</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Shareholder Disputes', 'Shareholder Oppression Claims', 'Derivative Actions', 'Buy-Sell & Valuation Disputes', 'Breach of Shareholder Agreement', 'Director & Officer Disputes', 'Partnership Disputes', 'Joint Venture Disputes', 'Profit Sharing Disputes'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Resolution Methods</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Direct Negotiation Support', 'Demand Letter Drafting', 'Settlement Agreement Drafting', 'Mediation Representation', 'Mediation Brief Preparation', 'Arbitration Representation', 'Arbitration Brief Preparation', 'Litigation Support & Strategy', 'Expert Witness Coordination'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Transaction-Related Disputes</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['M&A Post-Closing Disputes', 'Earnout Disputes', 'Purchase Price Adjustments', 'Indemnification Claims', 'Representation & Warranty Claims', 'Escrow Release Disputes', 'Non-Compete Enforcement', 'Employment-Related Disputes', 'Confidentiality Breach Claims'].map((item) => (
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
              { q: "What's the difference between mediation and arbitration?", a: "In mediation, a neutral mediator helps parties negotiate a resolution, but can't impose a decision—both sides must agree. In arbitration, the arbitrator hears evidence and arguments, then makes a binding decision. Mediation is collaborative and preserves relationships; arbitration is more like private court but typically faster and less formal than litigation." },
              { q: "How long does commercial dispute resolution typically take?", a: "It varies widely. Negotiated settlements can happen in weeks. Mediation typically takes 1-3 months from engagement to resolution. Arbitration usually takes 6-12 months. Traditional litigation can take 2-4 years to reach trial. The fastest path depends on both parties' willingness to engage constructively." },
              { q: "Should I try to resolve a dispute before involving lawyers?", a: "It depends on the situation. Early legal advice can help you understand your position, preserve evidence, and avoid statements that could hurt your case later. We can advise behind the scenes while you continue direct discussions, or take a more active role if needed. The key is getting advice before positions harden." },
              { q: "What if my contract requires arbitration?", a: "Most arbitration clauses are enforceable, meaning you typically must arbitrate rather than litigate in court. This isn't necessarily bad—arbitration is often faster, more private, and allows for industry-expert decision-makers. We can help you navigate the arbitration process effectively." },
              { q: "How much does dispute resolution cost?", a: "Costs vary enormously based on complexity and approach. A straightforward negotiated settlement might cost $5,000-$15,000. Mediation typically runs $15,000-$50,000. Arbitration can be $50,000-$200,000+. Litigation often exceeds $100,000 and can reach much higher. Early resolution almost always saves money." }
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
              <p className="text-gray-600 text-sm">Better contracts and governance to prevent disputes.</p>
            </Link>
            <Link href="/services/mergers-acquisitions" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3>
              <p className="text-gray-600 text-sm">Transaction support including post-closing matters.</p>
            </Link>
            <Link href="/services/fractional-general-counsel" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Fractional General Counsel</h3>
              <p className="text-gray-600 text-sm">Ongoing support to manage legal risks proactively.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Facing a Business Dispute?</h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-8">Early legal advice can make all the difference. Let's discuss your situation and options.</p>
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
