const subscribe = require('./subscribe');
const privacyPolicy = require('./privacy-policy');

const resources = [
  { href: '#', label: 'Webcasts' },
  { href: '#', label: 'Awards' },
  { href: '#', label: 'Events' },
];

const topics = [
  { href: '/retirement', label: 'Retirement' },
  { href: '/investing', label: 'Investing' },
  { href: '/practice-management', label: 'Practice Management' },
  { href: '/industry', label: 'Industry' },
  { href: '/fintech', label: 'FinTech' },
  { href: '/regulation-legislation', label: 'Regulation & Legislation' },
];

const mobileMenu = {
  primary: topics,
  secondary: resources,
};

module.exports = {
  type: 'navbar-c',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
  user: {
    items: [
      // {
      //   href: '/page/account',
      //   label: 'Sign In',
      //   when: 'logged-out',
      //   modifiers: ['user'],
      // },
      // {
      //   href: '/login',
      //   label: 'Sign In',
      //   when: 'logged-out',
      //   modifiers: ['user'],
      // },
      // {
      //   href: '/logout',
      //   label: 'Sign Out',
      //   when: 'logged-in',
      //   modifiers: ['user'],
      // },
    ],
    tools: [
      // {
      //   href: '/page/account',
      //   label: 'Sign In',
      //   when: 'logged-out',
      //   modifiers: ['user'],
      // },
      // {
      //   href: '/login',
      //   label: 'Sign In',
      //   when: 'logged-out',
      //   modifiers: ['user'],
      // },
      // {
      //   href: '/user/profile',
      //   label: 'Modify profile',
      //   when: 'logged-in',
      //   modifiers: ['user'],
      // },
      // {
      //   href: '/logout',
      //   label: 'Sign Out',
      //   when: 'logged-in',
      //   modifiers: ['user'],
      // },
    ],
  },
  mobileMenu,
  topics,
  primary: {
    items: resources,
  },
  secondary: {
    items: topics,
  },
  tertiary: {
    items: [],
  },
  contexts: [
    // {
    //   when: ['/business-insights'],
    //   secondary: {
    //     items: topics,
    //   },
    //   tertiary: { items: [] },
    //   primary: {
    //     items: businessInsights,
    //   },
    // },
    // {
    //   when: ['/diagnostic-technologies'],
    //   secondary: { items: [...topics] },
    //   tertiary: { items: [] },
    //   primary: {
    //     items: diagnosticTechnologies,
    //   },
    // },
    // {
    //   when: ['/diseases'],
    //   secondary: { items: [...topics] },
    //   tertiary: { items: [] },
    //   primary: {
    //     items: diseases,
    //   },
    // },
    // {
    //   when: ['/research-and-development'],
    //   secondary: { items: [...topics] },
    //   tertiary: { items: [] },
    //   primary: {
    //     items: researchDevelopment,
    //   },
    // },
    // {
    //   when: ['/resources'],
    //   secondary: { items: [...topics] },
    //   tertiary: { items: [] },
    //   primary: {
    //     items: resources,
    //   },
    // },
  ],
  toggleMenu: {
    col1: {
      label: 'Investing',
      items: [],
    },
    col2: {
      label: 'Regulation',
      items: [],
    },
    col3: {
      label: 'Technology',
      items: [],
    },
    col4: {
      label: 'Topic 4',
      items: [],
    },
    col5: {
      label: 'Topic 5',
      items: [],
    },
  },
  footer: {
    col1: {
      label: 'Topics',
      colspan: 5,
      items: topics,
    },
    col2: {
      label: 'Resources',
      items: resources,
    },
    // Original Footer Navigation
    // col1: {
    //   label: 'Business Insights',
    //   items: businessInsights,
    // },
    // col2: {
    //   label: 'Research & Development',
    //   colspan: '3',
    //   items: researchDevelopment,
    // },
    // col3: {
    //   label: 'Diagnostic Technologies',
    //   colspan: '3',
    //   items: diagnosticTechnologies,
    // },
    // col4: {
    //   label: 'Diseases',
    //   items: diseases,
    // },
    // col5: {
    //   label: 'Resources',
    //   items: resources,
    // },


    // col3: {
    //   label: 'More',
    //   items: [
    //     { href: '#', label: 'TBD' },
    //     { href: '#', label: 'TBD' },
    //   ],
    // },
    items: [
      privacyPolicy,
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
