import { Metadata } from "next";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/layout/PageTransition";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";

const portfolioProjects = [
  {
    id: "nexus-saas",
    title: "Nexus SaaS Platform",
    category: "SaaS Development",
    description: "A comprehensive project management SaaS platform with real-time collaboration, task automation, and advanced analytics.",
    image: "/images/portfolio/nexus-saas.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "WebSockets"],
    liveUrl: "https://nexus-saas-demo.com",
    featured: true,
    completedDate: "2024-02-15",
    client: "TechFlow Inc.",
    results: {
      metric1: "300% increase in team productivity",
      metric2: "50K+ active users",
      metric3: "$2M+ in revenue generated"
    }
  },
  {
    id: "luxe-ecommerce",
    title: "Luxe Fashion E-commerce",
    category: "Web Development",
    description: "Premium fashion e-commerce platform with advanced filtering, AR try-on features, and seamless checkout experience.",
    image: "/images/portfolio/luxe-ecommerce.jpg",
    technologies: ["React", "Shopify Plus", "Node.js", "AR.js"],
    liveUrl: "https://luxe-fashion-demo.com",
    featured: true,
    completedDate: "2024-01-20",
    client: "Luxe Brands",
    results: {
      metric1: "150% increase in conversion rate",
      metric2: "85% reduction in cart abandonment",
      metric3: "$5M+ in online sales"
    }
  },
  {
    id: "apex-marketing",
    title: "Apex Digital Campaign",
    category: "Digital Marketing",
    description: "Complete digital marketing transformation for a B2B SaaS company, including brand redesign and multi-channel campaigns.",
    image: "/images/portfolio/apex-marketing.jpg",
    technologies: ["Google Ads", "LinkedIn Ads", "HubSpot", "Analytics"],
    liveUrl: "https://apex-results-demo.com",
    featured: false,
    completedDate: "2023-12-10",
    client: "Apex Solutions",
    results: {
      metric1: "400% increase in qualified leads",
      metric2: "65% reduction in cost per lead",
      metric3: "200% increase in brand awareness"
    }
  },
  {
    id: "vertex-seo",
    title: "Vertex SEO Optimization",
    category: "SEO Services",
    description: "Complete SEO overhaul for a fintech startup, achieving first-page rankings for high-value keywords.",
    image: "/images/portfolio/vertex-seo.jpg",
    technologies: ["Technical SEO", "Content Strategy", "Link Building"],
    liveUrl: "https://vertex-fintech.com",
    featured: false,
    completedDate: "2023-11-05",
    client: "Vertex Fintech",
    results: {
      metric1: "800% increase in organic traffic",
      metric2: "Top 3 rankings for 50+ keywords",
      metric3: "300% increase in organic leads"
    }
  },
  {
    id: "quantum-app",
    title: "Quantum Mobile App",
    category: "SaaS Development",
    description: "Cross-platform mobile application for healthcare professionals with real-time patient monitoring and AI diagnostics.",
    image: "/images/portfolio/quantum-app.jpg",
    technologies: ["React Native", "TypeScript", "Firebase", "AI/ML"],
    liveUrl: "https://quantum-health-demo.com",
    featured: true,
    completedDate: "2023-10-15",
    client: "Quantum Health",
    results: {
      metric1: "100K+ healthcare professionals using",
      metric2: "40% faster diagnosis times",
      metric3: "95% user satisfaction rate"
    }
  },
  {
    id: "stellar-rebrand",
    title: "Stellar Brand Transformation",
    category: "Web Development",
    description: "Complete brand and website redesign for a Fortune 500 company, focusing on modern design and user experience.",
    image: "/images/portfolio/stellar-rebrand.jpg",
    technologies: ["Next.js", "Framer Motion", "Headless CMS", "Analytics"],
    liveUrl: "https://stellar-corp.com",
    featured: false,
    completedDate: "2023-09-20",
    client: "Stellar Corporation",
    results: {
      metric1: "250% increase in website engagement",
      metric2: "60% reduction in bounce rate",
      metric3: "180% increase in contact form submissions"
    }
  }
];

const categories = ["All", "SaaS Development", "Web Development", "Digital Marketing", "SEO Services"];

export const metadata: Metadata = {
  title: "Portfolio - Our Best Work & Case Studies",
  description: "Explore our portfolio of successful digital projects including SaaS platforms, e-commerce websites, and marketing campaigns. See detailed case studies and results.",
  keywords: ["portfolio", "case studies", "SaaS projects", "web development examples", "digital marketing results", "client success stories"],
  openGraph: {
    title: "Portfolio & Case Studies | Ravana Digital Agency",
    description: "Explore our portfolio of successful digital projects including SaaS platforms, e-commerce websites, and marketing campaigns.",
    type: "website",
  },
};

export default function PortfolioPage() {
  const featuredProjects = portfolioProjects.filter(project => project.featured);
  
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                Our <span className="text-accent">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                Discover the success stories we've created for our clients. From SaaS platforms to 
                e-commerce solutions, each project represents our commitment to excellence.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                Featured Projects
              </h2>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <RevealOnScroll key={project.id} delay={index * 0.2}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border hover:border-accent/50">
                    <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/80 group-hover:from-background/10 group-hover:to-background/60 transition-all duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-bold text-accent/20 group-hover:text-accent/30 transition-colors duration-500">
                          {project.title.split(' ')[0]}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          {project.category}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(project.completedDate).toLocaleDateString('en-US', { 
                            month: 'short', 
                            year: 'numeric' 
                          })}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                          <Link href={`/portfolio/${project.id}`}>
                            View Case Study
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Live Site
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                All Projects
              </h2>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioProjects.map((project, index) => (
                <RevealOnScroll key={project.id} delay={index * 0.1}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50">
                    <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/80 group-hover:from-background/10 group-hover:to-background/60 transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-4xl font-bold text-accent/20 group-hover:text-accent/30 transition-colors duration-300">
                          {project.title.split(' ')[0]}
                        </div>
                      </div>
                      {project.featured && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-accent text-accent-foreground">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-accent/10 text-accent text-xs">
                          {project.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(project.completedDate).toLocaleDateString('en-US', { 
                            month: 'short', 
                            year: 'numeric' 
                          })}
                        </div>
                      </div>
                      
                      <h3 className="font-heading font-bold mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 2).map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 2 && (
                          <span className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground">
                            +{project.technologies.length - 2}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1">
                          <Link href={`/portfolio/${project.id}`}>
                            Case Study
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto text-center">
            <RevealOnScroll>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-12 md:p-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's create something amazing together. Start your journey with Ravana today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contact">
                      Start Your Project
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services">
                      View Our Services
                    </Link>
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}