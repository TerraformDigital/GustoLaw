import Link from 'next/link'

export const metadata = {
  title: 'Oil & Gas Lawyer Calgary | Energy Legal Services Alberta',
  description: 'Calgary oil and gas lawyers for Alberta energy companies. JV agreements, regulatory compliance, asset sales, contracts, and specialized energy sector legal counsel.',
  keywords: 'oil and gas lawyer Calgary, energy lawyer Alberta, petroleum legal services, AER compliance, farmout agreements, joint venture agreements Alberta, energy sector legal',
  openGraph: {
    title: 'Oil & Gas Lawyer Calgary | Energy Legal Services Alberta | Gusto Law',
    description: 'Calgary oil and gas lawyers for Alberta energy companies. JV agreements, regulatory compliance, asset sales, and specialized energy sector counsel.',
    url: 'https://gustolaw.ca/industries/oil-gas',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Oil & Gas Lawyer Calgary | Energy Legal Services Alberta | Gusto Law',
    description: 'Calgary oil and gas lawyers for Alberta energy companies.',
  },
  alternates: { canonical: 'https://gustolaw.ca/industries/oil-gas' },
}

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://gustolaw.ca/industries/oil-gas#service",
      "name": "Oil & Gas Legal Services",
      "description": "Comprehensive legal services for Alberta oil and gas companies including joint venture agreements, regulatory compliance, asset transactions, commercial contracts, and specialized energy sector counsel.",
      "provider": { "@type": "LegalService", "@id": "https://gustolaw.ca/#organization" },
      "areaServed": [{ "@type": "City", "name": "Calgary" }, { "@type": "AdministrativeArea", "name": "Alberta" }],
      "serviceType": ["Joint Venture Agreements", "Regulatory Compliance", "Asset Transactions", "Commercial Contracts", "Drilling Agreements", "Operating Agreements", "Farmout Agreements", "Environmental Compliance", "Surface Rights"],
      "url": "https://gustolaw.ca/industries/oil-gas"
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
        { "@type": "Question", "name": "What is a farmout agreement and when do I need one?", "acceptedAnswer": { "@type": "Answer", "text": "A farmout agreement is a contract where one party (the farmee) agrees to carry part or all of the drilling and completion costs on an oil and gas lease in exchange for an interest in the property. It's commonly used to spread development costs, share risk, and incentivize exploration. You need one whenever you're seeking a partner to fund exploration or development work." }},
        { "@type": "Question", "name": "What is an operating agreement and what must it cover?", "acceptedAnswer": { "@type": "Answer", "text": "An operating agreement governs how co-owners of an oil and gas property work together. It covers capital contributions, expense sharing, voting rights, operator selection, and management procedures. In Alberta, most agreements reference the CAPL (Canadian Association of Petroleum Landmen) standard form, though custom provisions are common." }},
        { "@type": "Question", "name": "What regulatory approvals do I need from the Alberta Energy Regulator?", "acceptedAnswer": { "@type": "Answer", "text": "Depending on your activities, you may need AER approval for well drilling, hydraulic fracturing, pipeline construction, production licensing, and facility applications. The requirements vary by project type, location, and environmental considerations. We help identify and manage all applicable AER requirements." }},
        { "@type": "Question", "name": "What environmental and Indigenous consultation requirements apply?", "acceptedAnswer": { "@type": "Answer", "text": "Alberta oil and gas projects must comply with federal and provincial environmental assessments. Indigenous consultation is required on Crown land and mandatory for federally regulated projects. Alberta's Environmental Protection and Enhancement Act (EPEA) and federal Impact Assessment Act may apply. Consultation must be meaningful and documented." }},
        { "@type": "Question", "name": "How are asset purchases and sales structured in the oil and gas industry?", "acceptedAnswer": { "@type": "Answer", "text": "Oil and gas asset sales typically involve purchasing producing properties, undeveloped leases, or infrastructure. Transactions include detailed asset schedules, representations about title, production history, environmental liabilities, and regulatory compliance. Due diligence focuses on reserve valuation, AER compliance history, environmental liability, and royalty obligations." }}
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gustolaw.ca" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://gustolaw.ca/industries" },
        { "@type": "ListItem", "position": 3, "name": "Oil & Gas", "item": "https://gustolaw.ca/industries/oil-gas" }
      ]
    }
  ]
}

export default function OilGasPage() {
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
            <li><span className="text-gray-900 font-medium">Oil & Gas</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-teal-400 font-medium mb-4">Industries</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Energy & Resources</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Strategic legal counsel for Alberta's oil and gas companies. From joint ventures and regulatory compliance to transactions and commercial agreements, we provide sophisticated counsel to energy sector operators navigating complex regulatory, commercial, and environmental landscapes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100 text-center">Schedule a Consultation</Link>
              <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-white/10 text-center">(403) 988-8382</a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Oil & Gas Companies Need Specialized Counsel */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Energy Companies Face Unique Legal Complexity</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Oil and gas operations involve intricate regulatory frameworks, multi-party collaborations, volatile commodity markets, and evolving environmental standards. Success requires legal counsel who understands both the technical and commercial realities of Alberta's energy sector.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-12">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Regulatory Complexity</h3>
              <p className="text-gray-600 text-sm">AER oversight, environmental approvals, and Indigenous consultation requirements</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Multi-Party Structures</h3>
              <p className="text-gray-600 text-sm">Joint ventures, farmouts, and co-ownership arrangements requiring careful alignment</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Commodity Volatility</h3>
              <p className="text-gray-600 text-sm">Price fluctuations affecting valuations, financing, and transaction economics</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 012.646 2.646L6.343 6.343m12.728 12.728L17.657 17.657m-4.243 4.243L9.88 15.88m5.242-5.242L15.88 9.88M9.88 15.88L6.343 19.417" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Environmental Liability</h3>
              <p className="text-gray-600 text-sm">Compliance, decommissioning obligations, and evolving climate standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Checklist */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Comprehensive Oil & Gas Legal Services</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">End-to-end counsel for all stages of oil and gas operations and transactions</p>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Joint Ventures & Partnerships</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Joint Venture Agreement Drafting', 'Farmout Agreements (Farmee & Farmor)', 'Operating Agreements (CAPL-based)', 'Area of Mutual Interest (AMI) Agreements', 'Co-Ownership & Co-Development Agreements', 'Partnership Structuring & Formation', 'Consortium Agreements', 'Strategic Alliance Documentation', 'Contribution & Funding Arrangements', 'Profit Sharing & Risk Allocation'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Regulatory & Compliance</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Alberta Energy Regulator (AER) Regulatory Matters', 'AER Applications & Approvals', 'Environmental Compliance & EPEA', 'Environmental Impact Assessments', 'Surface Rights & Negotiations', 'Crown Consultation Requirements', 'Indigenous Consultation & Accommodation', 'Regulatory Reporting & Filing', 'Environmental Liability Assessment', 'Decommissioning & Abandonment Planning', 'Climate & Emissions Compliance', 'Safety & Risk Management Protocols'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Transactions & Corporate</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Asset Purchase & Sale Agreements', 'Producing Property Transactions', 'Exploration Acreage Acquisitions', 'Corporate Acquisitions & Mergers', 'Property Swaps & Exchanges', 'Royalty Purchase & Sale Agreements', 'Production Sharing Arrangements', 'Carried Interest Structures', 'Project Financing Documentation', 'Reserve-Based Lending', 'Due Diligence (Title, Environmental, Regulatory)', 'Transaction Valuation Support'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Commercial Agreements</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
              {['Drilling & Completion Contracts', 'Well Services Agreements', 'Equipment Rental & Lease Agreements', 'Supply & Material Agreements', 'Midstream Service Agreements', 'Transportation & Pipeline Agreements', 'Processing Agreements', 'Gathering & Marketing Agreements', 'Employment & Contractor Arrangements', 'Insurance & Indemnification', 'Confidentiality & Non-Compete', 'Dispute Resolution & Arbitration'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Key Challenges in Oil & Gas</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">We understand the issues energy companies face and provide pragmatic solutions</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Regulatory & Permitting Delays</h3>
              <p className="text-gray-600 text-sm leading-relaxed">AER approvals, environmental assessments, and Indigenous consultation can delay projects by months or years. We accelerate these processes through proactive engagement and compliant documentation, helping you avoid costly project holds.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">JV & Farmout Disputes</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Multi-party operations create friction over capital contributions, cost allocations, and management decisions. Clear agreements prevent disputes. We draft operating and farmout agreements that align incentives and reduce conflict.</p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Environmental & Decommissioning Liability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Environmental liability and decommissioning obligations can exceed project value. We assess liability, negotiate favorable exit terms, and navigate decommissioning compliance—protecting your balance sheet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10 sm:mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "What is a farmout agreement and when do I need one?", a: "A farmout agreement is a contract where one party (the farmee) agrees to carry part or all of the drilling and completion costs on an oil and gas lease in exchange for an interest in the property. Farmouts are commonly used to spread development costs, share risk, and incentivize exploration by partners who have capital or technical expertise. You need one whenever you're seeking a partner to fund exploration or development work on your acreage." },
              { q: "What is an operating agreement and what must it cover?", a: "An operating agreement (or joint operating agreement) governs how co-owners of an oil and gas property work together to develop and produce that property. It covers capital contributions, expense sharing and cost allocation, voting rights, operator selection and duties, management committees, decisions requiring unanimous consent (reserved matters), insurance, and dispute resolution. In Alberta, most agreements reference or adapt the CAPL (Canadian Association of Petroleum Landmen) standard form, though custom provisions are common depending on company size and property complexity." },
              { q: "What regulatory approvals do I need from the Alberta Energy Regulator?", a: "The approvals required depend on your activities. Oil and gas operations typically require AER approval for well drilling, hydraulic fracturing operations, pipeline construction or modification, facility applications (processing plants, compression stations), and production licensing. Each approval involves review of technical, environmental, and safety aspects. We identify all applicable requirements and manage the AER application and approval process, which typically takes 4-12 weeks depending on complexity." },
              { q: "What environmental and Indigenous consultation requirements apply?", a: "Alberta oil and gas projects must comply with both provincial and federal environmental reviews. Projects on Crown land require consultation with Indigenous groups, and federally regulated projects (like pipelines or offshore activity) trigger mandatory consultation under the Impact Assessment Act. Alberta's Environmental Protection and Enhancement Act (EPEA) and provincial approvals apply universally. Consultation must be meaningful and documented. We coordinate environmental assessment, identify affected stakeholders, and manage consultation to meet all regulatory timelines." },
              { q: "How are asset purchases and sales structured in the oil and gas industry?", a: "Oil and gas asset sales typically involve purchasing producing properties (with established production history), undeveloped leases (exploration acreage), or infrastructure (pipelines, processing facilities). Transactions include detailed asset schedules listing wells and leases, representations about title quality and encumbrances, production history and reserves data, environmental liabilities, and regulatory compliance status. Due diligence focuses on reserve valuation, AER compliance history, environmental liability, royalty obligations, and surface restrictions. We handle all aspects from initial valuation models through closing." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-lg">
                <summary className="flex items-center justify-between cursor-pointer p-5 sm:p-6 font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
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
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Related Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <Link href="/services/mergers-acquisitions" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3>
              <p className="text-gray-600 text-sm">Asset purchases, corporate acquisitions, and property transactions for energy companies.</p>
            </Link>
            <Link href="/services/joint-ventures" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Joint Ventures</h3>
              <p className="text-gray-600 text-sm">JV formation, governance, and operating agreements for oil and gas partnerships.</p>
            </Link>
            <Link href="/services/corporate-commercial" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate & Commercial</h3>
              <p className="text-gray-600 text-sm">Drilling contracts, service agreements, and commercial arrangements.</p>
            </Link>
            <Link href="/services/dispute-resolution" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
              <p className="text-gray-600 text-sm">Mediation and litigation for JV disputes, contract disagreements, and regulatory conflicts.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Discuss Your Energy Project?</h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-8">Whether you're structuring a joint venture, navigating AER approvals, or planning an asset transaction, our Calgary energy lawyers are ready to advise.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-white text-teal-800 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100">Schedule a Consultation</Link>
            <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-white/10">Call (403) 988-8382</a>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            This website provides general legal information about oil and gas legal services in Alberta. It is not legal advice and does not create a lawyer-client relationship. Specific legal advice depends on your circumstances. Consult with a qualified lawyer about your particular situation. Gusto Law (Augustine Lu Professional Corporation) is a law firm providing corporate, commercial, and energy sector legal services in Calgary, Alberta. Nothing in this website is intended to guarantee any specific outcome or result.
          </p>
        </div>
      </section>
    </>
  )
}
