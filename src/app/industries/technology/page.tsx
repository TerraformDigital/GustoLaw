import Link from 'next/link'

export const metadata = {
  title: 'Technology & Software Legal Services | Gusto Law Calgary',
  description: 'Legal counsel for Calgary tech companies. SaaS agreements, IP protection, venture financing, and tech-specific commercial contracts.',
}

export default function TechnologyPage() {
  return (
    <>
      <header className="bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-teal-300 font-medium mb-4">Industries</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Technology & Software</h1>
          <p className="text-xl text-teal-100">Legal counsel for Calgary's growing tech sector.</p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg">
          <p>Calgary's technology sector is growing rapidly, and tech companies face unique legal challenges. We understand the fast pace of tech and deliver responsive, practical advice that keeps up with your business.</p>
          
          <h2>How We Help Tech Companies</h2>
          <ul>
            <li><strong>SaaS & Software Agreements</strong> — Licensing, subscriptions, and terms of service</li>
            <li><strong>IP Protection</strong> — Assignments, NDAs, and protecting your innovations</li>
            <li><strong>Venture Financing</strong> — Seed rounds, Series A, and growth capital</li>
            <li><strong>Technology Development</strong> — Development agreements and contractor IP</li>
            <li><strong>Data & Privacy</strong> — PIPEDA compliance and data processing agreements</li>
            <li><strong>M&A & Exit</strong> — Positioning for acquisition or investment</li>
          </ul>

          <h2>Our Tech Experience</h2>
          <p>We have worked with software companies, SaaS providers, IT services firms, and technology-enabled businesses across Alberta. We understand the unique challenges facing tech companies at every stage.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-teal-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Building a Tech Company in Alberta?</h2>
          <p className="text-xl text-teal-100 mb-8">Let us discuss how we can support your growth.</p>
          <Link href="/contact" className="inline-block bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
