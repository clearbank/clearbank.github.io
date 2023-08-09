const path = require('path')
const Helpers = require('./helpers')
const redirects = require("./redirects.json")

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
  const { createPage, createRedirect } = actions

  redirects.forEach(redirect => createRedirect({
    fromPath: redirect.fromPath,
    toPath: redirect.toPath,
    statusCode: 200,
  }))

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
  const ukMenu = rootLevelPages.filter(({ node }) => node.fields.slug.startsWith('/uk'))
  const euMenu = rootLevelPages.filter(({ node }) => node.fields.slug.startsWith('/eu'))
  const ukMenuItems = await Helpers.buildMenu(ukMenu, graphql)
  const euMenuItems = await Helpers.buildMenu(euMenu, graphql)

  createPage({
    path: '/uk',
    component: path.resolve('./src/templates/home.tsx'),
    context: {
      repositoryName: REPOSITORY_NAME,
      repositoryOwner: REPOSITORY_OWNER,
      menuItems: ukMenuItems,
    },
  })

  createPage({
    path: '/eu',
    component: path.resolve('./src/templates/home.tsx'),
    context: {
      repositoryName: REPOSITORY_NAME,
      repositoryOwner: REPOSITORY_OWNER,
      menuItems: euMenuItems,
    },
  })

  // Create blog posts pages.
  allPages.edges.forEach(({ node }) => {
    const { slug, id } = node.fields

    createPage({
      path: (slug || '/').replace('/index', ''),
      component: path.resolve('./src/templates/pages.tsx'),
      context: {
        id,
        slug,
        menuItems: slug.startsWith('/uk') ? ukMenuItems : euMenuItems,
        regexFilter: slug,
      }
    })

  })
}
