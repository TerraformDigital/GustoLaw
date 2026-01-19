'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface Testimonial {
  id: string
  quote: string
  attribution?: string
  company?: string
  role?: string
}

interface TestimonialBlockProps {
  headline?: string
  testimonials: Testimonial[]
  layout?: 'single' | 'carousel' | 'grid'
  showElfsight?: boolean
  elfsightWidgetId?: string
  className?: string
}

export function TestimonialBlock({
  headline = 'What Our Clients Say About Us',
  testimonials,
  layout = 'single',
  showElfsight = false,
  elfsightWidgetId,
  className,
}: TestimonialBlockProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // If using Elfsight Google Reviews widget
  if (showElfsight && elfsightWidgetId) {
    return (
      <section className={cn('section-padding bg-gray-50', className)}>
        <div className="container-default">
          {headline && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              {headline}
            </h2>
          )}
          <div
            className="elfsight-app-lazy"
            data-elfsight-app-lazy
            data-id={elfsightWidgetId}
          />
        </div>
      </section>
    )
  }

  // Single Quote Layout
  if (layout === 'single' && testimonials.length > 0) {
    const testimonial = testimonials[activeIndex]
    return (
      <section className={cn('section-padding bg-gray-50', className)}>
        <div className="container-default">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Headline */}
              <div className="md:w-1/3">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {headline}
                </h2>
              </div>

              {/* Quote */}
              <div className="md:w-2/3">
                <div className="relative">
                  {/* Quotation Mark */}
                  <svg
                    className="absolute -top-4 -left-4 w-12 h-12 text-teal-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                  </svg>

                  <blockquote className="relative text-xl md:text-2xl text-gray-700 leading-relaxed italic pl-8">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {(testimonial.attribution || testimonial.company) && (
                    <div className="mt-6 pl-8">
                      {testimonial.attribution && (
                        <p className="font-semibold text-gray-900">
                          {testimonial.attribution}
                        </p>
                      )}
                      {(testimonial.role || testimonial.company) && (
                        <p className="text-gray-500 text-sm">
                          {[testimonial.role, testimonial.company]
                            .filter(Boolean)
                            .join(', ')}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Navigation dots if multiple testimonials */}
                {testimonials.length > 1 && (
                  <div className="flex gap-2 mt-8 pl-8">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={cn(
                          'w-2 h-2 rounded-full transition-colors',
                          index === activeIndex
                            ? 'bg-teal-600'
                            : 'bg-gray-300 hover:bg-gray-400'
                        )}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // Grid Layout
  if (layout === 'grid') {
    return (
      <section className={cn('section-padding bg-gray-50', className)}>
        <div className="container-default">
          {headline && (
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              {headline}
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <svg
                  className="w-8 h-8 text-teal-200 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
                <blockquote className="text-gray-700 leading-relaxed mb-4">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                {testimonial.attribution && (
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonial.attribution}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return null
}

// Example testimonials for Gusto Law
export const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'In all cases I have found him to be professional, responsive, responsible, knowledgeable, and competent and his advice to be sound. His character and integrity are at all times unimpeachable.',
    attribution: 'Tech Startup Founder',
    company: 'Calgary',
  },
]
