# 🔥 Ravana Digital Agency

<div align="center">

![Ravana Banner](https://img.shields.io/badge/Ravana-Digital%20Agency-FFD700?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjRkZENzAwIi8+Cjwvc3ZnPgo=)

**Premium Digital Agency Website**

*Unleashing digital excellence through cutting-edge technology and exceptional design*

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.19.1-FF0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)

[Live Demo](https://ravana.agency) • [Documentation](#documentation) • [Features](#features) • [Contributing](#contributing)

</div>

---

## ✨ Overview

Ravana Digital Agency is a premium, production-ready website showcasing the pinnacle of modern web development. Built with Next.js 14 and featuring stunning animations, this project demonstrates enterprise-level architecture, performance optimization, and exceptional user experience design.

### 🎯 Project Highlights

- **🚀 Lightning Fast**: Optimized for Core Web Vitals with <100ms response times
- **🎨 Stunning Animations**: Custom particle systems and micro-interactions using Framer Motion
- **📱 Fully Responsive**: Pixel-perfect design across all devices and screen sizes
- **🔒 Production Ready**: Complete with security headers, SEO optimization, and error handling
- **♿ Accessible**: WCAG 2.1 compliant with semantic HTML and proper ARIA attributes

---

## 🌟 Features

### 🎨 **Design & UX**
- **Modern Dark Theme** with molten gold accent colors (#FFD700)
- **Premium Typography** using Inter and Playfair Display fonts
- **Smooth Animations** with page transitions and scroll-triggered reveals
- **Interactive Elements** including magnetic buttons and animated cursor
- **Particle Animation** canvas-based background effects

### 📄 **Pages & Sections**
- **Hero Section** with animated text reveals and particle background
- **Services Overview** showcasing SaaS development, web design, marketing, and SEO
- **Portfolio Gallery** with detailed case studies and project showcases
- **About Page** featuring team profiles, company values, and statistics
- **Contact Forms** with validation and Supabase integration
- **Dynamic Case Studies** with project details and results

### 🛠 **Technical Features**
- **Server-Side Rendering** with Next.js App Router
- **TypeScript** for type safety and better developer experience
- **Responsive Design** using Tailwind CSS utility classes
- **SEO Optimized** with meta tags, structured data, and sitemaps
- **Performance Monitoring** ready for analytics integration
- **Error Boundaries** for graceful error handling

### 🔧 **Development Tools**
- **ESLint & Prettier** for code quality and formatting
- **Husky & Lint-staged** for pre-commit hooks
- **Bundle Analyzer** for optimization insights
- **TypeScript Strict Mode** for maximum type safety

---

## 🏗 Architecture

```
ravana/
├── 📁 app/                    # Next.js App Router
│   ├── 📁 api/               # API routes
│   ├── 📁 portfolio/         # Portfolio pages
│   ├── 📄 layout.tsx         # Root layout
│   ├── 📄 page.tsx          # Home page
│   ├── 📄 sitemap.ts        # SEO sitemap
│   └── 📄 robots.ts         # Robots.txt
├── 📁 components/            # Reusable components
│   ├── 📁 forms/            # Form components
│   ├── 📁 interactive/      # Animation components
│   ├── 📁 layout/           # Layout components
│   ├── 📁 sections/         # Page sections
│   ├── 📁 seo/              # SEO components
│   └── 📁 ui/               # UI components
├── 📁 lib/                  # Utilities and configurations
├── 📁 types/                # TypeScript definitions
└── 📁 public/               # Static assets
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nmang004/ravana.git
   cd ravana
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   ```
   http://localhost:3000
   ```

### 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript check |
| `npm run check` | Run all quality checks |

---

## 🛠 Tech Stack

### **Core Framework**
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[React 18](https://reactjs.org/)** - UI library with concurrent features

### **Styling & UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/UI](https://ui.shadcn.com/)** - Beautiful component library
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library

### **Animations & Interactions**
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[Lenis](https://lenis.studiofreight.com/)** - Smooth scroll library
- **[React Intersection Observer](https://github.com/thebuilder/react-intersection-observer)** - Scroll-triggered animations

### **Backend & Database**
- **[Supabase](https://supabase.io/)** - Backend-as-a-Service
- **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - Serverless functions

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixes

---

## 📊 Performance

### **Core Web Vitals**
- **LCP (Largest Contentful Paint)**: < 1.2s ⚡
- **FID (First Input Delay)**: < 100ms ⚡
- **CLS (Cumulative Layout Shift)**: < 0.1 ⚡

### **Bundle Analysis**
- **First Load JS**: 87kB (shared)
- **Page Sizes**: 2-7kB per route
- **Image Optimization**: WebP/AVIF support
- **Tree Shaking**: Optimized imports

### **SEO Score**
- **Lighthouse SEO**: 100/100 🎯
- **Structured Data**: JSON-LD implementation
- **Meta Tags**: Complete Open Graph & Twitter Cards
- **Sitemap**: Auto-generated XML sitemap

---

## 🎨 Design System

### **Color Palette**
```css
/* Primary Colors */
--accent: #FFD700          /* Molten Gold */
--background: #0A0A0A      /* Deep Black */
--foreground: #FFFFFF      /* Pure White */

/* Semantic Colors */
--muted: #262626           /* Dark Gray */
--border: #404040          /* Medium Gray */
--destructive: #EF4444     /* Error Red */
```

### **Typography**
- **Headings**: Playfair Display (Serif)
- **Body Text**: Inter (Sans-serif)
- **Code**: JetBrains Mono (Monospace)

### **Spacing Scale**
Following a consistent 4px base unit with exponential scaling for larger breakpoints.

---

## 🔐 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_VERCEL_ANALYTICS=true

# Contact Form
CONTACT_EMAIL=hello@ravana.agency
SMTP_HOST=your_smtp_host
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| `sm` | 640px+ | Small tablets |
| `md` | 768px+ | Tablets |
| `lg` | 1024px+ | Small laptops |
| `xl` | 1280px+ | Laptops |
| `2xl` | 1536px+ | Large screens |

---

## 🔍 SEO Features

### **Technical SEO**
- ✅ Semantic HTML structure
- ✅ Meta tags and Open Graph
- ✅ Structured data (JSON-LD)
- ✅ XML sitemap generation
- ✅ Robots.txt configuration
- ✅ Canonical URLs

### **Performance SEO**
- ✅ Image optimization
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Compression (Gzip/Brotli)
- ✅ Caching headers

### **Content SEO**
- ✅ H1-H6 hierarchy
- ✅ Alt text for images
- ✅ Descriptive URLs
- ✅ Internal linking

---

## 🚀 Deployment

### **Vercel (Recommended)**

1. **Connect GitHub repository**
   ```bash
   vercel --prod
   ```

2. **Set environment variables** in Vercel dashboard

3. **Custom domain** (optional)
   ```bash
   vercel domains add your-domain.com
   ```

### **Netlify**

1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. **Node version**: 18+

### **Docker**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 🧪 Testing

### **Type Checking**
```bash
npm run typecheck
```

### **Linting**
```bash
npm run lint
```

### **Combined Quality Check**
```bash
npm run check
```

### **Build Verification**
```bash
npm run build
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### **Development Workflow**

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Run** quality checks
5. **Submit** a pull request

### **Code Standards**

- Follow TypeScript strict mode
- Use Prettier for formatting
- Write meaningful commit messages
- Add JSDoc comments for functions
- Ensure responsive design

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Shadcn** for the amazing UI component library
- **Vercel** for the incredible Next.js framework
- **Tailwind Labs** for the utility-first CSS framework
- **Framer** for the powerful animation library

---

## 📞 Contact

<div align="center">

**Ravana Digital Agency**

🌐 [Website](https://ravana.agency) • 📧 [Email](mailto:hello@ravana.agency) • 🐙 [GitHub](https://github.com/nmang004/ravana)

---

*Built with ❤️ and ☕ by the Ravana team*

⭐ **Star this repo if you found it helpful!**

</div>