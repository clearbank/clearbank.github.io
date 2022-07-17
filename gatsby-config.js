require('dotenv').config()
const config = require('./config')
const plugins = [
  'gatsby-plugin-sitemap',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-plugin-styled-components`,
    options: {
      displayName: process.env.NODE_ENV === 'development'
    }
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/
      }
    }
  },
  'gatsby-plugin-emotion',
  'gatsby-plugin-typescript',
  'gatsby-plugin-remove-trailing-slashes',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-root-import',
  `gatsby-transformer-json`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'docs',
      path: `${__dirname}/content/`
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'webhooks',
      path: `${__dirname}/webhooks/`
    }
  },
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      gatsbyRemarkPlugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1035,
            sizeByPixelDensity: true
          }
        },
        {
          resolve: 'gatsby-remark-copy-linked-files'
        }
      ],
      extensions: ['.mdx', '.md']
    }
  },
  {
    resolve: `gatsby-plugin-gtag`,
    options: {
      // your google analytics tracking id
      trackingId: config.gatsby.gaTrackingId,
      // Puts tracking script in the head instead of the body
      head: true,
      // enable ip anonymization
      anonymize: false
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'fonts',
      path: `${__dirname}/src/assets/fonts/`
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: `${__dirname}/src/assets/images/`
    }
  },
  'gatsby-plugin-client-side-redirect'
]
// check and add pwa functionality
if (config.pwa && config.pwa.enabled && config.pwa.manifest) {
  plugins.push({
    resolve: `gatsby-plugin-manifest`,
    options: { ...config.pwa.manifest }
  })
  plugins.push({
    resolve: 'gatsby-plugin-offline',
    options: {
      appendScript: require.resolve(`./src/custom-sw-code.js`)
    }
  })
} else {
  plugins.push('gatsby-plugin-remove-serviceworker')
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
      image: config.header.logo
    }, // backwards compatible
    headerTitle: config.header.title,
    githubUrl: config.header.githubUrl,
    helpUrl: config.header.helpUrl,
    tweetText: config.header.tweetText,
    headerLinks: config.header.links,
    siteUrl: config.gatsby.siteUrl
  },
  plugins: plugins
}
