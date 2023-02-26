const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get } = require('@parameter1/base-cms-object-path');
const loadInquiry = require('@parameter1/base-cms-marko-web-inquiry');
const htmlSitemapPagination = require('@parameter1/base-cms-marko-web-html-sitemap/middleware/paginated');
const companySearchHandler = require('@parameter1/base-cms-marko-web-theme-monorail/routes/company-search');
const identityX = require('@parameter1/base-cms-marko-web-identity-x');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const idxRouteTemplates = require('./templates/user');
const sharedRoutes = require('./routes');
const paginated = require('./middleware/paginated');
const oembedHandler = require('./oembed-handler');
const redirectHandler = require('./redirect-handler');

const routes = (siteRoutes, siteConfig) => (app) => {
  // Handle submissions on /__inquiry
  loadInquiry(app);
  // Shared/global routes (all sites)
  sharedRoutes(app, siteConfig);
  // Handle request on /__company-search?searchQuery=CompanyName
  companySearchHandler(app);
  // Load site routes
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  const googleNewsInput = {
    days: 7,
    includeContentTypes: ['Article'],
    excludeLabels: ['Sponsored'],
  };
  return startServer({
    ...options,
    routes: routes(options.routes, options.siteConfig),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    sitemapsHeaders: {
      'x-google-news-input': JSON.stringify(googleNewsInput),
    },
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

      // Use paginated middleware
      app.use(paginated());

      // Use paginated middleware
      app.use(htmlSitemapPagination());

      // Setup GAM.
      const gamConfig = get(options, 'siteConfig.gam');
      set(app.locals, 'GAM', gamConfig);

      // Setup NativeX.
      const nativeXConfig = get(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', nativeXConfig);

      const idxConfig = get(options, 'siteConfig.identityX');
      identityX(app, idxConfig, { templates: idxRouteTemplates });

      // i18n
      const i18n = (v) => v;
      set(app.locals, 'i18n', options.i18n || i18n);
    },
    onAsyncBlockError: (e) => newrelic.noticeError(e),
    redirectHandler: redirectHandler(options.redirectHandler),
    embeddedMediaHandlers: {
      oembed: oembedHandler,
    },
  });
};
