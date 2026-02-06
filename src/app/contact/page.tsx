import Link from 'next/link'

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Gusto Law in Calgary for corporate law, M&A, business formation, and commercial legal services. Schedule a consultation with our experienced business lawyers.',
  keywords: 'contact Gusto Law, Calgary lawyer consultation, business lawyer Calgary phone, corporate law firm contact',
  openGraph: {
    title: 'Contact Us',
    description: 'Contact Gusto Law in Calgary for corporate law, M&A, business formation, and commercial legal services.',
    url: 'https://gustolaw.ca/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image' as const,
    title: 'Contact Us',
    description: 'Contact Gusto Law in Calgary for corporate law and business legal services.',
  },
  alternates: {
    canonical: 'https://gustolaw.ca/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-gray-900 pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-luminosity" style={{ backgroundImage: "url('/images/calgary-downtown.jpg')" }} />
        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-teal-100">
            Ready to discuss your business needs? Get in touch with our team.
          </p>
        </div>
      </header>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We would love to hear from you. Whether you have a question about our services, need legal guidance, or want to schedule a consultation, our team is here to help.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
                  <p className="text-gray-600">
                    Suite 206, 110 11 Avenue SW<br />
                    Calgary, AB T2R 0B8
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <a href="tel:+14039888382" className="text-teal-700 hover:text-teal-800">
                    (403) 988-8382
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:inquiries@gustolaw.ca" className="text-teal-700 hover:text-teal-800">
                    inquiries@gustolaw.ca
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Consultation Fee</h3>
                  <p className="text-gray-600">
                    Initial consultations are $250 + GST for up to one hour.
                  </p>
                </div>
              </div>
            </div>

            {/* Book a Consultation */}
            <div className="bg-gradient-to-br from-teal-800 to-teal-900 p-8 md:p-10 rounded-lg text-white">
              <h2 className="text-2xl font-bold mb-4">Book a Consultation</h2>
              <p className="text-teal-100 mb-6 leading-relaxed">
                The best way to get started is to book a 30-minute consultation directly with Gus.
                We will discuss your situation, answer your questions, and outline how we can help.
              </p>
              <div className="bg-white/10 rounded-lg p-6 mb-6">
                <div className="flex items-start gap-4 mb-4">
                  <svg className="w-6 h-6 text-teal-300 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold">30-Minute Consultation</p>
                    <p className="text-teal-200 text-sm">$250 + GST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 text-teal-300 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold">Virtual or In-Person</p>
                    <p className="text-teal-200 text-sm">Video call or at our Calgary office</p>
                  </div>
                </div>
              </div>
              <a
                href="https://calendly.com/guslu-gustolaw/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-teal-900 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center text-lg"
              >
                Book Your Consultation
              </a>
              <p className="text-teal-300 text-sm mt-4 text-center">
                Choose a time that works for you on our calendar
              </p>
            </div>
          </div>
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
