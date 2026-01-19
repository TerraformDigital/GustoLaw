import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  href?: string
  hover?: boolean
}

export function Card({ children, className, href, hover = true }: CardProps) {
  const cardStyles = cn(
    'bg-white rounded-lg border border-gray-100',
    hover && 'card-shadow',
    className
  )

  if (href) {
    return (
      <Link href={href} className={cn(cardStyles, 'block')}>
        {children}
      </Link>
    )
  }

  return <div className={cardStyles}>{children}</div>
}

interface ServiceCardProps {
  title: string
  description?: string
  icon?: string
  href: string
  className?: string
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  className,
}: ServiceCardProps) {
  return (
    <Card href={href} className={cn('p-6 group', className)}>
      {icon && (
        <div className="mb-4 w-12 h-12 flex items-center justify-center">
          <Image
            src={icon}
            alt=""
            width={48}
            height={48}
            className="text-teal-600"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      )}
      <div className="mt-4 flex items-center text-teal-600 text-sm font-medium">
        Learn more
        <svg
          className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Card>
  )
}

interface TeamCardProps {
  name: string
  role: string
  image: string
  href: string
  bio?: string
  className?: string
}

export function TeamCard({
  name,
  role,
  image,
  href,
  bio,
  className,
}: TeamCardProps) {
  return (
    <Card href={href} className={cn('overflow-hidden group', className)}>
      <div className="aspect-[4/5] relative overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-gray-200 text-sm">{role}</p>
        </div>
      </div>
      {bio && (
        <div className="p-6">
          <p className="text-gray-600 text-sm line-clamp-3">{bio}</p>
        </div>
      )}
    </Card>
  )
}

interface BlogCardProps {
  title: string
  excerpt?: string
  image?: string
  date: string
  author?: string
  href: string
  className?: string
}

export function BlogCard({
  title,
  excerpt,
  image,
  date,
  author,
  href,
  className,
}: BlogCardProps) {
  return (
    <Card href={href} className={cn('overflow-hidden group', className)}>
      {image && (
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <time dateTime={date}>{date}</time>
          {author && (
            <>
              <span className="mx-2">•</span>
              <span>{author}</span>
            </>
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
          {title}
        </h3>
        {excerpt && (
          <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>
        )}
      </div>
    </Card>
  )
}
