import { Globe, ShoppingBag, LayoutDashboard, Bot, Smartphone, Clapperboard, Megaphone, PenTool } from 'lucide-react';

// Three practices: Build (product), Automate (AI), Create (brand & content).
export const PRACTICES = [
  { id: 'build', name: 'Build', line: 'Websites, stores, software and apps engineered to perform.' },
  { id: 'automate', name: 'Automate', line: 'AI agents and workflows that take the repetitive work off your team.' },
  { id: 'create', name: 'Create', line: 'Video, social and design that make people stop, watch and remember you.' },
];

export const SERVICES = [
  {
    slug: 'web-development',
    practice: 'build',
    icon: Globe,
    name: 'Websites',
    short: 'High-performance company websites that make a premium first impression and turn visitors into enquiries.',
    h1: 'Websites that make your company look like the leader in its market',
    metaTitle: 'Premium Website Design & Development',
    metaDescription:
      'Custom-designed, lightning-fast company websites built in React and Next.js. Strategy, design, copy structure and development by one studio. India and worldwide.',
    intro:
      'Your website is the first meeting most customers have with your company. We design and engineer custom websites — no templates — that load instantly, explain your value in seconds and make it effortless to start a conversation.',
    forWho: ['Manufacturers and B2B companies', 'Service firms and consultancies', 'Funded startups', 'Brands rebuilding an outdated site'],
    deliverables: [
      'Brand-led custom design',
      'Copy structure for every page',
      'Next.js / React engineering',
      '90+ mobile performance',
      'Search-ready structure and metadata',
      'Enquiry, booking and WhatsApp flows',
      'Analytics and lead tracking',
      'Editable content and team training',
    ],
    timeline: '2–4 weeks',
    faqs: [
      { q: 'Do you use templates?', a: 'No. Every website is designed from scratch around your brand, your customers and what you want them to do.' },
      { q: 'Do I own the website?', a: 'Yes. After final payment the code, design and content belong to you. We can host and maintain it, or hand it over completely.' },
      { q: 'Can you redesign our existing website?', a: 'Yes. We keep what works, rebuild the rest and set up redirects so existing links keep working.' },
    ],
  },
  {
    slug: 'ecommerce-development',
    practice: 'build',
    icon: ShoppingBag,
    name: 'E-commerce',
    short: 'Your own branded store with payments, order management and a beautiful product experience.',
    h1: 'E-commerce stores that sell your brand, not just your products',
    metaTitle: 'Custom E-commerce Store Development for D2C Brands',
    metaDescription:
      'Custom online stores for D2C brands: product storytelling, Razorpay, Stripe or PayPal checkout, admin dashboard and order tracking. Built by GOFS Tech.',
    intro:
      'Marketplaces own your customer. Your own store lets you keep the margin and build a brand people come back to. We have built stores for D2C brands in hair care and fitness equipment — fast on mobile, easy to manage, and designed to make the product feel premium.',
    forWho: ['D2C brands', 'Manufacturers selling direct', 'Instagram-first sellers', 'Retailers going online'],
    deliverables: [
      'Product storytelling and catalogue',
      'Cart, checkout and payments',
      'Admin dashboard for products and orders',
      'Order tracking and notifications',
      'Variants, coupons and stock',
      'Shipping and tax setup',
      'Conversion and sales analytics',
      'Product photo and video direction',
    ],
    timeline: '3–6 weeks',
    faqs: [
      { q: 'Which payment gateways do you support?', a: 'Razorpay, Cashfree and PhonePe for India; Stripe and PayPal internationally.' },
      { q: 'Shopify or custom?', a: 'Shopify suits small catalogues that need to launch fast. Custom suits unique flows, lower running costs and full control. We recommend honestly.' },
      { q: 'Can we manage products ourselves?', a: 'Yes. You get an admin dashboard to manage products, prices, stock and orders without code.' },
    ],
  },
  {
    slug: 'software-development',
    practice: 'build',
    icon: LayoutDashboard,
    name: 'Software & Web Apps',
    short: 'CRMs, portals, dashboards and MVPs built around how your company actually works.',
    h1: 'Custom software built around the way your company works',
    metaTitle: 'Custom Software & Web App Development – CRM, Portals, MVPs',
    metaDescription:
      'Custom web applications, CRMs, client portals, internal dashboards and startup MVPs. Weekly demos, milestone delivery and full code ownership.',
    intro:
      'Spreadsheets and WhatsApp groups work until they hold the company back. We build focused software that removes manual work — a CRM that fits your sales process, a client portal, an operations dashboard, or the first version of your product.',
    forWho: ['Teams outgrowing spreadsheets', 'Startups building an MVP', 'Operations-heavy businesses', 'Companies with a unique workflow'],
    deliverables: [
      'Discovery and screen planning',
      'Clickable prototype before code',
      'Secure login, roles and permissions',
      'Database and API',
      'Admin panel and reports',
      'Payments, email and WhatsApp integrations',
      'Cloud deployment',
      'Documentation and handover',
    ],
    timeline: '4–12 weeks',
    faqs: [
      { q: 'How do you estimate custom software?', a: 'We break the product into features, estimate each one and agree fixed milestones. You see a working demo every week.' },
      { q: 'Which technology do you use?', a: 'React / Next.js on the front end, Node.js with MongoDB or PostgreSQL on the back end, deployed on Vercel, AWS or your cloud.' },
      { q: 'Will you sign an NDA?', a: 'Yes, before you share your idea or data.' },
    ],
  },
  {
    slug: 'app-development',
    practice: 'build',
    icon: Smartphone,
    name: 'Mobile Apps',
    short: 'Android and iOS apps from one codebase, from MVP to store launch.',
    h1: 'Mobile apps for Android and iOS, built once and launched on both',
    metaTitle: 'Mobile App Development – Android & iOS with React Native',
    metaDescription:
      'Cross-platform Android and iOS apps with React Native: MVPs, booking and ordering apps, customer and field-staff apps, with Play Store and App Store launch.',
    intro:
      'An app earns its place when customers return often — to book, order or track. We build cross-platform apps with React Native, so you get Android and iOS from one codebase, and we take you all the way through store launch.',
    forWho: ['Startups launching an MVP', 'Businesses with repeat customers', 'Field and service teams', 'Brands adding loyalty or ordering'],
    deliverables: [
      'App UX and interface design',
      'Android and iOS from one codebase',
      'Login, profiles and push notifications',
      'Payments and bookings',
      'Admin panel',
      'Play Store and App Store launch',
    ],
    timeline: '6–12 weeks',
    faqs: [
      { q: 'Do we need an app or a website?', a: 'Most companies should start with a strong website. An app is worth it when customers use it often — we will tell you honestly.' },
      { q: 'Do you publish the app?', a: 'Yes. We prepare the store listings and handle submission to Google Play and the Apple App Store.' },
    ],
  },
  {
    slug: 'ai-automation',
    practice: 'automate',
    icon: Bot,
    name: 'AI Agents & Automation',
    short: 'AI assistants and automations that reply, follow up, qualify leads and handle the repetitive work.',
    h1: 'AI agents that work for your company around the clock',
    metaTitle: 'AI Agent & Workflow Automation Development',
    metaDescription:
      'AI assistants for WhatsApp and websites, lead qualification and follow-up, document and invoice automation, voice-command tools. Built on your data, with humans in control.',
    intro:
      'Your team answers the same questions, copies the same data and sends the same follow-ups every day. We design AI agents and automations that take over that work — replying to customers at 2am, qualifying leads, drafting emails, creating invoices — while your team stays in control.',
    forWho: ['Clinics, salons and service businesses', 'Sales teams with slow follow-up', 'E-commerce support teams', 'Operations teams doing manual data entry'],
    deliverables: [
      'WhatsApp and website AI assistants',
      'Lead capture and qualification',
      'Automatic follow-ups by message and email',
      'Appointment booking flows',
      'Invoice and document automation',
      'Voice-command tools (e.g. stock via Telegram)',
      'Connections to Sheets, CRM, email and payments',
      'Dashboard to review every AI conversation',
    ],
    timeline: '1–4 weeks',
    faqs: [
      { q: 'Will the AI say wrong things to customers?', a: 'It answers only from your approved information, follows clear rules and hands over to a person when unsure. Every conversation can be reviewed.' },
      { q: 'What should we automate first?', a: 'The task your team repeats most — usually answering enquiries or following up leads. We map your process on the first call.' },
    ],
  },
  {
    slug: 'video-production',
    practice: 'create',
    icon: Clapperboard,
    name: 'Video Production & Marketing',
    short: 'Brand films, product videos and vertical reels — from script and shoot to edit.',
    h1: 'Video that makes people stop scrolling and start trusting you',
    metaTitle: 'Video Production & Video Marketing – Reels, Brand Films, Product Videos',
    metaDescription:
      'Corporate and brand video production, product videos and vertical Instagram reels: concept, scripting, shooting, editing, motion graphics and captions.',
    intro:
      'Video is how customers decide who to trust today. We plan, script, shoot and edit videos for companies — brand films, product and factory videos, founder stories and a steady flow of vertical reels made for Instagram and YouTube Shorts.',
    forWho: ['Manufacturers showing their process', 'D2C brands launching products', 'Founders building a personal brand', 'Service companies explaining what they do'],
    deliverables: [
      'Concept and scripting',
      'On-location or studio shoot',
      'Editing, colour and sound',
      'Motion graphics and captions',
      'Vertical 9:16 reels and shorts',
      'Product and process videos',
      'Brand and corporate films',
      'Thumbnails and cover frames',
    ],
    timeline: 'Per project or monthly',
    faqs: [
      { q: 'Do you shoot or only edit?', a: 'Both. We can shoot at your location, or edit footage your team records on a phone using our shot list.' },
      { q: 'Do you make vertical videos for Instagram?', a: 'Yes. Reels and shorts are produced natively in 9:16 with captions, a strong hook in the first seconds and clean on-screen text.' },
    ],
  },
  {
    slug: 'social-media-management',
    practice: 'create',
    icon: Megaphone,
    name: 'Instagram & Social Media',
    short: 'Content strategy, posting and community management for your Instagram and social channels.',
    h1: 'Instagram handled end to end — strategy, content and growth',
    metaTitle: 'Instagram & Social Media Management for Brands and Companies',
    metaDescription:
      'Instagram account management: content strategy, monthly calendars, carousels, reels, captions, posting and community management for brands and companies.',
    intro:
      'Posting random designs does not build a brand. We run your Instagram with a clear strategy: content pillars, a monthly calendar, carousels and reels that teach and show proof, captions people actually read, and daily engagement with the right audience.',
    forWho: ['Brands with no time to post', 'Companies starting on Instagram', 'Founders building authority', 'D2C brands that sell through social'],
    deliverables: [
      'Account audit and positioning',
      'Content pillars and monthly calendar',
      'Carousels, reels and stories',
      'Captions and keyword research',
      'Scheduling and posting',
      'Comment and DM handling',
      'Profile, bio and highlights',
      'Monthly performance report',
    ],
    timeline: 'Monthly',
    faqs: [
      { q: 'Do you run paid ads?', a: 'No. We focus on organic content, video and community — the work that builds a brand people trust.' },
      { q: 'How many posts per month?', a: 'It depends on the plan — typically 12 to 30 pieces a month across carousels, reels and stories.' },
    ],
  },
  {
    slug: 'graphic-design',
    practice: 'create',
    icon: PenTool,
    name: 'Branding & Graphic Design',
    short: 'Logos, brand identities and every visual your company puts in front of customers.',
    h1: 'A brand identity that looks as serious as your ambition',
    metaTitle: 'Branding & Graphic Design – Logos, Identity, Social Creatives',
    metaDescription:
      'Logo and brand identity design, brand guidelines, social media creatives, brochures, catalogues, packaging and pitch decks for companies and brands.',
    intro:
      'People judge a company by how it looks long before they read anything. We design identities and visual systems — logo, colours, typography, social templates, brochures and decks — so everything you publish feels like it came from one confident brand.',
    forWho: ['New companies and startups', 'Businesses with an outdated look', 'Brands launching a product', 'Teams preparing investor or sales decks'],
    deliverables: [
      'Logo and identity system',
      'Colour, typography and brand guidelines',
      'Social media templates and creatives',
      'Brochures and product catalogues',
      'Pitch and sales decks',
      'Packaging and print design',
    ],
    timeline: '1–4 weeks',
    faqs: [
      { q: 'Do we get the source files?', a: 'Yes — all source files, exports and brand guidelines are yours.' },
      { q: 'Can you redesign our existing logo?', a: 'Yes. We can refresh it while keeping the recognition you already have, or create a new identity.' },
    ],
  },
];

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
export const servicesIn = (practice) => SERVICES.filter((s) => s.practice === practice);
