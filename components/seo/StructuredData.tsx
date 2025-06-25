interface StructuredDataProps {
  type?: 'organization' | 'website' | 'article' | 'service';
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
            url: 'https://ravana.agency'
          },
          areaServed: {
            '@type': 'Country',
            name: 'United States'
          },
          hasOfferCatalog: {
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