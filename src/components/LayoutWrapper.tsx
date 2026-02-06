'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isStudio = pathname.startsWith('/studio')

  if (isStudio) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-18 md:pt-20">{children}</main>
      <Footer />
      <div
        className="elfsight-app-8aef0216-0f5f-4bc1-b830-2b0b367e556c"
        data-elfsight-app-lazy
      />
    </>
  )
}
