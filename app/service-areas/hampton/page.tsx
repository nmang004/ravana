import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageTransition from '@/components/layout/PageTransition';
import StructuredData from '@/components/seo/StructuredData';
import CityHeroSection from '@/components/service-areas/CityHeroSection';
import WhyCitySection from '@/components/service-areas/WhyCitySection';
import CityServicesGrid from '@/components/service-areas/CityServicesGrid';
import ThingsToDoSection from '@/components/service-areas/ThingsToDoSection';
import LocalCTASection from '@/components/service-areas/LocalCTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { getCityBySlug, generateCityMetaTitle, generateCityMetaDescription } from '@/lib/location-data';

const citySlug = 'hampton';
const city = getCityBySlug(citySlug);

if (!city) {
  notFound();
}

// Type assertion to help TypeScript understand city is defined after notFound check
const cityData = city!;

export const metadata: Metadata = {
  title: generateCityMetaTitle(cityData.name),
  description: generateCityMetaDescription(cityData.name),
  keywords: cityData.metaKeywords,
  alternates: {
    canonical: `/service-areas/${citySlug}`,
  },
  openGraph: {
    title: generateCityMetaTitle(cityData.name),
    description: generateCityMetaDescription(cityData.name),
    type: 'website',
    url: `https://www.ravanasolutions.com/service-areas/${citySlug}`,
    images: [
      {
        url: cityData.ogImage,
        width: 1200,
        height: 630,
        alt: `${cityData.name} Digital Marketing & Web Development - Ravana Solutions`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: generateCityMetaTitle(cityData.name),
    description: generateCityMetaDescription(cityData.name),
    images: [cityData.ogImage],
  },
};

export default function HamptonPage() {
  return (
    <PageTransition>
      {/* Structured Data - Virtual Location */}
      <StructuredData
        type="localBusiness"
        data={{
          name: `Ravana Solutions - ${cityData.name}`,
          city: cityData.name,
          state: 'VA',
          url: `https://www.ravanasolutions.com/service-areas/${citySlug}`,
          id: `https://www.ravanasolutions.com/service-areas/${citySlug}`,
          geo: {
            '@type': 'GeoCoordinates',
            latitude: cityData.coordinates.lat,
            longitude: cityData.coordinates.lng,
          },
          areaServed: {
            '@type': 'City',
            name: cityData.name,
            addressRegion: 'VA',
            addressCountry: 'US',
          },
        }}
      />

      {/* Hero Section */}
      <CityHeroSection city={cityData} />

      {/* Why This City Section */}
      <WhyCitySection city={cityData} />

      {/* Services Grid */}
      <CityServicesGrid city={cityData} />

      {/* Things to Do (Landmarks) */}
      <ThingsToDoSection city={cityData} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Local CTA */}
      <LocalCTASection cityName={cityData.name} />
    </PageTransition>
  );
}
