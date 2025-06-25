import { Code, Palette, TrendingUp, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import StaggerReveal from "@/components/interactive/StaggerReveal";
import { fadeInUp, scaleIn } from "@/lib/animations/variants";
import Link from "next/link";

const services = [
  {
    icon: Code,
    title: "SaaS Development",
    description: "Full-stack SaaS applications built with modern technologies. From MVP to enterprise-scale solutions.",
    features: ["React/Next.js", "Node.js/Python", "Cloud Infrastructure", "Payment Integration"],
    href: "/services/saas"
  },
  {
    icon: Palette,
    title: "Web Development", 
    description: "Premium websites that convert. Custom designs that reflect your brand and drive business results.",
    features: ["Custom Design", "Responsive Layout", "Performance Optimized", "CMS Integration"],
    href: "/services/web"
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven marketing strategies that grow your business. From social media to paid advertising.",
    features: ["Social Media", "PPC Campaigns", "Content Strategy", "Analytics & Reporting"],
    href: "/services/marketing"
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Dominate search results with our proven SEO strategies. Technical and content optimization.",
    features: ["Technical SEO", "Content Optimization", "Link Building", "Local SEO"],
    href: "/services/seo"
  }
];

export default function ServicesSection() {
  const serviceCards = services.map((service, index) => {
    const Icon = service.icon;
    return (
      <Link key={index} href={service.href}>
        <Card className="p-8 transition-all duration-300 border-border group md:hover:shadow-lg md:hover:border-accent/50 cursor-pointer">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 md:group-hover:bg-accent/20 transition-colors duration-300">
              <Icon className="w-6 h-6 text-accent md:group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-heading font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <ul className="space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </Link>
    );
  });

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <RevealOnScroll variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern landscape.
          </p>
        </RevealOnScroll>

        <StaggerReveal 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          staggerDelay={0.2}
        >
          {serviceCards}
        </StaggerReveal>
      </div>
    </section>
  );
}