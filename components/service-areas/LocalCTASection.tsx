'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import RevealOnScroll from '@/components/interactive/RevealOnScroll';

interface LocalCTASectionProps {
  cityName: string;
  heading?: string;
  description?: string;
}

export default function LocalCTASection({
  cityName,
  heading,
  description,
}: LocalCTASectionProps) {
  const defaultHeading = `Ready to Grow Your ${cityName} Business?`;
  const defaultDescription = `Join the ${cityName} businesses already dominating their market with Ravana Digital Agency. Let's create your success story.`;

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-background to-accent/5 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.1),transparent_50%)] -z-10" />

      <div className="container mx-auto">
        <RevealOnScroll>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              {heading || defaultHeading}
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
              {description || defaultDescription}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-accent text-background hover:bg-accent/90 group px-8"
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
                className="border-accent/40 hover:bg-accent/10 px-8"
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>

            {/* Contact Options */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-accent/20">
              <motion.a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide">Call Us</p>
                  <p className="font-semibold">(123) 456-7890</p>
                </div>
              </motion.a>

              <div className="hidden sm:block w-px h-12 bg-accent/20" />

              <motion.a
                href="mailto:hello@ravanasolutions.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-xs uppercase tracking-wide">Email Us</p>
                  <p className="font-semibold">hello@ravanasolutions.com</p>
                </div>
              </motion.a>
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12"
            >
              <p className="text-sm text-muted-foreground">
                Serving {cityName} and the Greater Hampton Roads Area Since 2020
              </p>
            </motion.div>
          </motion.div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
