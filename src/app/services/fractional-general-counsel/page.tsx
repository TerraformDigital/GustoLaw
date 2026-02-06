import Link from 'next/link'

export const metadata = {
  title: 'Fractional General Counsel Calgary | Outsourced GC',
  description: 'Fractional general counsel services for growing Alberta businesses. Executive-level legal leadership, contract management, and strategic advisory without full-time cost.',
  keywords: 'fractional general counsel Calgary, outsourced GC Alberta, part-time general counsel, virtual general counsel Calgary, business lawyer retainer, corporate counsel services',
  openGraph: {
    title: 'Fractional General Counsel Calgary | Outsourced GC',
    description: 'Fractional general counsel services for growing Alberta businesses. Executive-level legal leadership without full-time cost.',
    url: 'https://gustolaw.ca/services/fractional-general-counsel',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Fractional General Counsel Calgary | Outsourced GC',
    description: 'Fractional general counsel services for growing Alberta businesses.',
  },
  alternates: { canonical: 'https://gustolaw.ca/services/fractional-general-counsel' },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://gustolaw.ca/services/fractional-general-counsel#service",
      "name": "Fractional General Counsel Services",
      "description": "Outsourced general counsel services providing executive-level legal leadership for growing Alberta businesses including strategic advisory, contract portfolio management, compliance monitoring, and employment matters.",
      "provider": { "@type": "LegalService", "@id": "https://gustolaw.ca/#organization" },
      "areaServed": [{ "@type": "City", "name": "Calgary" }, { "@type": "AdministrativeArea", "name": "Alberta" }],
      "serviceType": ["Fractional General Counsel", "Outsourced Legal Services", "Contract Portfolio Management", "Legal Risk Assessment", "Regulatory Compliance", "Employment Law Advisory", "Corporate Governance"],
      "url": "https://gustolaw.ca/services/fractional-general-counsel"
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
        { "@type": "Question", "name": "How is fractional GC different from just hiring a law firm?", "acceptedAnswer": { "@type": "Answer", "text": "Traditional law firms work on specific matters—you call when something comes up. A fractional GC is an ongoing relationship where we're proactively involved in your business, anticipate issues before they arise, and provide strategic input on business decisions." }},
        { "@type": "Question", "name": "How much does fractional general counsel cost?", "acceptedAnswer": { "@type": "Answer", "text": "Engagements typically range from $3,000 to $15,000 per month depending on scope and time commitment. Compare that to a full-time GC salary of $200,000-$350,000+ plus benefits." }},
        { "@type": "Question", "name": "What if I need specialized legal help outside your expertise?", "acceptedAnswer": { "@type": "Answer", "text": "Part of our role is coordinating specialists when needed—IP litigation, tax planning, immigration, etc. We maintain relationships with trusted specialists and manage those engagements on your behalf." }},
        { "@type": "Question", "name": "How quickly can you respond when something urgent comes up?", "acceptedAnswer": { "@type": "Answer", "text": "For retainer clients, we commit to same-day response for urgent matters during business hours." }},
        { "@type": "Question", "name": "Can we start with a smaller engagement to see if it's a good fit?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Many clients start with a legal audit or specific project before committing to an ongoing retainer." }}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gustolaw.ca" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gustolaw.ca/services" },
        { "@type": "ListItem", "position": 3, "name": "Fractional General Counsel", "item": "https://gustolaw.ca/services/fractional-general-counsel" }
      ]
    }
  ]
}

export default function FractionalGCPage() {
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
            <li><span className="text-gray-900 font-medium">Fractional General Counsel</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-medium mb-4">Services</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Fractional General Counsel</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Executive-level legal leadership for growing businesses—without the full-time cost. Get strategic counsel, proactive risk management, and a trusted advisor who understands your business inside and out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</Link>
              <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">You've Outgrown Ad-Hoc Legal Support, But You're Not Ready for a Full-Time GC</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">Your business has reached a stage where legal issues arise regularly—contracts need review, compliance questions come up, and strategic decisions have legal implications. You need someone who understands your business, not just a lawyer you call when something goes wrong.</p>
          </div>
          <div className="mt-8 bg-teal-50 border border-teal-200 rounded-xl p-6 sm:p-8 max-w-3xl mx-auto">
            <p className="text-center text-base sm:text-lg text-teal-900"><strong>The math is clear:</strong> A full-time general counsel costs $200,000-$350,000+ in salary and benefits. Most businesses with $2M-$50M in revenue don't need that—but they do need consistent, strategic legal leadership.</p>
          </div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Fractional GC Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">All the benefits of in-house counsel, structured to fit your actual needs</p>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Strategic Legal Advisory</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Ongoing Strategic Legal Advisory (Retainer)', 'Monthly Legal Check-Ins & Planning', 'Legal Risk Assessment & Mitigation', 'Board Package Review & Advisory', 'Legal Budget Planning & Management', 'In-House Legal Team Mentoring'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Contract Portfolio Management</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Contract Portfolio Management', 'Contract Template Library Development', 'Contract Review Workflow Systems', 'Vendor & Supplier Relationship Management', 'Customer Agreement Oversight', 'Contract Renewal & Termination Strategy'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Compliance & Operations</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Regulatory Compliance Monitoring', 'Privacy Policy Development', 'Data Breach Response Planning', 'Corporate Compliance Audits', 'AML & KYC Procedures', 'Beneficial Ownership Disclosure', 'Export Control Compliance', 'Professional Licensing Advisory', 'Legal Operations Consulting'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Employment & HR Support</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Employment Agreements (Executive/Standard)', 'Independent Contractor Agreements', 'Non-Compete & Non-Solicitation', 'Employee Handbook Development', 'Termination & Severance Matters', 'Workplace Policy Development', 'Workplace Investigations Support', 'Equity Compensation Plans'].map((item) => (
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
              { q: "How is fractional GC different from just hiring a law firm?", a: "Traditional law firms work on specific matters—you call when something comes up. A fractional GC is an ongoing relationship where we're proactively involved in your business. We learn your operations, anticipate issues before they arise, and provide strategic input on business decisions—not just legal problems." },
              { q: "How much does fractional general counsel cost?", a: "Engagements typically range from $3,000 to $15,000 per month depending on scope and time commitment. Compare that to a full-time GC salary of $200,000-$350,000+ plus benefits. We'll discuss your needs and propose an arrangement that makes sense." },
              { q: "What if I need specialized legal help outside your expertise?", a: "Part of our role is coordinating specialists when needed—IP litigation, tax planning, immigration, etc. We maintain relationships with trusted specialists and manage those engagements on your behalf, ensuring quality work and cost control." },
              { q: "How quickly can you respond when something urgent comes up?", a: "For retainer clients, we commit to same-day response for urgent matters during business hours. Part of our job is to help you build systems that reduce genuine emergencies." },
              { q: "Can we start with a smaller engagement to see if it's a good fit?", a: "Absolutely. Many clients start with a legal audit or specific project before committing to an ongoing retainer. This lets both sides evaluate the working relationship." }
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
              <p className="text-gray-600 text-sm">Shareholder agreements, governance, and commercial contracts.</p>
            </Link>
            <Link href="/services/mergers-acquisitions" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3>
              <p className="text-gray-600 text-sm">Strategic transaction support when you're ready to buy or sell.</p>
            </Link>
            <Link href="/services/business-formation" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Business Formation</h3>
              <p className="text-gray-600 text-sm">Incorporation, structuring, and shareholder agreements.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready for Strategic Legal Support?</h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-8">Let's discuss how fractional GC services can support your business goals.</p>
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
