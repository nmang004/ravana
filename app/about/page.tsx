import { Metadata } from "next";
import { ArrowRight, Users, Award, Target, Zap, Heart, Globe, Code2, Palette, Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import PageTransition from "@/components/layout/PageTransition";
import RevealOnScroll from "@/components/interactive/RevealOnScroll";

const stats = [
  {
    icon: Users,
    value: "50+",
    label: "Happy Clients",
    description: "Successful partnerships built on trust"
  },
  {
    icon: Award,
    value: "100+",
    label: "Projects Completed",
    description: "From startups to enterprise solutions"
  },
  {
    icon: Target,
    value: "99%",
    label: "Client Satisfaction",
    description: "Exceeding expectations consistently"
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Support Available",
    description: "We're here when you need us"
  }
];

const team = [
  {
    name: "Nick Mangubat",
    position: "Co-Founder and Developer",
    bio: "A software engineer with a passion for creating beautiful and functional web experiences. Nick specializes in front-end development and has a keen eye for detail.",
    image: "/images/team/nick.jpg",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "Ishan Perera",
    position: "Co-Founder and Stakeholder",
    bio: "A strategic thinker with a background in business development. Ishan is passionate about helping businesses grow and succeed in the digital age.",
    image: "/images/team/ishan.jpg",
    skills: ["Business Strategy", "Marketing", "Project Management", "Client Relations"]
  }
];

const values = [
  {
    icon: Heart,
    title: "Client-First Approach",
    description: "Your success is our success. We're not just a service provider, we're your strategic partner committed to achieving your business goals."
  },
  {
    icon: Zap,
    title: "Innovation & Excellence",
    description: "We stay ahead of technology trends and industry best practices to deliver cutting-edge solutions that give you a competitive advantage."
  },
  {
    icon: Globe,
    title: "Transparent Communication",
    description: "No black boxes or surprises. We maintain open, honest communication throughout every project with regular updates and clear timelines."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure success by your business outcomes. Every decision we make is guided by data and focused on delivering measurable results."
  }
];

const services = [
  {
    icon: Palette,
    title: "Web Development",
    description: "Premium websites that convert"
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Rank higher and drive organic traffic"
  },
  {
    icon: Code2,
    title: "SaaS Development",
    description: "Full-stack applications that scale"
  }
];

export const metadata: Metadata = {
  title: "About Us - Meet the Ravana Digital Agency Team",
  description: "Learn about Ravana Digital Agency - our story, team, values, and commitment to delivering exceptional digital experiences. Founded by Silicon Valley veterans.",
  keywords: ["about ravana", "digital agency team", "company story", "silicon valley", "web development team", "agency values"],
  openGraph: {
    title: "About Ravana Digital Agency | Our Story & Team",
    description: "Learn about our story, team, and commitment to delivering exceptional digital experiences. Founded by Silicon Valley veterans.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
                About <span className="text-accent">Ravana</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
                We're a premium digital agency that transforms ambitious ideas into 
                extraordinary digital experiences. Founded on the belief that exceptional 
                design and engineering can change businesses.
              </p>
            </RevealOnScroll>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <RevealOnScroll>
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <p>
                      Ravana was born in Norfolk, Virginia, from a simple observation: too many 
                      businesses were settling for mediocre digital experiences. Our founder, 
                      leveraging a surplus of enterprise-level client experience, saw an opportunity 
                      to bring world-class design and engineering to local businesses.
                    </p>
                    <p>
                      Founded in 2020, we set out to bridge the gap between enterprise-level quality 
                      and accessible service. Our name, inspired by the mythological figure known for 
                      his unmatched skills and ambition, reflects our commitment to excellence. We 
                      believe every company deserves world-class design.
                    </p>
                    <p>
                      Today, we're proud to have helped over 50 companies transform their digital 
                      presence and achieve remarkable growth. From startups securing their first 
                      round of funding to established businesses expanding into new markets.
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={0.2}>
                <Card className="aspect-square bg-gradient-to-br from-accent/10 to-accent/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-background/20 to-background/60" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl font-bold text-accent/20">
                      2020
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-accent font-semibold">Founded</p>
                    <p className="text-sm text-muted-foreground">
                      Started with a vision to democratize premium digital experiences
                    </p>
                  </div>
                </Card>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                Ravana by the Numbers
              </h2>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <RevealOnScroll key={index} delay={index * 0.1}>
                    <Card className="p-6 text-center bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                      <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                      <div className="text-4xl font-bold text-accent mb-2">
                        {stat.value}
                      </div>
                      <h3 className="font-semibold mb-2">{stat.label}</h3>
                      <p className="text-sm text-muted-foreground">
                        {stat.description}
                      </p>
                    </Card>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
                Our Values
              </h2>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <RevealOnScroll key={index} delay={index * 0.2}>
                    <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-xl font-heading font-bold mb-3">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-6 bg-muted/20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                A diverse group of experts united by our passion for creating 
                exceptional digital experiences.
              </p>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <RevealOnScroll key={index} delay={index * 0.2}>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start space-x-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-accent/30 group-hover:to-accent/10 transition-colors duration-300">
                        <div className="text-2xl font-bold text-accent">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold mb-1">
                          {member.name}
                        </h3>
                        <p className="text-accent font-medium mb-3">
                          {member.position}
                        </p>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {member.bio}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {member.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="bg-accent/10 text-accent text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 px-6">
          <div className="container mx-auto">
            <RevealOnScroll>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  What We Do Best
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  We specialize in web development and SEO, with additional expertise
                  in SaaS applications that drive business growth.
                </p>
              </div>
            </RevealOnScroll>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <RevealOnScroll key={index} delay={index * 0.2}>
                    <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group border-border hover:border-accent/50">
                      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-heading font-bold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </Card>
                  </RevealOnScroll>
                );
              })}
            </div>
            
            <RevealOnScroll>
              <div className="text-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/services">
                    Explore All Services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto text-center">
            <RevealOnScroll>
              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-12 md:p-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Ready to Work Together?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss your project and explore how we can help you 
                  achieve your digital transformation goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/contact">
                      Start Your Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/portfolio">
                      View Our Work
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