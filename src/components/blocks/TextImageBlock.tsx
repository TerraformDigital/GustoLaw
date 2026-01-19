import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface TextImageBlockProps {
  eyebrow?: string
  headline: string
  content: React.ReactNode
  image: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  ctaText?: string
  ctaLink?: string
  backgroundColor?: 'white' | 'gray' | 'teal'
}

export function TextImageBlock({
  eyebrow,
  headline,
  content,
  image,
  imageAlt = '',
  imagePosition = 'right',
  ctaText,
  ctaLink,
  backgroundColor = 'white',
}: TextImageBlockProps) {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    teal: 'bg-teal-900 text-white',
  }

  return (
    <section className={cn('section-padding', bgColors[backgroundColor])}>
      <div className="container-default">
        <div
          className={cn(
            'grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center',
            imagePosition === 'left' && 'lg:flex-row-reverse'
          )}
        >
          {/* Text Content */}
          <div className={cn(imagePosition === 'left' && 'lg:order-2')}>
            {eyebrow && (
              <p
                className={cn(
                  'text-sm font-semibold tracking-wider uppercase mb-3',
                  backgroundColor === 'teal' ? 'text-cyan-400' : 'text-teal-600'
                )}
              >
                {eyebrow}
              </p>
            )}
            <h2
              className={cn(
                'text-3xl md:text-4xl font-bold mb-6',
                backgroundColor === 'teal' ? 'text-white' : 'text-gray-900'
              )}
            >
              {headline}
            </h2>
            <div
              className={cn(
                'prose prose-lg max-w-none',
                backgroundColor === 'teal'
                  ? 'prose-invert prose-p:text-teal-100'
                  : 'prose-p:text-gray-600'
              )}
            >
              {content}
            </div>
            {ctaText && ctaLink && (
              <div className="mt-8">
                <Button
                  href={ctaLink}
                  variant={backgroundColor === 'teal' ? 'secondary' : 'primary'}
                >
                  {ctaText}
                </Button>
              </div>
            )}
          </div>

          {/* Image */}
          <div className={cn(imagePosition === 'left' && 'lg:order-1')}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
