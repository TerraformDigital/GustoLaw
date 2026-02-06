import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Our Team | Gusto Law Calgary',
  description: 'Meet the lawyers at Gusto Law. Experienced corporate counsel serving Calgary and Alberta businesses.',
}

export default function TeamPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-50 to-teal-50 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experienced corporate lawyers combining technical skill with practical business judgment.
          </p>
        </div>
      </header>

      {/* Gus Lu */}
      <section className="py-16 md:py-24 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <Image
                src="/images/team/gus-lu.png"
                alt="Gus Lu - Founder of Gusto Law"
                width={500}
                height={600}
                className="rounded-lg shadow-lg w-full"
              />
              <div className="mt-8 flex flex-wrap gap-6 items-center justify-center">
                <Image src="/images/logos/law-society-alberta.png" alt="Law Society of Alberta" width={100} height={50} className="h-10 w-auto opacity-70" />
                <Image src="/images/logos/canadian-bar-association.png" alt="Canadian Bar Association" width={100} height={50} className="h-10 w-auto opacity-70" />
                <Image src="/images/logos/university-calgary.png" alt="University of Calgary" width={100} height={50} className="h-10 w-auto opacity-70" />
              </div>
            </div>
            <div>
              <p className="text-teal-700 font-medium mb-2">Founder</p>
              <Link href="/team/gus-lu" className="block hover:text-teal-700 transition-colors">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-teal-700 transition-colors">Gus Lu</h2>
              </Link>

              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Gus is the founder of Gusto Law. He has served as general counsel for U.S. and Canada-based private equity portfolio companies, and formerly practiced in the areas of securities and mergers & acquisitions law at a top-ranked national firm.
                </p>
                <p>
                  A former television producer and film studies graduate from Yale University, Gus is recognized by his clients for applying creative solutions to technical legal problems.
                </p>
                <p>
                  Gus has guided entrepreneurs and mid to large-cap companies in various stages of their life cycles, from initial formation and fundraising, navigating periods of growth and challenges, to negotiating divestitures and forming new business combinations.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Education</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>JD, University of Calgary, 2010</li>
                    <li>BA, Yale University, 2001</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Areas of Practice</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Corporate Law</li>
                    <li>M&A</li>
                    <li>Commercial Advisory</li>
                    <li>Fractional General Counsel</li>
                  </ul>
                </div>
              </div>

              <Link
                href="/team/gus-lu"
                className="inline-block bg-teal-700 text-white px-6 py-2 rounded font-medium hover:bg-teal-800 transition-colors"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tyler Anthony */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="md:order-2">
              <Image
                src="/images/team/tyler-anthony-1.jpg"
                alt="Tyler Anthony - Lawyer at Gusto Law"
                width={500}
                height={600}
                className="rounded-lg shadow-lg w-full"
              />
              <div className="mt-8 flex flex-wrap gap-6 items-center justify-center">
                <Image src="/images/logos/law-society-alberta.png" alt="Law Society of Alberta" width={100} height={50} className="h-10 w-auto opacity-70" />
                <Image src="/images/logos/canadian-bar-association.png" alt="Canadian Bar Association" width={100} height={50} className="h-10 w-auto opacity-70" />
                <Image src="/images/logos/university-calgary.png" alt="University of Calgary" width={100} height={50} className="h-10 w-auto opacity-70" />
              </div>
            </div>
            <div className="md:order-1">
              <p className="text-teal-700 font-medium mb-2">Associate</p>
              <Link href="/team/tyler-anthony" className="block hover:text-teal-700 transition-colors">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-teal-700 transition-colors">Tyler Anthony</h2>
              </Link>

              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Tyler is a business-minded lawyer who provides practical and strategic legal support to emerging companies, entrepreneurs, and investors. He advises clients across a range of sectors, including technology, software, SaaS, real estate, and professional services.
                </p>
                <p>
                  Before joining Gusto Law, Tyler worked at a top-tier national firm in Calgary, where he acted for financial institutions and large corporate clients. He brings this experience into his work with startups and scale-ups, combining big firm legal insight with a hands-on, business-first approach.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Education</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>JD, University of Calgary, 2020</li>
                    <li>BSc, University of Calgary, 2014</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Areas of Practice</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Corporate Law</li>
                    <li>M&A</li>
                    <li>Banking & Finance</li>
                    <li>Business Formations</li>
                  </ul>
                </div>
              </div>

              <Link
                href="/team/tyler-anthony"
                className="inline-block bg-teal-700 text-white px-6 py-2 rounded font-medium hover:bg-teal-800 transition-colors"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Schedule a consultation to discuss your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
