import { Metadata } from "next";
import { Code, Database, Cloud, Shield, Zap, Users, ArrowRight, Check, Github, Cpu, Server, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import StaggerReveal from "@/components/interactive/StaggerReveal";
import Breadcrumb from "@/components/seo/Breadcrumb";

const features = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end development using modern frameworks like React, Next.js, Node.js, and Python."
  },
  {
    icon: Database,
    title: "Scalable Architecture",
    description: "Design systems that grow with your user base, from hundreds to millions of users."
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Deploy on AWS, Vercel, or Digital Ocean with auto-scaling and high availability."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Implement robust authentication, authorization, and data protection standards."
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Built for speed with caching, CDN integration, and optimized database queries."
  },
  {
    icon: Users,
    title: "Multi-Tenant Ready",
    description: "Support multiple customers with isolated data and customizable features."
  }
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Stripe", category: "Payments" },
  { name: "Auth0", category: "Authentication" },
  { name: "Redis", category: "Caching" }
];

const process = [
  {
    step: 1,
    title: "Discovery & Planning",
    description: "We understand your business requirements, target audience, and technical constraints.",
    duration: "1-2 weeks"
  },
  {
    step: 2,
    title: "Architecture Design",
    description: "Design scalable system architecture, database schema, and API specifications.",
    duration: "1 week"
  },
  {
    step: 3,
    title: "MVP Development",
    description: "Build core features and functionality to validate your concept in the market.",
    duration: "4-8 weeks"
  },
  {
    step: 4,
    title: "Testing & Launch",
    description: "Comprehensive testing, deployment setup, and go-live support.",
    duration: "2 weeks"
  },
  {
    step: 5,
    title: "Scale & Iterate",
    description: "Monitor performance, gather feedback, and implement new features.",
    duration: "Ongoing"
  }
];

const packageTiers = [
  {
    name: "MVP",
    description: "Perfect for validating your SaaS concept",
    features: [
      "Core functionality development",
      "User authentication system",
      "Basic payment integration",
      "Responsive web application",
      "Database setup & hosting",
      "3 months of support"
    ]
  },
  {
    name: "Growth",
    description: "Scale your SaaS with advanced features",
    features: [
      "Everything in MVP",
      "Advanced analytics dashboard",
      "Multi-tenant architecture",
      "API development",
      "Third-party integrations",
      "6 months of support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "Enterprise-grade solutions",
    features: [
      "Everything in Growth",
      "Custom enterprise features",
      "Advanced security & compliance",
      "Dedicated infrastructure",
      "Priority support & SLA",
      "12 months of support"
    ]
  }
];

export const metadata: Metadata = {
  title: "SaaS Development Services | Ravana Solutions",
  description: "Build scalable SaaS web applications with full-stack development. Custom software solutions from MVP to enterprise scale using React, Next.js, and modern technologies.",
  keywords: ["SaaS development", "custom software", "web application", "React development", "Next.js", "full-stack development", "MVP development", "Hampton Roads"],
  alternates: {
    canonical: '/services/saas',
  },
  openGraph: {
    title: "SaaS Development Services | Ravana Solutions",
    description: "Build scalable SaaS web applications with full-stack development. Custom software solutions from MVP to enterprise scale.",
    type: "website",
    images: [
      {
        url: '/og-saas-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Ravana Solutions SaaS Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Development | Ravana Solutions',
    description: 'Build scalable SaaS web applications with expert full-stack development team.',
    images: ['/og-saas-development.jpg'],
  },
};

export default function SaaSPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Breadcrumb */}
        <section className="py-6 px-6">
          <div className="container mx-auto">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "SaaS Development" }
              ]}
            />
          </div>
        </section>
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-2xl mb-8">
                  <Code className="w-10 h-10 text-accent" />
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                  SaaS <span className="text-accent">Development</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Transform your innovative ideas into powerful Software-as-a-Service platforms. 
                  We build scalable, secure, and user-friendly applications that grow with your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/project-brief?service=saas">
                      Start Your Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#pricing">
                      View Pricing
                    </Link>
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Animated Code Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 text-accent font-mono text-sm animate-pulse">
              const app = new SaaS();
            </div>
            <div className="absolute top-40 right-20 text-accent font-mono text-sm animate-pulse delay-1000">
              app.scale();
            </div>
            <div className="absolute bottom-40 left-20 text-accent font-mono text-sm animate-pulse delay-2000">
              deploy(production);
            </div>
            <div className="absolute bottom-20 right-10 text-accent font-mono text-sm animate-pulse delay-3000">
              success: true
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Why Choose Our <span className="text-accent">SaaS Development</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We bring years of experience building successful SaaS applications across various industries.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="p-8 bg-background/50 border-accent/20 hover:border-accent/40 transition-colors group">
                      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-4">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </Card>
                  );
                })}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Modern <span className="text-accent">Technology Stack</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We use cutting-edge technologies and proven frameworks to build robust, scalable applications.
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {techStack.map((tech, index) => (
                  <div key={index} className="text-center">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {tech.category}
                    </Badge>
                    <div className="bg-muted/30 rounded-lg p-4 hover:bg-accent/10 transition-colors">
                      <span className="font-semibold">{tech.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Our Development <span className="text-accent">Process</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A proven methodology that delivers results, from concept to successful launch.
                </p>
              </div>
            </RevealOnScroll>

            <div className="space-y-12">
              {process.map((step, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-heading font-bold">{step.title}</h3>
                        <Badge variant="outline" className="self-start md:self-center">
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-lg">{step.description}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Package Options Section */}
        <section id="pricing" className="py-24 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Choose Your <span className="text-accent">Package</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Select the package that fits your needs and budget. All packages include ongoing support.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packageTiers.map((tier, index) => (
                  <Card key={index} className={`p-8 relative ${tier.popular ? 'border-accent bg-accent/5' : 'bg-background/50'}`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-heading font-bold mb-2">{tier.name}</h3>
                      <p className="text-muted-foreground">{tier.description}</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full ${tier.popular ? 'bg-accent hover:bg-accent/90 text-accent-foreground' : ''}`}>
                      <Link href={`/project-brief?service=saas&package=${tier.name.toLowerCase()}`}>
                        Get Started
                      </Link>
                    </Button>
                  </Card>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-accent/10 to-accent/5">
          <div className="container mx-auto text-center">
            <RevealOnScroll>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Ready to Build Your <span className="text-accent">SaaS</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and turn your innovative idea into a successful SaaS platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/project-brief?service=saas">
                    Start Your Project Today
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}