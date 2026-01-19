# Gusto Law Website Build

## Project Overview

This is a website rebuild for Gusto Law (gustolaw.ca), a Calgary-based corporate law firm. The site is being rebuilt with Next.js, Tailwind CSS, and Sanity CMS, deployed on Vercel.

## Design Reference

The design is based on MacGregor Lyon (macgregorlyon.com) - a clean, professional law firm website with:
- Teal/cyan color palette
- Sticky header with transparent-to-solid scroll effect
- Hero sections with cityscape backgrounds and embedded lead forms
- Service cards with icons
- Team member profiles
- Testimonials
- FAQ accordions
- Footer CTA with contact form

## Brand Colors

```
Teal (Primary): #2C5F6F
Cyan (Accent): #00BCD4  
Green (Secondary): #10B981
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **CMS:** Sanity
- **Hosting:** Vercel
- **Forms:** Clio Grow (embed)
- **Reviews:** Elfsight widget

## Project Structure

```
/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Accordion.tsx
│   │   ├── blocks/             # Page section blocks
│   │   │   ├── HeroBlock.tsx
│   │   │   ├── TextImageBlock.tsx
│   │   │   ├── ServicesGridBlock.tsx
│   │   │   ├── TeamGridBlock.tsx
│   │   │   └── TestimonialBlock.tsx
│   │   └── layout/             # Layout components
│   │       ├── Header.tsx
│   │       ├── Footer.tsx
│   │       └── FooterCTA.tsx
│   └── lib/
│       ├── sanity.ts           # Sanity client
│       ├── queries.ts          # GROQ queries
│       └── utils.ts            # Utilities
├── sanity/
│   └── schemaTypes/
│       ├── documents/          # Sanity document schemas
│       └── objects/            # Sanity object schemas
├── sanity.config.ts            # Sanity Studio config
├── tailwind.config.ts          # Tailwind with brand colors
└── package.json
```

## Pages to Build

1. **Homepage** (`/`) - ✅ Scaffolded
2. **About** (`/about`)
3. **Team** (`/team`)
4. **Team Member** (`/team/[slug]`)
5. **Services** (`/services`)
6. **Service** (`/services/[slug]`)
7. **Industries** (`/industries`)
8. **Industry** (`/industries/[slug]`)
9. **FAQ** (`/faq`)
10. **Blog** (`/blog`)
11. **Blog Post** (`/blog/[slug]`)
12. **Contact** (`/contact`)
13. **Privacy Policy** (`/privacy-policy`)

## Services (6)

1. Mergers & Acquisitions
2. Fractional General Counsel
3. Business Formation
4. Corporate & Commercial
5. Dispute Resolution
6. Joint Ventures

## Industries (2)

1. Technology & Software
2. Oil & Gas

## Team Members (2)

1. Gus Lu - Founder & Principal Lawyer
2. Tyler Anthony - Associate

## Setup Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run Sanity Studio (at /studio)
npm run sanity

# Build for production
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - From Sanity dashboard
- `NEXT_PUBLIC_SANITY_DATASET` - Usually "production"
- Other integration IDs as needed

## Content Migration

Content needs to be migrated from the current WordPress site at gustolaw.ca:
- Service page content
- Team bios
- Blog posts
- Testimonials

## Key Integrations

### Clio Grow
Consultation booking form - embed code goes in FooterCTA and Contact page

### Elfsight
Google Reviews widget - widget ID in site settings, renders in TestimonialBlock

## URL Redirects Needed

Old WordPress URLs need 301 redirects to new structure:
- `/calgary-business-formation-lawyer/` → `/services/business-formation`
- `/calgary-mergers-acquisitions-lawyer/` → `/services/mergers-acquisitions`
- etc.

## Notes

- The firm is repositioning from budget startups to established businesses
- Language should emphasize "strategic counsel" not "affordable services"
- Consultations are now $250 paid (via Clio Grow), not free
- Focus services: M&A, Fractional GC, Tech Law
