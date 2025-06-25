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
  "nexus-saas": {
    id: "nexus-saas",
    title: "Nexus SaaS Platform",
    category: "SaaS Development",
    description: "A comprehensive project management SaaS platform with real-time collaboration, task automation, and advanced analytics.",
    image: "/images/portfolio/nexus-saas.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "WebSockets", "Redis", "AWS"],
    liveUrl: "https://nexus-saas-demo.com",
    completedDate: "2024-02-15",
    projectDuration: "14 weeks",
    client: "TechFlow Inc.",
    industry: "B2B SaaS",
    teamSize: "5 developers",
    
    challenge: "TechFlow Inc. needed a modern project management solution that could scale from small teams to enterprise organizations. Their existing solution was outdated, lacking real-time collaboration features and advanced analytics that modern teams require.",
    
    solution: "We developed a comprehensive SaaS platform from the ground up, featuring real-time collaboration, intelligent task automation, advanced project analytics, and seamless integrations with popular development tools. The platform was built with scalability in mind, supporting multi-tenant architecture.",
    
    results: [
      {
        metric: "300%",
        description: "Increase in team productivity",
        icon: BarChart3
      },
      {
        metric: "50K+",
        description: "Active users within 6 months",
        icon: User
      },
      {
        metric: "$2M+",
        description: "Revenue generated in first year",
        icon: Target
      }
    ],
    
    features: [
      "Real-time collaborative workspace",
      "AI-powered task automation",
      "Advanced project analytics dashboard",
      "Multi-tenant architecture",
      "Stripe payment integration",
      "WebSocket-based live updates",
      "Role-based access control",
      "API integrations with 50+ tools"
    ],
    
    technicalDetails: {
      frontend: "Built with Next.js 14 and TypeScript for type safety and performance. Used Tailwind CSS for rapid UI development and Framer Motion for smooth animations.",
      backend: "Node.js with Express.js API, PostgreSQL database with Prisma ORM. Redis for caching and session management.",
      infrastructure: "Deployed on AWS with auto-scaling EC2 instances, RDS for database, and CloudFront for CDN.",
      security: "Implemented OAuth 2.0, JWT tokens, and role-based access control. Regular security audits and penetration testing."
    },
    
    testimonial: {
      quote: "Ravana delivered beyond our expectations. The platform they built has transformed how our teams collaborate and has become a key competitive advantage for our business.",
      author: "Sarah Johnson",
      position: "CTO, TechFlow Inc."
    },
    
    nextProject: "luxe-ecommerce"
  },
  
  "luxe-ecommerce": {
    id: "luxe-ecommerce",
    title: "Luxe Fashion E-commerce",
    category: "Web Development",
    description: "Premium fashion e-commerce platform with advanced filtering, AR try-on features, and seamless checkout experience.",
    image: "/images/portfolio/luxe-ecommerce.jpg",
    technologies: ["React", "Shopify Plus", "Node.js", "AR.js", "Stripe", "MongoDB"],
    liveUrl: "https://luxe-fashion-demo.com",
    completedDate: "2024-01-20",
    projectDuration: "10 weeks",
    client: "Luxe Brands",
    industry: "Fashion & Retail",
    teamSize: "4 developers",
    
    challenge: "Luxe Brands wanted to create a premium online shopping experience that matched their high-end retail stores. They needed advanced features like AR try-on, sophisticated product filtering, and a conversion-optimized checkout process.",
    
    solution: "We built a cutting-edge e-commerce platform with AR try-on capabilities, intelligent product recommendations, advanced filtering, and a streamlined checkout process. The platform was optimized for both desktop and mobile experiences.",
    
    results: [
      {
        metric: "150%",
        description: "Increase in conversion rate",
        icon: BarChart3
      },
      {
        metric: "85%",
        description: "Reduction in cart abandonment",
        icon: Target
      },
      {
        metric: "$5M+",
        description: "Online sales in first year",
        icon: Target
      }
    ],
    
    features: [
      "AR virtual try-on experience",
      "Advanced product filtering",
      "Intelligent recommendations",
      "One-click checkout",
      "Wishlist and favorites",
      "Size guide and fit finder",
      "Multi-currency support",
      "Inventory management system"
    ],
    
    technicalDetails: {
      frontend: "React with custom components, AR.js for augmented reality features, and responsive design optimized for mobile commerce.",
      backend: "Node.js API with MongoDB for product catalog management and real-time inventory tracking.",
      ecommerce: "Shopify Plus integration for order management, payment processing, and fulfillment automation.",
      performance: "Optimized for Core Web Vitals with lazy loading, image optimization, and CDN implementation."
    },
    
    testimonial: {
      quote: "The AR try-on feature and seamless shopping experience have revolutionized our online presence. Our customers love the platform and sales have exceeded all expectations.",
      author: "Michael Chen",
      position: "Head of Digital, Luxe Brands"
    },
    
    nextProject: "quantum-app"
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