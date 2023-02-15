const subscribe = require('./subscribe');
const privacyPolicy = require('./privacy-policy');

const topics = [
  { href: '/industry', label: 'Industry' },
  { href: '/investing', label: 'Investing' },
  { href: '/retirement', label: 'Retirement' },
  { href: '/fintech', label: 'FinTech' },
  { href: '/regulation-legislation', label: 'Regulation & Legislation' },
  { href: '/practice-management', label: 'Practice Management' },
];

const resources = [
  { href: 'https://data.investmentnews.com/ria/', label: 'RIA Data Center', target: '_blank' },
  { href: '/opinion', label: 'Opinion' },
  { href: 'https://womentowatchaward.com/', label: 'Women to Watch', target: '_blank' },
  { href: '#', label: 'Magazine' },
  { href: '/events', label: 'Events' },
  { href: '#', label: 'Awards' },
  { href: '#', label: 'Multimedia' },
];

const utilities = [
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=ien_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: 'https://tcc.dragonforms.com/loading.do?omedasite=TCC1_IEnew', label: 'Subscribe to Magazine', target: '_blank' },
];

const industry = [
  { href: '/industry/rias', label: 'RIAs' },
  { href: '/industry/broker-dealers', label: 'Broker-Dealers' },
  { href: '/industry/independent-broker-dealers', label: 'Independent Broker-Dealers' },
  { href: '/industry/wirehouses', label: 'Wirehouses' },
  { href: '/industry/custodians', label: 'Custodians' },
  { href: '/industry/money-managers', label: 'Money Managers' },
  { href: '/industry/mergers-acquisitions', label: 'Mergers & Acquisitions' },
  { href: '/industry/advisor-moves', label: 'Advisor Moves' },
];

const investing = [
  { href: '/investing/equities', label: 'Equities' },
  { href: '/investing/fixed-income', label: 'Fixed Income' },
  { href: '/investing/mutual-funds', label: 'Mutual Funds' },
  { href: '/investing/etfs', label: 'ETFs' },
  { href: '/investing/esg', label: 'ESG' },
  { href: '/investing/REITs', label: 'reits' },
  { href: '/investing/digital-assets', label: 'Digital Assets' },
  { href: '/investing/alternative-assets', label: 'Alternative Assets' },
];

const retirement = [
  { href: '/retirement/retirement-planning', label: 'Retirement Planning' },
  { href: '/retirement/defined-contribution-plans', label: 'Defined-Contribution' },
  { href: '/retirement/defined-benefit-plans', label: 'Defined-Benefit' },
  { href: '/retirement/insurance', label: 'Insurance' },
  { href: '/retirement/trusts-estates', label: 'Trusts & Estates' },
  { href: '/retirement/philanthropy', label: 'Philanthropy' },
  { href: '/retirement/social-security-medicare', label: 'Social Security & Medicare' },
  { href: '/retirement/tax-planning', label: 'Tax Planning' },
];

const fintech = [
  { href: '/fintech/robo-advisors', label: 'Robo-advisors' },
  { href: '/fintech/cybersecurity', label: 'Cybersecurity' },
  { href: '/fintech/enterprise-tech', label: 'Enterprise Tech' },
  { href: '/fintech/startups-funding', label: 'Startups & Funding' },
];

const regulationLegislation = [
  { href: '/regulation-and-legislation/regulation', label: 'Regulation' },
  { href: '/regulation-and-legislation/legislation', label: 'Legislation' },
  { href: '/regulation-and-legislation/self-regulatory-organizations', label: 'Self-regulatory Organizations' },
  { href: '/regulation-and-legislation/trade-groups-and-associations', label: 'Trade Groups and Associations' },
  { href: '/regulation-and-legislation/policy', label: 'Policy' },
  { href: '/regulation-and-legislation/taxes', label: 'Taxes' },
  { href: '/regulation-and-legislation/law', label: 'Law' },
];

const practiceManagement = [
  { href: '/practice-management/diversity-equity-inclusion', label: 'Diversity, Equity & Inclusion' },
  { href: '/practice-management/women-advisor-community', label: 'Women Advisor Community' },
  { href: '/practice-management/compensation-staffing-recruiting', label: 'Compensation, Staffing & Recruiting' },
  { href: '/practice-management/business-development', label: 'Business Development' },
  { href: '/practice-management/designations', label: 'Designations' },
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
      {
        href: '/user/login',
        label: 'Sign In',
        when: 'logged-out',
        modifiers: ['user'],
      },
      {
        href: '/user/profile',
        class: 'btn btn-lg',
        label: 'profile',
        icon: 'person',
        when: 'logged-in',
        modifiers: ['user'],
      },
      {
        href: '/user/logout',
        label: 'Sign Out',
        when: 'logged-in',
        modifiers: ['user'],
      },
    ],
    tools: [
      {
        href: '/user/login',
        label: 'Sign In',
        when: 'logged-out',
        modifiers: ['user'],
      },
      {
        href: '/user/profile',
        label: 'Modify profile',
        when: 'logged-in',
        modifiers: ['user'],
      },
      {
        href: '/user/logout',
        label: 'Sign Out',
        when: 'logged-in',
        modifiers: ['user'],
      },
    ],
  },
  mobileMenu,
  topics,
  primary: {
    items: topics,
  },
  secondary: {
    items: resources,
  },
  tertiary: {
    items: [],
  },
  contexts: [
    {
      when: ['/retirement'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: retirement,
      },
    },
    {
      when: ['/investing'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: investing,
      },
    },
    {
      when: ['/practice-management'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: practiceManagement,
      },
    },
    {
      when: ['/industry'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: industry,
      },
    },
    {
      when: ['/fintech'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: fintech,
      },
    },
    {
      when: ['/regulation-legislation'],
      secondary: { items: resources },
      tertiary: { items: [] },
      primary: {
        items: regulationLegislation,
      },
    },
  ],
  // toggleMenu: {
  //   col1: {
  //     label: 'Retirement',
  //     items: [],
  //   },
  //   col2: {
  //     label: 'Regulation',
  //     items: [],
  //   },
  //   col3: {
  //     label: 'Technology',
  //     items: [],
  //   },
  //   col4: {
  //     label: 'Topic 4',
  //     items: [],
  //   },
  //   col5: {
  //     label: 'Topic 5',
  //     items: [],
  //   },
  // },
  toggleMenu: {
    about: {
      // label: 'About',
      // items: utilities,
    },
    leftColumn: {
      label: 'Topics',
      items: [
        ...topics,
      ],
    },
    midColumn: {
      items: [
        ...resources,
      ],
    },
    rightColumn: {
      label: 'User Tools',
      items: utilities,
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
