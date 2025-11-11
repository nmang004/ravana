interface StructuredDataProps {
  type?: 'organization' | 'website' | 'article' | 'service' | 'creativeWork' | 'localBusiness' | 'faqPage';
  data?: Record<string, any>;
}

export default function StructuredData({ type = 'organization', data }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
    };

    switch (type) {
      case 'organization':
        return {
          ...baseData,
          '@type': 'Organization',
          name: 'Ravana Digital Agency',
          alternateName: 'Ravana',
          url: 'https://ravana.agency',
          logo: 'https://ravana.agency/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-555-123-4567',
            contactType: 'customer service',
            availableLanguage: 'English'
          },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Innovation Drive',
            addressLocality: 'San Francisco',
            addressRegion: 'CA',
            postalCode: '94105',
            addressCountry: 'US'
          },
          sameAs: [
            'https://twitter.com/ravana_agency',
            'https://linkedin.com/company/ravana-agency',
            'https://github.com/ravana-agency'
          ],
          foundingDate: '2020',
          founders: [
            {
              '@type': 'Person',
              name: 'Alex Rivera'
            }
          ],
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: 10
          },
          ...data
        };

      case 'website':
        return {
          ...baseData,
          '@type': 'WebSite',
          name: 'Ravana Digital Agency',
          url: 'https://ravana.agency',
          description: 'Premium digital agency specializing in SaaS development, web creation, digital marketing, and SEO.',
          publisher: {
            '@type': 'Organization',
            name: 'Ravana Digital Agency'
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://ravana.agency/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          },
          ...data
        };

      case 'service':
        return {
          ...baseData,
          '@type': 'Service',
          name: data?.name || 'Digital Agency Services',
          description: data?.description || 'Professional digital services including SaaS development, web design, and digital marketing.',
          provider: {
            '@type': 'Organization',
            name: 'Ravana Digital Agency',
            url: 'https://www.ravanasolutions.com'
          },
          areaServed: data?.areaServed || {
            '@type': 'Country',
            name: 'United States'
          },
          hasOfferCatalog: data?.hasOfferCatalog || {
            '@type': 'OfferCatalog',
            name: 'Digital Services',
            itemListElement: [
              {
                '@type': 'OfferCatalog',
                name: 'SaaS Development',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Custom SaaS Platform Development'
                    }
                  }
                ]
              },
              {
                '@type': 'OfferCatalog',
                name: 'Web Development',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Premium Website Development'
                    }
                  }
                ]
              }
            ]
          },
          ...data
        };

      case 'article':
        return {
          ...baseData,
          '@type': 'Article',
          headline: data?.title,
          description: data?.excerpt,
          image: data?.coverImage,
          author: {
            '@type': 'Person',
            name: data?.author
          },
          publisher: {
            '@type': 'Organization',
            name: 'Ravana Digital Agency',
            url: 'https://www.ravanasolutions.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.ravanasolutions.com/logo.png'
            }
          },
          datePublished: data?.datePublished,
          dateModified: data?.dateModified || data?.datePublished,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': data?.url
          },
          keywords: data?.keywords,
          articleSection: data?.category,
          wordCount: data?.wordCount,
          ...data
        };

      case 'creativeWork':
        return {
          ...baseData,
          '@type': 'CreativeWork',
          name: data?.name,
          description: data?.description,
          image: data?.image,
          url: data?.url,
          author: {
            '@type': 'Organization',
            name: 'Ravana Digital Agency'
          },
          creator: {
            '@type': 'Organization',
            name: 'Ravana Digital Agency'
          },
          dateCreated: data?.dateCreated,
          datePublished: data?.datePublished,
          keywords: data?.keywords,
          genre: data?.genre,
          about: data?.about,
          ...data
        };

      case 'localBusiness':
        return {
          ...baseData,
          '@type': 'LocalBusiness',
          name: data?.name || 'Ravana Digital Agency',
          image: data?.image || 'https://www.ravanasolutions.com/logo.png',
          '@id': data?.id || 'https://www.ravanasolutions.com',
          url: data?.url || 'https://www.ravanasolutions.com',
          telephone: data?.telephone || '+1-555-123-4567',
          priceRange: data?.priceRange || '$$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: data?.streetAddress || '123 Innovation Drive',
            addressLocality: data?.city || 'San Francisco',
            addressRegion: data?.state || 'CA',
            postalCode: data?.zipCode || '94105',
            addressCountry: 'US'
          },
          geo: data?.geo,
          areaServed: data?.areaServed,
          openingHoursSpecification: data?.openingHoursSpecification || {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00'
          },
          sameAs: [
            'https://twitter.com/ravana_agency',
            'https://linkedin.com/company/ravana-agency',
            'https://github.com/ravana-agency'
          ],
          ...data
        };

      case 'faqPage':
        return {
          ...baseData,
          '@type': 'FAQPage',
          mainEntity: data?.faqs?.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          })) || [],
          ...data
        };

      default:
        return {
          ...baseData,
          '@type': 'WebPage',
          name: data?.title || 'Ravana Digital Agency',
          description: data?.description || 'Premium digital agency services',
          ...data
        };
    }
  };

  const structuredData = getStructuredData();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}