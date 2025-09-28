# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a complete Next.js website for CleanOps, a SaaS platform for cleaning companies. The project includes multiple product pages, blog functionality, lead magnets, and comprehensive business features for the cleaning industry.

## Tech Stack

- **Framework**: Next.js with pages router
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Typography**: Inter or Poppins
- **Deployment**: Vercel-ready
- **CMS**: Prepared for Sanity or Contentful integration

## Development Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Linting
npm run lint

# Type checking (if TypeScript)
npm run type-check
```

## Project Structure

### Pages Architecture
- `/` - Home page with hero, trust bar, featured supervision section
- `/productos/rutinas.js` - CleanOps Routines (attendance, routines, client portal, incident reports)
- `/productos/supervision.js` - Intelligent Supervision system
- `/productos/materiales.js` - Materials/Orders Management
- `/productos/maquinaria.js` - Machinery Management & Maintenance
- `/casos.js` - Success cases listing
- `/blog/index.js` - Blog listing
- `/recursos.js` - Resources hub / lead magnets
- `/precios.js` - Pricing plans
- `/contacto.js` - Contact / demo booking

### Key Components
- `Hero` - Reusable hero sections with animations
- `FeaturesGrid` - Product feature displays
- `ProductHero` - Product-specific hero components
- `CaseCard` - Success story cards
- `CTA` - Call-to-action components
- `BlogCard` - Blog post previews
- `LeadMagnetForm` - Gated content forms
- `AnalyticsHooks` - GA4/GTM tracking

## Design System

### Colors
- Primary: #1E90FF
- Text: Dark gray
- Background: White
- Design: Premium, minimalist, abundant white space

### Accessibility
- WCAG AA compliance
- Proper contrast ratios
- Aria-labels throughout
- Keyboard navigation support

## Business Requirements

### Lead Generation
- Lead magnets: Checklist, ROI Calculator, Webinars
- HubSpot/Calendly integration placeholders
- Demo booking workflows

### Analytics & Tracking
- GA4 events: demo_click, leadmagnet_download, calculadora_submit, calendario_booking
- GTM integration hooks
- Core Web Vitals optimization

### SEO Features
- Meta tags for each page
- Open Graph and Twitter Card support
- JSON-LD structured data for SoftwareApplication and Organization
- SSG for product and blog pages

## Key Features to Highlight

### Supervision System (Featured prominently)
- Finding registration and documentation
- Responsible assignment workflow
- Mandatory closure workflow for findings
- AI recommender model for critical zones
- Continuous improvement focus

### Product Integration Points
- Offline functionality for attendance control
- QR/GPS tracking capabilities
- Client portal with real-time visibility
- Multi-role approval workflows
- ERP integration readiness

## CMS Integration

### Content Types Needed
- Blog posts
- Case studies
- Lead magnets
- Product features
- Team members
- Client testimonials

### Fixture Data
Include placeholder content in `/fixtures` for:
- Sample blog posts
- Success case studies
- Lead magnet content
- Product feature descriptions

## Performance Considerations

- WebP image optimization
- Lazy loading implementation
- Minimal JavaScript bundles
- Core Web Vitals optimization
- Mobile-first responsive design

## Content Guidelines

### Spanish Language
All content is in Spanish, targeting Latin American cleaning service companies.

### CTA Standards
- Primary CTA: "Solicitar demo" (Request demo)
- Secondary CTA: "Calcular ahorro" (Calculate savings)

### Copy Focus
- B2B SaaS tone
- Industry-specific terminology
- Measurable benefits emphasis
- Problem-solution-result structure for case studies

## Development Notes

- Use getStaticProps/getStaticPaths for SSG where applicable
- Implement proper error boundaries
- Include loading states for async operations
- Maintain clean component separation
- Follow Next.js best practices for routing and data fetching