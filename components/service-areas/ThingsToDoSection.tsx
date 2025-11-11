'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';
import type { ServiceAreaCity } from '@/lib/location-data';

interface ThingsToDoSectionProps {
  city: ServiceAreaCity;
}

export default function ThingsToDoSection({ city }: ThingsToDoSectionProps) {
  return (
    <section className="py-24 px-6">
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
                Experience <span className="text-accent">{city.name}</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We love serving businesses in {city.name} because we know what makes this community
                special. From iconic landmarks to hidden gems, here&apos;s what makes {city.name} thrive.
              </p>
            </motion.div>
          </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {city.landmarks.map((landmark, index) => (
            <RevealOnScroll key={landmark.name} delay={index * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-accent/20 hover:border-accent/40 transition-all duration-300 group h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={landmark.image}
                      alt={`${landmark.name} in ${city.name}, Virginia`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-accent/90 text-background border-none">
                        {landmark.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-accent transition-colors">
                      {landmark.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {landmark.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom Context */}
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Just like these {city.name} landmarks create memorable experiences, we build digital
              solutions that leave lasting impressions on your customers. Let&apos;s make your
              business a {city.name} success story.
            </p>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
