const gam = require('./gam');
const identityX = require('./identity-x');
const nativeX = require('./native-x');
const navigation = require('./navigation');
const newsletter = require('./newsletter');
const recommended = require('./recommended');
const search = require('./search');

module.exports = {
  // Module configs
  gam,
  identityX,
  nativeX,
  navigation,
  newsletter,
  recommended,
  search,
  // Site configs
  company: 'Bonhill Group',
  p1events: {
    tenant: 'bonhill',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'investmentnews.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://p1-cms-assets.imgix.net/files/base/bonhill/all/image/static/in/in-logo.svg?h=25&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/bonhill/all/image/static/in/in-logo.svg?h=25&auto=format,compress&dpr=2 2x',
      ],
      width: '257',
      height: '25',
    },
    footer: {
      src: 'https://p1-cms-assets.imgix.net/files/base/bonhill/all/image/static/in/in-logo.svg?h=60&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/bonhill/all/image/static/in/in-logo.svg?h=60&auto=format,compress&dpr=2 2x',
      ],
      width: '204',
      height: '45',
    },
    corporate: {
      alt: 'Bonhill Logo',
      href: 'https://www.bonhillplc.com',
      src: 'https://p1-cms-assets.imgix.net/files/base/bonhill/all/image/static/bonhill-logo.svg?w=200&auto=format,compress',
      srcset: [
        'https://p1-cms-assets.imgix.net/files/base/bonhill/all/image/static/bonhill-logo.svg?w=200&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/newsfromIN/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/investmentnews', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/investmentnews/', target: '_blank' },
  ],
  podcastLinks: [],
  gtm: {
    containerId: 'GTM-W5HC2T3',
  },
  inquiry: {
    enabled: true,
    directSend: false,
    sendTo: 'support@parameter1.com',
    sendFrom: 'investmentnews.com <noreply@parameter1.com>',
    logo: 'https://p1-cms-assets.imgix.net/files/base/bonhill/all/image/static/in/in-logo.svg?h=45&auto=format,compress&bg=000000&pad=5',
    bgColor: '#000000',
  },
  setSearchSortFieldToScore: true,
};
