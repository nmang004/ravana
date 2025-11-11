import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageTransition from '@/components/layout/PageTransition';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumb from '@/components/seo/Breadcrumb';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Check, Target, TrendingUp, Users, Zap } from 'lucide-react';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';
import LocalCTASection from '@/components/service-areas/LocalCTASection';
import {
  getCityBySlug,
  getServiceBySlug,
  generateCityServiceMetaTitle,
  generateCityServiceMetaDescription,
  getAllCities,
} from '@/lib/location-data';

const citySlug = 'portsmouth';
const serviceSlug = 'digital-marketing';

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
    `${city.name} ${service.name}`,
    `social media marketing ${city.name}`,
    `PPC advertising ${city.name} VA`,
    `${city.name} marketing agency`,
    `email marketing ${city.name}`,
    `digital ads ${city.name}`,
    `marketing automation ${city.name}`,
  ],
  alternates: {
    canonical: `/service-areas/${citySlug}/${serviceSlug}`,
  },
  openGraph: {
    title: generateCityServiceMetaTitle(city.name, service.name),
    description: generateCityServiceMetaDescription(city.name, service.name),
    type: 'website',
    url: `https://www.ravanasolutions.com/service-areas/${citySlug}/${serviceSlug}`,
    images: [
      {
        url: city.ogImage,
        width: 1200,
        height: 630,
        alt: `${service.name} in ${city.name} - Ravana Digital Agency`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: generateCityServiceMetaTitle(city.name, service.name),
    description: generateCityServiceMetaDescription(city.name, service.name),
    images: [city.ogImage],
  },
};

export default function PortsmouthDigitalMarketingPage() {
  const otherCities = getAllCities().filter((c) => c.slug !== citySlug);

  return (
    <PageTransition>
      {/* Structured Data */}
      <StructuredData
        type="service"
        data={{
          name: `${service.name} in ${city.name}`,
          description: `Professional ${service.name.toLowerCase()} services for ${city.name} businesses. Data-driven campaigns that generate measurable growth and ROI.`,
          areaServed: {
            '@type': 'City',
            name: city.name,
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
          { label: city.name, href: `/service-areas/${citySlug}` },
          { label: service.name, href: `/service-areas/${citySlug}/${serviceSlug}` },
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
                <Target className="h-4 w-4" />
                {service.name} in {city.name}
              </Badge>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Data-Driven {service.name} for{' '}
                <span className="text-accent">{city.name} Businesses</span>
              </h1>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Stop wasting marketing budget on guesswork. Our proven digital marketing campaigns help Portsmouth businesses attract qualified leads, increase sales, and maximize ROI through social media, PPC, email marketing, and marketing automation.
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
                    Get Your Free Marketing Audit
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
                Why {city.name} Businesses Trust Our Marketing Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We understand Portsmouth&apos;s diverse business landscape—from defense contractors to waterfront hospitality. Our marketing strategies are tailored to connect with Portsmouth customers and drive measurable business growth.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Targeted Campaigns',
                description:
                  'Reach Portsmouth customers at the right time with laser-focused audience targeting.',
              },
              {
                icon: TrendingUp,
                title: 'ROI-Focused',
                description:
                  'Every dollar spent is tracked and optimized for maximum return on investment.',
              },
              {
                icon: Zap,
                title: 'Multi-Channel Strategy',
                description:
                  'Integrated campaigns across social media, search, email, and display advertising.',
              },
              {
                icon: Users,
                title: 'Local Market Expertise',
                description:
                  'Deep understanding of Portsmouth demographics, competition, and customer behavior.',
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

      {/* Marketing Services Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <div>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                  Comprehensive Marketing for {city.name} Businesses
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our full-service digital marketing approach combines multiple channels to create campaigns that attract, engage, and convert Portsmouth customers into loyal advocates for your brand.
                </p>

                <div className="space-y-4">
                  {[
                    'Social Media Marketing (Facebook, Instagram, LinkedIn)',
                    'PPC Advertising (Google Ads, Bing Ads)',
                    'Email Marketing Campaigns',
                    'Marketing Automation & Lead Nurturing',
                    'Content Marketing Strategy',
                    'Display & Retargeting Ads',
                    'Conversion Rate Optimization',
                    'Analytics & ROI Tracking',
                    'A/B Testing & Campaign Optimization',
                    'Monthly Performance Reporting',
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
                  Perfect for {city.name} Industries:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {city.stats.keyIndustries.map((industry) => (
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
                Our {service.name} Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic, data-driven approach that delivers consistent results for {city.name}{' '}
                businesses.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Strategy & Research',
                description:
                  'Analyze your market, competitors, and customer behavior in Portsmouth.',
              },
              {
                step: '02',
                title: 'Campaign Setup',
                description:
                  'Build targeted campaigns across the right channels for your audience.',
              },
              {
                step: '03',
                title: 'Launch & Monitor',
                description:
                  'Deploy campaigns and track performance metrics in real-time.',
              },
              {
                step: '04',
                title: 'Optimize & Scale',
                description:
                  'Continuously improve results and scale what works best.',
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
                Explore our {service.name.toLowerCase()} services in nearby cities.
              </p>
            </div>
          </RevealOnScroll>

          <div className="flex flex-wrap justify-center gap-4">
            {otherCities.map((otherCity) => (
              <RevealOnScroll key={otherCity.slug}>
                <Button asChild variant="outline" className="border-accent/30 hover:bg-accent/10">
                  <Link href={`/service-areas/${otherCity.slug}/${serviceSlug}`}>
                    {service.name} in {otherCity.name}
                  </Link>
                </Button>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <LocalCTASection
        cityName={city.name}
        heading={`Ready to Grow Your ${city.name} Business?`}
        description={`Let's create a digital marketing strategy that generates qualified leads, increases sales, and delivers measurable ROI. Get your free marketing audit today.`}
      />
    </PageTransition>
  );
}
