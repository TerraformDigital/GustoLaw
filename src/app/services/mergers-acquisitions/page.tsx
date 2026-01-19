import Link from 'next/link'

export const metadata = {
  title: 'Mergers & Acquisitions | Gusto Law Calgary',
  description: 'M&A legal services for Calgary businesses. Buy-side and sell-side representation through due diligence, negotiation, and closing.',
}

export default function MergersAcquisitionsPage() {
  return (
    <>
      <header className="bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-teal-300 font-medium mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Mergers & Acquisitions</h1>
          <p className="text-xl text-teal-100">Strategic guidance through the complete M&A process—from initial due diligence to closing.</p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg">
          <p>Whether you are buying or selling a business, M&A transactions require careful planning, thorough due diligence, and skilled negotiation. At Gusto Law, we guide clients through every stage of the process.</p>
          
          <h2>Our M&A Services</h2>
          <ul>
            <li><strong>Buy-Side Representation</strong> — Due diligence, deal structuring, negotiation, and closing for acquirers</li>
            <li><strong>Sell-Side Representation</strong> — Preparing your business for sale, managing the process, and maximizing value</li>
            <li><strong>Due Diligence</strong> — Comprehensive review of legal, financial, and operational risks</li>
            <li><strong>Deal Structuring</strong> — Asset vs. share purchases, tax optimization, and risk allocation</li>
            <li><strong>Transaction Documents</strong> — Letters of intent, purchase agreements, and ancillary documents</li>
          </ul>

          <h2>Why Choose Gusto Law</h2>
          <p>Our founder has extensive M&A experience from both national firm practice and in-house general counsel roles. We understand transactions from every angle—legal, financial, and operational.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-teal-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Considering a Transaction?</h2>
          <p className="text-xl text-teal-100 mb-8">Let us discuss how we can support your M&A objectives.</p>
          <Link href="/contact" className="inline-block bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
