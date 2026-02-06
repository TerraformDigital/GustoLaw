import Link from 'next/link'

export const metadata = {
  title: 'About Gusto Law | Calgary Corporate Law Firm',
  description: 'Learn about Gusto Law, a Calgary-based corporate law firm built on a client-first approach. Our experienced lawyers serve businesses across Alberta with practical, results-driven legal counsel.',
  keywords: 'about Gusto Law, Calgary law firm, Alberta corporate lawyers, business law firm Calgary',
  openGraph: {
    title: 'About Gusto Law | Calgary Corporate Law Firm',
    description: 'Learn about Gusto Law, a Calgary-based corporate law firm built on a client-first approach.',
    url: 'https://gustolaw.ca/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'About Gusto Law | Calgary Corporate Law Firm',
    description: 'Learn about Gusto Law, a Calgary-based corporate law firm built on a client-first approach.',
  },
  alternates: {
    canonical: 'https://gustolaw.ca/about',
  },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <header className="bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 pt-32 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Gusto Law</h1>
          <p className="text-xl text-teal-100">
            A boutique corporate law firm serving established businesses in Calgary and Alberta.
          </p>
        </div>
      </header>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="prose prose-lg text-gray-600">
            <p>
              Gusto Law was founded with a clear mission: to provide established businesses with the strategic legal counsel they deserve, delivered with the personalized attention that larger firms often cannot offer.
            </p>
            <p>
              Based in Calgary, we understand the unique challenges facing businesses in Alberta—from navigating the energy sector to supporting the growing technology industry. Our team brings together deep legal experience with practical business acumen.
            </p>
            <p>
              We believe in building lasting relationships with our clients. Rather than transactional interactions, we aim to become your trusted legal partner, understanding your business deeply and providing counsel that aligns with your long-term objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Client-First</h3>
              <p className="text-gray-600">Your success is our priority. We take the time to understand your business and tailor our advice accordingly.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">We provide honest, straightforward advice—even when it is not what you want to hear.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Results-Driven</h3>
              <p className="text-gray-600">We focus on practical outcomes that move your business forward efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-teal-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Let us discuss how we can support your business goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs text-gray-500 text-center">
            This content is for informational purposes only and does not constitute legal advice. For legal guidance tailored to your situation, please consult a qualified lawyer.
          </p>
        </div>
      </section>
    </>
  )
}
