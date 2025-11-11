import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageTransition from '@/components/layout/PageTransition';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Check, Code2, Rocket, Users, TrendingUp } from 'lucide-react';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';
import LocalCTASection from '@/components/service-areas/LocalCTASection';
import {
  getCityBySlug,
  getServiceBySlug,
  generateCityServiceMetaTitle,
  generateCityServiceMetaDescription,
  getAllCities,
} from '@/lib/location-data';

const citySlug = 'chesapeake';
const serviceSlug = 'web-development';

const city = getCityBySlug(citySlug);
const service = getServiceBySlug(serviceSlug);

if (!city || !service) {
  notFound();
}

// Type assertions to help TypeScript understand these are defined after notFound check
const cityData = city!;
const serviceData = service!;

export const metadata: Metadata = {
  title: generateCityServiceMetaTitle(cityData.name, serviceData.name),
  description: generateCityServiceMetaDescription(cityData.name, serviceData.name),
  keywords: [
    `${serviceData.name} ${cityData.name}`,
    `${cityData.name} ${serviceData.name}`,
    `${serviceData.name} ${cityData.name} VA`,
    `web design ${cityData.name}`,
    `website development ${cityData.name}`,
    `${cityData.name} web developer`,
    `custom websites ${cityData.name}`,
    `responsive web design ${cityData.name}`,
  ],
  alternates: {
    canonical: `/service-areas/${citySlug}/${serviceSlug}`,
  },
  openGraph: {
    title: generateCityServiceMetaTitle(cityData.name, serviceData.name),
    description: generateCityServiceMetaDescription(cityData.name, serviceData.name),
    type: 'website',
    url: `https://www.ravanasolutions.com/service-areas/${citySlug}/${serviceSlug}`,
    images: [
      {
        url: cityData.ogImage,
        width: 1200,
        height: 630,
        alt: `${serviceData.name} in ${cityData.name} - Ravana Digital Agency`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: generateCityServiceMetaTitle(cityData.name, serviceData.name),
    description: generateCityServiceMetaDescription(cityData.name, serviceData.name),
    images: [cityData.ogImage],
  },
};

export default function ChesapeakeWebDevelopmentPage() {
  const otherCities = getAllCities().filter((c) => c.slug !== citySlug);

  return (
    <PageTransition>
      {/* Structured Data */}
      <StructuredData
        type="service"
        data={{
          name: `${serviceData.name} in ${cityData.name}`,
          description: `Professional ${serviceData.name.toLowerCase()} services for ${cityData.name} businesses. Custom websites that drive results and help you dominate the local market.`,
          areaServed: {
            '@type': 'City',
            name: cityData.name,
            addressRegion: 'VA',
            addressCountry: 'US',
          },
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5 -z-10" />

        <div className="container relative z-10 px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm border-accent/40 bg-accent/10 text-accent"
              >
                <Code2 className="h-4 w-4" />
                {serviceData.name} in {cityData.name}
              </Badge>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Premium {serviceData.name} for{' '}
                <span className="text-accent">{cityData.name} Businesses</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Stand out in Chesapeake&apos;s growing suburban market with a professional website that attracts customers and builds trust. From Greenbrier businesses to healthcare providers, we create digital experiences that convert visitors into loyal customers.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-background hover:bg-accent/90 group"
                >
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-accent/40 hover:bg-accent/10"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Why {cityData.name} Businesses Choose Ravana for {serviceData.name}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Chesapeake&apos;s family-oriented community and thriving business districts demand websites that connect with local homeowners and build lasting relationships.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: 'Suburban Market Focus',
                description:
                  'Deep understanding of Chesapeake families and homeowner decision-making.',
              },
              {
                icon: Rocket,
                title: 'Fast Performance',
                description:
                  'Lightning-fast websites optimized for conversions and search rankings.',
              },
              {
                icon: TrendingUp,
                title: 'Lead Generation',
                description:
                  'Every design element focused on capturing and converting local leads.',
              },
              {
                icon: Code2,
                title: 'Modern Technology',
                description:
                  'Built with cutting-edge tech for security, speed, and scalability.',
              },
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

      {/* Features Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  What&apos;s Included in Your {cityData.name} Website
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Every website we build for {cityData.name} businesses includes these essential
                  features to ensure you dominate your local market from day one.
                </p>

                <div className="space-y-4">
                  {[
                    'Mobile-Responsive Design',
                    'SEO Optimization for Chesapeake Search Results',
                    'Fast Loading Speed (< 2 seconds)',
                    'Secure HTTPS & SSL Certificate',
                    'Google Analytics Integration',
                    'Contact Forms & Lead Capture',
                    'Content Management System',
                    'Social Media Integration',
                    '30 Days Post-Launch Support',
                    'Training & Documentation',
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
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <Card className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/30">
                <h3 className="text-2xl font-heading font-bold mb-6">
                  Perfect for {cityData.name} Industries:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {cityData.stats.keyIndustries.map((industry) => (
                    <div
                      key={industry}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {industry}
                    </div>
                  ))}
                </div>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Our {serviceData.name} Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A proven, collaborative approach that delivers exceptional results for {cityData.name}{' '}
                businesses.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'We learn about your business, goals, and Chesapeake market position.',
              },
              {
                step: '02',
                title: 'Strategy',
                description:
                  'Create a custom plan to achieve your objectives and beat competitors.',
              },
              {
                step: '03',
                title: 'Design & Build',
                description:
                  'Develop your website with regular check-ins and your feedback.',
              },
              {
                step: '04',
                title: 'Launch & Grow',
                description:
                  'Deploy your site and provide ongoing support for continued success.',
              },
            ].map((phase, index) => (
              <RevealOnScroll key={phase.step} delay={index * 0.1}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/30 text-accent font-bold text-xl mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-3">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Other Locations Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                We Also Serve Other Hampton Roads Cities
              </h2>
              <p className="text-muted-foreground">
                Explore our {serviceData.name.toLowerCase()} services in nearby cities.
              </p>
            </div>
          </RevealOnScroll>

          <div className="flex flex-wrap justify-center gap-4">
            {otherCities.map((otherCity) => (
              <RevealOnScroll key={otherCity.slug}>
                <Button asChild variant="outline" className="border-accent/30 hover:bg-accent/10">
                  <Link href={`/service-areas/${otherCity.slug}/${serviceSlug}`}>
                    {serviceData.name} in {otherCity.name}
                  </Link>
                </Button>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <LocalCTASection
        cityName={cityData.name}
        heading={`Ready to Build Your ${cityData.name} Website?`}
        description={`Let's create a website that makes your ${cityData.name} business stand out and drives real results. Get started with a free consultation today.`}
      />
    </PageTransition>
  );
}
