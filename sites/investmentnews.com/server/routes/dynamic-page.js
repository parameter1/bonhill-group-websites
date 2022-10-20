const { withDynamicPage } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/dynamic-page');
const page = require('@bonhill-group/package-global/templates/dynamic-page');
const contactUs = require('@bonhill-group/package-global/templates/dynamic-page/contact-us');

module.exports = (app) => {
  app.get('/page/:alias(contact-us)', withDynamicPage({
    template: contactUs,
    queryFragment,
  }));
  app.get('/page/:alias([\\w\\d-]{1,})', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
