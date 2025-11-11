import { LucideIcon, BarChart3, Target, User } from "lucide-react";

export interface NavLink {
  href?: string;
  label: string;
  subLinks?: { href: string; label: string }[];
}

export const navLinks: NavLink[] = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  {
    label: "Insights",
    subLinks: [
      { href: "/insights", label: "Insights" },
      { href: "/blog", label: "Blog" }
    ]
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Portfolio Types
export interface PortfolioResult {
  metric: string;
  description: string;
  icon: LucideIcon;
}

export interface PortfolioTestimonial {
  quote: string;
  author: string;
  position: string;
}

export interface PortfolioTechnicalDetails {
  frontend: string;
  backend?: string;
  cms?: string;
  performance?: string;
  seo?: string;
  graphics?: string;
  audio?: string;
  integrations?: string;
  deployment?: string;
  gamification?: string;
  features?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  completedDate: string;
  projectDuration: string;
  client: string;
  industry: string;
  teamSize: string;
  challenge: string;
  solution: string;
  results: PortfolioResult[];
  features: string[];
  technicalDetails: PortfolioTechnicalDetails;
  testimonial: PortfolioTestimonial;
  nextProject: string | null;
  featured?: boolean;
}

export const portfolioProjects: Record<string, PortfolioProject> = {
  "la-brioche": {
    id: "la-brioche",
    title: "La Brioche Bakery",
    category: "Web Development",
    description: "A modern, high-performance web application for an artisan French bakery, combining cutting-edge web technology with timeless French elegance.",
    image: "/images/portfolio/la-brioche.jpg",
    technologies: ["Next.js 15", "React 19", "TypeScript 5.6", "Tailwind CSS 4.0", "Supabase", "Sanity.io", "Vercel"],
    liveUrl: "https://labrioche.vercel.app",
    completedDate: "2024-01-20",
    projectDuration: "8 weeks",
    client: "La Brioche Norfolk",
    industry: "Food & Beverage",
    teamSize: "3 developers",
    featured: true,

    challenge: "La Brioche, an artisan French bakery in Norfolk, Virginia, needed a digital presence that mirrored the quality and tradition of their baking. The goal was to create a high-performance web application that was not only visually appealing but also offered a seamless e-commerce experience for their customers.",

    solution: "We developed a sophisticated web application that captures the essence of a traditional French bakery while providing modern e-commerce functionality. The site features high-resolution imagery, an interactive menu, and a smooth, user-friendly interface. It also includes a robust content management system to allow for easy updates to the menu and promotional content.",

    results: [
      {
        metric: "200%",
        description: "Increase in online orders",
        icon: BarChart3
      },
      {
        metric: "4.9/5",
        description: "Customer satisfaction rating",
        icon: Target
      },
      {
        metric: "60%",
        description: "Repeat customer rate",
        icon: User
      }
    ],

    features: [
      "E-Commerce Excellence - Full-featured shopping cart, secure checkout with multiple payment options, and order tracking",
      "Visual Delight - Interactive and filterable menu with high-resolution product photography and smooth animations",
      "Seamless User Experience - Easy-to-use authentication, personalized user profiles, and order history with reorder option",
      "Dynamic Content Management - Menu and content easily updated through Sanity.io, with support for seasonal promotions and blog",
      "Real-time Inventory - Live product availability updates to prevent overselling",
      "Mobile-First Design - Optimized for mobile ordering with one-tap checkout",
      "Loyalty Program - Built-in rewards system for frequent customers",
      "Multi-location Support - Scalable architecture for future expansion"
    ],

    technicalDetails: {
      frontend: "Built with Next.js 15, React 19, and TypeScript 5.6 for a high-performance, type-safe frontend. Tailwind CSS 4.0 was used for styling with custom French-inspired design tokens.",
      backend: "Supabase was used for the database and authentication, providing real-time data synchronization and secure user management with row-level security.",
      cms: "Sanity.io was integrated for dynamic content management, allowing for easy updates to the menu and other site content with a user-friendly interface for non-technical staff.",
      performance: "Achieved perfect Lighthouse scores with image optimization, lazy loading, and edge caching. Sub-second load times ensure a smooth shopping experience."
    },

    testimonial: {
      quote: "The new website has transformed our business. Online orders have skyrocketed, and our customers constantly compliment the beautiful design and easy ordering process. It truly captures the essence of our French bakery.",
      author: "Marie Dubois",
      position: "Owner, La Brioche Norfolk"
    },

    nextProject: "review-boost"
  },

  "review-boost": {
    id: "review-boost",
    title: "ReviewBoost SaaS Platform",
    category: "SaaS Development",
    description: "A gamified employee review collection system designed to motivate teams and boost customer feedback.",
    image: "/images/portfolio/review-boost.jpg",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "React Hook Form", "Radix UI", "Railway", "Vercel"],
    liveUrl: "https://reviewboost-virid.vercel.app",
    completedDate: "2024-03-10",
    projectDuration: "12 weeks",
    client: "ReviewBoost Inc.",
    industry: "Customer Feedback & Reviews",
    teamSize: "4 developers",

    challenge: "Many businesses struggle to motivate their employees to actively collect customer reviews. This often leads to a lack of valuable feedback, which is crucial for improving services and attracting new customers. Traditional methods of encouraging review collection are often ineffective and lack engagement.",

    solution: "We developed ReviewBoost, a gamified system that encourages employees to collect customer reviews by turning the process into a fun and competitive game. The platform uses a system of points, leaderboards, and recognition to motivate team members. Business owners can track progress and view analytics through a real-time dashboard.",

    results: [
      {
        metric: "95%",
        description: "Increase in review collection rate",
        icon: BarChart3
      },
      {
        metric: "3x",
        description: "Employee engagement boost",
        icon: User
      },
      {
        metric: "50+",
        description: "Businesses onboarded",
        icon: Target
      }
    ],

    features: [
      "Gamified Points System - Employees earn points for each review submitted, with bonus points for including a photo",
      "Live Leaderboards - Real-time rankings display top-performing employees, fostering healthy competition",
      "Personal Progress Tracking - Employees can view their own progress and ranking",
      "Business Analytics Dashboard - Real-time view of total reviews, team points, top performers, and recent submissions",
      "Review Submission - Simple form for employees to submit customer reviews with details like name, job type, and keywords",
      "Multi-tenant Architecture - Secure separation of business data",
      "Real-time Updates - Instant reflection of new reviews and points",
      "Mobile Responsive - Full functionality across all devices"
    ],

    technicalDetails: {
      frontend: "Built with Next.js 14 and TypeScript for a robust and type-safe application. Tailwind CSS was used for styling, and React Hook Form for form management. Radix UI provides accessible and unstyled components.",
      backend: "Utilized Supabase for the backend, which includes a PostgreSQL database, user authentication, and real-time capabilities. Row-level security ensures data isolation between businesses.",
      deployment: "The frontend is deployed on Vercel with automatic CI/CD, and backend services are hosted on Railway for reliable database performance.",
      gamification: "Custom point calculation system with configurable rules, achievement tracking, and streak bonuses to maximize employee engagement."
    },

    testimonial: {
      quote: "ReviewBoost transformed how our team thinks about collecting reviews. The gamification aspect has made it fun and competitive, resulting in a massive increase in customer feedback that helps us improve our services.",
      author: "Jennifer Martinez",
      position: "Operations Manager, ServicePro Solutions"
    },

    nextProject: "wm-stone"
  },

  "wm-stone": {
    id: "wm-stone",
    title: "W.M. Stone Logistics",
    category: "Web Development",
    description: "Modern website for a century-old customs brokerage and international freight forwarding company, combining heritage with cutting-edge logistics technology.",
    image: "/images/portfolio/wm-stone.jpg",
    technologies: ["Webflow", "HTML5", "CSS3", "JavaScript", "CMS Integration", "API/EDI", "Responsive Design"],
    liveUrl: "https://www.wmstone.com",
    completedDate: "2023-11-05",
    projectDuration: "10 weeks",
    client: "W.M. Stone & Company",
    industry: "Logistics & Supply Chain",
    teamSize: "3 developers",

    challenge: "For over a century, businesses have faced the challenge of navigating the complex and ever-changing landscape of international trade. W.M. Stone needed a modern digital presence that could showcase their century-old expertise while providing intuitive access to their comprehensive logistics services and real-time tracking capabilities.",

    solution: "We developed a sophisticated website that honors W.M. Stone's rich heritage dating back to 1907 while providing a modern, user-friendly interface. The site effectively communicates their comprehensive customs brokerage and international freight forwarding services, featuring seamless CMS integration for easy content updates and API/EDI capabilities for real-time tracking and data exchange.",

    results: [
      {
        metric: "150%",
        description: "Increase in lead generation",
        icon: BarChart3
      },
      {
        metric: "70%",
        description: "Reduction in customer service calls",
        icon: Target
      },
      {
        metric: "45%",
        description: "Increase in online quote requests",
        icon: User
      }
    ],

    features: [
      "Customs Brokerage Portal - Expert guidance through U.S. Customs regulations with downloadable resources",
      "Global Forwarding Tools - Interactive tools for worldwide air and ocean freight forwarding services",
      "Managed Logistic Solutions - Comprehensive supply chain management information and consulting request forms",
      "Technology & Visibility - Web-based solutions and API/EDI integrations for real-time tracking and data",
      "Warehousing & Transportation - Service information for secure warehousing, transloading, and inland transportation",
      "Compliance Consulting - Resources and tools for trade compliance and duty drawback programs",
      "Quote Request System - Streamlined online quote requests with automated routing",
      "Client Portal Access - Secure login area for existing clients to track shipments and manage documentation"
    ],

    technicalDetails: {
      frontend: "Built with modern HTML5, CSS3, and JavaScript for a responsive, accessible website. Webflow CMS provides flexible content management capabilities while maintaining high performance standards.",
      cms: "Webflow CMS integration allows non-technical staff to easily update service offerings, news, and resources. Custom collections manage complex logistics data and service information.",
      integrations: "API and EDI integrations connect the website with W.M. Stone's internal systems for real-time shipment tracking, quote generation, and document management.",
      performance: "Optimized for fast loading times with lazy loading, CDN distribution, and efficient asset management. Mobile-first design ensures excellent performance on all devices."
    },

    testimonial: {
      quote: "The new website has transformed how we connect with clients in the digital age. It perfectly balances our century-old reputation with modern functionality, making it easier for customers to access our services and track their shipments.",
      author: "Robert Stone",
      position: "President, W.M. Stone & Company"
    },

    nextProject: "jenna-eve"
  },

  "jenna-eve": {
    id: "jenna-eve",
    title: "Jenna Eve Portfolio",
    category: "Web Development",
    description: "An animated portfolio that redefines the boundaries of web experience design, showcasing the pinnacle of web animation technology.",
    image: "/images/portfolio/jenna-eve.jpg",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Three.js", "Tone.js", "Tailwind CSS", "GLSL", "WebGL"],
    liveUrl: "https://jennaeve.vercel.app",
    completedDate: "2023-09-20",
    projectDuration: "12 weeks",
    client: "Jenna Eve",
    industry: "Creative & Digital Arts",
    teamSize: "4 developers",

    challenge: "The project's goal was to create a 'living, breathing digital masterpiece' that would serve as a portfolio for Jenna Eve. The challenge was to push the limits of web animation and create a truly immersive and memorable user experience. This required a deep understanding of modern web technologies and a meticulous attention to detail in crafting every element of the site.",

    solution: "We developed a highly animated and interactive portfolio that leverages cutting-edge web technologies to create a cinematic visual experience. The site features a unique motion language, generative audio landscapes, and 3D interactive elements. It is optimized for performance and accessibility, ensuring a smooth experience across all devices.",

    results: [
      {
        metric: "60fps",
        description: "Performance guarantee",
        icon: BarChart3
      },
      {
        metric: "95%",
        description: "User engagement rate",
        icon: User
      },
      {
        metric: "Award",
        description: "Winning design recognition",
        icon: Target
      }
    ],

    features: [
      "Award-Worthy Motion Language - Features 8 signature easing curves for a unique and fluid animation style",
      "60fps Performance Guarantee - Ensures a smooth and responsive experience across all devices",
      "Generative Audio Landscapes - Real-time GLSL shaders and reverb create an immersive audio experience",
      "Touch-First Mobile Experience - Optimized for a seamless experience on mobile devices",
      "Cinematic Visual Storytelling - Advanced physics and stagger orchestration create a cinematic feel",
      "AI-Powered Optimization - Device-aware optimization ensures the best performance on any device",
      "GPU-Accelerated Visuals - Leverages the GPU for smooth and complex animations",
      "Universal Accessibility - Complete motion preference support for accessibility",
      "3D Interactive Project Cards - A unique and engaging way to display portfolio projects",
      "Physics-Based Cursor - A fun and interactive cursor that responds to user input"
    ],

    technicalDetails: {
      frontend: "Built with Next.js and TypeScript, using Framer Motion as the primary animation engine. Custom hooks and components ensure reusable animation patterns throughout the site.",
      graphics: "Three.js powers WebGL graphics and shader programming for 3D interactive elements. Custom GLSL shaders create unique visual effects and generative backgrounds.",
      audio: "Tone.js handles audio synthesis and generative music, creating dynamic soundscapes that respond to user interaction. Web Audio API integration for low-latency performance.",
      performance: "Tailwind CSS with custom design tokens for consistent styling. GPU acceleration and requestAnimationFrame optimization ensure 60fps performance. Progressive enhancement for accessibility."
    },

    testimonial: {
      quote: "This portfolio has completely transformed how potential clients perceive my work. The immersive experience and attention to detail have led to numerous high-profile opportunities. It's not just a portfolio—it's a statement piece.",
      author: "Jenna Eve",
      position: "Creative Director & Digital Artist"
    },

    nextProject: null
  },

  "red-rock-vet": {
    id: "red-rock-vet",
    title: "Red Rock Veterinary Health",
    category: "Web Development + SEO",
    description: "Modern veterinary practice website featuring Fear Free® certified care, comprehensive service pages, and exceptional performance optimization.",
    image: "/images/portfolio/SCR-20251111-kfzn.png",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS v4", "Sanity CMS", "Framer Motion", "Vercel", "Google Fonts"],
    liveUrl: "https://www.redrockvet.com",
    completedDate: "2024-08-20",
    projectDuration: "4 weeks",
    client: "Red Rock Veterinary Health",
    industry: "Veterinary Services",
    teamSize: "1 developer",
    featured: true,

    challenge: "Red Rock Veterinary Health, a Fear Free® certified veterinary practice in Colorado Springs, lacked a thorough digital presence. Their existing basic Squarespace site wasn't converting visitors or providing comprehensive information about their specialized fear-free approach and full range of veterinary services. The practice needed a modern, informative website that would communicate their unique value proposition and convert online visitors into appointments.",

    solution: "We developed a comprehensive, high-performance veterinary website built on Next.js 15 with complete rebranding and custom design. The site features six dedicated service pages with detailed information and pricing, a responsive mobile-first design optimized for pet owners on the go, and seamless Sanity CMS integration for easy content management. The Fear Free® branding was integrated throughout, emphasizing the practice's commitment to reducing pet anxiety. We implemented smooth Framer Motion animations and achieved exceptional PageSpeed scores through performance optimization.",

    results: [
      {
        metric: "18%",
        description: "Increase in organic keywords",
        icon: BarChart3
      },
      {
        metric: "94/100",
        description: "PageSpeed Performance score",
        icon: Target
      },
      {
        metric: "5.0★",
        description: "Google rating maintained",
        icon: User
      }
    ],

    features: [
      "Comprehensive Service Pages - Six detailed service pages covering wellness exams, surgery, dental care, emergency services, vaccinations, and diagnostics with transparent pricing",
      "Fear Free® Branding - Integrated fear-free veterinary approach throughout site design and messaging",
      "Content Management System - Full Sanity CMS integration with custom schemas for services, team members, blog posts, and testimonials",
      "Responsive Design - Mobile-first design optimized for all devices with professional veterinary branding",
      "Performance Optimized - Achieved 94/100 PageSpeed Performance score with optimized images and fast loading",
      "SEO Foundation - Proper meta tags, Open Graph support, semantic HTML structure, and local SEO optimization",
      "Smooth Animations - Framer Motion animations including scroll-triggered effects and counter animations",
      "Accessibility Focused - WCAG 2.1 AA compliant design with proper ARIA labels and keyboard navigation"
    ],

    technicalDetails: {
      frontend: "Built with Next.js 15 and TypeScript for a robust, type-safe application with the latest React 19 features. Tailwind CSS v4 provides professional styling with custom veterinary brand colors (deep red #B31B1B primary with dark gray and light gray accents). Framer Motion powers smooth animations throughout the site.",
      cms: "Sanity CMS integration provides a user-friendly content management system for non-technical staff to easily update services, pricing, team information, and blog content. Custom schemas were created for all content types with proper validation.",
      performance: "Achieved exceptional performance metrics with 94/100 PageSpeed Performance, 91 SEO score, and 100/100 Best Practices. Implemented image optimization, code splitting, lazy loading, and edge caching for sub-second load times on all pages.",
      seo: "Implemented comprehensive SEO strategy resulting in 18% increase in organic keywords. Includes proper meta tags, structured data, local business schema, service-specific pages optimized for veterinary search terms, and mobile-first responsive design for improved search rankings."
    },

    testimonial: {
      quote: "The new website has transformed how pet owners discover and connect with our Fear Free® practice. The comprehensive service pages and easy navigation have made it simple for clients to understand our approach and book appointments online.",
      author: "Red Rock Veterinary Team",
      position: "Practice Management"
    },

    nextProject: "blackbird-detailing"
  },

  "blackbird-detailing": {
    id: "blackbird-detailing",
    title: "Blackbird Detailing",
    category: "Web Development + SEO",
    description: "Premium automotive detailing website with instant estimate engine, motorsport-grade branding, and local SEO optimization for Virginia Beach market.",
    image: "/images/portfolio/blackbird.png",
    technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Shadcn/ui", "React Hook Form", "Zod", "Vercel Analytics"],
    liveUrl: "https://www.blackbirddetailingus.com",
    completedDate: "2024-10-15",
    projectDuration: "4 weeks",
    client: "Blackbird Detailing",
    industry: "Automotive Detailing",
    teamSize: "1 developer",

    challenge: "Blackbird Detailing needed to establish a strong digital presence in the competitive Virginia Beach automotive detailing market. They required a premium website that would reflect their motorsport-grade precision, differentiate them from competitors, and capture leads through an intuitive instant estimate system. The challenge was to create a conversion-focused website with local SEO optimization to dominate search results in Virginia Beach, Chesapeake, and Norfolk.",

    solution: "We built a premium automotive detailing website using Next.js 15 with a striking motorsport-inspired design featuring matte black (#111111) and ignition blue (#00A8FF) branding. The site includes a sophisticated multi-step instant estimate form with React Hook Form and Zod validation, comprehensive service pages showcasing ceramic coating, paint correction, and detailing packages, and a portfolio gallery with before/after showcases. We implemented Supabase for lead management and integrated local SEO optimization targeting the Virginia Beach market with service area pages for key locations.",

    results: [
      {
        metric: "32%",
        description: "Increase in organic keywords",
        icon: BarChart3
      },
      {
        metric: "Multi-Step",
        description: "Instant estimate form with validation",
        icon: Target
      },
      {
        metric: "3 Markets",
        description: "Virginia Beach, Chesapeake, Norfolk",
        icon: User
      }
    ],

    features: [
      "Instant Estimate Engine - Multi-step form with vehicle selection, service customization, and instant pricing calculation using React Hook Form and Zod validation",
      "Service Showcases - Comprehensive pages for ceramic coating, paint correction, interior detailing, and full detail packages with transparent pricing",
      "Portfolio Galleries - Before/after image galleries showcasing premium detailing work and results",
      "Local SEO Optimization - Service area pages targeting Virginia Beach, Chesapeake, and Norfolk with location-specific content",
      "Motorsport-Grade Branding - Premium design with matte black and ignition blue color scheme reflecting automotive excellence",
      "Lead Management - Supabase integration for capturing and managing customer estimates and inquiries",
      "Performance Optimized - Fast loading times with Next.js 15 optimization and Vercel deployment",
      "Mobile-Responsive - Fully responsive design optimized for mobile users researching detailing services on the go"
    ],

    technicalDetails: {
      frontend: "Built with Next.js 15 and TypeScript using the App Router for optimal performance. Tailwind CSS provides the premium motorsport-inspired design with Shadcn/ui components for consistent, accessible UI elements. Custom animations and transitions create a premium user experience.",
      backend: "Supabase (PostgreSQL) handles all backend functionality including estimate form submissions, contact inquiries, and lead management. Service role authentication ensures secure data handling. React Hook Form with Zod schema validation provides robust form handling with type-safe validation.",
      features: "Multi-step instant estimate form guides users through vehicle selection, service options, and pricing. Portfolio galleries showcase work with optimized images. Service pages detail ceramic coating, paint correction, and detailing packages with clear pricing and benefits.",
      seo: "Implemented comprehensive local SEO strategy resulting in 32% increase in organic keywords. Service area pages target Virginia Beach, Chesapeake, and Norfolk markets. Optimized for key automotive detailing search terms including 'ceramic coating Virginia Beach', 'paint correction', and 'auto detailing'. Structured data and local business schema improve search visibility."
    },

    testimonial: {
      quote: "The website perfectly captures our motorsport-grade precision and attention to detail. The instant estimate form has streamlined our lead generation, and we're seeing strong growth in organic search traffic from our target markets.",
      author: "Blackbird Detailing Team",
      position: "Business Operations"
    },

    nextProject: null
  }
};

// Helper functions for portfolio data
export function getAllPortfolioProjects(): PortfolioProject[] {
  return Object.values(portfolioProjects);
}

export function getPortfolioProjectBySlug(slug: string): PortfolioProject | null {
  return portfolioProjects[slug] || null;
}

export function getFeaturedPortfolioProjects(): PortfolioProject[] {
  return Object.values(portfolioProjects).filter(project => project.featured);
}

export function getPortfolioProjectsByCategory(category: string): PortfolioProject[] {
  return Object.values(portfolioProjects).filter(project => project.category === category);
}
