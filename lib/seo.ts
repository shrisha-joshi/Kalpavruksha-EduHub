// SEO Utility Functions and Structured Data

export interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'Course' | 'Product' | 'Service' | 'FAQPage' | 'BreadcrumbList';
  data: any;
}

// Generate JSON-LD structured data
export function generateStructuredData(props: StructuredDataProps) {
  const baseUrl = 'https://kalpavrukshaedu.vercel.app';
  
  const schemas: { [key: string]: any } = {
    Organization: {
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      name: 'Kalpavruksha EduHub',
      description: 'High-quality academic projects, expert classes, and comprehensive study resources for university students',
      url: baseUrl,
      logo: `${baseUrl}/kalpa-tree.png`,
      sameAs: [
        // Add social media links when available
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Hindi', 'Kannada'],
      },
      areaServed: 'India',
      serviceType: ['Educational Services', 'Academic Projects', 'Study Materials'],
    },
    
    WebSite: {
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
    },
    
    Service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: props.data.serviceType,
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Kalpavruksha EduHub',
      },
      areaServed: 'India',
      description: props.data.description,
      offers: {
        '@type': 'Offer',
        price: props.data.price || '0',
        priceCurrency: 'INR',
      },
    },
    
    Course: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: props.data.name,
      description: props.data.description,
      provider: {
        '@type': 'EducationalOrganization',
        name: 'Kalpavruksha EduHub',
      },
      educationalLevel: 'University',
    },
    
    FAQPage: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: props.data.questions?.map((q: any) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: q.answer,
        },
      })),
    },
    
    BreadcrumbList: {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: props.data.items?.map((item: any, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${baseUrl}${item.path}`,
      })),
    },
  };

  return schemas[props.type] || {};
}

// SEO Keywords for different pages
export const seoKeywords = {
  home: [
    'academic projects',
    'university projects',
    'VTU projects',
    'semester projects',
    'student projects India',
    'affordable projects',
    'study materials',
    'engineering notes',
    'backlog classes',
    'project guidance',
  ],
  resources: [
    'VTU notes',
    'university notes download',
    'PYQ papers',
    'previous year questions',
    'semester notes',
    'engineering notes PDF',
    'handwritten notes',
    'syllabus download',
    'important questions',
    'study material free',
    '2018 scheme notes',
    '2021 scheme notes',
    '2022 scheme notes',
    '2025 scheme notes',
  ],
  projects: [
    'minor projects',
    'major projects',
    'final year projects',
    'semester projects',
    'CSE projects',
    'ISE projects',
    'engineering projects',
    'project ideas',
    'affordable projects India',
    'timely delivery projects',
  ],
  about: [
    'educational services',
    'student support',
    'project consultancy',
    'academic help',
    'professional guidance',
  ],
  contact: [
    'contact educational services',
    'project inquiry',
    'get academic help',
    'student support contact',
  ],
};

// Generate page-specific metadata
export function generatePageMetadata(page: keyof typeof seoKeywords, additionalData?: any) {
  const baseUrl = 'https://kalpavrukshaedu.vercel.app';
  
  const metadataMap = {
    home: {
      title: 'Kalpavruksha EduHub | High-Quality Academic Projects & Study Resources',
      description: 'Get affordable, high-quality academic projects, expert classes, and comprehensive study resources for VTU and university students. Timely delivery guaranteed.',
      keywords: seoKeywords.home,
      openGraph: {
        title: 'Kalpavruksha EduHub | Academic Excellence',
        description: 'High-quality, affordable academic projects and resources for university students',
        url: baseUrl,
        type: 'website',
      },
    },
    resources: {
      title: 'Free Study Resources | VTU Notes, PYQ, Syllabus | Kalpavruksha EduHub',
      description: 'Download free VTU notes, previous year questions (PYQ), handwritten notes, syllabus for 2018, 2021, 2022, 2025 schemes. All branches - CSE, ISE, ECE, Mechanical, Civil.',
      keywords: seoKeywords.resources,
      openGraph: {
        title: 'Free VTU Notes & Study Materials',
        description: 'Download notes, PYQ, and study materials for all VTU schemes and branches',
        url: `${baseUrl}/resources`,
        type: 'website',
      },
    },
    projects: {
      title: 'Affordable Academic Projects | Minor & Major Projects | Kalpavruksha EduHub',
      description: 'High-quality minor and major projects for engineering students. Library Management, E-Commerce, ML, AI projects with timely delivery and professional guidance.',
      keywords: seoKeywords.projects,
      openGraph: {
        title: 'Academic Projects for Students',
        description: 'Get professional, affordable projects with expert guidance',
        url: `${baseUrl}/projects`,
        type: 'website',
      },
    },
    about: {
      title: 'About Us | Professional Educational Services | Kalpavruksha EduHub',
      description: 'Learn about Kalpavruksha EduHub - providing quality education, projects, and resources to university students with professional guidance.',
      keywords: seoKeywords.about,
      openGraph: {
        title: 'About Kalpavruksha EduHub',
        description: 'Professional educational services and student support',
        url: `${baseUrl}/about`,
        type: 'website',
      },
    },
    contact: {
      title: 'Contact Us | Get Academic Help | Kalpavruksha EduHub',
      description: 'Contact Kalpavruksha EduHub for academic projects, study materials, classes, and student support. Quick response guaranteed.',
      keywords: seoKeywords.contact,
      openGraph: {
        title: 'Contact Kalpavruksha EduHub',
        description: 'Get in touch for projects, notes, and academic support',
        url: `${baseUrl}/contact`,
        type: 'website',
      },
    },
  };

  return metadataMap[page];
}
