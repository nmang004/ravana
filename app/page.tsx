import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import PageTransition from "@/components/layout/PageTransition";

export const metadata: Metadata = {
  title: "Ravana - Premium Digital Agency | Web Development & SEO Services",
  description: "Transform your business with premium web development and SEO services. We craft websites that rank, convert, and drive measurable business results. Expert SaaS development, digital marketing, and technical SEO.",
  keywords: ["digital agency", "web development", "SEO services", "SaaS development", "Next.js development", "React development", "technical SEO", "digital marketing", "premium web design", "conversion optimization"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ravana - Premium Digital Agency | Web Development & SEO",
    description: "Transform your business with premium web development and SEO services. We craft websites that rank, convert, and drive measurable results.",
    type: "website",
    url: "https://www.ravanasolutions.com",
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Ravana Digital Agency - Premium Web Development & SEO Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravana - Premium Digital Agency',
    description: 'Transform your business with cutting-edge web development and SEO services that drive results.',
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