import Script from 'next/script';

interface SEOProps {
  type: 'organization' | 'website' | 'course' | 'service' | 'faq';
  data?: any;
}

export function StructuredData({ type, data }: SEOProps) {
  const baseUrl = 'https://kalpavrukshaedu.vercel.app';

  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: 'Kalpavruksha EduHub',
          description: 'High-quality academic projects, expert classes, and comprehensive study resources for university students',
          url: baseUrl,
          logo: `${baseUrl}/kalpa-tree.png`,
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'Customer Service',
            availableLanguage: ['English', 'Hindi', 'Kannada'],
          },
          areaServed: 'India',
          serviceType: ['Educational Services', 'Academic Projects', 'Study Materials'],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '50',
            bestRating: '5',
          },
        };

      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Kalpavruksha EduHub',
          url: baseUrl,
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: `${baseUrl}/resources?search={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
          },
        };

      case 'course':
        return {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: data?.name || 'VTU Study Materials',
          description: data?.description || 'Free downloadable study materials, notes, PYQ, and syllabus for all VTU schemes',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Kalpavruksha EduHub',
            url: baseUrl,
          },
          educationalLevel: 'University',
          teaches: ['Computer Science', 'Information Science', 'Electronics', 'Mechanical', 'Civil Engineering'],
        };

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: data?.serviceType || 'Academic Project Development',
          name: data?.name || 'Academic Projects for Students',
          description: data?.description || 'Professional minor and major project development for engineering students',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Kalpavruksha EduHub',
            url: baseUrl,
          },
          areaServed: 'India',
          offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceCurrency: 'INR',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Academic Projects',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Minor Projects',
                  description: 'Semester projects for university students',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Major Projects',
                  description: 'Final year capstone projects',
                },
              },
            ],
          },
        };

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data?.questions?.map((q: any) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer,
            },
          })) || [],
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
