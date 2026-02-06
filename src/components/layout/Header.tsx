'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Mergers & Acquisitions', href: '/services/mergers-acquisitions' },
      { name: 'Fractional General Counsel', href: '/services/fractional-general-counsel' },
      { name: 'Business Formation', href: '/services/business-formation' },
      { name: 'Corporate & Commercial', href: '/services/corporate-commercial' },
      { name: 'Dispute Resolution', href: '/services/dispute-resolution' },
      { name: 'Joint Ventures', href: '/services/joint-ventures' },
    ],
  },
  {
    name: 'Industries',
    href: '/industries',
    children: [
      { name: 'Technology & Software', href: '/industries/technology' },
      { name: 'Oil & Gas', href: '/industries/oil-gas' },
    ],
  },
  { name: 'Team', href: '/team' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-default">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/gusto-law-logo.svg"
              alt="Gusto Law"
              width={160}
              height={48}
              className={cn(
                'h-10 w-auto transition-all',
                !isScrolled && 'brightness-0 invert'
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'text-sm font-medium transition-colors flex items-center gap-1',
                    isScrolled
                      ? 'text-gray-700 hover:text-teal-600'
                      : 'text-white/90 hover:text-white',
                    pathname === item.href && 'text-teal-600'
                  )}
                >
                  {item.name}
                  {item.children && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-600"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              href="/contact"
              variant={isScrolled ? 'primary' : 'outline'}
              size="sm"
              className={cn(
                !isScrolled && 'border-white text-white hover:bg-white/10'
              )}
            >
              Schedule a Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={cn(
                'w-6 h-6',
                isScrolled ? 'text-gray-900' : 'text-white'
              )}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md font-medium"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 px-3">
                <Button href="/contact" className="w-full">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
