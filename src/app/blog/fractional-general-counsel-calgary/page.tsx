import Link from 'next/link'

export const metadata = {
  title: 'What Is a Fractional General Counsel—And Does Your Business Need One?',
  description: 'How fractional general counsel services help growing Alberta businesses get executive-level legal guidance.',
}

export default function FractionalGCPost() {
  return (
    <>
      <header className="bg-gradient-to-br from-gray-50 to-teal-50 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="text-teal-700 hover:text-teal-800 mb-4 inline-block">← Back to Insights</Link>
          <p className="text-teal-700 font-medium mb-2">Business Strategy</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Is a Fractional General Counsel—And Does Your Business Need One?</h1>
          <p className="text-gray-500">January 2026 · 8 min read</p>
        </div>
      </header>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg">
          <p className="lead">Executive-level legal strategy without the executive-level salary. How growing Alberta businesses are getting sophisticated legal guidance on a flexible basis.</p>

          <h2>What Is a Fractional General Counsel?</h2>
          <p>A fractional general counsel provides the strategic legal leadership of an in-house lawyer on a part-time or as-needed basis. You get experienced counsel who understands your business without the cost of a full-time hire.</p>

          <h2>Signs You Might Need One</h2>
          <p>If you are spending significant time coordinating outside lawyers, facing increasingly complex legal decisions, or finding that legal issues are slowing down business decisions, fractional GC services might be right for you.</p>

          <h2>What to Expect</h2>
          <p>A good fractional GC becomes a true partner in your business—attending key meetings, reviewing important contracts, advising on strategy, and coordinating specialists when needed.</p>

          <p><em>This content is for informational purposes only and does not constitute legal advice.</em></p>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in Fractional GC Services?</h2>
          <Link href="/contact" className="inline-block bg-teal-700 text-white px-8 py-4 rounded font-medium hover:bg-teal-800 transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
