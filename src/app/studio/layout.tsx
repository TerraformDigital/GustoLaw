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
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
