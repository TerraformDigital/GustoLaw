import Link from 'next/link'
import Image from 'next/image'

const footerLinks = {
  services: [
    { name: 'Mergers & Acquisitions', href: '/services/mergers-acquisitions' },
    { name: 'Fractional General Counsel', href: '/services/fractional-general-counsel' },
    { name: 'Business Formation', href: '/services/business-formation' },
    { name: 'Corporate & Commercial', href: '/services/corporate-commercial' },
  ],
  firm: [
    { name: 'About', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Insights', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logos/gusto-law-logo.svg"
                alt="Gusto Law"
                width={140}
                height={42}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Strategic legal counsel for established businesses in Calgary and Alberta.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Firm Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Firm</h4>
            <ul className="space-y-3">
              {footerLinks.firm.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Suite 206, 110 11 Avenue SW</li>
              <li>Calgary, AB T2R 0B8</li>
              <li className="pt-2">
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Augustine Lu Professional Corporation. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs mt-4 leading-relaxed">
            This content is for informational purposes only and does not constitute legal advice. For legal guidance tailored to your situation, please consult a qualified lawyer.
          </p>
        </div>
      </div>
    </footer>
  )
}
