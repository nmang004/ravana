import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageTransition from '@/components/layout/PageTransition';
import StructuredData from '@/components/seo/StructuredData';
import Breadcrumb from '@/components/seo/Breadcrumb';
import CityHeroSection from '@/components/service-areas/CityHeroSection';
import WhyCitySection from '@/components/service-areas/WhyCitySection';
import CityServicesGrid from '@/components/service-areas/CityServicesGrid';
import ThingsToDoSection from '@/components/service-areas/ThingsToDoSection';
import LocalCTASection from '@/components/service-areas/LocalCTASection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { getCityBySlug, generateCityMetaTitle, generateCityMetaDescription } from '@/lib/location-data';

const citySlug = 'chesapeake';
const city = getCityBySlug(citySlug);

if (!city) {
  notFound();
}

export const metadata: Metadata = {
  title: generateCityMetaTitle(city.name),
  description: generateCityMetaDescription(city.name),
  keywords: city.metaKeywords,
  alternates: {
    canonical: `/service-areas/${citySlug}`,
  },
  openGraph: {
    title: generateCityMetaTitle(city.name),
    description: generateCityMetaDescription(city.name),
    type: 'website',
    url: `https://www.ravanasolutions.com/service-areas/${citySlug}`,
    images: [
      {
        url: city.ogImage,
        width: 1200,
        height: 630,
        alt: `${city.name} Digital Marketing & Web Development - Ravana Digital Agency`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: generateCityMetaTitle(city.name),
    description: generateCityMetaDescription(city.name),
    images: [city.ogImage],
  },
};

export default function ChesapeakePage() {
  return (
    <PageTransition>
      {/* Structured Data - Virtual Location */}
      <StructuredData
        type="localBusiness"
        data={{
          name: `Ravana Digital Agency - ${city.name}`,
          city: city.name,
          state: 'VA',
          url: `https://www.ravanasolutions.com/service-areas/${citySlug}`,
          id: `https://www.ravanasolutions.com/service-areas/${citySlug}`,
          geo: {
            '@type': 'GeoCoordinates',
            latitude: city.coordinates.lat,
            longitude: city.coordinates.lng,
          },
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
        ]}
      />

      {/* Hero Section */}
      <CityHeroSection city={city} />

      {/* Why This City Section */}
      <WhyCitySection city={city} />

      {/* Services Grid */}
      <CityServicesGrid city={city} />

      {/* Things to Do (Landmarks) */}
      <ThingsToDoSection city={city} />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Local CTA */}
      <LocalCTASection cityName={city.name} />
    </PageTransition>
  );
}
