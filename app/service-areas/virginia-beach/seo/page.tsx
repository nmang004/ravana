import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageTransition from '@/components/layout/PageTransition';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Check, TrendingUp, Search, BarChart3, Target } from 'lucide-react';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';
import LocalCTASection from '@/components/service-areas/LocalCTASection';
import {
  getCityBySlug,
  getServiceBySlug,
  generateCityServiceMetaTitle,
  generateCityServiceMetaDescription,
  getAllCities,
} from '@/lib/location-data';

const citySlug = 'virginia-beach';
const serviceSlug = 'seo';

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
    `local SEO ${cityData.name}`,
    `SEO services ${cityData.name} VA`,
    `${cityData.name} search engine optimization`,
    `Google ranking ${cityData.name}`,
    `SEO company ${cityData.name}`,
    `${cityData.name} SEO agency`,
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

export default function VirginiaBeachSEOPage() {
  const otherCities = getAllCities().filter((c) => c.slug !== citySlug);

  return (
    <PageTransition>
      {/* Structured Data */}
      <StructuredData
        type="service"
        data={{
          name: `${serviceData.name} in ${cityData.name}`,
          description: `Professional ${serviceData.name} services for ${cityData.name} businesses. Dominate local search results and attract more customers.`,
          areaServed: {
            '@type': 'City',
            name: cityData.name,
            addressRegion: 'VA',
            addressCountry: 'US',
          },
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas', href: '/service-areas' },
          { label: cityData.name, href: `/service-areas/${citySlug}` },
          { label: serviceData.name, href: `/service-areas/${citySlug}/${serviceSlug}` },
        ]}
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
                <TrendingUp className="h-4 w-4" />
                {serviceData.name} in {cityData.name}
              </Badge>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Dominate {cityData.name} Search Results with Expert{' '}
                <span className="text-accent">SEO Services</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Capture the attention of Virginia Beach&apos;s 16 million annual visitors and local residents searching for your services. Our proven SEO strategies help businesses rank higher, attract qualified traffic, and convert searchers into customers.
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
                    Get Your Free SEO Audit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-accent/40 hover:bg-accent/10"
                >
                  <Link href="/portfolio">View Our Results</Link>
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
                Why {cityData.name} Businesses Trust Our SEO Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Virginia Beach&apos;s competitive tourism and business landscape demands exceptional SEO. We deliver rankings that capture both visitor searches and local customer intent.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Search,
                title: 'Local SEO Mastery',
                description:
                  'Dominate "Virginia Beach" searches and capture tourist planning queries.',
              },
              {
                icon: BarChart3,
                title: 'Data-Driven Results',
                description:
                  'Track rankings, traffic, and conversions with transparent monthly reporting.',
              },
              {
                icon: TrendingUp,
                title: 'Tourism Optimization',
                description:
                  'Specialized strategies for hospitality businesses targeting seasonal visitors.',
              },
              {
                icon: Target,
                title: 'Conversion Focus',
                description:
                  'We optimize for bookings and sales, not just traffic—driving real revenue.',
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

      {/* SEO Services Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Comprehensive SEO for {cityData.name} Businesses
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our full-service SEO approach ensures every aspect of your online presence works
                  to attract and convert Virginia Beach customers and visitors.
                </p>

                <div className="space-y-4">
                  {[
                    'Local SEO & Google Business Profile Optimization',
                    'Keyword Research for Virginia Beach Market',
                    'On-Page SEO & Technical Optimization',
                    'Content Strategy & Creation',
                    'Link Building & Citation Management',
                    'Competitor Analysis & Strategy',
                    'Mobile & Voice Search Optimization',
                    'Monthly Performance Reporting',
                    'Conversion Rate Optimization',
                    'Ongoing Support & Adjustments',
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
                A systematic approach that delivers measurable results for {cityData.name} businesses.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'SEO Audit',
                description:
                  'Comprehensive analysis of your current rankings and opportunities in Virginia Beach.',
              },
              {
                step: '02',
                title: 'Strategy',
                description:
                  'Custom roadmap targeting keywords that drive Virginia Beach customers to you.',
              },
              {
                step: '03',
                title: 'Implementation',
                description:
                  'Execute on-page, technical, and off-page optimizations for maximum impact.',
              },
              {
                step: '04',
                title: 'Monitor & Optimize',
                description:
                  'Continuous improvement based on data and evolving search algorithms.',
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
                Explore our {serviceData.name} services in nearby cities.
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
        heading={`Ready to Dominate ${cityData.name} Search Results?`}
        description={`Let's create an SEO strategy that puts your ${cityData.name} business at the top of search results and drives consistent, qualified traffic. Get your free SEO audit today.`}
      />
    </PageTransition>
  );
}
