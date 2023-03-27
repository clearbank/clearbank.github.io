const path = require('path')
const Helpers = require('./helpers')

module.exports = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/docs/api`,
    redirectInBrowser: true,
    isPermanent: true
  })

  createRedirect({
    fromPath: `/docs`,
    toPath: `/docs/api`,
    redirectInBrowser: true,
    isPermanent: true
  })

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allPages: allMdx(
              filter: {
                frontmatter: { webhook: { ne: true }, order: { gt: 0 } }
              }
              sort: { fields: frontmatter___order }
            ) {
              edges {
                node {
                  fields {
                    id
                    order
                    slug
                    title
                  }
                  body
                }
              }
            }
          }
        `
      ).then(async result => {
        if (result.errors) {
          console.log(result.errors) // eslint-disable-line no-console
          reject(result.errors)
        }

        const { allPages } = result.data
        const rootLevelPages = allPages.edges.filter(
          ({ node }) => Helpers.isRootLevelDocContainer(node.fields.slug)
        )
        const menuItems = await Helpers.buildMenu(rootLevelPages, graphql)

        // Create blog posts pages.
        const pagesRequests = await allPages.edges.map(async ({ node }) => {
          const { slug, id } = node.fields
          const regexFilter = `/^${slug}/`
          const homepage = slug === '/'

          if (homepage) {
            return Promise.resolve({
              path: '/',
              component: path.resolve('./src/pages/homepage.tsx'),
              context: {
                slug: '/introduction',
                menuItems
              }
            })
          } else {
            return Promise.resolve({
              path: slug ? slug : '/',
              component: path.resolve('./src/templates/pages.tsx'),
              context: {
                id,
                slug,
                menuItems,
                regexFilter
              }
            })
          }
        })

        const pages = await Promise.all(pagesRequests)

        pages.forEach(({ path, component, context }) => {
          // skip making pages for sub pages
          if (Helpers.isRootLevelDocContainer(path)) {
            createPage({
              path,
              context,
              component
            })
          }
        })
      })
    )
  })
}
