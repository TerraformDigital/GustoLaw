import Link from 'next/link'

export const metadata = {
  title: 'Legal Services | Gusto Law Calgary',
  description: 'Corporate and commercial legal services for established Alberta businesses. M&A, fractional general counsel, business formation, and more.',
}

const services = [
  {
    title: 'Mergers & Acquisitions',
    description: 'Strategic guidance through the complete M&A process—from initial due diligence to closing. We represent buyers and sellers in complex transactions.',
    href: '/services/mergers-acquisitions',
  },
  {
    title: 'Fractional General Counsel',
    description: 'On-demand legal leadership for growing businesses. Get experienced general counsel services without the full-time cost.',
    href: '/services/fractional-general-counsel',
  },
  {
    title: 'Business Formation',
    description: 'Structure your business for success from day one. We help you choose the right entity and establish proper governance.',
    href: '/services/business-formation',
  },
  {
    title: 'Corporate & Commercial',
    description: 'Comprehensive legal support for day-to-day business operations, contracts, and commercial relationships.',
    href: '/services/corporate-commercial',
  },
  {
    title: 'Dispute Resolution',
    description: 'Practical strategies to resolve business disputes efficiently while protecting your interests and relationships.',
    href: '/services/dispute-resolution',
  },
  {
    title: 'Joint Ventures',
    description: 'Navigate complex partnerships with clear agreements, governance structures, and exit strategies.',
    href: '/services/joint-ventures',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <header className="bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-teal-100 max-w-2xl">
            Comprehensive legal solutions for established businesses. We provide strategic counsel across the full spectrum of corporate and commercial matters.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white p-8 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <span className="text-teal-700 font-medium group-hover:translate-x-1 transition-transform inline-block">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Not Sure What You Need?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Schedule a consultation and we will help identify the right legal support for your business.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-teal-700 text-white px-8 py-4 rounded font-medium hover:bg-teal-800 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
