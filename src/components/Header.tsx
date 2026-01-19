'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    if (path === '/services') return pathname.startsWith('/services')
    if (path === '/blog') return pathname.startsWith('/blog')
    if (path === '/industries') return pathname.startsWith('/industries')
    return pathname === path
  }

  const linkClass = (path: string) =>
    isActive(path)
      ? 'text-teal-700 font-medium'
      : 'text-gray-700 hover:text-teal-700 transition-colors'

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/logos/gusto-law-logo.svg" 
            alt="Gusto Law" 
            width={140} 
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services" className={linkClass('/services')}>Services</Link>
          <Link href="/team" className={linkClass('/team')}>Team</Link>
          <Link href="/about" className={linkClass('/about')}>About</Link>
          <Link href="/blog" className={linkClass('/blog')}>Insights</Link>
          <Link href="/contact" className="bg-teal-700 text-white px-5 py-2.5 rounded hover:bg-teal-800 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
