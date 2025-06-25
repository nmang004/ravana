# RAVANA AGENCY WEBSITE - DEVELOPMENT PLAN

## 1. PROJECT INITIALIZATION

### Setup Commands
```bash
# Create Next.js project with TypeScript
npx create-next-app@latest ravana-agency --typescript --tailwind --app --use-npm

# Navigate to project
cd ravana-agency

# Initialize git repository
git init
git add .
git commit -m "Initial commit: Next.js 14 with TypeScript"
```

## 2. DEPENDENCY LIST

### Core Dependencies
```bash
npm install framer-motion
npm install @supabase/supabase-js
npm install lucide-react
npm install class-variance-authority
npm install clsx
npm install tailwind-merge
npm install @radix-ui/react-dialog
npm install @radix-ui/react-navigation-menu
npm install @radix-ui/react-tooltip
npm install lenis
npm install react-intersection-observer
```

### Development Dependencies
```bash
npm install -D @types/node
npm install -D prettier
npm install -D eslint-config-prettier
npm install -D @typescript-eslint/parser
npm install -D @typescript-eslint/eslint-plugin
```

### Shadcn/UI Setup
```bash
npx shadcn-ui@latest init
# Choose: New York style, Zinc color, CSS variables
```

## 3. DIRECTORY STRUCTURE

```
ravana-agency/
├── app/
│   ├── (root)/
│   │   ├── layout.tsx          # Root layout with theme providers
│   │   ├── page.tsx            # Home page
│   │   ├── globals.css         # Global styles with Tailwind
│   │   └── error.tsx           # Error boundary
│   ├── services/
│   │   ├── page.tsx            # Services overview
│   │   └── [slug]/
│   │       └── page.tsx        # Service detail pages
│   ├── portfolio/
│   │   ├── page.tsx            # Portfolio gallery
│   │   └── [project]/
│   │       └── page.tsx        # Case study pages
│   ├── about/
│   │   └── page.tsx            # About us page
│   ├── contact/
│   │   └── page.tsx            # Contact page
│   └── api/
│       └── contact/
│           └── route.ts        # Contact form API
├── components/
│   ├── ui/                     # Shadcn components (customized)
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageTransition.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── TestimonialsCarousel.tsx
│   │   ├── ClientLogos.tsx
│   │   └── CTASection.tsx
│   ├── interactive/
│   │   ├── AnimatedCursor.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── ScrollProgress.tsx
│   │   └── ParallaxText.tsx
│   └── forms/
│       ├── ContactForm.tsx
│       └── ProjectInquiryForm.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── types.ts
│   ├── animations/
│   │   ├── variants.ts         # Framer Motion variants
│   │   ├── transitions.ts      # Reusable transitions
│   │   └── scroll-animations.ts
│   └── utils/
│       ├── cn.ts               # Tailwind merge utility
│       └── constants.ts        # Site-wide constants
├── hooks/
│   ├── useScrollDirection.ts
│   ├── useMousePosition.ts
│   ├── useWindowSize.ts
│   └── useIntersectionObserver.ts
├── styles/
│   ├── fonts.ts                # Font configuration
│   └── themes.ts               # Theme constants
├── public/
│   ├── images/
│   ├── videos/
│   └── favicon.ico
└── types/
    └── index.ts                # Global TypeScript types
```

## 4. COMPONENT ARCHITECTURE

### Layout Components
- [x] Navbar - Sticky navigation with glass morphism effect
- [x] Footer - Minimal footer with key links and social icons
- [x] PageTransition - Wrapper for smooth page transitions

### Hero Components
- [x] HeroSection - Main hero with generative background
- [x] AnimatedHeadline - Text reveal animation
- [x] ScrollIndicator - Animated scroll prompt

### Service Components
- [x] ServiceCard - Interactive service showcase card
- [x] ServiceGrid - Responsive grid layout
- [x] ProcessTimeline - Animated process visualization

### Interactive Elements
- [x] AnimatedCursor - Custom cursor with state changes
- [x] MagneticButton - Buttons with magnetic hover effect
- [x] RevealOnScroll - Generic scroll reveal wrapper
- [x] ParallaxSection - Parallax scrolling wrapper

### Form Components
- [x] ContactForm - Supabase-connected contact form
- [x] FormField - Reusable form field component
- [x] SuccessModal - Form submission confirmation

### Portfolio Components
- [x] ProjectCard - Portfolio item display
- [x] ProjectGallery - Filterable project grid
- [x] CaseStudyHero - Case study header section

## 5. ANIMATION STRATEGY

### Core Technology
**Primary Library**: Framer Motion v10+

### Page Transitions
```typescript
// AnimatePresence wrapper in layout
// Custom page transition variants:
const pageVariants = {
  initial: { 
    opacity: 0,
    scale: 0.95,
    filter: "blur(10px)"
  },
  animate: { 
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.4,
      ease: [0.645, 0.045, 0.355, 1]
    }
  },
  exit: { 
    opacity: 0,
    scale: 1.05,
    filter: "blur(10px)",
    transition: {
      duration: 0.3
    }
  }
}
```

### Scroll-Triggered Animations
- Stagger children animations for service cards
- Parallax scrolling for background elements
- Progressive number counting for statistics
- Text reveal animations on viewport entry

### Micro-interactions
1. **Magnetic Buttons**: Cursor attraction within 50px radius
2. **Link Underline**: Elastic underline on hover
3. **Card Tilt**: 3D perspective shift on hover
4. **Icon Animations**: Service icons animate on hover
5. **Form Field Focus**: Smooth label transitions

### "Wow" Factor - Hero Section
**Concept**: Particle Network Animation
- WebGL-based particle system using react-three-fiber
- Particles form connections when near each other
- Responds to mouse movement
- Forms the word "RAVANA" on initial load
- Transitions to ambient state after 3 seconds

## 6. BACKEND & DATA

### Supabase Integration

#### Database Schema
```sql
-- Contact form submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Project inquiries
CREATE TABLE project_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  project_type VARCHAR(100),
  budget_range VARCHAR(100),
  timeline VARCHAR(100),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### API Routes
- `/api/contact` - POST: Submit contact form
- `/api/inquiry` - POST: Submit project inquiry
- `/api/newsletter` - POST: Newsletter subscription

### Environment Variables
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_KEY=your_service_key
```

### Deployment
**Platform**: Vercel
- Automatic deployments from main branch
- Preview deployments for PRs
- Environment variables configured in Vercel dashboard

## 7. DESIGN SYSTEM

### Color Palette
```css
:root {
  /* Dark Theme Base */
  --background: #0A0A0A;
  --foreground: #FAFAFA;
  
  /* Accent - Molten Gold */
  --accent: #FFD700;
  --accent-foreground: #0A0A0A;
  
  /* Grays */
  --muted: #1A1A1A;
  --muted-foreground: #A1A1A1;
  
  /* Semantic */
  --destructive: #DC2626;
  --success: #16A34A;
}
```

### Typography
```css
/* Headings - Playfair Display */
--font-heading: 'Playfair Display', serif;

/* Body - Inter */
--font-body: 'Inter', sans-serif;

/* Type Scale */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
--text-6xl: 3.75rem;    /* 60px */
--text-7xl: 4.5rem;     /* 72px */
```

### Spacing System
Based on 8px grid:
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

## 8. PERFORMANCE OPTIMIZATION

### Image Optimization
- Use Next.js Image component
- Implement blur placeholders
- Lazy load below-fold images

### Code Splitting
- Dynamic imports for heavy components
- Route-based code splitting (automatic with App Router)
- Lazy load animation libraries for specific sections

### SEO & Metadata
- Dynamic metadata generation
- Open Graph tags
- Twitter cards
- Sitemap generation
- Robots.txt

## 9. DEVELOPMENT PHASES

### Phase 1: Foundation (Days 1-2)
- Project initialization
- Dependency installation
- Shadcn/UI setup and theming
- Basic layout components

### Phase 2: Core Pages (Days 3-4)
- Home page structure
- Services overview page
- Contact page with form

### Phase 3: Animations (Days 5-6)
- Hero section particle animation
- Scroll-triggered animations
- Page transitions
- Micro-interactions

### Phase 4: Advanced Features (Days 7-8)
- Portfolio gallery
- Service detail pages
- Case study template
- About page

### Phase 5: Polish & Optimization (Days 9-10)
- Performance optimization
- SEO implementation
- Testing & bug fixes
- Deployment to Vercel

## 10. QUALITY ASSURANCE

### Code Standards
- TypeScript strict mode
- ESLint configuration
- Prettier formatting
- Component documentation

### Testing Checklist
- [ ] Cross-browser compatibility
- [ ] Mobile responsiveness
- [ ] Animation performance
- [ ] Form submissions
- [ ] SEO validation
- [ ] Accessibility (WCAG 2.1 AA)
- [ ] Performance metrics (Lighthouse)

---

**Next Step**: Initialize the project following this plan and begin development with Phase 1.