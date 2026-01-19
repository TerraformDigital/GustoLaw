import Link from 'next/link'

export const metadata = {
  title: 'Fractional General Counsel | Gusto Law Calgary',
  description: 'On-demand general counsel services for Calgary businesses. Executive-level legal leadership without the full-time cost.',
}

export default function FractionalGCPage() {
  return (
    <>
      <header className="bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-teal-300 font-medium mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Fractional General Counsel</h1>
          <p className="text-xl text-teal-100">On-demand legal leadership for growing businesses—without the full-time cost.</p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg">
          <p>Many established businesses need sophisticated legal guidance but are not ready for a full-time general counsel. Our fractional GC service provides executive-level legal leadership on a flexible, cost-effective basis.</p>
          
          <h2>What We Provide</h2>
          <ul>
            <li><strong>Strategic Legal Counsel</strong> — Advice on business decisions, risk management, and growth strategy</li>
            <li><strong>Contract Review & Negotiation</strong> — Ongoing review of commercial agreements</li>
            <li><strong>Board & Management Support</strong> — Attendance at meetings, corporate governance guidance</li>
            <li><strong>Compliance Oversight</strong> — Regulatory compliance and policy development</li>
            <li><strong>Outside Counsel Management</strong> — Coordinating specialists when needed</li>
          </ul>

          <h2>Who This Is For</h2>
          <p>Fractional GC services are ideal for companies with $2M-$50M in revenue that have outgrown ad-hoc legal support but do not yet need a full-time in-house lawyer.</p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-teal-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready for Strategic Legal Support?</h2>
          <p className="text-xl text-teal-100 mb-8">Let us discuss how fractional GC services can support your business.</p>
          <Link href="/contact" className="inline-block bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
