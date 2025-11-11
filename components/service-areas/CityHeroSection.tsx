'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Users, TrendingUp, Building2 } from 'lucide-react';
import type { ServiceAreaCity } from '@/lib/location-data';

interface CityHeroSectionProps {
  city: ServiceAreaCity;
}

export default function CityHeroSection({ city }: CityHeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={city.heroImage}
          alt={`${city.name}, Virginia skyline`}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/75" />
        {/* Accent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-accent/10" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-24">
        <div className="max-w-4xl">
          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <Badge
              variant="outline"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm border-accent/40 bg-accent/10 text-accent"
            >
              <MapPin className="h-4 w-4" />
              {city.name}, Virginia
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-accent bg-clip-text text-transparent">
              {city.tagline}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl"
          >
            {city.heroDescription}
          </motion.p>

          {/* City Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10"
          >
            <div className="bg-background/40 backdrop-blur-sm border border-accent/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  Population
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {(city.stats.population / 1000).toFixed(0)}K+
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm border border-accent/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-5 w-5 text-accent" />
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  Businesses
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {(city.stats.businesses / 1000).toFixed(1)}K+
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm border border-accent/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  Median Income
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {city.stats.medianIncome}
              </p>
            </div>

            <div className="bg-background/40 backdrop-blur-sm border border-accent/20 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-5 w-5 text-accent" />
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  Industries
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">
                {city.stats.keyIndustries.length}+
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-background hover:bg-accent/90 group"
            >
              <Link href="/contact">
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent/40 hover:bg-accent/10"
            >
              <Link href="/portfolio">View Our {city.name} Work</Link>
            </Button>
          </motion.div>

          {/* Key Industries Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 pt-8 border-t border-accent/20"
          >
            <p className="text-sm text-muted-foreground mb-3">
              Serving {city.name}&apos;s Key Industries:
            </p>
            <div className="flex flex-wrap gap-2">
              {city.stats.keyIndustries.map((industry) => (
                <Badge
                  key={industry}
                  variant="secondary"
                  className="bg-muted/30 text-foreground border border-accent/20 hover:border-accent/40 transition-colors"
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
