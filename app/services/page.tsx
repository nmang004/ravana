import { Metadata } from "next";
import { Code, Palette, TrendingUp, Search, ArrowRight, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";

const services = [
  {
    id: "web",
    icon: Palette,
    title: "Web Development",
    shortDescription: "Premium websites that convert. Custom designs that reflect your brand and drive business results.",
    description: "Create a stunning online presence that captivates your audience and drives conversions. Our custom websites are built for performance, SEO, and user experience.",
    features: [
      "Custom Website Design & Development",
      "Responsive & Mobile-First Design",
      "Performance Optimization (Core Web Vitals)",
      "SEO-Friendly Architecture",
      "Content Management System Integration",
      "E-commerce Solutions",
      "Analytics & Tracking Setup",
      "Ongoing Maintenance & Support"
    ],
    technologies: ["Next.js", "React", "WordPress", "Shopify", "Tailwind CSS", "Framer Motion"],
    pricing: "Starting from $5,000",
    timeline: "4-8 weeks"
  },
  {
    id: "seo",
    icon: Search,
    title: "SEO Services",
    shortDescription: "Dominate search results with our proven SEO strategies. Technical and content optimization.",
    description: "Boost your online visibility and drive organic traffic with our comprehensive SEO services. We use proven strategies to improve your search engine rankings.",
    features: [
      "Technical SEO Audit & Optimization",
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Content Strategy & Creation",
      "Link Building & Outreach",
      "Local SEO (Google My Business)",
      "SEO Analytics & Reporting",
      "Competitor Analysis"
    ],
    technologies: ["Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Google Analytics"],
    pricing: "Starting from $1,500/month",
    timeline: "3-6 months for results"
  },
  {
    id: "saas",
    icon: Code,
    title: "SaaS Development",
    shortDescription: "Full-stack SaaS applications built with modern technologies. From MVP to enterprise-scale solutions.",
    description: "Transform your idea into a powerful Software-as-a-Service platform. We specialize in building scalable, secure, and user-friendly SaaS applications that grow with your business.",
    features: [
      "MVP Development & Rapid Prototyping",
      "Full-Stack Development (React/Next.js + Node.js/Python)",
      "Cloud Infrastructure Setup (AWS/Vercel/Digital Ocean)",
      "Payment Integration (Stripe, PayPal)",
      "User Authentication & Authorization",
      "Multi-tenant Architecture",
      "API Development & Integration",
      "Database Design & Optimization"
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "AWS", "Stripe"],
    pricing: "Starting from $15,000",
    timeline: "8-16 weeks"
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that grow your business. From social media to paid advertising, we help you reach your target audience effectively.",
    shortDescription: "Data-driven marketing strategies that grow your business. From social media to paid advertising.",
    features: [
      "Social Media Marketing & Management",
      "Pay-Per-Click (PPC) Advertising",
      "Content Marketing Strategy",
      "Email Marketing Campaigns",
      "Conversion Rate Optimization",
      "Marketing Analytics & Reporting",
      "Brand Strategy & Positioning",
      "Lead Generation Campaigns"
    ],
    technologies: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Google Analytics", "HubSpot", "Mailchimp"],
    pricing: "Starting from $2,500/month",
    timeline: "Ongoing campaigns"
  }
];

export const metadata: Metadata = {
  title: "Web Development & SEO Services | Ravana Solutions",
  description: "Expert web development and SEO services in Hampton Roads. We build custom websites, web applications, and implement proven search optimization strategies.",
  keywords: ["web development", "SEO services", "search engine optimization", "website design", "custom web development", "Hampton Roads", "Next.js", "React development"],
  openGraph: {
    title: "Web Development & SEO Services | Ravana Solutions",
    description: "Expert web development and SEO services in Hampton Roads. Custom websites, web applications, and proven search optimization strategies.",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Comprehensive digital solutions designed to help your business thrive in the modern landscape. 
            From development to marketing, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`p-4 md:p-6 lg:p-0 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="w-14 h-14 md:w-16 md:h-16 lg:w-12 lg:h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-7 h-7 md:w-8 md:h-8 lg:w-6 lg:h-6 text-accent" />
                      </div>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold">
                        {service.title}
                      </h2>
                    </div>
                    
                    <p className="text-base md:text-lg text-muted-foreground mb-8">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold mb-3 text-accent">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 4).map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                              <Check className="w-4 h-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-accent">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-muted text-sm rounded-full text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-4 space-y-2">
                          <div className="text-sm">
                            <span className="text-muted-foreground">Starting from: </span>
                            <span className="font-semibold text-accent">{service.pricing}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-muted-foreground">Timeline: </span>
                            <span className="font-semibold">{service.timeline}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Link href={`/contact?service=${service.id}`}>
                          Get Started
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="lg">
                        <Link href={`/services/${service.id}`}>
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Visual */}
                  <Card className={`p-8 md:p-12 lg:p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="aspect-square min-h-[300px] md:min-h-[400px] lg:min-h-0 flex items-center justify-center">
                      <Icon className="w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 text-accent opacity-20" />
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and find the perfect solution for your business goals.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/contact">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </PageTransition>
  );
}