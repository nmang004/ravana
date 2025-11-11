'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';
import StaggerReveal from '@/components/interactive/StaggerReveal';
import type { ServiceAreaCity } from '@/lib/location-data';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface WhyCitySectionProps {
  city: ServiceAreaCity;
}

// Helper function to get icon component by name
function getIconComponent(iconName: string): LucideIcon {
  const IconComponent = (Icons as Record<string, LucideIcon>)[iconName];
  return IconComponent || Icons.HelpCircle;
}

export default function WhyCitySection({ city }: WhyCitySectionProps) {
  return (
    <section className="py-24 px-6 bg-muted/20">
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
                Why Choose Ravana for{' '}
                <span className="text-accent">{city.name}</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We&apos;re not just another digital agency—we&apos;re your local growth partner
                with deep {city.name} market knowledge and proven results.
              </p>
            </motion.div>
          </div>
        </RevealOnScroll>

        <StaggerReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {city.whyCity.map((reason, index) => {
              const IconComponent = getIconComponent(reason.icon);

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full bg-background/50 border-accent/20 hover:border-accent/40 transition-all duration-300 group hover:scale-105">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                          <IconComponent className="h-7 w-7 text-accent" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-accent transition-colors">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </StaggerReveal>

        {/* Bottom CTA */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/30 rounded-lg p-8">
              <p className="text-lg font-semibold mb-2">
                Ready to dominate the {city.name} market?
              </p>
              <p className="text-muted-foreground">
                Let&apos;s discuss how our proven strategies can grow your business.
              </p>
            </div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
