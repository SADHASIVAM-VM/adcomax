import type { CategoryItem, ProductItem, IndustryItem, ServiceItem, StatItem } from '../types';

export const COMPANY_INFO = {
  name: 'ADCOMAX',
  legalName: 'ADCOMAX Enterprises Private Limited',
  tagline: 'Industrial & Automotive Supply Solutions',
  subTagline: 'Industrial • Automotive • Woodworking supply solutions',
  phone: '+91 63692 26673',
  phoneHref: 'tel:+916369226673',
  email: 'infoadcomax@gmail.com',
  emailHref: 'mailto:infoadcomax@gmail.com',
  locationSummary: 'Thiruvallur, Tamil Nadu',
  fullAddress: [
    'Plot No. 6, Door No. 4, Putlur Railway Station,',
    'Bakkiyam New Town, Kakkalur,',
    'Thiruvallur, Tamil Nadu – 602003'
  ],
  establishedYear: '2024',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Industries', href: '#industries' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: StatItem[] = [
  {
    title: 'Established 2024',
    description: 'ADCOMAX Enterprises Private Limited',
  },
  {
    title: 'Multiple product categories',
    description: 'Automotive, woodworking and industrial supplies',
  },
  {
    title: 'Customer-focused support',
    description: 'Stock planning and technical information',
  },
];

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'abrasives-sanding',
    icon: '◉',
    title: 'Abrasives & sanding',
    description: 'Abrasive materials for cutting, smoothing, polishing and finishing workpieces.',
    href: '#product-list',
  },
  {
    id: 'polishing-detailing',
    icon: '✳',
    title: 'Polishing & detailing',
    description: 'Foam pads, natural polishing pads, compounds and ceramic coating products.',
    href: '#product-list',
  },
  {
    id: 'masking-protection',
    icon: '▤',
    title: 'Masking & protection',
    description: 'Masking tapes, masking film, die-cut masks and surface protection tape.',
    href: '#product-list',
  },
  {
    id: 'surface-preparation',
    icon: '◇',
    title: 'Surface preparation',
    description: 'Tack rags and microfiber cloth for automotive and woodworking preparation.',
    href: '#product-list',
  },
  {
    id: 'protective-wear',
    icon: '♧',
    title: 'Protective wear',
    description: 'Coveralls and robo coveralls for workplace protection from dirt and debris.',
    href: '#product-list',
  },
  {
    id: 'industrial-tools',
    icon: '⚙',
    title: 'Industrial tools',
    description: 'Tungsten carbide rotary burrs and angle grinders for fabrication and finishing.',
    href: '#product-list',
  },
];

export const ABOUT_FEATURES = [
  'Customer requirement focus',
  'Stock planning support',
  'Technical information',
  'Customer training',
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-abrasives',
    category: 'Abrasives',
    title: 'Abrasive products',
    description: 'For cutting, smoothing, polishing and finishing workpieces.',
    symbol: '◉',
  },
  {
    id: 'prod-polishing-pads',
    category: 'Polishing',
    title: 'Foam polishing pads',
    description: 'For automotive paint correction and polishing applications.',
    symbol: '✳',
  },
  {
    id: 'prod-masking-film',
    category: 'Masking',
    title: 'Masking film',
    description: 'Helps protect surfaces from paint and overspray.',
    symbol: '▤',
  },
  {
    id: 'prod-microfiber',
    category: 'Surface care',
    title: 'Microfiber cloth',
    description: 'Used for surface preparation in automotive and woodworking.',
    symbol: '◌',
  },
  {
    id: 'prod-protection-tape',
    category: 'Protection',
    title: 'Surface protection tape',
    description: 'For protection against scratches, dust, dirt and moisture.',
    symbol: '▱',
  },
  {
    id: 'prod-rotary-burrs',
    category: 'Industrial tools',
    title: 'Carbide rotary burrs',
    description: 'For milling, machining, deburring and cleaning applications.',
    symbol: '◈',
  },
  {
    id: 'prod-angle-grinders',
    category: 'Power tools',
    title: 'Angle grinders',
    description: 'For cutting, grinding, deburring, finishing and polishing.',
    symbol: '⚙',
  },
  {
    id: 'prod-polishing-compound',
    category: 'Automotive care',
    title: 'Polishing compound',
    description: 'Compound products described for automotive spot repair.',
    symbol: '⬡',
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'automotive',
    num: '01 / AUTOMOTIVE',
    title: 'Automotive industry',
    description: 'Product categories for surface preparation, masking, polishing and finishing applications.',
  },
  {
    id: 'woodworking',
    num: '02 / WOODWORKING',
    title: 'Woodworking',
    description: 'Surface preparation and finishing-related products for woodworking applications.',
  },
  {
    id: 'retail',
    num: '03 / RETAIL',
    title: 'Retail',
    description: 'Distribution of product categories for retail business requirements.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'stock-planning',
    symbol: '▦',
    title: 'Stock planning',
    description: 'Planning support that considers customer requirements and product needs.',
  },
  {
    id: 'technical-info',
    symbol: '⌘',
    title: 'Technical information',
    description: 'Sharing product-related technical information and expertise with customers.',
  },
  {
    id: 'customer-training',
    symbol: '↗',
    title: 'Customer training',
    description: 'Training and guidance as part of the company\'s customer support approach.',
  },
];
