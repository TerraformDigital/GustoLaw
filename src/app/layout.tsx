import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: {
    default: 'Gusto Law | Corporate Lawyers Calgary',
    template: '%s | Gusto Law',
  },
  description: 'Corporate and commercial law firm in Calgary, Alberta. M&A, fractional general counsel, business formation, and commercial contracts for established Alberta businesses.',
  keywords: 'corporate lawyer Calgary, business lawyer Alberta, M&A lawyer, commercial lawyer Calgary',
  authors: [{ name: 'Gusto Law' }],
  creator: 'Gusto Law',
  metadataBase: new URL('https://gustolaw.ca'),
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://gustolaw.ca',
    siteName: 'Gusto Law',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16 sm:pt-18 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
