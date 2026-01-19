import Image from 'next/image'
import Link from 'next/link'
import { TeamCard } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface TeamMember {
  name: string
  role: string
  image: string
  href: string
  bio?: string
}

interface TeamGridBlockProps {
  headline?: string
  subheadline?: string
  teamMembers: TeamMember[]
  layout?: 'grid' | 'featured'
  showBio?: boolean
  className?: string
}

export function TeamGridBlock({
  headline = 'Meet Our Team',
  subheadline,
  teamMembers,
  layout = 'featured',
  showBio = true,
  className,
}: TeamGridBlockProps) {
  if (layout === 'featured' && teamMembers.length <= 2) {
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

          {/* Featured Layout - Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                {/* Photo */}
                <Link
                  href={member.href}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-48 h-56 md:w-56 md:h-64 rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>

                {/* Info */}
                <div className="flex-1">
                  <Link href={member.href} className="group">
                    <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                      {member.name}
                    </h3>
                  </Link>
                  <p className="text-teal-600 font-medium mt-1 mb-4">
                    {member.role}
                  </p>
                  {showBio && member.bio && (
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  )}
                  <Button href={member.href} variant="outline" size="sm">
                    View Profile
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  // Grid Layout
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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              href={member.href}
              bio={showBio ? member.bio : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// Default team for Gusto Law
export const defaultTeam: TeamMember[] = [
  {
    name: 'Gus Lu',
    role: 'Founder & Principal Lawyer',
    image: '/images/team/gus-lu.jpg',
    href: '/team/gus-lu',
    bio: 'Yale-educated corporate lawyer with extensive experience advising PE-backed companies on complex transactions and strategic business matters.',
  },
  {
    name: 'Tyler Anthony',
    role: 'Associate',
    image: '/images/team/tyler-anthony.jpg',
    href: '/team/tyler-anthony',
    bio: 'Dedicated associate focused on corporate and commercial matters, supporting clients through transactions and ongoing business needs.',
  },
]
