import Script from 'next/script';

interface CourseData {
  name?: string;
  description?: string;
}

interface ServiceData {
  serviceType?: string;
  name?: string;
  description?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQData {
  questions: FAQItem[];
}

type SEOData = CourseData | ServiceData | FAQData | undefined;

interface SEOProps {
  type: 'organization' | 'website' | 'course' | 'service' | 'faq';
  data?: SEOData;
}

export function StructuredData({ type, data }: SEOProps) {
  const baseUrl = 'https://kalpavruksha-eduhub.vercel.app';

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
        const courseData = data as CourseData | undefined;
        return {
          '@context': 'https://schema.org',
          '@type': 'Course',
          name: courseData?.name || 'VTU Study Materials',
          description: courseData?.description || 'Free downloadable study materials, notes, PYQ, and syllabus for all VTU schemes',
          provider: {
            '@type': 'EducationalOrganization',
            name: 'Kalpavruksha EduHub',
            url: baseUrl,
          },
          educationalLevel: 'University',
          teaches: ['Computer Science', 'Information Science', 'Electronics', 'Mechanical', 'Civil Engineering'],
        };

      case 'service':
        const serviceData = data as ServiceData | undefined;
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: serviceData?.serviceType || 'Academic Project Development',
          name: serviceData?.name || 'Academic Projects for Students',
          description: serviceData?.description || 'Professional minor and major project development for engineering students',
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
        const faqData = data as FAQData | undefined;
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData?.questions?.map((q) => ({
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
