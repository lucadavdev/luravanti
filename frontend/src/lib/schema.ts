export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LuRavAntI',
    url: 'https://luravanti.com',
    description:
      'Business Transformation Consulting — we integrate systems, eliminate operational friction, and build the foundation for intelligent automation.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'Italian', 'Spanish'],
    },
    knowsAbout: [
      'Business Transformation',
      'System Integration',
      'AI Readiness',
      'Process Automation',
      'Custom Software Development',
      'Data Architecture',
    ],
  };
}

export function servicesSchema() {
  const services = [
    {
      name: 'Business Transformation Consulting',
      description:
        'We analyze your current operations, identify inefficiencies, and define practical transformation strategies aligned with your business objectives.',
    },
    {
      name: 'System Integration & Process Unification',
      description:
        'We connect existing software, platforms, databases, and operational workflows to eliminate silos and create a seamless flow of information.',
    },
    {
      name: 'Custom Software Development',
      description:
        'We design and build tailored applications, portals, platforms, and operational systems around your unique business requirements.',
    },
    {
      name: 'AI Readiness & Data Architecture',
      description:
        'We restructure data models, operational processes, and information flows to prepare organizations for AI-driven operations and decision-making.',
    },
    {
      name: 'Automation & Intelligent Operations',
      description:
        'We implement automation, intelligent workflows, and AI-powered assistants that reduce manual effort and improve productivity across the organization.',
    },
    {
      name: 'Data Foundation',
      description:
        'We create a single source of truth — consolidating your data into a structured, reliable foundation that powers reporting and AI.',
    },
  ];

  return services.map((s) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: { '@type': 'Organization', name: 'LuRavAntI' },
    name: s.name,
    description: s.description,
  }));
}
