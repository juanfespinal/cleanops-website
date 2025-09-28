# CleanOps Website

This is a complete Next.js website for CleanOps, a SaaS platform for cleaning companies.

## Tech Stack

- **Framework**: Next.js 15.5.4 with Pages Router
- **Styling**: TailwindCSS 4.1.13
- **Animations**: Framer Motion 12.23.22
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint

# Run TypeScript type checking
npm run type-check
```

## Project Structure

```
/
├── components/           # Reusable UI components
│   ├── Navbar.tsx       # Main navigation
│   ├── Hero.tsx         # Hero section component
│   ├── FeaturesGrid.tsx # Features display grid
│   ├── CTA.tsx          # Call-to-action component
│   ├── Footer.tsx       # Site footer
│   └── SEO.tsx          # SEO meta tags and JSON-LD
├── pages/               # Next.js pages
│   ├── index.tsx        # Home page
│   ├── productos/       # Product pages
│   ├── blog/            # Blog pages
│   ├── _app.tsx         # App wrapper
│   └── _document.tsx    # HTML document
├── styles/              # Global styles
├── public/              # Static assets
└── fixtures/            # Sample data for CMS
```

## Features

### Home Page
- ✅ Full-screen hero with animations
- ✅ Trust bar with company logos
- ✅ "What We Do" features grid
- ✅ Featured supervision section (highlighted)
- ✅ Quick case studies with metrics
- ✅ Lead magnet form (checklist)
- ✅ Blog preview section
- ✅ Call-to-action sections

### SEO & Performance
- ✅ Comprehensive meta tags
- ✅ Open Graph and Twitter Card support
- ✅ JSON-LD structured data (SoftwareApplication + Organization)
- ✅ Mobile-first responsive design
- ✅ Framer Motion animations
- ✅ Optimized for Core Web Vitals

### Accessibility
- ✅ WCAG AA compliance
- ✅ Proper semantic HTML
- ✅ Keyboard navigation support
- ✅ Screen reader friendly

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and configure build settings
3. Set environment variables if needed
4. Deploy!

### Environment Variables

For production, you may need to set:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID
# Add other environment variables as needed
```

## CMS Integration

The project is prepared for CMS integration with Sanity or Contentful:

- Sample fixtures in `/fixtures` directory
- Structured data types ready for:
  - Blog posts
  - Case studies
  - Lead magnets
  - Product features
  - Team members
  - Testimonials

## Lead Generation & Analytics

### Forms
- Lead magnet form (checklist download)
- Contact forms ready for HubSpot/Zapier integration
- Demo booking integration with Calendly

### Analytics Events (Ready for Implementation)
- `demo_click` - Demo button clicks
- `leadmagnet_download` - Lead magnet downloads
- `calculadora_submit` - ROI calculator submissions
- `calendario_booking` - Calendar bookings

## Next Steps

1. **Product Pages**: Implement individual product pages
2. **Blog System**: Complete blog listing and individual post pages
3. **CMS Integration**: Connect with Sanity or Contentful
4. **Analytics**: Implement GA4 and GTM tracking
5. **Forms**: Connect forms to HubSpot/Zapier
6. **Images**: Add real product mockups and images
7. **Content**: Replace placeholder content with real copy

## Support

For any questions or issues, refer to the CLAUDE.md file for development guidance.