import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Ravana Solutions | Web Development & SEO Services",
  description: "Expert web development and SEO services in Hampton Roads. We build custom websites and implement proven search optimization strategies that drive real results.",
  keywords: ["web development", "SEO services", "Hampton Roads web design", "custom websites", "web applications", "search engine optimization", "Next.js development", "React development", "technical SEO", "Virginia web development"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ravana Solutions | Web Development & SEO Services",
    description: "Expert web development and SEO services in Hampton Roads. We build custom websites and implement proven search optimization strategies that drive real results.",
    type: "website",
    url: "https://www.ravanasolutions.com",
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Ravana Solutions - Professional Web Development & SEO Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravana Solutions | Web Development & SEO',
    description: 'Expert web development and SEO services in Hampton Roads. Custom websites and proven search optimization strategies that drive results.',
    images: ['/og-home.jpg'],
  },
};

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </PageTransition>
  );
}