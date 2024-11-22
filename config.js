const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://clearbank.github.io',
    gaTrackingId: null
  },
  header: {
    logo: './src/assets/images/logo-cb-developer.inline.svg',
    logoLink: '/',
    title: 'ClearBank Developer Portal',
    githubUrl: 'https://github.com/clearbank/',
    githubDocsRoot: 'https://github.com/clearbank/clearbank.github.io/tree/main/content',
    helpUrl: '',
    tweetText: '',
    links: [{ text: '', link: '' }],
    search: {
      enabled: false
    }
  },
  sidebar: {
    forcedNavOrder: [
      '/getting-started',
      '/accounts',
      '/payments',
      '/bacs-direct-debits',
      '/payments'
    ],
    ignoreIndex: true
  },
  siteMetadata: {
    title: 'ClearBank Developer Portal',
    description: 'ClearBank Developer Portal - our API documentation',
    ogImage: null,
    docsLocation: 'https://github.com/clearbank/docs/tree/master/content/docs',
    favicon: '/assets/images/favicon-32x32.png'
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`
        }
      ]
    }
  }
}

module.exports = config
