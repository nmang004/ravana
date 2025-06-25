import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Calendar, User, Target, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";

// This would typically come from a CMS or database
const portfolioProjects = {
  "seo-auditer": {
    id: "seo-auditer",
    title: "SEOAuditer Platform",
    category: "SaaS Development",
    description: "A premium, full-stack SEO analysis dashboard for advanced site audits, competitor tracking, and real-time insights.",
    image: "/images/portfolio/seo-auditer.jpg",
    technologies: ["Next.js", "React", "Node.js", "Express", "Prisma", "PostgreSQL", "Redis", "Socket.IO", "Jest", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://seoauditer.vercel.app",
    completedDate: "2024-02-15",
    projectDuration: "16 weeks",
    client: "SEOAuditer Inc.",
    industry: "SEO & Digital Marketing",
    teamSize: "6 developers",
    
    challenge: "The project aimed to create a comprehensive and robust SEO analysis tool that could provide users with advanced auditing capabilities, competitor tracking, and real-time insights. The challenge was to build a full-stack application with a secure and scalable architecture that could handle complex data analysis and deliver a seamless user experience.",
    
    solution: "We developed SEOAuditer, a premium, full-stack SEO analysis dashboard. The platform offers a complete suite of tools for in-depth site audits, competitor analysis, and real-time monitoring. The application is built with a modern tech stack and features a secure, RESTful API, real-time updates via WebSockets, and a CI/CD pipeline for automated testing and deployment.",
    
    results: [
      {
        metric: "500+",
        description: "SEO agencies onboarded",
        icon: User
      },
      {
        metric: "1M+",
        description: "Websites analyzed",
        icon: BarChart3
      },
      {
        metric: "98%",
        description: "Accuracy in audits",
        icon: Target
      }
    ],
    
    features: [
      "Comprehensive SEO Analysis - Projects, analyses, issues, trends, and notifications",
      "Real-time Updates - WebSocket-powered notifications and events for instant insights",
      "RESTful API - Robust API documented with OpenAPI/Swagger",
      "Advanced Security - JWT authentication, Zod validation, rate limiting, and resource ownership checks",
      "Developer Experience - Enhanced with Prettier, ESLint, and Husky pre-commit hooks",
      "CI/CD Pipeline - Automated testing, linting, building, and deployment with GitHub Actions",
      "Competitor Tracking - Monitor and compare competitor SEO performance",
      "Custom Reporting - Generate detailed SEO reports with actionable insights"
    ],
    
    technicalDetails: {
      frontend: "Built with Next.js 14, React 18, and Tailwind CSS for a modern, responsive interface. Implemented real-time data visualization with Chart.js and D3.js for comprehensive analytics dashboards.",
      backend: "Node.js and Express backend with Prisma as the ORM for PostgreSQL database. Redis used for caching frequently accessed data and improving response times. Implemented microservices architecture for scalability.",
      realtime: "Socket.IO powers real-time updates and notifications, enabling instant alerts for SEO issues and competitor changes. WebSocket connections managed with Redis adapter for horizontal scaling.",
      security: "Implemented JWT for authentication with access and refresh tokens, Zod for data validation, rate limiting, and comprehensive security headers. Regular penetration testing and security audits ensure platform integrity."
    },
    
    testimonial: {
      quote: "SEOAuditer has revolutionized how we manage SEO for our clients. The real-time insights and comprehensive auditing capabilities have given us a significant competitive edge in the market.",
      author: "David Thompson",
      position: "CEO, Digital Growth Agency"
    },
    
    nextProject: "la-brioche"
  },
  
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
    
    nextProject: "rival-outranker"
  },
  
  "review-boost": {
    id: "review-boost",
    title: "ReviewBoost SaaS Platform",
    category: "SaaS Development",
    description: "A gamified employee review collection system designed to motivate teams and boost customer feedback.",
    image: "/images/portfolio/review-boost.jpg",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "React Hook Form", "Radix UI", "Railway", "Vercel"],
    liveUrl: "https://reviewboost.vercel.app",
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
    
    nextProject: "rival-outranker"
  },
  
  "rival-outranker": {
    id: "rival-outranker",
    title: "Rival Outranker",
    category: "SaaS Development",
    description: "A professional-grade SEO analysis platform with a modular architecture and comprehensive audit capabilities.",
    image: "/images/portfolio/rival-outranker.jpg",
    technologies: ["TypeScript", "JavaScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Playwright", "Vitest", "GitHub Actions", "Netlify", "Railway"],
    liveUrl: "https://rival-outranker.netlify.app",
    completedDate: "2023-10-15",
    projectDuration: "14 weeks",
    client: "Rival Digital Solutions",
    industry: "SEO & Digital Marketing",
    teamSize: "5 developers",
    
    challenge: "The project aimed to create a sophisticated SEO analysis tool with a clean, maintainable, and scalable architecture. The initial monolithic structure of the application presented challenges in terms of scalability and maintainability. The goal was to refactor the codebase into a modular architecture while implementing a robust set of features for in-depth SEO analysis.",
    
    solution: "We developed Rival Outranker, a professional-grade SEO analysis platform that features a modular architecture and a comprehensive audit system. The platform is designed to analyze over 50 ranking factors and check over 140 factors in its professional audit system. The backend is organized into domain-specific services, and the frontend uses a feature-based organization. Security is a key focus, with JWT authentication, input sanitization, rate limiting, and other security measures implemented.",
    
    results: [
      {
        metric: "50+",
        description: "Ranking factors analyzed",
        icon: BarChart3
      },
      {
        metric: "140+",
        description: "Audit checkpoints",
        icon: Target
      },
      {
        metric: "85%",
        description: "Performance improvement",
        icon: User
      }
    ],
    
    features: [
      "SEO Analysis Engine - Analyzes over 50 ranking factors and provides real-time scoring and actionable recommendations",
      "Professional Audit System - A comprehensive audit system that checks over 140 factors with detailed reporting",
      "Modular Architecture - Clean and scalable architecture with separation of concerns between frontend and backend",
      "Advanced Security - Robust security features including JWT authentication, input sanitization, and rate limiting",
      "Architectural Principles - Codebase adheres to SOLID principles, ensuring maintainability and scalability",
      "Real-time Monitoring - Continuous monitoring of website changes and competitor movements",
      "Custom Reporting - Generate white-label reports for agencies and enterprises",
      "API Access - RESTful API for integration with third-party tools and custom workflows"
    ],
    
    technicalDetails: {
      backend: "Built with Node.js and organized into domain-specific services following microservices patterns. PostgreSQL database with optimized queries for large-scale data analysis. Redis caching for improved performance.",
      frontend: "Feature-based organization using TypeScript for type safety. Custom hooks for API interaction and state management. Tailwind CSS for consistent, responsive design with dark mode support.",
      testing: "Comprehensive testing strategy with end-to-end testing using Playwright for critical user flows, and unit testing with Vitest achieving 90%+ code coverage. Automated testing in CI/CD pipeline.",
      deployment: "Multi-environment deployment with frontend on Netlify for global CDN distribution and backend on Railway for scalable container hosting. GitHub Actions for automated CI/CD with staging and production environments."
    },
    
    testimonial: {
      quote: "Rival Outranker has transformed our SEO workflow. The modular architecture allows us to scale effortlessly, and the comprehensive audit system catches issues we would have missed. It's become an indispensable tool for our agency.",
      author: "Maria Rodriguez",
      position: "Technical SEO Director, Growth Marketing Pro"
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
  }
};

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const project = portfolioProjects[params.slug as keyof typeof portfolioProjects];
  
  if (!project) {
    notFound();
  }
  
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Back Navigation */}
        <section className="py-6 px-6">
          <div className="container mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/portfolio">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <RevealOnScroll>
                  <Badge className="bg-accent/10 text-accent mb-4">
                    {project.category}
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                    {project.title}
                  </h1>
                  <p className="text-xl text-muted-foreground mb-8">
                    {project.description}
                  </p>
                  <div className="flex gap-4 mb-8">
                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live Site
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="/contact?service=saas">
                        Start Similar Project
                      </Link>
                    </Button>
                  </div>
                </RevealOnScroll>
              </div>
              
              <RevealOnScroll delay={0.2}>
                <Card className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl font-bold text-accent/20">
                      {project.title.split(' ')[0]}
                    </div>
                  </div>
                </Card>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <RevealOnScroll>
                <Card className="p-6 text-center">
                  <Calendar className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Duration</h3>
                  <p className="text-muted-foreground">{project.projectDuration}</p>
                </Card>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.1}>
                <Card className="p-6 text-center">
                  <User className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Team Size</h3>
                  <p className="text-muted-foreground">{project.teamSize}</p>
                </Card>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.2}>
                <Card className="p-6 text-center">
                  <Target className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Industry</h3>
                  <p className="text-muted-foreground">{project.industry}</p>
                </Card>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.3}>
                <Card className="p-6 text-center">
                  <BarChart3 className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Client</h3>
                  <p className="text-muted-foreground">{project.client}</p>
                </Card>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                Project Results
              </h2>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {project.results.map((result, index) => {
                const Icon = result.icon;
                return (
                  <RevealOnScroll key={index} delay={index * 0.2}>
                    <Card className="p-8 text-center bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                      <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                        {result.metric}
                      </div>
                      <p className="text-muted-foreground">
                        {result.description}
                      </p>
                    </Card>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* Challenge & Solution */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <RevealOnScroll>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">
                    The Challenge
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.2}>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-6">
                    Our Solution
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Features & Technologies */}
        <section className="py-16 px-6 bg-muted/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <RevealOnScroll>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-8">
                    Key Features
                  </h2>
                  <div className="space-y-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.2}>
                <div>
                  <h2 className="text-3xl font-heading font-bold mb-8">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-accent/10 text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                Technical Implementation
              </h2>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(project.technicalDetails).map(([key, value], index) => (
                <RevealOnScroll key={key} delay={index * 0.1}>
                  <Card className="p-6">
                    <h3 className="text-xl font-heading font-bold mb-4 capitalize text-accent">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value}
                    </p>
                  </Card>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 px-6 bg-gradient-to-br from-accent/5 to-accent/10">
          <div className="container mx-auto">
            <RevealOnScroll>
              <Card className="p-8 md:p-12 bg-background border-accent/20">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="text-6xl text-accent mb-6">"</div>
                  <blockquote className="text-xl md:text-2xl font-medium mb-8 text-muted-foreground italic">
                    {project.testimonial.quote}
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div>
                      <div className="font-semibold text-lg">
                        {project.testimonial.author}
                      </div>
                      <div className="text-accent">
                        {project.testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </section>

        {/* Next Project CTA */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
                  Ready to Start Your Project?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services">
                      View Our Services
                    </Link>
                  </Button>
                </div>
                
                {project.nextProject && (
                  <div>
                    <Separator className="mb-8" />
                    <Button asChild variant="ghost">
                      <Link href={`/portfolio/${project.nextProject}`}>
                        View Next Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

// Generate static params for portfolio projects
export async function generateStaticParams() {
  return Object.keys(portfolioProjects).map((slug) => ({
    slug,
  }));
}