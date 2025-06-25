import { Metadata } from "next";
import { Palette, Smartphone, Zap, Search, ShoppingCart, BarChart3, ArrowRight, Check, Layers, Figma, Chrome, MonitorSpeaker } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import StaggerReveal from "@/components/interactive/StaggerReveal";

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Unique, brand-focused designs that set you apart from competitors and captivate your audience."
  },
  {
    icon: Smartphone,
    title: "Mobile-First Approach",
    description: "Responsive designs that look perfect on all devices, from smartphones to large displays."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for Core Web Vitals with industry-leading loading speeds and performance."
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description: "Built with search engine optimization in mind to maximize your online visibility."
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Ready",
    description: "Seamless integration with shopping platforms and payment gateways for online stores."
  },
  {
    icon: BarChart3,
    title: "Analytics Integration",
    description: "Track visitor behavior and conversion metrics with integrated analytics solutions."
  }
];

const designProcess = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description: "Understanding your brand, goals, target audience, and competitive landscape.",
    deliverables: ["Brand Analysis", "User Personas", "Competitor Research"],
    duration: "1 week"
  },
  {
    step: 2,
    title: "Design & Wireframes",
    description: "Creating wireframes, mockups, and interactive prototypes for your approval.",
    deliverables: ["Wireframes", "Visual Designs", "Interactive Prototype"],
    duration: "2 weeks"
  },
  {
    step: 3,
    title: "Development",
    description: "Building your website with clean code, best practices, and performance optimization.",
    deliverables: ["Coded Website", "CMS Setup", "Performance Optimization"],
    duration: "3-4 weeks"
  },
  {
    step: 4,
    title: "Testing & Launch",
    description: "Thorough testing across devices and browsers, followed by deployment and training.",
    deliverables: ["QA Testing", "Launch Setup", "Training Materials"],
    duration: "1 week"
  }
];

const technologies = [
  { name: "Next.js", category: "Framework", icon: "⚡" },
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "Tailwind CSS", category: "Styling", icon: "🎨" },
  { name: "Framer Motion", category: "Animation", icon: "🎭" },
  { name: "WordPress", category: "CMS", icon: "📝" },
  { name: "Shopify", category: "E-commerce", icon: "🛒" },
  { name: "Webflow", category: "No-code", icon: "🌊" },
  { name: "Figma", category: "Design", icon: "🎯" }
];

const portfolioShowcase = [
  {
    title: "SaaS Platform",
    category: "B2B Software",
    image: "/images/portfolio/saas-dashboard.jpg",
    description: "Modern dashboard interface with complex data visualization",
    tech: ["Next.js", "React", "Chart.js"]
  },
  {
    title: "E-commerce Store",
    category: "Retail",
    image: "/images/portfolio/ecommerce-store.jpg",
    description: "High-converting online store with seamless checkout",
    tech: ["Shopify", "React", "Stripe"]
  },
  {
    title: "Creative Agency",
    category: "Creative",
    image: "/images/portfolio/agency-website.jpg",
    description: "Award-winning design with stunning animations",
    tech: ["Next.js", "Framer Motion", "GSAP"]
  }
];

const pricingTiers = [
  {
    name: "Essential",
    price: "$5,000",
    description: "Perfect for small businesses and startups",
    features: [
      "5-page custom website",
      "Mobile-responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "3 months of support",
      "Google Analytics setup"
    ]
  },
  {
    name: "Professional",
    price: "$12,000",
    description: "Ideal for growing businesses",
    features: [
      "10-page custom website",
      "Advanced animations",
      "CMS integration",
      "E-commerce functionality",
      "Advanced SEO package",
      "6 months of support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "Enterprise integrations",
      "Priority support",
      "Training & documentation",
      "12 months of support"
    ]
  }
];

export const metadata: Metadata = {
  title: "Web Development Services - Custom Websites That Convert",
  description: "Premium web development services that create stunning, high-performance websites. Custom design, mobile-first approach, and SEO optimization included.",
  keywords: ["web development", "custom website design", "responsive design", "Next.js development", "React development", "e-commerce website"],
  openGraph: {
    title: "Web Development Services | Ravana Digital Agency",
    description: "Premium web development services that create stunning, high-performance websites. Custom design, mobile-first approach, and SEO optimization included.",
    type: "website",
  },
};

export default function WebDevelopmentPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-2xl mb-8">
                  <Palette className="w-10 h-10 text-accent" />
                </div>
                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                  Web <span className="text-accent">Development</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Create a stunning online presence that captivates your audience and drives conversions. 
                  Custom websites built for performance, SEO, and exceptional user experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contact?service=web">
                      Start Your Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#portfolio">
                      View Our Work
                    </Link>
                  </Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
          
          {/* Floating Design Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-16 h-16 border-2 border-accent rounded-lg animate-bounce"></div>
            <div className="absolute top-40 right-20 w-12 h-12 bg-accent rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-40 left-20 w-20 h-1 bg-accent animate-pulse delay-2000"></div>
            <div className="absolute bottom-20 right-10 w-8 h-8 border-2 border-accent rounded-full animate-spin"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Why Choose Our <span className="text-accent">Web Development</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We create websites that don't just look amazing – they perform exceptionally and drive real business results.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card key={index} className="p-8 bg-background/50 border-accent/20 hover:border-accent/40 transition-all duration-300 group hover:-translate-y-2">
                      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors group-hover:scale-110 duration-300">
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

        {/* Portfolio Showcase */}
        <section id="portfolio" className="py-24 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Recent <span className="text-accent">Work</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Explore some of our recent web development projects across different industries.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolioShowcase.map((project, index) => (
                  <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-accent/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <MonitorSpeaker className="w-16 h-16 text-accent/40 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="p-6">
                      <Badge variant="outline" className="mb-3 text-xs">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </StaggerReveal>

            <RevealOnScroll delay={0.4}>
              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">
                    View All Projects
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Modern <span className="text-accent">Technologies</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  We use the latest web technologies and frameworks to build fast, secure, and scalable websites.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {technologies.map((tech, index) => (
                  <Card key={index} className="p-6 text-center bg-background/50 hover:bg-accent/5 transition-all duration-300 group">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <h3 className="font-semibold mb-1">{tech.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {tech.category}
                    </Badge>
                  </Card>
                ))}
              </div>
            </StaggerReveal>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-24 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Our Design <span className="text-accent">Process</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  A collaborative approach that ensures your vision comes to life with precision and creativity.
                </p>
              </div>
            </RevealOnScroll>

            <div className="space-y-16">
              {designProcess.map((step, index) => (
                <RevealOnScroll key={index} delay={index * 0.1}>
                  <div className="flex flex-col lg:flex-row items-start gap-8">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl mb-4">
                        {step.step}
                      </div>
                      <Badge variant="outline">{step.duration}</Badge>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-4">{step.title}</h3>
                      <p className="text-muted-foreground text-lg mb-6">{step.description}</p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-accent">Deliverables:</h4>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable, deliverableIndex) => (
                            <Badge key={deliverableIndex} variant="secondary">
                              {deliverable}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Transparent <span className="text-accent">Pricing</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Choose the package that best fits your needs. All packages include ongoing support and maintenance.
                </p>
              </div>
            </RevealOnScroll>

            <StaggerReveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingTiers.map((tier, index) => (
                  <Card key={index} className={`p-8 relative hover:scale-105 transition-transform duration-300 ${tier.popular ? 'border-accent bg-accent/5 scale-105' : 'bg-background/50'}`}>
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-heading font-bold mb-2">{tier.name}</h3>
                      <div className="text-4xl font-bold mb-2">
                        {tier.price}
                        {tier.name !== "Enterprise" && <span className="text-lg text-muted-foreground"> starting</span>}
                      </div>
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
                      <Link href={`/contact?service=web&package=${tier.name.toLowerCase()}`}>
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
                Ready to Launch Your <span className="text-accent">Website</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's create a stunning website that represents your brand and drives meaningful results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/contact?service=web">
                    Start Your Project Today
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">
                    View Our Portfolio
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