import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Dispute Resolution Lawyer Calgary | Commercial Disputes | Gusto Law',
  description: 'Calgary dispute resolution lawyers for Alberta businesses. Shareholder disputes, contract disputes, mediation, arbitration, and settlement negotiation. Resolve conflicts efficiently.',
  keywords: 'dispute resolution Calgary, commercial dispute lawyer Alberta, shareholder dispute, contract dispute lawyer, mediation Calgary, arbitration lawyer Alberta, business litigation support',
  openGraph: {
    title: 'Dispute Resolution Lawyer Calgary | Commercial Disputes | Gusto Law',
    description: 'Calgary dispute resolution lawyers. Shareholder disputes, contract disputes, mediation, arbitration, and settlement negotiation.',
    url: 'https://gustolaw.ca/services/dispute-resolution',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Dispute Resolution Lawyer Calgary | Commercial Disputes | Gusto Law',
    description: 'Calgary dispute resolution lawyers. Shareholder disputes, contract disputes, mediation, arbitration.',
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
      "description": "Comprehensive dispute resolution services for Alberta businesses including shareholder disputes, contract disputes, mediation representation, arbitration representation, and settlement negotiation.",
      "provider": { "@type": "LegalService", "@id": "https://gustolaw.ca/#organization" },
      "areaServed": [{ "@type": "City", "name": "Calgary" }, { "@type": "AdministrativeArea", "name": "Alberta" }],
      "serviceType": ["Commercial Dispute Resolution", "Shareholder Disputes", "Contract Disputes", "Mediation", "Arbitration", "Settlement Negotiation", "Oppression Remedies"],
      "url": "https://gustolaw.ca/services/dispute-resolution"
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
      "@id": "https://gustolaw.ca/services/dispute-resolution#faq",
      "mainEntity": [
        { "@type": "Question", "name": "What's the difference between mediation and arbitration?", "acceptedAnswer": { "@type": "Answer", "text": "In mediation, a neutral mediator helps parties negotiate a settlement—but the parties control whether to accept any deal. In arbitration, an arbitrator (or panel) hears evidence and arguments, then issues a binding decision. Mediation is collaborative; arbitration is adjudicative." } },
        { "@type": "Question", "name": "How long do business disputes typically take to resolve?", "acceptedAnswer": { "@type": "Answer", "text": "It varies enormously. A straightforward negotiated settlement might resolve in weeks. Mediation typically adds 1-3 months. Arbitration can take 6-12 months. Court litigation in Alberta often takes 2-4 years to trial. Early, realistic assessment of your position usually leads to faster resolution." } },
        { "@type": "Question", "name": "What is an oppression remedy?", "acceptedAnswer": { "@type": "Answer", "text": "Under the ABCA and CBCA, minority shareholders can seek relief if the corporation or its directors have acted in a manner that is oppressive, unfairly prejudicial, or unfairly disregards their interests. It's a powerful tool for minority shareholders—courts have wide discretion in crafting remedies, including ordering buyouts." } },
        { "@type": "Question", "name": "Should I try to resolve the dispute before involving lawyers?", "acceptedAnswer": { "@type": "Answer", "text": "It depends. Early direct communication can sometimes resolve issues quickly. But if there's significant money at stake, complex legal issues, or the relationship is already damaged, early legal advice helps you avoid mistakes—like missing limitation periods or making admissions that hurt your position later." } },
        { "@type": "Question", "name": "Do you handle court litigation?", "acceptedAnswer": { "@type": "Answer", "text": "We focus on dispute resolution before litigation and work with trusted litigation counsel when court proceedings are necessary. This lets us provide strategic guidance throughout while ensuring you have counsel experienced in courtroom advocacy when needed." } }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://gustolaw.ca/services/dispute-resolution#breadcrumb",
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
              <li><span className="text-gray-900 font-medium">Dispute Resolution</span></li>
            </ol>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-teal-400 font-medium mb-4">Services</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Dispute Resolution</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                When business relationships break down, you need strategic guidance to protect your interests while preserving what can be preserved. We help Alberta businesses resolve disputes efficiently—through negotiation, mediation, arbitration, or litigation support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</Link>
                <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Resolution Over Litigation When Possible</h2>
              <p className="text-lg text-gray-600 leading-relaxed">Litigation is expensive, unpredictable, and distracting from running your business. Our approach prioritizes early resolution where it makes sense—but we prepare every matter as if it's going to trial. That preparation gives you leverage.</p>
            </div>
          </div>
        </section>

        {/* Services Checklist */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Dispute Resolution Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">From early assessment through resolution</p>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Pre-Litigation & Advisory</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {['Commercial Dispute Advisory', 'Demand Letter Preparation', 'Cease & Desist Letters', 'Pre-Litigation Strategy & Risk Assessment', 'Limitation Period Analysis', 'Settlement Negotiation Strategy'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Contract Disputes</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {['Breach of Contract Claims', 'Contract Interpretation Disputes', 'Termination Disputes', 'Non-Payment & Collection Matters', 'Contract Remediation & Cure Notices'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Corporate & Shareholder Disputes</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {['Shareholder Disputes & Deadlock', 'Oppression Remedy Claims (ABCA/CBCA)', 'Derivative Actions', 'Partnership Disputes', 'Buy-Sell Dispute Resolution', 'Forced Buy-Out Negotiations'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Alternative Dispute Resolution (ADR)</h3>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                {['Mediation Representation', 'Arbitration Representation', 'Negotiation & Settlement Advisory', 'ADR Clause Drafting'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Resolution Options */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Resolution Paths</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-teal-50 rounded-xl p-6 border-2 border-teal-200">
                <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mb-4">1</div>
                <h3 className="font-bold text-gray-900 mb-2">Negotiation</h3>
                <p className="text-sm text-gray-600">Direct discussion between parties. Fastest and lowest cost when successful.</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">2</div>
                <h3 className="font-bold text-gray-900 mb-2">Mediation</h3>
                <p className="text-sm text-gray-600">Neutral third party facilitates settlement. Parties control the outcome.</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mb-4">3</div>
                <h3 className="font-bold text-gray-900 mb-2">Arbitration</h3>
                <p className="text-sm text-gray-600">Private adjudication with binding decision. Faster than court, more formal than mediation.</p>
              </div>
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold mb-4">4</div>
                <h3 className="font-bold text-gray-900 mb-2">Litigation Support</h3>
                <p className="text-sm text-gray-600">Court proceedings when necessary. We work with litigation counsel on complex matters.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs - Accordion Style */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-white rounded-lg shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                  <span>What's the difference between mediation and arbitration?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">In mediation, a neutral mediator helps parties negotiate a settlement—but the parties control whether to accept any deal. In arbitration, an arbitrator (or panel) hears evidence and arguments, then issues a binding decision. Mediation is collaborative; arbitration is adjudicative.</div>
              </details>
              <details className="group bg-white rounded-lg shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                  <span>How long do business disputes typically take to resolve?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">It varies enormously. A straightforward negotiated settlement might resolve in weeks. Mediation typically adds 1-3 months. Arbitration can take 6-12 months. Court litigation in Alberta often takes 2-4 years to trial. Early, realistic assessment of your position usually leads to faster resolution.</div>
              </details>
              <details className="group bg-white rounded-lg shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                  <span>What is an oppression remedy?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">Under the ABCA and CBCA, minority shareholders can seek relief if the corporation or its directors have acted in a manner that is oppressive, unfairly prejudicial, or unfairly disregards their interests. It's a powerful tool for minority shareholders—courts have wide discretion in crafting remedies, including ordering buyouts.</div>
              </details>
              <details className="group bg-white rounded-lg shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                  <span>Should I try to resolve the dispute before involving lawyers?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">It depends. Early direct communication can sometimes resolve issues quickly. But if there's significant money at stake, complex legal issues, or the relationship is already damaged, early legal advice helps you avoid mistakes—like missing limitation periods or making admissions that hurt your position later.</div>
              </details>
              <details className="group bg-white rounded-lg shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
                  <span>Do you handle court litigation?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">We focus on dispute resolution before litigation and work with trusted litigation counsel when court proceedings are necessary. This lets us provide strategic guidance throughout while ensuring you have counsel experienced in courtroom advocacy when needed.</div>
              </details>
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
                <p className="text-gray-600 text-sm">Prevent disputes with well-drafted agreements and governance.</p>
              </Link>
              <Link href="/services/mergers-acquisitions" className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3>
                <p className="text-gray-600 text-sm">Post-closing disputes and earnout disagreements.</p>
              </Link>
              <Link href="/services/fractional-general-counsel" className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2">Fractional General Counsel</h3>
                <p className="text-gray-600 text-sm">Ongoing support to manage and prevent disputes.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-teal-800 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Facing a Business Dispute?</h2>
            <p className="text-xl text-teal-100 mb-8">Early assessment and strategy can make the difference. Let's discuss your situation.</p>
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
