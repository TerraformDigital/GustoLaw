export const metadata = {
  title: 'Sanity Studio | Gusto Law',
  robots: 'noindex',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <style>{`
        header { display: none !important; }
        footer { display: none !important; }
        main { padding: 0 !important; margin: 0 !important; }
        .elfsight-app-8aef0216-0f5f-4bc1-b830-2b0b367e556c { display: none !important; }
        [data-elfsight-app-lazy] { display: none !important; }
      `}</style>
      {children}
    </>
  )
}
