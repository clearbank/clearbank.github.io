const path = require('path')
const Helpers = require('./helpers')

const ALL_PAGES_SCHEMA = `
  {
    allPages: allMdx(
      filter: {frontmatter: {webhook: {ne: true}, order: {gt: 0}}}
      sort: {frontmatter: {order: ASC}}
    ) {
      nodes {
        fields {
          id
          order
          slug
          title
        }
        internal {
          contentFilePath
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
  const rootLevelPages = allPages.nodes.filter(
    (node) => Helpers.isRootLevelDocContainer(node.fields.slug)
  )
  const menuItems = await Helpers.buildMenu(rootLevelPages, graphql)

  // Create blog posts pages.
  allPages.nodes.forEach((node) => {
    const { slug, id } = node.fields
    const regexFilter = `/^${slug}/`
    const component = `${path.resolve('./src/templates/pages.tsx')}?__contentFilePath=${node.internal.contentFilePath}`

    createPage({
      path: slug || '/',
      component,
      context: {
        id,
        slug,
        menuItems,
        regexFilter
      }
    })

  })
}
