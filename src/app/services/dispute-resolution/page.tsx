import Link from 'next/link'

export const metadata = {
  title: 'Dispute Resolution | Gusto Law Calgary',
  description: 'Business dispute resolution services in Calgary. Practical strategies to resolve conflicts efficiently.',
}

export default function DisputeResolutionPage() {
  return (
    <>
      <header className="bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-teal-300 font-medium mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dispute Resolution</h1>
          <p className="text-xl text-teal-100">Practical strategies to resolve business disputes efficiently.</p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg">
          <p>Business disputes can be costly and distracting. We focus on resolving conflicts efficiently while protecting your interests and preserving important business relationships.</p>
          
          <h2>Our Approach</h2>
          <ul>
            <li><strong>Negotiation</strong> — Direct resolution without formal proceedings</li>
            <li><strong>Mediation</strong> — Facilitated discussions to reach agreement</li>
            <li><strong>Arbitration</strong> — Private dispute resolution when needed</li>
            <li><strong>Litigation Support</strong> — Coordination with litigation counsel</li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-teal-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Facing a Business Dispute?</h2>
          <p className="text-xl text-teal-100 mb-8">Let us help you find a practical resolution.</p>
          <Link href="/contact" className="inline-block bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
