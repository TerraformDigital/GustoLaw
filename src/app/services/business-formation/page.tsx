import Link from 'next/link'

export const metadata = {
  title: 'Business Formation | Gusto Law Calgary',
  description: 'Business incorporation and formation services in Calgary. Structure your company for success from day one.',
}

export default function BusinessFormationPage() {
  return (
    <>
      <header className="bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-teal-300 font-medium mb-4">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Business Formation</h1>
          <p className="text-xl text-teal-100">Structure your business for success from day one.</p>
        </div>
      </header>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg">
          <p>The decisions you make when forming your business have long-term implications for liability, taxation, and future growth. We help you make informed choices and establish proper governance from the start.</p>
          
          <h2>Our Services</h2>
          <ul>
            <li><strong>Entity Selection</strong> — Corporation, partnership, or other structures</li>
            <li><strong>Provincial vs. Federal Incorporation</strong> — Choosing the right jurisdiction</li>
            <li><strong>Shareholder Agreements</strong> — Protecting founders and investors</li>
            <li><strong>Corporate Governance</strong> — Bylaws, resolutions, and minute books</li>
            <li><strong>Equity Structures</strong> — Share classes, vesting, and option plans</li>
          </ul>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-teal-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Starting or Restructuring a Business?</h2>
          <p className="text-xl text-teal-100 mb-8">Let us help you build the right foundation.</p>
          <Link href="/contact" className="inline-block bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </>
  )
}
