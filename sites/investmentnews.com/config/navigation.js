const subscribe = require('./subscribe');
const privacyPolicy = require('./privacy-policy');

const topics = [
  { href: '/retirement', label: 'Retirement' },
  { href: '/investing', label: 'Investing' },
  { href: '/practice-management', label: 'Practice Management' },
  { href: '/industry', label: 'Industry' },
  { href: '/fintech', label: 'FinTech' },
  { href: '/regulation-legislation', label: 'Regulation & Legislation' },
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

const retirement = [
  { href: '/retirement/401k', label: '401(k)' },
  { href: '/retirement/403b-plans', label: '403(b)' },
  { href: '/retirement/defined-benefit-plans', label: 'Defined-Benefit' },
  { href: '/retirement/defined-contribution-plans', label: 'Defined-Contribution' },
  { href: '/retirement/health-savings-accounts', label: 'HSAs' },
  { href: '/retirement/individual-retirement-accounts', label: 'IRAs' },
  { href: '/retirement/medicare', label: 'Medicare' },
  { href: '/retirement/pooled-employer-plans', label: 'Pooled Employer' },
  { href: '/retirement/retirement-plan-advisers', label: 'Retirement Plan Advisers' },
  { href: '/retirement/social-security', label: 'Social Security' },
];

const investing = [
  { href: '/investing/alternative-investments', label: 'Alternative' },
  { href: '/investing/auction-rate-securities', label: 'Auction Rate Securities' },
  { href: '/investing/commodities', label: 'Commodities' },
  { href: '/investing/currencies', label: 'Currencies' },
  { href: '/investing/digital-assets', label: 'Digital Assets' },
  { href: '/investing/esg', label: 'ESG' },
  { href: '/investing/economy', label: 'Economy' },
  { href: '/investing/emerging-markets', label: 'Emerging Markets' },
  { href: '/investing/equities', label: 'Equities' },
  { href: '/investing/faith-based-investing', label: 'Faith-based' },
  { href: '/investing/fixed-income', label: 'Fixed Income' },
  { href: '/investing/hedge-funds', label: 'Hedge Funds' },
  { href: '/investing/index-funds', label: 'Index Funds' },
  { href: '/investing/international-investing', label: 'International Investing' },
  { href: '/investing/investment-strategies', label: 'Investment Strategies' },
  { href: '/investing/managed-accounts', label: 'Managed Accounts' },
  { href: '/investing/money-market-funds', label: 'Money Market Funds' },
  { href: '/investing/mutual-funds-etfs', label: 'Mutual Funds & ETFs' },
  { href: '/investing/options-futures', label: 'Options & Futures' },
  { href: '/investing/private-equity-funds', label: 'Private Equity Funds' },
  { href: '/investing/real-estate-investment-trusts', label: 'Real Estate Investment Trusts' },
  { href: '/investing/socially-conscious-investing', label: 'Socially Conscious Investing' },
  { href: '/investing/volatility', label: 'Volatility' },
];
const practiceManagement = [
  { href: '/practice-management/behavioral-finance', label: 'Behavioral Finance' },
  { href: '/practice-management/business-development', label: 'Business Development' },
  { href: '/practice-management/careers', label: 'Careers' },
  { href: '/practice-management/client-prospecting', label: 'Client Prospecting' },
  { href: '/practice-management/client-servicing', label: 'Client Servicing' },
  { href: '/practice-management/compensation-staffing', label: 'Compensation & Staffing' },
  { href: '/practice-management/designations', label: 'Designations' },
  { href: '/practice-management/marketing', label: 'Marketing' },
  { href: '/practice-management/next-gen', label: 'Next Gen' },
  { href: '/practice-management/recruiting', label: 'Recruiting' },
  { href: '/practice-management/succession-planning', label: 'Succession Planning' },
  { href: '/practice-management/wfh-adviser', label: 'WFH Adviser' },
];
const industry = [
  { href: '/industry/adviser-moves', label: 'Adviser Moves' },
  { href: '/industry/broker-dealers', label: 'Broker-Dealers' },
  { href: '/industry/clearing-firms', label: 'Clearing Firms' },
  { href: '/industry/custodians', label: 'Custodians' },
  { href: '/industry/earnings', label: 'Earnings' },
  { href: '/industry/independent-broker-dealers', label: 'Independent Broker-Dealers' },
  { href: '/industry/mergers-acquisitions', label: 'Mergers & Acquisitions' },
  { href: '/industry/regional-brokerages', label: 'Regional Brokerages' },
  { href: '/industry/registered-investment-advisers', label: 'Registered Investment Advisers' },
  { href: '/industry/wirehouses', label: 'Wirehouses' },
];
const fintech = [
  { href: '/fintech/cybersecurity', label: 'Cybersecurity' },
  { href: '/fintech/hardware', label: 'Hardware' },
  { href: '/fintech/online', label: 'Online' },
  { href: '/fintech/social-media', label: 'Social Media' },
  { href: '/fintech/software', label: 'Software' },
];
const regulationLegislation = [
  { href: '/regulation-and-legislation/regulation', label: 'Regulation' },
  { href: '/regulation-and-legislation/legislation', label: 'Legislation' },
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
