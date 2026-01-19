import Link from 'next/link'

export const metadata = {
  title: 'Joint Ventures | Gusto Law Calgary',
  description: 'Joint venture legal services in Calgary. Navigate complex partnerships with clear agreements and governance.',
}

export default function JointVenturesPage() {
  return (
    <>
      <header className="bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-teal-300 font-medium mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Joint Ventures</h1>
          <p className="text-xl text-teal-100">Navigate complex partnerships with clear agreements and governance structures.</p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg">
          <p>Joint ventures can unlock significant opportunities, but they require careful structuring to align interests and manage risks. We help you build partnerships that work.</p>
          
          <h2>Our Services</h2>
          <ul>
            <li><strong>JV Structuring</strong> — Entity selection and ownership structures</li>
            <li><strong>JV Agreements</strong> — Comprehensive partnership documentation</li>
            <li><strong>Governance</strong> — Decision-making, deadlock resolution, and management</li>
            <li><strong>Exit Planning</strong> — Buy-sell provisions and termination rights</li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-teal-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Considering a Partnership?</h2>
          <p className="text-xl text-teal-100 mb-8">Let us help you structure it for success.</p>
          <Link href="/contact" className="inline-block bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
