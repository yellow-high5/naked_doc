const config = {
  gatsby: {
    pathPrefix: '/naked_doc',
    siteUrl: 'https://yellow-high5.github.io/naked_doc/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo:
      'https://github.com/yellow-high5/naked_doc/blob/master/src/components/static/images/header-logo.png?raw=true',
    logoLink: 'https://yellow-high5.github.io/naked_doc/',
    title: '',
    githubUrl: '',
    helpUrl: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      //enabled: true,
      engine: 'lunr', // 'algolia' or 'lunr'
      indexName: 'INDEX_NAME',
      // only use algolia search engine
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  footer: {
    background_color: '#04243c',
    color: '#fff',
    supporter: 'Naked Doc',
  },
  sidebar: {
    forcedNavOrder: ['/architecture', '/management'],
    collapsedNav: [],
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
      'https://raw.githubusercontent.com/yellow-high5/naked_doc/master/src/components/static/images/logo.svg',
  },
  pwa: {
    enabled: true,
    manifest: {
      name: 'Naked Doc | Simple documentation template',
      short_name: 'Naked Doc',
      start_url: '/',
      background_color: '#001934',
      theme_color: '#001934',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icon: 'src/components/static/images/pwa-512.png',
      icons: [
        {
          src: 'pwa-192.png',
          sizes: `192x192`,
          type: `image/png`,
        },
        {
          src: 'pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
