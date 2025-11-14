import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";
import StaggerReveal from "@/components/interactive/StaggerReveal";
import AnimatedCounter from "@/components/interactive/AnimatedCounter";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations/variants";

const testimonials = [
  {
    name: "Judah Cates",
    role: "Founder",
    company: "Blackbird Detailing",
    content: "Nick did an incredible job creating and optimizing our website. Communication was seamless, every step was easy, and the results exceeded my expectations. Truly knowledgeable and reliable!",
    rating: 5
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, GrowthLab",
    company: "GrowthLab Marketing",
    content: "Working with Ravana was a game-changer. They didn't just build us a website, they created a digital experience that converts. Our leads increased by 300% in the first quarter.",
    rating: 5
  },
  {
    name: "Emily Watson",
    role: "Product Manager, DataViz",
    company: "DataViz Corp",
    content: "The level of professionalism and creativity from Ravana is unmatched. They took our complex requirements and delivered a beautiful, functional solution that our users love.",
    rating: 5
  }
];

const clientLogos = [
  { name: "Blackbird Detailing" },
  { name: "GrowthLab" },
  { name: "DataViz" },
  { name: "InnovateCorp" },
  { name: "ScaleUp" },
  { name: "DigitalEdge" }
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Completed" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 20, suffix: "+", label: "Happy Clients" },
  { value: 24, suffix: "h", label: "Response Time" }
];

export default function TestimonialsSection() {
  const testimonialCards = testimonials.map((testimonial, index) => (
    <Card key={index} className="p-6 h-full group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50">
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent group-hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${i * 0.1}s` }} />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-muted-foreground mb-6 italic">
        "{testimonial.content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-accent/20 transition-colors duration-300">
          <span className="text-accent font-semibold text-lg">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <div className="font-semibold text-foreground">
            {testimonial.name}
          </div>
          <div className="text-sm text-muted-foreground">
            {testimonial.role}
          </div>
          <div className="text-sm text-accent">
            {testimonial.company}
          </div>
        </div>
      </div>
    </Card>
  ));

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Stats Section */}
        <RevealOnScroll variants={fadeInUp} className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl md:text-4xl font-heading font-bold text-accent">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Client Logos */}
        <RevealOnScroll variants={fadeInUp} delay={200} className="text-center mb-16">
          <p className="text-muted-foreground mb-8">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center justify-center h-10 hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium text-muted-foreground">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Section Header */}
        <RevealOnScroll variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            What Our <span className="text-accent">Clients</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </RevealOnScroll>

        {/* Testimonials Grid */}
        <StaggerReveal 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.15}
        >
          {testimonialCards}
        </StaggerReveal>
      </div>
    </section>
  );
}