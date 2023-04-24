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

const REPOSITORY_OWNER = 'clearbank'
const REPOSITORY_NAME = 'clearbank.github.io'

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

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

  createPage({
    path: '/',
    component: path.resolve('./src/templates/home.tsx'),
    context: {
      repositoryName: REPOSITORY_NAME,
      repositoryOwner: REPOSITORY_OWNER,
      menuItems,
    },
  })

  // Create blog posts pages.
  allPages.edges.forEach(({ node }) => {
    const { slug, id } = node.fields
    const regexFilter = `/^${slug}/`

    createPage({
      path: (slug || '/').replace('/index', ''),
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
