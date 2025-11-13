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
          name: 'Ravana Solutions',
          alternateName: 'Ravana',
          url: 'https://www.ravanasolutions.com/',
          logo: 'https://www.ravanasolutions.com/logo.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-757-394-0583',
            contactType: 'customer service',
            availableLanguage: 'English'
          },
          foundingDate: '2020',
          founders: [
            {
              '@type': 'Person',
              name: 'Nicholas Mangubat'
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
          name: 'Ravana Solutions',
          url: 'https://www.ravanasolutions.com/',
          description: 'Premium web development and SEO services specializing in custom websites, web applications, and search engine optimization.',
          publisher: {
            '@type': 'Organization',
            name: 'Ravana Solutions'
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://www.ravanasolutions.com/search?q={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          },
          ...data
        };

      case 'service':
        return {
          ...baseData,
          '@type': 'Service',
          name: data?.name || 'Web Development & SEO Services',
          description: data?.description || 'Professional web development and SEO services including custom websites, web applications, and search engine optimization.',
          provider: {
            '@type': 'Organization',
            name: 'Ravana Solutions',
            url: 'https://www.ravanasolutions.com/'
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
            name: 'Ravana Solutions',
            url: 'https://www.ravanasolutions.com/',
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
            name: 'Ravana Solutions'
          },
          creator: {
            '@type': 'Organization',
            name: 'Ravana Solutions'
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
          name: data?.name || 'Ravana Solutions',
          image: data?.image || 'https://www.ravanasolutions.com/logo.png',
          '@id': data?.id || 'https://www.ravanasolutions.com/',
          url: data?.url || 'https://www.ravanasolutions.com/',
          telephone: data?.telephone || '+1-757-394-0583',
          priceRange: data?.priceRange || '$$$',
          areaServed: data?.areaServed,
          openingHoursSpecification: data?.openingHoursSpecification || {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '17:00'
          },
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
          name: data?.title || 'Ravana Solutions',
          description: data?.description || 'Premium web development and SEO services',
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