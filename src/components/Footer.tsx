import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Gusto Law</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Corporate counsel for established Alberta businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/services/mergers-acquisitions" className="hover:text-white transition-colors">
                  Mergers & Acquisitions
                </Link>
              </li>
              <li>
                <Link href="/services/fractional-general-counsel" className="hover:text-white transition-colors">
                  Fractional General Counsel
                </Link>
              </li>
              <li>
                <Link href="/services/business-formation" className="hover:text-white transition-colors">
                  Business Formation
                </Link>
              </li>
              <li>
                <Link href="/services/corporate-commercial" className="hover:text-white transition-colors">
                  Corporate & Commercial
                </Link>
              </li>
            </ul>
          </div>

          {/* Firm */}
          <div>
            <h4 className="font-semibold mb-4">Firm</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Suite 206, 110 11 Avenue SW</li>
              <li>Calgary, AB T2R 0B8</li>
              <li>
                <a href="tel:+14039888382" className="hover:text-white transition-colors">
                  (403) 988-8382
                </a>
              </li>
              <li>
                <a href="mailto:inquiries@gustolaw.ca" className="hover:text-white transition-colors">
                  inquiries@gustolaw.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Augustine Lu Professional Corporation. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            This content is for informational purposes only and does not constitute legal advice. For legal guidance tailored to your situation, please consult a qualified lawyer.
          </p>
        </div>
      </div>
    </footer>
  )
}
