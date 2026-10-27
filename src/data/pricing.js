// Private price guide. Shown only after a visitor submits the project form —
// never prerendered into the HTML. Change numbers here.
export const PRICE_GUIDE = [
  { slug: 'web-development', label: 'Company website', inr: 34999, usd: 1200 },
  { slug: 'ecommerce-development', label: 'E-commerce store', inr: 59999, usd: 2000 },
  { slug: 'software-development', label: 'Custom software / web app', inr: 120000, usd: 4000 },
  { slug: 'app-development', label: 'Mobile app (Android + iOS)', inr: 150000, usd: 5000 },
  { slug: 'ai-automation', label: 'AI agent / automation', inr: 19999, usd: 750, note: '+ monthly usage' },
  { slug: 'video-production', label: 'Video production', inr: 14999, usd: 350, unit: 'per video' },
  { slug: 'social-media-management', label: 'Instagram management', inr: 19999, usd: 499, unit: 'per month' },
  { slug: 'graphic-design', label: 'Brand identity', inr: 14999, usd: 400 },
];

export const PAYMENT_TERMS = [
  { pct: '40%', when: 'to begin', note: 'After you approve the written scope.' },
  { pct: '40%', when: 'at approval', note: 'Once you have seen and approved the design or beta.' },
  { pct: '20%', when: 'at launch', note: 'When everything is live and handed over.' },
];

export const formatPrice = (amount, currency) =>
  currency === 'INR'
    ? `₹${amount.toLocaleString('en-IN')}`
    : `$${amount.toLocaleString('en-US')}`;
