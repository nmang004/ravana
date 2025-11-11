import { Suspense } from "react";
import { Metadata } from "next";
import { SearchParams } from "@/types";
import PageTransition from "@/components/layout/PageTransition";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "nmangubat@ravanasolutions.com",
    description: "Send us an email and we'll respond within 24 hours",
    action: "mailto:nmangubat@ravanasolutions.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+1 (757) 685-7209",
    description: "Mon-Fri from 9am to 6pm EST",
    action: "tel:+17576857209"
  },
  {
    icon: Calendar,
    title: "Book a Meeting",
    content: "Schedule a Call",
    description: "30-minute free consultation",
    action: "https://calendly.com/nmangubat-ravanasolutions/30min"
  }
];

const officeInfo = [
  {
    icon: MapPin,
    title: "Service Area",
    address: "Remote-First Agency\nServing Clients Nationwide",
    hours: "Based in Norfolk, Virginia"
  },
  {
    icon: Clock,
    title: "Response Time",
    address: "Email: Within 24 hours\nPhone: Same business day",
    hours: "Available: Mon-Fri 9am-6pm EST"
  }
];

export const metadata: Metadata = {
  title: "Contact Us - Start Your Digital Transformation",
  description: "Get in touch with Ravana Digital Agency. Free consultation for SaaS development, web design, and digital marketing projects. Let's discuss your goals.",
  keywords: ["contact ravana", "free consultation", "project quote", "digital agency contact", "web development", "SEO services"],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: "Contact Ravana Digital Agency | Free Consultation",
    description: "Get in touch for a free consultation on your SaaS development, web design, or digital marketing project.",
    type: "website",
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Ravana Digital Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Ravana Digital Agency',
    description: 'Get in touch for a free consultation on your next digital project.',
    images: ['/og-contact.jpg'],
  },
};

function ContactPageContent({ searchParams }: { searchParams: SearchParams }) {
  const selectedService = typeof searchParams.service === 'string' ? searchParams.service : undefined;
  return (
    <PageTransition>
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Let's Build Something{" "}
            <span className="text-accent">Amazing</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Ready to take your business to the next level? Get in touch with our team 
            and let's discuss how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {info.title}
                  </h3>
                  <p className="text-accent font-medium mb-2">
                    {info.content}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {info.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Link href={info.action}>
                      Contact
                    </Link>
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Send us a message
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  For urgent matters, please call us directly.
                </p>
              </div>
              
              <Suspense fallback={<div>Loading form...</div>}>
                <ContactForm selectedService={selectedService} />
              </Suspense>
            </div>

            {/* Office Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-6">
                  We're here to help you succeed. Reach out to us through any of 
                  the channels below and let's start building something amazing together.
                </p>
              </div>

              {officeInfo.map((office, index) => {
                const Icon = office.icon;
                return (
                  <Card key={index} className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{office.title}</h3>
                        <p className="text-sm text-muted-foreground whitespace-pre-line mb-2">
                          {office.address}
                        </p>
                        <p className="text-sm text-accent">
                          {office.hours}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}

              {/* FAQ Link */}
              <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  Frequently Asked Questions
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Find answers to common questions about our services, process, and pricing.
                </p>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href="/faq">View FAQ</Link>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Project Kickoff CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-12 md:p-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our project kickoff questionnaire helps us understand your needs better 
              so we can provide you with the most accurate proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/project-brief">
                  Start Project Brief
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">
                  View Our Work
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

export default function ContactPage({ searchParams }: { searchParams: SearchParams }) {
  return <ContactPageContent searchParams={searchParams} />;
}