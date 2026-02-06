import Link from 'next/link'
import FAQContent from './FAQContent'
import { faqCategories } from './faqData'

export const metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about corporate law, M&A, business formation, and more. Calgary lawyers answering your legal questions.',
  keywords: 'business lawyer FAQ Calgary, corporate law FAQ Alberta, M&A questions, legal FAQs, business formation questions',
  openGraph: {
    title: 'Frequently Asked Questions',
    description: 'Answers to your corporate law, M&A, and business formation questions.',
    url: 'https://gustolaw.ca/faq',
    siteName: 'Gusto Law',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'FAQ',
    description: 'Business law FAQs for Calgary and Alberta businesses.',
  },
  alternates: { canonical: 'https://gustolaw.ca/faq' },
}

function buildFAQSchema() {
  const allQuestions = faqCategories.flatMap(cat =>
    cat.faqs.map(faq => ({
      "@type": "Question" as const,
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer" as const, "text": faq.a }
    }))
  )

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "mainEntity": allQuestions
      },
      {
        "@type": "LegalService",
        "@id": "https://gustolaw.ca/#organization",
        "name": "Gusto Law",
        "legalName": "Augustine Lu Professional Corporation",
        "url": "https://gustolaw.ca",
        "telephone": "+1-403-988-8382",
        "email": "inquiries@gustolaw.ca",
        "address": { "@type": "PostalAddress", "streetAddress": "Suite 206, 110 11 Avenue SW", "addressLocality": "Calgary", "addressRegion": "AB", "postalCode": "T2R 0B8", "addressCountry": "CA" }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gustolaw.ca" },
          { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://gustolaw.ca/faq" }
        ]
      }
    ]
  }
}

export default function FAQPage() {
  const schemaData = buildFAQSchema()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-500 hover:text-teal-700">Home</Link></li>
            <li><span className="text-gray-400 mx-2">/</span></li>
            <li><span className="text-gray-900 font-medium">FAQ</span></li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity" style={{ backgroundImage: "url('/images/calgary-park.jpg')" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">Frequently Asked Questions</h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Get answers to common questions about corporate law, mergers & acquisitions, business formation, and more. Browse by topic or search all FAQs.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Content (Client Component) */}
      <FAQContent />

      {/* Related Services */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Our Services</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <Link href="/services/mergers-acquisitions" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Mergers & Acquisitions</h3>
              <p className="text-gray-600 text-sm">Strategic guidance through the complete M&A process.</p>
            </Link>
            <Link href="/services/business-formation" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Business Formation</h3>
              <p className="text-gray-600 text-sm">Build your business on a solid legal foundation.</p>
            </Link>
            <Link href="/services/corporate-commercial" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Corporate & Commercial</h3>
              <p className="text-gray-600 text-sm">The legal foundation for how your business operates.</p>
            </Link>
            <Link href="/services/fractional-general-counsel" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Fractional General Counsel</h3>
              <p className="text-gray-600 text-sm">Executive-level legal leadership without full-time cost.</p>
            </Link>
            <Link href="/services/dispute-resolution" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Dispute Resolution</h3>
              <p className="text-gray-600 text-sm">Resolve conflicts efficiently through negotiation and mediation.</p>
            </Link>
            <Link href="/services/joint-ventures" className="bg-gray-50 p-5 sm:p-6 rounded-lg border border-gray-200 hover:border-teal-300 hover:shadow-md transition-all">
              <h3 className="font-semibold text-gray-900 mb-2">Joint Ventures</h3>
              <p className="text-gray-600 text-sm">Structure strategic collaborations for shared success.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Didn't find your answer?</h2>
          <p className="text-lg sm:text-xl text-teal-100 mb-8">Let's discuss your specific legal needs and how we can help your business succeed.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://calendly.com/guslu-gustolaw/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-teal-800 px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-gray-100">Schedule a Consultation</a>
            <a href="tel:4039888382" className="inline-block border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded font-semibold hover:bg-white/10">Call (403) 988-8382</a>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 md:py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong>Legal Disclaimer:</strong> This FAQ page provides general information for educational purposes only and does not constitute legal advice. The answers provided are general in nature and may not apply to your specific situation. Laws in Alberta and Canada are complex and change frequently. Before making any legal decisions, you should consult with a qualified legal professional who can assess your particular circumstances. Gusto Law and its representatives are not liable for any loss or damage caused by reliance on the information contained herein. If you require legal advice specific to your situation, please contact us for a consultation.
          </p>
        </div>
      </section>
    </>
  )
}
