# 🤖 Ravana Digital Agency - Claude Code Documentation

This file contains project-specific information for AI assistants working on the Ravana Digital Agency website.

## 📋 Project Overview

**Project Name**: Ravana Digital Agency Website  
**Type**: Premium Next.js 14 website with TypeScript  
**Purpose**: Showcase digital agency services with stunning animations  
**Theme**: Dark theme with molten gold (#FFD700) accents  

## 🛠 Technology Stack

### Core Framework
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **React 18** with concurrent features

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/UI** - Component library with custom Ravana theme
- **Custom CSS Variables** for consistent theming

### Animations & Interactions
- **Framer Motion** - Main animation library
- **Canvas-based particle system** (not Three.js)
- **Lenis** for smooth scrolling
- **React Intersection Observer** for scroll-triggered animations

### Backend & Data
- **Supabase** - Backend-as-a-Service for contact forms
- **Next.js API Routes** - Serverless functions
- **Development fallback** - Contact forms work without Supabase

## 🎨 Design System

### Colors (CSS Variables)
```css
--accent: #FFD700;           /* Molten Gold - Primary brand color */
--background: #0A0A0A;       /* Deep Black */
--foreground: #FFFFFF;       /* Pure White */
--muted: #262626;            /* Dark Gray */
--border: #404040;           /* Medium Gray */
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Font Variables**: `--font-inter`, `--font-playfair`

### Breakpoints
- `sm`: 640px+
- `md`: 768px+  
- `lg`: 1024px+
- `xl`: 1280px+
- `2xl`: 1536px+

## 🏗 Project Structure

```
ravana/
├── app/                    # Next.js App Router
│   ├── api/contact/       # Contact form API
│   ├── portfolio/         # Portfolio pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── forms/            # Form components
│   ├── interactive/      # Animation components
│   ├── layout/           # Layout components
│   ├── sections/         # Page sections
│   ├── seo/              # SEO components
│   └── ui/               # Shadcn/UI components
├── lib/                  # Utilities
├── types/                # TypeScript definitions
└── public/               # Static assets
```

## 🎯 Key Features

### Page Structure
1. **Home** (`/`) - Hero, Services, Testimonials, CTA
2. **Services** (`/services`) - Detailed service offerings
3. **Portfolio** (`/portfolio`) - Project gallery with case studies
4. **About** (`/about`) - Company story, team, values
5. **Contact** (`/contact`) - Contact forms and information

### Animation System
- **Page Transitions** - Smooth enter/exit animations
- **Scroll Triggers** - Content reveals on scroll
- **Particle Background** - Canvas-based animation on hero
- **Micro-interactions** - Hover effects, magnetic buttons
- **Letter-by-letter** - Text reveal animations

### SEO & Performance
- **Structured Data** - JSON-LD implementation
- **Meta Tags** - Complete OpenGraph and Twitter cards
- **Sitemap** - Auto-generated XML sitemap
- **Image Optimization** - WebP/AVIF support
- **Bundle Optimization** - Tree shaking and code splitting

## 🔧 Development Commands

```bash
# Development
npm run dev              # Start development server
npm run build           # Production build
npm run start           # Start production server

# Quality Assurance
npm run lint            # ESLint check
npm run typecheck       # TypeScript check  
npm run check           # Combined lint + typecheck
```

## 🌐 Environment Variables

### Required for Full Functionality
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Optional
```bash
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_VERCEL_ANALYTICS=true
```

**Note**: Contact forms have development fallback - work without Supabase configured.

## 📁 Important Files

### Configuration
- `next.config.mjs` - Next.js configuration with security headers
- `tailwind.config.ts` - Tailwind with custom Ravana theme
- `tsconfig.json` - TypeScript strict mode configuration
- `.eslintrc.json` - ESLint rules (disabled unescaped entities)

### Core Components
- `components/layout/PageTransition.tsx` - Page transition wrapper
- `components/interactive/ParticleField.tsx` - Hero background animation
- `components/interactive/RevealOnScroll.tsx` - Scroll-triggered reveals
- `components/sections/HeroSection.tsx` - Main hero with animations
- `components/forms/ContactForm.tsx` - Contact form with validation

### API Routes
- `app/api/contact/route.ts` - Contact form submission handler

## 🎨 Animation Patterns

### Common Motion Variants
```typescript
// Fade in from bottom
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

// Stagger children
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

### Usage Pattern
```tsx
<RevealOnScroll>
  <motion.div variants={fadeInUp}>
    Content here
  </motion.div>
</RevealOnScroll>
```

## 🚨 Common Issues & Solutions

### Build Issues
- **React Three Fiber conflicts**: Removed unused dependencies
- **ESLint unescaped entities**: Disabled in `.eslintrc.json`
- **TypeScript strict mode**: All types properly defined

### Animation Issues
- **Variants with functions**: Use transition prop instead of function-based variants
- **Scroll performance**: Use `useScrollAnimation` hook with intersection observer
- **Mobile animations**: Reduce motion on smaller screens

### Deployment Issues
- **Vercel peer deps**: Use `.npmrc` with `legacy-peer-deps=true`
- **Node version**: Use `.nvmrc` with Node 18
- **Environment vars**: Contact forms gracefully fallback

## 🔍 Debugging Tips

### Animation Debugging
```tsx
// Add debug props to motion components
<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.6 }} // Always specify transition
>
```

### Console Debugging
- Contact form submissions log in development mode
- Particle system has FPS monitoring
- Scroll animations log intersection events

## 📦 Dependencies Management

### Core Dependencies (Never Remove)
- `next`, `react`, `react-dom` - Core framework
- `framer-motion` - Animations
- `tailwindcss` - Styling
- `typescript` - Type safety

### Optional Dependencies
- `@supabase/supabase-js` - Backend (has fallback)
- `lenis` - Smooth scroll (progressive enhancement)
- `lucide-react` - Icons

### Removed Dependencies
- `@react-three/drei`, `@react-three/fiber`, `three` - Caused conflicts

## 🎯 Content Guidelines

### Copy Writing
- **Tone**: Premium, professional, confident
- **Style**: Direct, results-focused
- **Voice**: We craft digital experiences that drive results

### Services
1. **SaaS Development** - Custom software platforms
2. **Web Development** - Premium websites that convert  
3. **Digital Marketing** - Data-driven growth strategies
4. **SEO Services** - Dominate search results

### Brand Voice
- Competence, creativity, technical excellence
- Unforgettable first impression
- High-ticket client focused

## 🚀 Deployment Checklist

- [ ] Build passes (`npm run build`)
- [ ] TypeScript check passes (`npm run typecheck`)
- [ ] Linting passes (`npm run lint`)
- [ ] No console errors in development
- [ ] Animations work smoothly
- [ ] Contact form submits (with/without Supabase)
- [ ] All pages load correctly
- [ ] SEO meta tags present
- [ ] Mobile responsive

## 📞 Support

For technical issues with this project:
1. Check this documentation first
2. Review error logs in development
3. Test with `npm run check`
4. Verify environment variables
5. Check Vercel deployment logs

---

*This documentation is maintained for AI assistants working on the Ravana Digital Agency project. Keep it updated with any significant changes to the codebase.*