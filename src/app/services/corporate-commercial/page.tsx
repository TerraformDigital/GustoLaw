import Link from 'next/link'

export const metadata = {
  title: 'Corporate & Commercial Law | Gusto Law Calgary',
  description: 'Corporate and commercial legal services for Calgary businesses. Contracts, governance, compliance, and ongoing operations.',
}

export default function CorporateCommercialPage() {
  return (
    <>
      <header className="bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-teal-300 font-medium mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Corporate & Commercial</h1>
          <p className="text-xl text-teal-100">Comprehensive legal support for day-to-day business operations.</p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg">
          <p>From contracts to compliance, established businesses face ongoing legal needs. We provide practical, business-focused advice to keep your operations running smoothly.</p>
          
          <h2>Our Services</h2>
          <ul>
            <li><strong>Commercial Contracts</strong> — Drafting, reviewing, and negotiating agreements</li>
            <li><strong>Corporate Governance</strong> — Board matters, resolutions, and compliance</li>
            <li><strong>Licensing & IP</strong> — Protecting and commercializing intellectual property</li>
            <li><strong>Vendor & Customer Agreements</strong> — Supply contracts, service agreements, and terms</li>
            <li><strong>Regulatory Compliance</strong> — Navigating industry-specific requirements</li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-teal-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need Ongoing Legal Support?</h2>
          <p className="text-xl text-teal-100 mb-8">Let us discuss how we can support your business operations.</p>
          <Link href="/contact" className="inline-block bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
