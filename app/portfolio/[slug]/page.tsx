import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Calendar, User, Target, BarChart3, CheckCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import Breadcrumb from "@/components/seo/Breadcrumb";
import StructuredData from "@/components/seo/StructuredData";
import { portfolioProjects, getAllPortfolioProjects } from "@/lib/data";


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
      {/* Creative Work Structured Data */}
      <StructuredData
        type="creativeWork"
        data={{
          name: project.title,
          description: project.description,
          image: project.image,
          url: `https://www.ravanasolutions.com/portfolio/${project.id}`,
          dateCreated: project.completedDate,
          datePublished: project.completedDate,
          keywords: project.technologies.join(', '),
          genre: project.category,
          about: project.challenge
        }}
      />

      <div className="pt-20">
        {/* Back Navigation */}
        <section className="py-6 px-6">
          <div className="container mx-auto">
            <Button asChild variant="ghost" className="mb-4">
              <Link href="/portfolio">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Link>
            </Button>

            {/* Breadcrumb Navigation */}
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: project.category },
                { label: project.title }
              ]}
            />
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
  const projects = getAllPortfolioProjects();
  return projects.map((project) => ({
    slug: project.id,
  }));
}