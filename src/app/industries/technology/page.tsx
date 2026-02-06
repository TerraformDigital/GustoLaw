import Link from 'next/link'

export const metadata = {
  title: 'Technology Lawyer Calgary | SaaS & Software Legal Services',
  description: 'Calgary technology lawyers for SaaS companies, software startups, and tech businesses. IP protection, venture financing, SaaS agreements, and data privacy compliance.',
  keywords: 'technology lawyer Calgary, SaaS lawyer Alberta, software legal services, IP protection Calgary, venture capital lawyer, tech startup lawyer, PIPEDA compliance, data privacy lawyer Calgary',
  openGraph: {
    title: 'Technology Lawyer Calgary | SaaS & Software Legal Services | Gusto Law',
    description: 'Calgary technology lawyers for SaaS companies, software startups, and tech businesses. IP protection, venture financing, and data privacy.',
    url: 'https://gustolaw.ca/industries/technology',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Technology Lawyer Calgary | SaaS & Software Legal Services | Gusto Law',
    description: 'Calgary technology lawyers for SaaS companies, software startups, and tech businesses.',
  },
  alternates: { canonical: 'https://gustolaw.ca/industries/technology' },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://gustolaw.ca/industries/technology#service",
      "name": "Technology & Software Legal Services",
      "description": "Legal counsel for Calgary tech companies including SaaS agreements, IP protection, venture financing, data privacy compliance, and technology-specific commercial contracts.",
      "provider": { "@type": "LegalService", "@id": "https://gustolaw.ca/#organization" },
      "areaServed": [{ "@type": "City", "name": "Calgary" }, { "@type": "AdministrativeArea", "name": "Alberta" }],
      "serviceType": ["SaaS Agreements", "IP Protection", "Venture Financing", "Data Privacy", "Technology Contracts", "Software Licensing"],
      "url": "https://gustolaw.ca/industries/technology"
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
        { "@type": "Question", "name": "Do I need a lawyer to draft my SaaS terms of service?", "acceptedAnswer": { "@type": "Answer", "text": "For a production SaaS product with paying customers, yes. Your terms of service allocate liability, define service levels, govern data handling, and protect your IP. Generic templates miss critical provisions around uptime guarantees, data ownership, and limitation of liability that are specific to your product." }},
        { "@type": "Question", "name": "How do I protect my software IP when hiring developers?", "acceptedAnswer": { "@type": "Answer", "text": "Use proper IP assignment agreements. In Canada, the default rule is that contractors own what they create unless you have a written assignment. For employees, the rules differ but you still want clear agreements. Every developer—employee or contractor—should sign an IP assignment and confidentiality agreement before starting work." }},
        { "@type": "Question", "name": "What legal documents do I need before raising venture capital?", "acceptedAnswer": { "@type": "Answer", "text": "At minimum: clean corporate records, a capitalization table, IP assignment agreements from all founders and developers, employment agreements, and a data room with key contracts. Most investors will also expect a shareholder agreement, stock option plan, and proper corporate governance documentation." }},
        { "@type": "Question", "name": "Does my tech company need to comply with PIPEDA?", "acceptedAnswer": { "@type": "Answer", "text": "If you collect, use, or disclose personal information in the course of commercial activities in Canada, yes. PIPEDA applies to most private-sector organizations. Alberta also has PIPA (Personal Information Protection Act) which applies to organizations operating in Alberta. You need proper privacy policies, consent mechanisms, and data handling procedures." }},
        { "@type": "Question", "name": "Should I incorporate my tech startup in Alberta or federally?", "acceptedAnswer": { "@type": "Answer", "text": "For most Calgary-based tech companies, Alberta incorporation is simpler and less expensive. Federal incorporation makes sense if you plan to operate nationally from day one or want name protection across Canada. If you're raising venture capital, investors are comfortable with either—what matters more is having clean corporate records and proper governance." }}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gustolaw.ca" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://gustolaw.ca/industries" },
        { "@type": "ListItem", "position": 3, "name": "Technology & Software", "item": "https://gustolaw.ca/industries/technology" }
      ]
    }
  ]
}

export default function TechnologyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-500 hover:text-teal-700">Home</Link></li>
            <li><span className="text-gray-400 mx-2">/</span></li>
            <li><Link href="/industries" className="text-gray-500 hover:text-teal-700">Industries</Link></li>
            <li><span className="text-gray-400 mx-2">/</span></li>
            <li><span className="text-gray-900 font-medium">Technology & Software</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity" style={{ backgroundImage: "url('https://gustolaw.ca/wp-content/uploads/2025/01/Calgary-Software-Lawyer.jpg')" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-medium mb-4">Industries</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Technology & Software</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Legal counsel built for the pace and complexity of tech. From SaaS agreements to venture financing, we help Calgary's technology companies protect their IP, close deals, and scale with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://calendly.com/guslu-gustolaw/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</a>
              <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
            </div>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Tech Companies Need Lawyers Who Understand Tech</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">Calgary's technology sector is growing rapidly, and tech companies face legal challenges that traditional business lawyers often miss. SaaS revenue models, IP ownership structures, venture capital terms, and data privacy regulations all require specialized knowledge. We deliver responsive, practical advice that keeps pace with your business.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Speed Matters</h3>
              <p className="text-gray-600 text-sm">Tech moves fast. We respond quickly and don't slow down your deals or product launches.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">IP Protection</h3>
              <p className="text-gray-600 text-sm">Your code and product are your most valuable assets. We make sure they stay protected.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Investor Ready</h3>
              <p className="text-gray-600 text-sm">Clean legal foundations that give investors confidence and don't hold up financing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Checklists */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Technology Legal Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive legal support for technology companies at every stage</p>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">SaaS & Software Agreements</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['SaaS Subscription Agreements', 'Software Licensing (Perpetual & Subscription)', 'Terms of Service & Acceptable Use', 'Service Level Agreements (SLAs)', 'End User License Agreements (EULA)', 'Cloud Services Agreements', 'API Licensing & Terms of Use', 'Platform Partner Agreements', 'Reseller & Channel Agreements'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">IP Protection & Licensing</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['IP Assignment Agreements (Founders)', 'Developer & Contractor IP Assignments', 'Employee IP & Invention Agreements', 'Non-Disclosure Agreements (NDAs)', 'Trade Secret Protection Policies', 'Open Source License Compliance', 'Technology Transfer Agreements', 'White-Label & OEM Licensing', 'Copyright & Trademark Strategy'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Venture Financing & Corporate</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Seed Round Documentation (SAFE/Convertible Notes)', 'Series A & Growth Financing', 'Term Sheet Review & Negotiation', 'Shareholder Agreements (Investor)', 'Stock Option Plans (ESOP)', 'Cap Table Management', 'Board Governance & Advisory', 'Corporate Restructuring for Investment', 'Exit Planning & Preparation'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Data Privacy & Compliance</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['PIPEDA Compliance Programs', 'Alberta PIPA Compliance', 'Privacy Policy Development', 'Data Processing Agreements (DPA)', 'Data Breach Response Plans', 'Cross-Border Data Transfer', 'Cookie & Consent Management', 'Privacy Impact Assessments', 'Employee Data Handling Policies'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Development & Commercial</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Software Development Agreements', 'Website & App Development Contracts', 'Technology Consulting Agreements', 'Master Services Agreements (Tech)', 'Outsourcing & Offshore Development', 'Joint Development Agreements', 'Technology Partnership Agreements', 'Integration & Implementation Contracts', 'Managed Services Agreements'].map((item) => (
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
              { q: "Do I need a lawyer to draft my SaaS terms of service?", a: "For a production SaaS product with paying customers, yes. Your terms of service allocate liability, define service levels, govern data handling, and protect your IP. Generic templates miss critical provisions around uptime guarantees, data ownership, and limitation of liability that are specific to your product and business model." },
              { q: "How do I protect my software IP when hiring developers?", a: "Use proper IP assignment agreements. In Canada, the default rule is that contractors own what they create unless you have a written assignment. For employees, the rules differ but you still want clear agreements. Every developer—employee or contractor—should sign an IP assignment and confidentiality agreement before starting work." },
              { q: "What legal documents do I need before raising venture capital?", a: "At minimum: clean corporate records, a capitalization table, IP assignment agreements from all founders and developers, employment agreements, and a data room with key contracts. Most investors will also expect a shareholder agreement, stock option plan, and proper corporate governance documentation." },
              { q: "Does my tech company need to comply with PIPEDA?", a: "If you collect, use, or disclose personal information in the course of commercial activities in Canada, yes. PIPEDA applies to most private-sector organizations. Alberta also has PIPA (Personal Information Protection Act) which may apply. You need proper privacy policies, consent mechanisms, and data handling procedures." },
              { q: "Should I incorporate my tech startup in Alberta or federally?", a: "For most Calgary-based tech companies, Alberta incorporation is simpler and less expensive. Federal incorporation makes sense if you plan to operate nationally from day one or want name protection across Canada. If you're raising venture capital, investors are comfortable with either—what matters more is having clean corporate records and proper governance." }
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
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <Link href="/services/corporate-commercial" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate & Commercial</h3>
              <p className="text-gray-600 text-sm">Governance, contracts, and day-to-day commercial matters.</p>
            </Link>
            <Link href="/services/business-formation" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Business Formation</h3>
              <p className="text-gray-600 text-sm">Incorporation, shareholder agreements, and corporate structure.</p>
            </Link>
            <Link href="/services/fractional-general-counsel" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Fractional General Counsel</h3>
              <p className="text-gray-600 text-sm">Ongoing strategic legal support as you scale.</p>
            </Link>
            <Link href="/services/mergers-acquisitions" className="bg-white p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3>
              <p className="text-gray-600 text-sm">Exit planning, acquisitions, and investment transactions.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Building a Tech Company in Alberta?</h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-8">Let's discuss how we can support your growth, protect your IP, and prepare you for your next milestone.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/guslu-gustolaw/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-teal-800 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100">Schedule a Consultation</a>
            <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-white/10">Call (403) 988-8382</a>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-gray-50 py-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs text-gray-500 text-center">This content is for informational purposes only and does not constitute legal advice. For legal guidance tailored to your situation, please consult a qualified lawyer.</p>
        </div>
      </div>
    </>
  )
}
