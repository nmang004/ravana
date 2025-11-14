import { Metadata } from "next";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/layout/PageTransition";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import { getAllPortfolioProjects } from "@/lib/data";

const categories = ["All", "SaaS Development", "Web Development", "Digital Marketing", "SEO Services", "Web Development + SEO"];

export const metadata: Metadata = {
  title: "Portfolio | Ravana Solutions Web Development Projects",
  description: "Explore our portfolio of successful web development and SEO projects. See detailed case studies showcasing custom websites, web applications, and proven results.",
  keywords: ["portfolio", "web development case studies", "website examples", "SEO results", "custom web applications", "client success stories", "Hampton Roads web design"],
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: "Portfolio & Case Studies | Ravana Solutions",
    description: "Explore our portfolio of successful web development and SEO projects. See detailed case studies showcasing custom websites and proven results.",
    type: "website",
    images: [
      {
        url: '/og-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'Ravana Solutions Portfolio - Web Development Projects',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Ravana Solutions',
    description: 'Explore our successful web development and SEO projects with detailed case studies and proven results.',
    images: ['/og-portfolio.jpg'],
  },
};

export default function PortfolioPage() {
  const portfolioProjects = getAllPortfolioProjects();
  const featuredProjects = portfolioProjects.filter(project => project.featured);
  
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 text-center">
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
        <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                Featured Projects
              </h2>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-16">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <RevealOnScroll key={project.id} delay={index * 0.2}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border hover:border-accent/50">
                    <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 relative overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                      />
                    </div>

                    <div className="p-4 md:p-6">
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
        <section className="py-8 md:py-12 lg:py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                All Projects
              </h2>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {portfolioProjects.map((project, index) => (
                <RevealOnScroll key={project.id} delay={index * 0.1}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border hover:border-accent/50">
                    <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 relative overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <div className="p-3 md:p-4">
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
        <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6">
          <div className="container mx-auto text-center">
            <RevealOnScroll>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16">
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