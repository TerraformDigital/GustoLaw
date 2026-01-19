import Link from 'next/link'

export const metadata = {
  title: 'Selling Your Business: What to Expect in the M&A Process',
  description: 'A guide to selling your business in Calgary. What the M&A sale process looks like from preparation through closing.',
}

export default function SellingYourBusinessPost() {
  return (
    <>
      <header className="bg-gradient-to-br from-gray-50 to-teal-50 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="text-teal-700 hover:text-teal-800 mb-4 inline-block">← Back to Insights</Link>
          <p className="text-teal-700 font-medium mb-2">Mergers & Acquisitions</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Selling Your Business: What to Expect in the M&A Process</h1>
          <p className="text-gray-500">January 2026 · 10 min read</p>
        </div>
      </header>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg">
          <p className="lead">You have spent years building your company. Here is what the sale process actually looks like—from initial preparation through closing day.</p>

          <h2>Preparation Phase</h2>
          <p>Before going to market, you need to prepare your business for buyer scrutiny. This includes organizing financial records, documenting key contracts and relationships, and addressing any legal or operational issues that could derail a deal.</p>

          <h2>Finding Buyers</h2>
          <p>Depending on your goals, you may work with an investment banker to run a competitive process, or you may have a specific buyer in mind. Each approach has trade-offs in terms of price, timing, and confidentiality.</p>

          <h2>Due Diligence</h2>
          <p>Buyers will thoroughly examine your business—financials, contracts, employees, intellectual property, litigation, and more. Being prepared for this process can significantly impact deal timing and outcomes.</p>

          <h2>Negotiation & Closing</h2>
          <p>The purchase agreement allocates risk between buyer and seller through representations, warranties, indemnities, and other provisions. Skilled negotiation here can protect you long after closing.</p>

          <p><em>This content is for informational purposes only and does not constitute legal advice.</em></p>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Considering Selling Your Business?</h2>
          <Link href="/contact" className="inline-block bg-teal-700 text-white px-8 py-4 rounded font-medium hover:bg-teal-800 transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
