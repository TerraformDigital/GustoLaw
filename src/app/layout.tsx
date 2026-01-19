import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gustolaw.ca'),
  title: {
    default: 'Gusto Law | Calgary Business Lawyer | Corporate & M&A Law',
    template: '%s | Gusto Law',
  },
  description:
    'Gusto Law is a Calgary-based corporate law firm providing strategic legal counsel for established businesses. Focused on M&A, fractional general counsel, and corporate law.',
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
