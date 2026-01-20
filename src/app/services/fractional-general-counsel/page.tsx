import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Fractional General Counsel Calgary | Outsourced GC | Gusto Law',
  description: 'Part-time general counsel for Alberta businesses. Strategic legal leadership, contract management & compliance without full-time cost. Book a consultation.',
  keywords: 'fractional general counsel Calgary, outsourced GC Alberta, part-time GC, virtual general counsel, business lawyer Calgary, corporate counsel services',
  openGraph: {
    title: 'Fractional General Counsel Calgary | Outsourced GC | Gusto Law',
    description: 'Part-time general counsel for Alberta businesses. Strategic legal leadership, contract management & compliance without full-time cost.',
    url: 'https://gustolaw.ca/services/fractional-general-counsel',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Fractional General Counsel Calgary | Outsourced GC | Gusto Law',
    description: 'Part-time general counsel for Alberta businesses. Strategic legal leadership without full-time cost.',
  },
  alternates: {
    canonical: 'https://gustolaw.ca/services/fractional-general-counsel',
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': 'https://gustolaw.ca/services/fractional-general-counsel#service',
      'name': 'Fractional General Counsel Services',
      'description': 'Outsourced general counsel services for growing Alberta businesses. Executive-level legal leadership including strategic advisory, contract management, compliance monitoring, and employment matters.',
      'provider': {
        '@type': 'LegalService',
        'name': 'Gusto Law',
        'url': 'https://gustolaw.ca',
        'telephone': '+1-403-988-8382',
        'email': 'inquiries@gustolaw.ca',
        'address': { '@type': 'PostalAddress', 'streetAddress': 'Suite 206, 110 11 Avenue SW', 'addressLocality': 'Calgary', 'addressRegion': 'AB', 'postalCode': 'T2R 0B8', 'addressCountry': 'CA' },
        'areaServed': [{ '@type': 'City', 'name': 'Calgary' }, { '@type': 'AdministrativeArea', 'name': 'Alberta' }]
      },
      'serviceType': ['Fractional General Counsel', 'Outsourced Legal Services', 'Contract Portfolio Management', 'Legal Risk Assessment', 'Regulatory Compliance', 'Employment Law Advisory']
    },
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://gustolaw.ca' },
        { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': 'https://gustolaw.ca/services' },
        { '@type': 'ListItem', 'position': 3, 'name': 'Fractional General Counsel', 'item': 'https://gustolaw.ca/services/fractional-general-counsel' }
      ]
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        { '@type': 'Question', 'name': 'How is fractional GC different from just hiring a law firm?', 'acceptedAnswer': { '@type': 'Answer', 'text': "Traditional law firms work on specific matters—you call when something comes up. A fractional GC is an ongoing relationship where we're proactively involved in your business. We learn your operations, anticipate issues before they arise, and provide strategic input on business decisions—not just legal problems." } },
        { '@type': 'Question', 'name': 'How much does fractional general counsel cost?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Engagements typically range from $3,000 to $15,000 per month depending on scope and time commitment. Compare that to a full-time GC salary of $200,000-$350,000+ plus benefits.' } },
        { '@type': 'Question', 'name': 'What if I need specialized legal help outside your expertise?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Part of our role is coordinating specialists when needed—IP litigation, tax planning, immigration, etc. We maintain relationships with trusted specialists and manage those engagements on your behalf.' } },
        { '@type': 'Question', 'name': 'How quickly can you respond when something urgent comes up?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'For retainer clients, we commit to same-day response for urgent matters during business hours. Part of our job is to help you build systems that reduce genuine emergencies.' } },
        { '@type': 'Question', 'name': 'Can we start with a smaller engagement to see if it\'s a good fit?', 'acceptedAnswer': { '@type': 'Answer', 'text': 'Absolutely. Many clients start with a legal audit or specific project before committing to an ongoing retainer. This lets both sides evaluate the working relationship.' } }
      ]
    }
  ]
}

export default function FractionalGCPage() {
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

        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <p className="text-teal-400 font-medium mb-4">Services</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Fractional General Counsel</h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">Executive-level legal leadership for growing businesses—without the full-time cost. Get strategic counsel, proactive risk management, and a trusted advisor who understands your business inside and out.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-block bg-white text-gray-900 px-8 py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</Link>
                <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-8 py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">You've Outgrown Ad-Hoc Legal Support, But You're Not Ready for a Full-Time GC</h2>
              <p className="text-lg text-gray-600 leading-relaxed">Your business has reached a stage where legal issues arise regularly—contracts need review, compliance questions come up, and strategic decisions have legal implications. You need someone who understands your business, not just a lawyer you call when something goes wrong.</p>
            </div>
            <div className="mt-8 bg-teal-50 border border-teal-200 rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-center text-lg text-teal-900"><strong>The math is clear:</strong> A full-time general counsel costs $200,000-$350,000+ in salary and benefits. Most businesses with $2M-$50M in revenue don't need that—but they do need consistent, strategic legal leadership.</p>
            </div>
          </div>
        </section>

        {/* Services Checklist */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fractional GC Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">All the benefits of in-house counsel, structured to fit your actual needs</p>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Strategic Legal Advisory</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {['Ongoing Strategic Legal Advisory (Retainer)', 'Monthly Legal Check-Ins & Planning', 'Legal Risk Assessment & Mitigation', 'Board Package Review & Advisory', 'Legal Budget Planning & Management', 'In-House Legal Team Mentoring'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Contract Portfolio Management</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {['Contract Portfolio Management', 'Contract Template Library Development', 'Contract Review Workflow Systems', 'Vendor & Supplier Relationship Management', 'Customer Agreement Oversight', 'Contract Renewal & Termination Strategy'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Compliance & Operations</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
                {['Regulatory Compliance Monitoring', 'Privacy Policy Development', 'Data Breach Response Planning', 'Corporate Compliance Audits', 'AML & KYC Procedures', 'Beneficial Ownership Disclosure', 'Export Control Compliance', 'Professional Licensing Advisory', 'Legal Operations Consulting'].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Employment & HR Support</h3>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-3">
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
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>How is fractional GC different from just hiring a law firm?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">Traditional law firms work on specific matters—you call when something comes up. A fractional GC is an ongoing relationship where we're proactively involved in your business. We learn your operations, anticipate issues before they arise, and provide strategic input on business decisions—not just legal problems.</div>
              </details>
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>How much does fractional general counsel cost?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">Engagements typically range from $3,000 to $15,000 per month depending on scope and time commitment. Compare that to a full-time GC salary of $200,000-$350,000+ plus benefits. We'll discuss your needs and propose an arrangement that makes sense.</div>
              </details>
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>What if I need specialized legal help outside your expertise?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">Part of our role is coordinating specialists when needed—IP litigation, tax planning, immigration, etc. We maintain relationships with trusted specialists and manage those engagements on your behalf, ensuring quality work and cost control.</div>
              </details>
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>How quickly can you respond when something urgent comes up?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">For retainer clients, we commit to same-day response for urgent matters during business hours. Part of our job is to help you build systems that reduce genuine emergencies.</div>
              </details>
              <details className="group bg-gray-50 rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                  <span>Can we start with a smaller engagement to see if it's a good fit?</span>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">Absolutely. Many clients start with a legal audit or specific project before committing to an ongoing retainer. This lets both sides evaluate the working relationship.</div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-teal-800 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Strategic Legal Support?</h2>
            <p className="text-xl text-teal-100 mb-8">Let's discuss how fractional GC services can support your business goals.</p>
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
