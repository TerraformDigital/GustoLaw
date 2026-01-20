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
        
        {/* Google Reviews Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">What Our Clients Say</h2>
            <div 
              className="elfsight-app-8aef0216-0f5f-4bc1-b830-2b0b367e556c" 
              data-elfsight-app-lazy
            />
          </div>
        </section>
        
        <Footer />
      </body>
    </html>
  )
}
