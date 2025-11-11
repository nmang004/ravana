import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageTransition from '@/components/layout/PageTransition';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Check, Layers, Rocket, Shield, Zap } from 'lucide-react';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';
import LocalCTASection from '@/components/service-areas/LocalCTASection';
import {
  getCityBySlug,
  getServiceBySlug,
  generateCityServiceMetaTitle,
  generateCityServiceMetaDescription,
  getAllCities,
} from '@/lib/location-data';

const citySlug = 'norfolk';
const serviceSlug = 'saas-development';

const city = getCityBySlug(citySlug);
const service = getServiceBySlug(serviceSlug);

if (!city || !service) {
  notFound();
}

export const metadata: Metadata = {
  title: generateCityServiceMetaTitle(city.name, service.name),
  description: generateCityServiceMetaDescription(city.name, service.name),
  keywords: [
    `${service.name} ${city.name}`,
    `SaaS platform ${city.name}`,
    `software development ${city.name}`,
    `custom SaaS ${city.name} VA`,
    `${city.name} software company`,
    `cloud platform development ${city.name}`,
  ],
  alternates: {
    canonical: `/service-areas/${citySlug}/${serviceSlug}`,
  },
  openGraph: {
    title: generateCityServiceMetaTitle(city.name, service.name),
    description: generateCityServiceMetaDescription(city.name, service.name),
    type: 'website',
    url: `https://www.ravanasolutions.com/service-areas/${citySlug}/${serviceSlug}`,
    images: [{ url: city.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: generateCityServiceMetaTitle(city.name, service.name),
    images: [city.ogImage],
  },
};

export default function NorfolkSaaSDevelopmentPage() {
  const otherCities = getAllCities().filter((c) => c.slug !== citySlug);

  return (
    <PageTransition>
      <StructuredData
        type="service"
        data={{
          name: `${service.name} in ${city.name}`,
          description: `Professional ${service.name.toLowerCase()} services for ${city.name} businesses. Build scalable software platforms that drive revenue.`,
          areaServed: { '@type': 'City', name: city.name, addressRegion: 'VA', addressCountry: 'US' },
        }}
      />

      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas', href: '/service-areas' },
          { label: city.name, href: `/service-areas/${citySlug}` },
          { label: service.name, href: `/service-areas/${citySlug}/${serviceSlug}` },
        ]}
      />

      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5 -z-10" />
        <div className="container relative z-10 px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <Badge variant="outline" className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm border-accent/40 bg-accent/10 text-accent">
                <Layers className="h-4 w-4" />
                {service.name} in {city.name}
              </Badge>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Enterprise-Grade <span className="text-accent">SaaS Development</span> for {city.name}
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your idea into a scalable software platform. We build secure, reliable SaaS applications for Norfolk businesses ready to disrupt their industries.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent text-background hover:bg-accent/90 group">
                  <Link href="/contact">Start Your Project<ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-accent/40 hover:bg-accent/10">
                  <Link href="/portfolio">View Case Studies</Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Why {city.name} Innovators Choose Our SaaS Expertise
              </h2>
            </div>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Rocket, title: 'Rapid Development', description: 'Launch your MVP in weeks, not months, with agile development practices.' },
              { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security with SOC 2 compliance and data encryption.' },
              { icon: Zap, title: 'Scalable Architecture', description: 'Built to handle growth from 10 to 10 million users seamlessly.' },
              { icon: Layers, title: 'Modern Tech Stack', description: 'React, Node.js, AWS—cutting-edge technology for reliability.' },
            ].map((feature, index) => (
              <RevealOnScroll key={feature.title} delay={index * 0.1}>
                <Card className="p-6 border-accent/20 hover:border-accent/40 transition-colors h-full">
                  <feature.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-lg font-heading font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
              What&apos;s Included in Your {city.name} SaaS Platform
            </h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'User Authentication & Authorization',
              'Subscription & Payment Integration',
              'Admin Dashboard & Analytics',
              'API Development & Documentation',
              'Database Design & Optimization',
              'Cloud Infrastructure Setup (AWS/Azure)',
              'Automated Testing & CI/CD',
              'Security Audits & Compliance',
              'Performance Optimization',
              '6 Months Post-Launch Support',
            ].map((feature, index) => (
              <RevealOnScroll key={feature} delay={index * 0.05}>
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <Check className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="container mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">We Also Serve Other Hampton Roads Cities</h2>
            </div>
          </RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-4">
            {otherCities.map((otherCity) => (
              <RevealOnScroll key={otherCity.slug}>
                <Button asChild variant="outline" className="border-accent/30 hover:bg-accent/10">
                  <Link href={`/service-areas/${otherCity.slug}/${serviceSlug}`}>{service.name} in {otherCity.name}</Link>
                </Button>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <LocalCTASection
        cityName={city.name}
        heading={`Ready to Build Your ${city.name} SaaS Platform?`}
        description={`Let's turn your software idea into reality with a platform that scales, generates revenue, and dominates your market.`}
      />
    </PageTransition>
  );
}
