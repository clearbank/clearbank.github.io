const path = require('path')
const Helpers = require('./helpers')
const redirects = require('./static-data/redirects.json')
const euHomeContent = require('./static-data/eu-home-content.json')
const ukHomeContent = require('./static-data/uk-home-content.json')

const ALL_PAGES_SCHEMA = `
  query($repositoryName: String!, $repositoryOwner: String!) {
    allMdx(
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
        }
      }
    }
    github {
      repository(name: $repositoryName, owner: $repositoryOwner) {
        pullRequests(first: 100, orderBy: { field: CREATED_AT, direction: DESC }) {
          totalCount
          nodes {
            title
            state
            mergedAt
            url
          }
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

  const result = await graphql(
    ALL_PAGES_SCHEMA,
    { repositoryName: REPOSITORY_NAME, repositoryOwner: REPOSITORY_OWNER }
  )

  if (result.errors) {
    console.log(result.errors)
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const { allMdx } = result.data;
  const rootLevelPages = allMdx.edges
    .filter(edge => Helpers.isRootLevelDocContainer(edge.node.fields.slug))
  const ukMenu = rootLevelPages.filter(edge => edge.node.fields.slug.startsWith('/uk'))
  const euMenu = rootLevelPages.filter(edge => edge.node.fields.slug.startsWith('/eu'))

  const ukMenuItems = await Helpers.buildMenu(ukMenu, graphql)
  const euMenuItems = await Helpers.buildMenu(euMenu, graphql)

  const pullRequests = result.data.github.repository.pullRequests.nodes
    .filter(node => node.state === 'MERGED')

  createPage({
    path: '/uk',
    component: path.resolve('./src/templates/home.tsx'),
    context: {
      menuItems: ukMenuItems,
      articles: ukHomeContent.articles,
      guides: ukHomeContent.guides,
      intros: ukHomeContent.intros,
      pullRequests,
    },
  })

  createPage({
    path: '/eu',
    component: path.resolve('./src/templates/home.tsx'),
    context: {
      menuItems: euMenuItems,
      articles: euHomeContent.articles,
      guides: euHomeContent.guides,
      intros: euHomeContent.intros,
      pullRequests,
    },
  })

  // Create blog posts pages.
  allMdx.edges.forEach(({ node }) => {
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
