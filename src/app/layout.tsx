import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'
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
    images: [{ url: 'https://gustolaw.ca/wp-content/uploads/2022/01/Gusto-Law-OG.jpg', width: 1200, height: 630, alt: 'Gusto Law - Corporate & Business Lawyers in Calgary' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@GustoLaw',
    images: ['https://gustolaw.ca/wp-content/uploads/2022/01/Gusto-Law-OG.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Elfsight Google Reviews Widget */}
        <Script 
          src="https://static.elfsight.com/platform/platform.js" 
          strategy="lazyOnload"
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main className="pt-16 sm:pt-18 md:pt-20">
          {children}
        </main>
        <Footer />
        
        {/* Elfsight Google Reviews - Floating Widget */}
        <div 
          className="elfsight-app-8aef0216-0f5f-4bc1-b830-2b0b367e556c" 
          data-elfsight-app-lazy
        />
      </body>
    </html>
  )
}
