'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';
import { getAllServices, getCityServicePath } from '@/lib/location-data';
import type { ServiceAreaCity } from '@/lib/location-data';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface CityServicesGridProps {
  city: ServiceAreaCity;
}

// Helper function to get icon component by name
function getIconComponent(iconName: string): LucideIcon {
  const IconComponent = (Icons as Record<string, LucideIcon>)[iconName];
  return IconComponent || Icons.HelpCircle;
}

export default function CityServicesGrid({ city }: CityServicesGridProps) {
  const services = getAllServices();

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-accent/5 via-background to-accent/10">
      <div className="container mx-auto">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Our {city.name} <span className="text-accent">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital solutions tailored for {city.name} businesses.
                From startups to established enterprises, we deliver results that matter.
              </p>
            </motion.div>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            const serviceUrl = getCityServicePath(city.slug, service.slug);

            return (
              <RevealOnScroll key={service.id} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link href={serviceUrl} className="block h-full group">
                    <Card className="p-8 h-full bg-background/80 backdrop-blur-sm border-accent/20 hover:border-accent/60 transition-all duration-300 hover:scale-105">
                      {/* Icon */}
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                          <IconComponent className="h-8 w-8 text-accent" />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-accent transition-colors">
                        {service.name}
                      </h3>

                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        Learn More About {service.name} in {city.name}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Not sure which service is right for your {city.name} business?
              Let&apos;s talk about your goals and create a custom strategy.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-background hover:bg-accent/90 group"
            >
              <Link href="/contact">
                Schedule Your Free Strategy Session
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
