require('dotenv').config();
const queries = require('./src/utils/algolia.ts');
const config = require('./config.ts');
const plugins = [
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/templates/docs.tsx`),
    },
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'docs',
      path: `${__dirname}/content/`,
    },
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        'gatsby-remark-mermaid',
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1035,
            sizeByPixelDensity: true,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
        },
      ],
      extensions: ['.mdx', '.md'],
    },
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // your google analytics tracking id
      trackingId: config.gatsby.gaTrackingId,
      // Puts tracking script in the head instead of the body
      head: true,
      // enable ip anonymization
      anonymize: false,
    },
  },
];
// Algoliaの設定
if (
  config.header.search &&
  config.header.search.engine === 'algolia' &&
  config.header.search.algoliaAppId &&
  config.header.search.algoliaAdminKey
) {
  plugins.push({
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: config.header.search.algoliaAppId, // algolia application id
      apiKey: config.header.search.algoliaAdminKey, // algolia admin key to index
      queries,
      chunkSize: 10000, // default: 1000
    },
  });
}
// Lunrの設定
if (config.header.search && config.header.search.engine === 'lunr') {
  plugins.push({
    resolve: `gatsby-plugin-lunr`,
    options: {
      languages: [
        {
          name: 'ja',
        },
      ],
      fields: [
        { name: 'slug', store: true },
        { name: 'title', store: true },
        { name: 'description', store: true },
        { name: 'node', store: true },
        { name: 'body' },
      ],
      resolvers: {
        Mdx: {
          slug: node => node.fields.slug,
          title: node => node.frontmatter.title,
          description: node => node.frontmatter.metaDescription,
          body: node => node.rawBody,
          node: node => node,
        },
      },
    },
  });
}
// PWAの設定
if (config.pwa && config.pwa.enabled && config.pwa.manifest) {
  plugins.push({
    resolve: `gatsby-plugin-manifest`,
    options: { ...config.pwa.manifest },
  });
  plugins.push({
    resolve: 'gatsby-plugin-offline',
    options: {
      appendScript: require.resolve(`./src/custom-sw-code.ts`),
    },
  });
} else {
  plugins.push('gatsby-plugin-remove-serviceworker');
}

// トレイリングスラッシュの設定
if (config.gatsby && !config.gatsby.trailingSlash) {
  plugins.push('gatsby-plugin-remove-trailing-slashes');
}

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: config.siteMetadata.title,
    description: config.siteMetadata.description,
    docsLocation: config.siteMetadata.docsLocation,
    ogImage: config.siteMetadata.ogImage,
    favicon: config.siteMetadata.favicon,
    logo: {
      link: config.header.logoLink ? config.header.logoLink : '/',
      image: config.header.logo,
    }, // backwards compatible
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl,
  },
  plugins: plugins,
};
