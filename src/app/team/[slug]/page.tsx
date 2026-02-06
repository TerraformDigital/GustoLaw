import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

interface TeamMember {
  id: string
  slug: string
  name: string
  role: string
  image: string
  bio: string[]
  shortBio: string
  education: {
    degree: string
    school: string
    year: number
  }[]
  practiceAreas: {
    name: string
    description: string
  }[]
  memberships: string[]
  credentials: {
    name: string
    logo: string
  }[]
}

const teamMembers: TeamMember[] = [
  {
    id: 'gus-lu',
    slug: 'gus-lu',
    name: 'Gus Lu',
    role: 'Founder',
    image: '/images/team/gus-lu.png',
    shortBio: 'Former TV producer turned corporate lawyer with deep M&A and general counsel experience.',
    bio: [
      'Gus is the founder of Gusto Law and brings a unique perspective to corporate law practice. With a background as a television producer and film studies graduate from Yale University, Gus has always approached legal problems with creativity and pragmatism. His clients recognize and appreciate his ability to apply innovative solutions to complex technical legal challenges, making sophisticated corporate matters accessible and manageable.',
      'Over his career, Gus has served as general counsel for both U.S. and Canada-based private equity portfolio companies, gaining deep insight into the operational and strategic needs of growing businesses. He has extensive experience in securities and mergers & acquisitions law, having practiced in these areas at a top-ranked national firm. This background enables him to provide sophisticated counsel on high-stakes transactions while maintaining focus on practical business outcomes.',
      'Gus has guided entrepreneurs, emerging companies, and mid to large-cap enterprises through every stage of their business lifecycle. From initial formation and securing investment capital, through periods of aggressive growth and navigating challenges, to negotiating divestitures and executing complex business combinations, Gus brings tested expertise and strategic insight to help clients achieve their objectives efficiently and effectively.'
    ],
    education: [
      {
        degree: 'JD',
        school: 'University of Calgary',
        year: 2010
      },
      {
        degree: 'BA',
        school: 'Yale University',
        year: 2001
      }
    ],
    practiceAreas: [
      {
        name: 'Corporate Law',
        description: 'General corporate matters, governance, and compliance'
      },
      {
        name: 'M&A',
        description: 'Mergers, acquisitions, and complex business combinations'
      },
      {
        name: 'Commercial Advisory',
        description: 'Strategic business counsel on major transactions and decisions'
      },
      {
        name: 'Fractional General Counsel',
        description: 'Ongoing strategic legal advisory for growing enterprises'
      }
    ],
    memberships: [
      'Law Society of Alberta',
      'Canadian Bar Association'
    ],
    credentials: [
      {
        name: 'Law Society of Alberta',
        logo: '/images/logos/law-society-alberta.png'
      },
      {
        name: 'Canadian Bar Association',
        logo: '/images/logos/canadian-bar-association.png'
      },
      {
        name: 'University of Calgary',
        logo: '/images/logos/university-calgary.png'
      }
    ]
  },
  {
    id: 'tyler-anthony',
    slug: 'tyler-anthony',
    name: 'Tyler Anthony',
    role: 'Associate',
    image: '/images/team/tyler-anthony-1.jpg',
    shortBio: 'Business-minded lawyer providing strategic legal support to startups and scale-ups.',
    bio: [
      'Tyler is an accomplished corporate lawyer who provides practical and strategic legal support to emerging companies, entrepreneurs, and investors. With a deep understanding of business dynamics and growth challenges, Tyler advises clients across a diverse range of sectors including technology, software, SaaS, real estate, and professional services. His approach combines rigorous legal analysis with genuine business sense, helping his clients make informed decisions that drive growth.',
      'Before joining Gusto Law, Tyler worked at a top-tier national firm in Calgary, where he developed his expertise through acting for financial institutions and large corporate clients on sophisticated transactions and matters. This big firm experience gave him exposure to complex legal structures, institutional investor expectations, and enterprise-scale operations. He has leveraged this valuable foundation to specialize in serving the startup and scale-up community.',
      'Tyler brings the insight and rigor of big firm legal practice directly to the entrepreneurs and emerging companies that need it most. He combines institutional legal knowledge with a hands-on, business-first approach that makes him an ideal advisor for companies navigating growth, seeking investment, or planning strategic transactions. Tyler is known for making legal counsel accessible and actionable for founders and business leaders at every stage.'
    ],
    education: [
      {
        degree: 'JD',
        school: 'University of Calgary',
        year: 2020
      },
      {
        degree: 'BSc',
        school: 'University of Calgary',
        year: 2014
      }
    ],
    practiceAreas: [
      {
        name: 'Corporate Law',
        description: 'Corporate governance, formation, and ongoing advisory'
      },
      {
        name: 'M&A',
        description: 'Acquisitions, investments, and strategic transactions'
      },
      {
        name: 'Banking & Finance',
        description: 'Financing arrangements and debt instruments'
      },
      {
        name: 'Business Formations',
        description: 'Entity structuring and startup incorporation'
      }
    ],
    memberships: [
      'Law Society of Alberta',
      'Canadian Bar Association'
    ],
    credentials: [
      {
        name: 'Law Society of Alberta',
        logo: '/images/logos/law-society-alberta.png'
      },
      {
        name: 'Canadian Bar Association',
        logo: '/images/logos/canadian-bar-association.png'
      },
      {
        name: 'University of Calgary',
        logo: '/images/logos/university-calgary.png'
      }
    ]
  }
]

export function generateStaticParams() {
  return teamMembers.map((member) => ({
    slug: member.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug)

  if (!member) {
    return {}
  }

  return {
    title: `${member.name} - ${member.role}`,
    description: `${member.name} is a ${member.role.toLowerCase()} at Gusto Law. ${member.shortBio}`,
    openGraph: {
      title: `${member.name} - ${member.role}`,
      description: `${member.name} is a ${member.role.toLowerCase()} at Gusto Law. ${member.shortBio}`,
      type: 'profile',
      firstName: member.name.split(' ')[0],
      lastName: member.name.split(' ')[1],
      images: [
        {
          url: `https://gustolaw.ca${member.image}`,
          width: 500,
          height: 600,
          alt: `${member.name}`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${member.name} - ${member.role}`,
      description: `${member.name} is a ${member.role.toLowerCase()} at Gusto Law. ${member.shortBio}`,
      images: [`https://gustolaw.ca${member.image}`],
    },
    alternates: {
      canonical: `https://gustolaw.ca/team/${member.slug}`,
    },
  }
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = teamMembers.find((m) => m.slug === params.slug)

  if (!member) {
    notFound()
  }

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: member.name,
    jobTitle: member.role,
    image: `https://gustolaw.ca${member.image}`,
    worksFor: {
      '@type': 'Organization',
      name: 'Gusto Law',
      url: 'https://gustolaw.ca',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calgary, Alberta',
        addressCountry: 'CA'
      }
    },
    affiliation: member.memberships.map(membership => ({
      '@type': 'Organization',
      name: membership
    })),
    educationDetail: member.education.map(edu => ({
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: edu.degree,
      issuingOrganization: {
        '@type': 'EducationalOrganization',
        name: edu.school
      },
      dateCreated: `${edu.year}`
    })),
    knowsAbout: member.practiceAreas.map(area => area.name),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 pt-28 pb-4 flex items-center gap-2 text-sm">
          <Link href="/" className="text-teal-700 hover:text-teal-800 font-medium">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <Link href="/team" className="text-teal-700 hover:text-teal-800 font-medium">
            Team
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{member.name}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            {/* Image */}
            <div className="flex items-end justify-center pt-12">
              <Image
                src={member.image}
                alt={member.name}
                width={500}
                height={600}
                className="w-full max-w-md object-cover object-top"
                style={{ marginBottom: '-4px' }}
                priority
              />
            </div>

            {/* Info */}
            <div className="py-16 md:py-24">
              <p className="text-teal-300 font-semibold text-lg mb-2">{member.role}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{member.name}</h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {member.shortBio}
              </p>

              {/* CTA */}
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded font-medium transition-colors"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/team"
                  className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded font-medium transition-colors"
                >
                  Back to Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 border-b border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-8 items-center justify-center">
            {member.credentials.map((credential) => (
              <div key={credential.name} className="flex items-center">
                <Image
                  src={credential.logo}
                  alt={credential.name}
                  width={100}
                  height={50}
                  className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About {member.name.split(' ')[0]}</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            {member.bio.map((paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Practice Areas */}
      <section className="py-16 md:py-24 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
              <div className="space-y-4">
                {member.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-teal-600 pl-4">
                    <p className="font-semibold text-gray-900">
                      {edu.degree} • {edu.school}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">Graduated {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Areas */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Practice</h3>
              <div className="space-y-4">
                {member.practiceAreas.map((area, index) => (
                  <div key={index} className="border-l-4 border-teal-600 pl-4">
                    <p className="font-semibold text-gray-900">{area.name}</p>
                    <p className="text-sm text-gray-600 mt-1">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Memberships</h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {member.memberships.map((membership, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg border border-teal-200"
              >
                <span className="text-teal-600 font-bold mt-1">✓</span>
                <span className="text-gray-900 font-medium">{membership}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Schedule a consultation with {member.name.split(' ')[0]} to discuss your business needs and legal strategy.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-900 px-8 py-4 rounded font-medium hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-sm text-gray-600 text-center">
            This website provides information about Gusto Law and its services. The information provided is for educational and informational purposes only and does not constitute legal advice. No attorney-client relationship is established by reading this website. Please consult with a lawyer for legal advice regarding your specific situation.
          </p>
        </div>
      </section>

      {/* Back to Team Link */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/team"
            className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-medium transition-colors"
          >
            <span>←</span> Back to Team
          </Link>
        </div>
      </section>
    </>
  )
}
