import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface HeroBlockProps {
  headline: string
  subheadline?: string
  backgroundImage?: string
  showForm?: boolean
  ctaText?: string
  ctaLink?: string
  overlayOpacity?: number
  variant?: 'default' | 'centered' | 'split'
}

export function HeroBlock({
  headline,
  subheadline,
  backgroundImage = '/images/calgary-skyline.jpg',
  showForm = true,
  ctaText = 'Schedule a Consultation',
  ctaLink = '/contact',
  overlayOpacity = 40,
  variant = 'default',
}: HeroBlockProps) {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 bg-teal-900"
          style={{ opacity: overlayOpacity / 100 }}
        />
      </div>

      {/* Content */}
      <div className="relative container-default py-24 lg:py-32">
        <div
          className={cn(
            'grid gap-12',
            variant === 'split'
              ? 'lg:grid-cols-2 items-center'
              : 'lg:grid-cols-5'
          )}
        >
          {/* Text Content */}
          <div
            className={cn(
              'text-white',
              variant === 'centered'
                ? 'text-center lg:col-span-5 max-w-3xl mx-auto'
                : 'lg:col-span-3'
            )}
          >
            <h1 className="text-4xl md:text-5xl lg:text-display-sm font-bold mb-6 text-balance">
              {headline}
            </h1>
            {subheadline && (
              <p className="text-xl md:text-2xl text-teal-100 mb-8 text-pretty">
                {subheadline}
              </p>
            )}
            {!showForm && (
              <Button href={ctaLink} size="lg">
                {ctaText}
              </Button>
            )}
          </div>

          {/* Lead Capture Form */}
          {showForm && (
            <div
              className={cn(
                'lg:col-span-2',
                variant === 'centered' && 'lg:col-span-5 max-w-xl mx-auto w-full'
              )}
            >
              <div className="bg-white/95 backdrop-blur rounded-xl p-6 shadow-2xl">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="First Name*"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
                    />
                    <input
                      type="text"
                      placeholder="Last Name*"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email*"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent text-gray-900"
                  />
                  <Button type="submit" className="w-full">
                    Schedule a Consultation
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-3 text-center">
                  We&apos;re committed to your privacy. See our{' '}
                  <a href="/privacy-policy" className="text-teal-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
