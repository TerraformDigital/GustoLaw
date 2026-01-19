import Link from 'next/link'

export const metadata = {
  title: 'Do You Need a Shareholder Agreement?',
  description: 'Why shareholder agreements are essential for Alberta corporations with multiple shareholders.',
}

export default function ShareholderAgreementPost() {
  return (
    <>
      <header className="bg-gradient-to-br from-gray-50 to-teal-50 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/blog" className="text-teal-700 hover:text-teal-800 mb-4 inline-block">← Back to Insights</Link>
          <p className="text-teal-700 font-medium mb-2">Corporate Governance</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Do You Need a Shareholder Agreement?</h1>
          <p className="text-gray-500">January 2026 · 6 min read</p>
        </div>
      </header>

      <article className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg">
          <p className="lead">If your corporation has more than one shareholder, a shareholder agreement is not optional—it is essential protection for everyone involved.</p>

          <h2>What Is a Shareholder Agreement?</h2>
          <p>A shareholder agreement is a contract between shareholders that establishes how the company will be governed and how shareholders will interact. It covers issues that corporate statutes do not address.</p>

          <h2>Key Provisions</h2>
          <p>Important provisions include share transfer restrictions, buy-sell mechanisms, decision-making rights, dividend policies, non-competition clauses, and dispute resolution procedures.</p>

          <h2>When to Create One</h2>
          <p>The best time is at incorporation or when adding new shareholders. It is much easier to agree on terms when everyone is optimistic about the future than when disputes arise.</p>

          <p><em>This content is for informational purposes only and does not constitute legal advice.</em></p>
        </div>
      </article>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need a Shareholder Agreement?</h2>
          <Link href="/contact" className="inline-block bg-teal-700 text-white px-8 py-4 rounded font-medium hover:bg-teal-800 transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
