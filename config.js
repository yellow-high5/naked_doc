const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'http://localhost:8000/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo:
      'https://github.com/yellow-high5/naked_doc/blob/master/src/components/static/images/header-logo.png?raw=true',
    logoLink: 'http://localhost:8000/',
    title: '',
    githubUrl: 'https://github.com/yellow-high5/naked_doc',
    helpUrl: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'INDEX_NAME',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction',
      '/intro-to-graphql',
      '/setup',
      '/apollo-client',
      '/queries',
      '/mutations-variables',
      '/optimistic-update-mutations',
      '/subscriptions',
      '/realtime-feed',
      '/what-next',
    ],
    collapsedNav: [
      '/intro-to-graphql',
      '/queries',
      '/mutations-variables',
      '/optimistic-update-mutations',
      '/subscriptions',
      '/realtime-feed',
    ],
    frontline: false,
    ignoreIndex: true,
    title: '',
  },
  siteMetadata: {
    title: 'Naked Doc | Simple startup document',
    description: 'Documentation built with Powering GatsbyJS. ',
    ogImage: null,
    docsLocation: 'https://github.com/yellow-high5/naked_doc/tree/master/content',
    favicon:
      'https://raw.githubusercontent.com/yellow-high5/naked_doc/2f2b975840282dc9b997047e258491875c82c469/src/components/static/images/logo.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Naked Doc | Simple documentation template',
      short_name: 'Naked Doc',
      start_url: '/',
      background_color: '#001934',
      theme_color: '#001934',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/components/images/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
