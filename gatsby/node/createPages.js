const path = require('path')
const Helpers = require('./helpers')

const ALL_PAGES_SCHEMA = `
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

module.exports = async ({ graphql, actions, reporter }) => {
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

  const result = await graphql(ALL_PAGES_SCHEMA)

  if (result.errors) {
    console.log(result.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { allPages } = result.data
  const rootLevelPages = allPages.edges.filter(
    ({ node }) => Helpers.isRootLevelDocContainer(node.fields.slug)
  )
  const menuItems = await Helpers.buildMenu(rootLevelPages, graphql)

  // Create blog posts pages.
  allPages.edges.forEach(({ node }) => {
    const { slug, id } = node.fields
    const regexFilter = `/^${slug}/`

    createPage({
      path: slug || '/',
      component: path.resolve('./src/templates/pages.tsx'),
      context: {
        id,
        slug,
        menuItems,
        regexFilter
      }
    })

  })
}
