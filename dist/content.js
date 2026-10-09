// Edit your portfolio details here. Reload the page to see changes.
window.portfolio = {
  name: 'Emmanuel Rubio',
  role: 'Shopify & Custom System Developer',
  email: 'rubioemmanuel11@gmail.com',
  phone: '+63 947-817-7621',
  location: 'Marilao, Bulacan, Philippines',
  summary:
    'I build custom Shopify websites and Laravel business systems—from ecommerce storefronts to payroll, CRUD, document automation, and lead capture. I also provide ongoing Shopify VA support.',
  about:
    'I’m an IT graduate who enjoys turning business needs into practical digital solutions. My experience combines Shopify storefront development, product catalog organization, and full-stack web development. I bring a careful eye for detail and a clear, collaborative approach to each project.',
  skills: [
    'Shopify',
    'HTML',
    'Tailwind CSS',
    'JavaScript',
    'Laravel 12',
    'PostgreSQL',
    'Git & GitHub',
    'Microsoft Office',
  ],
  services: [
    {
      title: 'Product & collection management',
      text: 'Product uploads, descriptions, pricing, variants, and organized collections that make your catalog easier to browse.',
      number: '01',
    },
    {
      title: 'Shopify web development',
      text: 'Custom storefronts, responsive pages, theme customization, product catalogs, and checkout workflows tailored to your brand.',
      number: '02',
    },
    {
      title: 'Custom business systems',
      text: 'Laravel applications for payroll, attendance, CRUD, document automation, and lead capture—built around your business workflow.',
      number: '03',
    },
    {
      title: 'Custom order workflows',
      text: 'Shopify Draft Order API integrations and Messenger inquiry flows tailored to how your business handles orders.',
      number: '04',
    },
  ],
  projects: [
    {
      category: 'TALL STACK · ECOMMERCE',
      title: 'GasketCity',
      description:
        'Customized ecommerce website with CRUD, document automation, and automatic lead capture.',
      tags: ['Tailwind CSS', 'Alpine.js', 'Laravel', 'Livewire'],
      details:
        'Customized the GasketCity ecommerce website using the TALL stack (Tailwind CSS, Alpine.js, Laravel, and Livewire). Implemented CRUD functionality, document automation, and an automated lead saver that captures information submitted by visitors through the website.',
      image: 'images/gasketcity-website.png',
      imageAlt: 'GasketCity door gasket ecommerce homepage',
      kind: 'gasketcity',
    },
    {
      category: 'SHOPIFY · CLIENT PROJECT',
      title: 'Kahoy Crafted Furniture',
      description:
        'A custom Shopify storefront that brings a furniture catalog online and connects product discovery with Messenger-based customer inquiries.',
      tags: ['Shopify storefront', 'Product catalog', 'Collections', 'Draft Order API'],
      details:
        'Designed the storefront around the client’s branding, organized products and collections, and created a custom Draft Order API workflow that directs customers to Messenger with an order link. The project includes 14 pages.',
      image: 'images/kahoy-website.png',
      imageAlt: 'Kahoy Crafted furniture storefront',
      kind: 'shopify',
    },
    {
      category: 'LARAVEL · CAPSTONE PROJECT',
      title: 'Payroll Management System',
      description:
        'An attendance-to-payroll system developed for Marymount Professional Colleges, with biometric attendance integration.',
      tags: ['Laravel 12', 'PostgreSQL', 'ESP32', 'Business workflows'],
      details:
        'Led development of a LAN-based payroll system with biometric attendance integration, schedule enforcement, payroll calculations, and statutory reporting workflows for SSS, PhilHealth, and Pag-IBIG. Presented the system and logic architecture to an evaluation panel.',
      image: 'images/payroll-dashboard.png',
      imageAlt: 'Marymount payroll management dashboard',
      kind: 'payroll',
    },
  ],
  education: 'Bachelor of Science in Information Technology',
  school: 'AMA Computer Learning Center · 2022–2026',
};

window.portfolio.packages = [
  {
    name: 'Starter',
    price: '₱8,000',
    hours: '20 hours / month',
    intro: 'For regular product and store updates.',
    features: [
      'Up to 20 product uploads',
      'Product details and inventory updates',
      'Basic collection organization',
      'Basic monthly report',
      '1 monthly meeting',
    ],
  },
  {
    name: 'Growth',
    price: '₱15,000',
    hours: '40 hours / month',
    intro: 'For ongoing store operations and customer support.',
    featured: true,
    features: [
      'Up to 50 product uploads',
      'Collection and inventory management',
      'Order monitoring and customer inquiries',
      'Discount setup and basic product SEO',
      'Theme content updates and monthly report',
      '2 monthly meetings',
    ],
  },
  {
    name: 'Premium',
    price: '₱25,000',
    hours: '60 hours / month',
    intro: 'For store management with technical support.',
    features: [
      'Up to 100 product uploads',
      'Everything in Growth',
      'More theme content updates',
      'Basic code troubleshooting',
      'Detailed monthly report',
      'Weekly check-in',
    ],
  },
];
window.portfolio.technologies = [
  { name: 'Shopify', icon: 'shopify' },
  { name: 'HTML', icon: 'html5' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'Laravel', icon: 'laravel' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
];

// Add your exact profile URLs to enable these footer links.
window.portfolio.socials = [
  { name: 'Facebook', url: 'https://www.facebook.com/emmanuel.rubio.3110/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/emmanuel-rubio-0a47a8403/' },
  { name: 'GitHub', url: 'https://github.com/rubio2004' },
];
