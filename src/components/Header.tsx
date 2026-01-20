'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo - responsive sizing */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logos/gusto-law-logo.svg"
            alt="Gusto Law"
            width={140}
            height={40}
            className="h-8 w-auto sm:h-9 md:h-10"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-gray-700 hover:text-teal-700 font-medium transition-colors">
            Services
          </Link>
          <Link href="/team" className="text-gray-700 hover:text-teal-700 transition-colors">
            Team
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-teal-700 transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-teal-700 transition-colors">
            Insights
          </Link>
          <Link
            href="/contact"
            className="bg-teal-700 text-white px-5 py-2.5 rounded hover:bg-teal-800 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-700 hover:text-teal-700 hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            // X icon when menu is open
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon when menu is closed
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1 bg-white border-t border-gray-100">
          <Link
            href="/services"
            className="block px-4 py-3 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/team"
            className="block px-4 py-3 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            href="/about"
            className="block px-4 py-3 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blog"
            className="block px-4 py-3 text-gray-700 hover:text-teal-700 hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Insights
          </Link>
          <div className="pt-2">
            <Link
              href="/contact"
              className="block w-full text-center bg-teal-700 text-white px-5 py-3 rounded-lg hover:bg-teal-800 transition-colors font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
          {/* Phone number for mobile */}
          <div className="pt-2 pb-1">
            <a
              href="tel:4039888382"
              className="flex items-center justify-center gap-2 px-4 py-3 text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-medium">(403) 988-8382</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
