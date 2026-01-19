import {sanityFetch} from '@/lib/sanity'
import {navigationQuery} from '@/queries'
import Header from './Header'
import Footer from './Footer'

interface NavigationData {
  practiceAreas: Array<{
    _id: string
    title: string
    slug: string
    shortDescription?: string
  }>
  industries: Array<{
    _id: string
    title: string
    slug: string
    shortDescription?: string
  }>
  attorneys: Array<{
    _id: string
    name: string
    slug: string
    title: string
    headshot?: {
      asset: {
        url: string
      }
    }
  }>
  settings: {
    firmName?: string
    logo?: {
      asset: {
        url: string
      }
      alt?: string
    }
    phone?: string
    email?: string
    address?: {
      street?: string
      suite?: string
      city?: string
      province?: string
      postalCode?: string
      country?: string
    }
    bookingUrl?: string
    bookingButtonText?: string
    socialLinks?: Array<{
      platform: 'linkedin' | 'facebook' | 'twitter' | 'instagram' | 'youtube'
      url: string
    }>
    footerText?: string
    footerDisclaimer?: string
  }
}

interface LayoutProps {
  children: React.ReactNode
}

export default async function Layout({children}: LayoutProps) {
  const data = await sanityFetch<NavigationData>({
    query: navigationQuery,
    tags: ['siteSettings', 'practiceArea', 'attorney'],
  })

  const {practiceAreas, industries, attorneys, settings} = data

  return (
    <div className="flex min-h-screen flex-col">
      <Header
        logo={settings?.logo}
        firmName={settings?.firmName}
        phone={settings?.phone}
        bookingUrl={settings?.bookingUrl}
        bookingButtonText={settings?.bookingButtonText}
        practiceAreas={practiceAreas || []}
        industries={industries || []}
        attorneys={attorneys || []}
      />

      <main className="flex-1">{children}</main>

      <Footer
        logo={settings?.logo}
        firmName={settings?.firmName}
        phone={settings?.phone}
        email={settings?.email}
        address={settings?.address}
        socialLinks={settings?.socialLinks}
        footerText={settings?.footerText}
        footerDisclaimer={settings?.footerDisclaimer}
        bookingUrl={settings?.bookingUrl}
        bookingButtonText={settings?.bookingButtonText}
      />
    </div>
  )
}
