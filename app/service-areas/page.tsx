import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Users, Building2, TrendingUp } from 'lucide-react';
import PageTransition from '@/components/layout/PageTransition';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';
import StructuredData from '@/components/seo/StructuredData';
import { getAllCities, getCityPath } from '@/lib/location-data';

export const metadata: Metadata = {
  title: 'Service Areas - Hampton Roads Digital Marketing & Web Development | Ravana',
  description: 'Serving Norfolk, Virginia Beach, Chesapeake, Hampton, and Portsmouth with expert web development, SEO, SaaS development, and digital marketing services. Dominate your local market with Ravana Solutions.',
  keywords: [
    'Hampton Roads web development',
    'Hampton Roads digital marketing',
    'Hampton Roads SEO',
    'Norfolk web design',
    'Virginia Beach marketing',
    'Chesapeake SEO services',
    'Hampton digital agency',
    'Portsmouth web development',
    'Virginia digital agency',
    'local SEO Hampton Roads',
  ],
  alternates: {
    canonical: '/service-areas',
  },
  openGraph: {
    title: 'Hampton Roads Digital Marketing & Web Development Services | Ravana',
    description: 'Serving Norfolk, Virginia Beach, Chesapeake, Hampton, and Portsmouth with expert digital solutions.',
    type: 'website',
    url: 'https://www.ravanasolutions.com/service-areas',
    images: [
      {
        url: '/images/service-areas/og/service-areas-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Ravana Solutions - Hampton Roads Service Areas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hampton Roads Digital Marketing & Web Development | Ravana',
    description: 'Serving Norfolk, Virginia Beach, Chesapeake, Hampton, and Portsmouth with expert digital solutions.',
    images: ['/images/service-areas/og/service-areas-og.jpg'],
  },
};

export default function ServiceAreasPage() {
  const cities = getAllCities();

  const regionStats = {
    totalPopulation: cities.reduce((sum, city) => sum + city.stats.population, 0),
    totalBusinesses: cities.reduce((sum, city) => sum + city.stats.businesses, 0),
    citiesServed: cities.length,
  };

  return (
    <PageTransition>
      {/* Structured Data */}
      <StructuredData
        type="service"
        data={{
          name: 'Digital Marketing & Web Development Services',
          description: 'Comprehensive digital agency services including web development, SEO, SaaS development, and digital marketing for Hampton Roads businesses.',
          areaServed: [
            {
              '@type': 'City',
              name: 'Norfolk',
              addressRegion: 'VA',
              addressCountry: 'US',
            },
            {
              '@type': 'City',
              name: 'Virginia Beach',
              addressRegion: 'VA',
              addressCountry: 'US',
            },
            {
              '@type': 'City',
              name: 'Chesapeake',
              addressRegion: 'VA',
              addressCountry: 'US',
            },
            {
              '@type': 'City',
              name: 'Hampton',
              addressRegion: 'VA',
              addressCountry: 'US',
            },
            {
              '@type': 'City',
              name: 'Portsmouth',
              addressRegion: 'VA',
              addressCountry: 'US',
            },
          ],
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.1),transparent_50%)] -z-10" />

        <div className="container relative z-10 px-6 py-24">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <RevealOnScroll>
              <Badge
                variant="outline"
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm border-accent/40 bg-accent/10 text-accent"
              >
                <MapPin className="h-4 w-4" />
                Serving Hampton Roads Since 2020
              </Badge>
            </RevealOnScroll>

            {/* Main Heading */}
            <RevealOnScroll delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
                  Hampton Roads Digital Excellence
                </span>
              </h1>
            </RevealOnScroll>

            {/* Description */}
            <RevealOnScroll delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                Your local digital agency specializing in web development, SEO, SaaS platforms, and
                data-driven digital marketing. We help businesses across Norfolk, Virginia Beach,
                Chesapeake, Hampton, and Portsmouth dominate their markets.
              </p>
            </RevealOnScroll>

            {/* Stats Grid */}
            <RevealOnScroll delay={0.3}>
              <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
                <div className="bg-background/40 backdrop-blur-sm border border-accent/20 rounded-lg p-6">
                  <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground mb-1">
                    {(regionStats.totalPopulation / 1000).toFixed(0)}K+
                  </p>
                  <p className="text-sm text-muted-foreground">Regional Population</p>
                </div>

                <div className="bg-background/40 backdrop-blur-sm border border-accent/20 rounded-lg p-6">
                  <Building2 className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground mb-1">
                    {(regionStats.totalBusinesses / 1000).toFixed(1)}K+
                  </p>
                  <p className="text-sm text-muted-foreground">Local Businesses</p>
                </div>

                <div className="bg-background/40 backdrop-blur-sm border border-accent/20 rounded-lg p-6">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-2" />
                  <p className="text-3xl font-bold text-foreground mb-1">
                    {regionStats.citiesServed}
                  </p>
                  <p className="text-sm text-muted-foreground">Cities Served</p>
                </div>
              </div>
            </RevealOnScroll>

            {/* CTA Button */}
            <RevealOnScroll delay={0.4}>
              <Button
                asChild
                size="lg"
                className="bg-accent text-background hover:bg-accent/90 group"
              >
                <Link href="/project-brief">
                  Get Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Cities Grid Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Where We <span className="text-accent">Serve</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Deep local market knowledge meets cutting-edge digital expertise. Select your city
                to discover how we help businesses like yours thrive.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cities.map((city, index) => (
              <RevealOnScroll key={city.id} delay={index * 0.1}>
                <Link href={getCityPath(city.slug)} className="block h-full group">
                  <Card className="overflow-hidden border-accent/20 hover:border-accent/60 transition-all duration-300 h-full hover:scale-105">
                    {/* City Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={city.heroImage}
                        alt={`${city.name}, Virginia`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80" />

                      {/* City Name Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                          {city.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">Virginia</p>
                      </div>
                    </div>

                    {/* City Info */}
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {city.description}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Users className="h-4 w-4 text-accent" />
                          <span className="text-muted-foreground">
                            {(city.stats.population / 1000).toFixed(0)}K+ people
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Building2 className="h-4 w-4 text-accent" />
                          <span className="text-muted-foreground">
                            {(city.stats.businesses / 1000).toFixed(1)}K+ businesses
                          </span>
                        </div>
                      </div>

                      {/* Industries */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {city.stats.keyIndustries.slice(0, 3).map((industry) => (
                          <Badge
                            key={industry}
                            variant="secondary"
                            className="text-xs bg-muted/30 border border-accent/20"
                          >
                            {industry}
                          </Badge>
                        ))}
                      </div>

                      {/* CTA */}
                      <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform">
                        Explore {city.name} Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hampton Roads Section */}
      <section className="py-24 px-6 bg-muted/20">
        <div className="container mx-auto">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Why Choose a <span className="text-accent">Local</span> Digital Agency?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don&apos;t just build websites—we build digital presences that understand and
                connect with Hampton Roads customers. Our local expertise gives your business an
                unfair advantage.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <RevealOnScroll delay={0.1}>
              <Card className="p-8 border-accent/20 hover:border-accent/40 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                  <MapPin className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">Local Market Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We know Hampton Roads—from Norfolk&apos;s defense contractors to Virginia
                  Beach&apos;s tourism industry. Our strategies are tailored to your specific market.
                </p>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <Card className="p-8 border-accent/20 hover:border-accent/40 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                  <TrendingUp className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">
                  Proven Local SEO Results
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dominate local search results with SEO strategies designed specifically for
                  Hampton Roads businesses competing in your city and region.
                </p>
              </Card>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <Card className="p-8 border-accent/20 hover:border-accent/40 transition-colors">
                <div className="w-14 h-14 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-bold mb-4">
                  Personalized Service
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You&apos;re not a ticket number. Work directly with our team, get in-person
                  meetings, and receive the attention your business deserves.
                </p>
              </Card>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5 -z-10" />

        <div className="container mx-auto">
          <RevealOnScroll>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Ready to Dominate Your Local Market?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Whether you&apos;re in Norfolk, Virginia Beach, Chesapeake, Hampton, or Portsmouth,
                we have the expertise to grow your business. Let&apos;s create your success story.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent text-background hover:bg-accent/90 group"
                >
                  <Link href="/contact">
                    Get Your Free Strategy Session
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-accent/40 hover:bg-accent/10"
                >
                  <Link href="/portfolio">View Our Local Work</Link>
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageTransition>
  );
}
