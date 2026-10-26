// Single source for page titles, descriptions and structured data.
// Used by the client <Seo> component and by scripts/prerender.mjs.
import { SITE } from './site.js';
import { SERVICES } from './services.js';
import { HOME_FAQS } from './faqs.js';

const abs = (path) => `${SITE.url}${path === '/' ? '/' : path}`;

const organization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE.url}/#org`,
  name: SITE.name,
  alternateName: SITE.legalName,
  url: `${SITE.url}/`,
  logo: `${SITE.url}/gofs-logo.png`,
  image: `${SITE.url}/og-image.png`,
  email: SITE.email,
  telephone: SITE.phoneRaw,
  foundingDate: String(SITE.foundingYear),
  founder: { '@type': 'Person', name: SITE.founder },
  address: { '@type': 'PostalAddress', addressCountry: 'IN' },
  areaServed: ['IN', 'US', 'GB', 'AE', 'AU', 'CA', 'SG'],
  sameAs: [SITE.instagram],
  knowsAbout: SERVICES.map((s) => s.name),
};

const faqPage = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

const breadcrumb = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name,
    item: abs(path),
  })),
});

export const ROUTES = [
  {
    path: '/',
    title: 'GOFS Tech — Software, AI & Content Studio | Build. Automate. Create.',
    description:
      'GOFS Tech is a digital studio from India for ambitious companies worldwide: websites, e-commerce, custom software, AI agents, video production, Instagram management and branding.',
    jsonLd: [organization, faqPage(HOME_FAQS)],
    priority: '1.0',
  },
  {
    path: '/services',
    title: 'Services — Software, AI Agents, Video & Branding | GOFS Tech',
    description:
      'Three practices under one roof. Build: websites, e-commerce, software and apps. Automate: AI agents and workflows. Create: video production, Instagram management and branding.',
    jsonLd: [breadcrumb([['Home', '/'], ['Services', '/services']])],
    priority: '0.9',
  },
  ...SERVICES.map((s) => ({
    path: `/services/${s.slug}`,
    title: `${s.metaTitle} | GOFS Tech`,
    description: s.metaDescription,
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: s.name,
        serviceType: s.name,
        description: s.metaDescription,
        provider: { '@id': `${SITE.url}/#org` },
        areaServed: organization.areaServed,
      },
      faqPage(s.faqs),
      breadcrumb([['Home', '/'], ['Services', '/services'], [s.name, `/services/${s.slug}`]]),
    ],
    priority: '0.85',
  })),
  {
    path: '/work',
    title: 'Work — Selected Client Projects | GOFS Tech',
    description:
      'Live projects for brands in e-commerce, manufacturing, commercial interiors, education and film. See what we built and visit each site.',
    jsonLd: [breadcrumb([['Home', '/'], ['Work', '/work']])],
    priority: '0.85',
  },
  {
    path: '/about',
    title: 'Studio — The Story Behind GOFS Tech (Group of Friends Solutions)',
    description:
      'From cold messages in Telegram groups to a studio that builds software, AI agents and brand content for companies in India and abroad.',
    jsonLd: [breadcrumb([['Home', '/'], ['About', '/about']])],
    priority: '0.7',
  },
  {
    path: '/contact',
    title: 'Start a Project — Get Our Price Guide | GOFS Tech',
    description:
      'Tell us about your project and see our starting price guide instantly. Free strategy call and a fixed written proposal within 48 hours.',
    jsonLd: [breadcrumb([['Home', '/'], ['Contact', '/contact']])],
    priority: '0.8',
  },
  {
    path: '/book',
    title: 'Book a Free 30-Minute Call | GOFS Tech',
    description:
      'Pick a time in your own time zone for a free 30-minute strategy call with GOFS Tech about your website, software, AI automation, video or Instagram.',
    jsonLd: [breadcrumb([['Home', '/'], ['Book a call', '/book']])],
    priority: '0.8',
  },
];

export const NOT_FOUND = {
  path: '/404',
  title: 'Page not found | GOFS Tech',
  description: 'This page does not exist. Go back to the GOFS Tech home page.',
  noindex: true,
  jsonLd: [],
};

export const getRoute = (path) =>
  ROUTES.find((r) => r.path === (path.replace(/\/+$/, '') || '/')) ?? NOT_FOUND;

export const canonicalFor = (route) => abs(route.path);
