import { ServiceCard } from '@/components/ui/Card'
import { cn } from '@/lib/utils'

interface Service {
  title: string
  description?: string
  icon?: string
  href: string
}

interface ServicesGridBlockProps {
  headline?: string
  subheadline?: string
  services: Service[]
  columns?: 2 | 3 | 4
  showDescriptions?: boolean
  className?: string
}

export function ServicesGridBlock({
  headline = 'What We Do',
  subheadline,
  services,
  columns = 3,
  showDescriptions = true,
  className,
}: ServicesGridBlockProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <section className={cn('section-padding bg-white', className)}>
      <div className="container-default">
        {/* Header */}
        {(headline || subheadline) && (
          <div className="text-center max-w-3xl mx-auto mb-12">
            {headline && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {headline}
              </h2>
            )}
            {subheadline && (
              <p className="text-lg text-gray-600">{subheadline}</p>
            )}
          </div>
        )}

        {/* Services Grid */}
        <div className={cn('grid grid-cols-1 gap-6', gridCols[columns])}>
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={showDescriptions ? service.description : undefined}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Default services for Gusto Law
export const defaultServices: Service[] = [
  {
    title: 'Mergers & Acquisitions',
    description: 'Strategic guidance through complex M&A transactions, from due diligence to closing.',
    icon: '/images/icons/ma-icon.svg',
    href: '/services/mergers-acquisitions',
  },
  {
    title: 'Fractional General Counsel',
    description: 'On-demand legal leadership for growing businesses without the full-time cost.',
    icon: '/images/icons/gc-icon.svg',
    href: '/services/fractional-general-counsel',
  },
  {
    title: 'Business Formation',
    description: 'Structure your business for success with the right corporate entity and governance.',
    icon: '/images/icons/formation-icon.svg',
    href: '/services/business-formation',
  },
  {
    title: 'Corporate & Commercial',
    description: 'Comprehensive corporate counsel for contracts, compliance, and commercial matters.',
    icon: '/images/icons/corporate-icon.svg',
    href: '/services/corporate-commercial',
  },
  {
    title: 'Dispute Resolution',
    description: 'Practical resolution strategies to protect your business interests efficiently.',
    icon: '/images/icons/dispute-icon.svg',
    href: '/services/dispute-resolution',
  },
  {
    title: 'Joint Ventures',
    description: 'Navigate complex partnerships and strategic relationships with confidence.',
    icon: '/images/icons/jv-icon.svg',
    href: '/services/joint-ventures',
  },
]
