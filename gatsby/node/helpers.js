const fs = require('fs')
const fetchData = require('../../src/helpers/fetchData')

function writefile (path, json, successMessage) {
  fs.writeFile(path, JSON.stringify(json), err => {
    if (err) throw err
    console.log(successMessage)
  })
}

function getFiles (path, opts = 'utf8') {
  return new Promise((resolve, reject) => {
    fs.readdir(path, opts, (err, data) => {
      if (err) reject(err)
      else resolve(filterResults(data, '.DS_Store'))
    })
  })
}

function filterResults (data, name) {
  return data.filter(x => x !== name)
}

function hasMultipleSlashes (string) {
  const getSlashes = string.match(new RegExp('/', 'g')) || []
  return getSlashes.length > 1
}

function isRootLevelDocContainer (path) {
  return path.match(new RegExp('^\/docs\/([^\/]+)$', 'g'))
}

function slugIsInSecondLevel (slug) {
  const isInSubfolderTest = new RegExp('^/[^/]+/[^/]+[a-zA-Z0-9]$')

  return isInSubfolderTest.test(slug)
}

async function buildMenu (rootLevelPages, graphql) {
  const getSubPagesQuery = folderpath => `
  subMenuItems: allMdx(filter: {
      fileAbsolutePath: { regex: "/${folderpath}//" }
      frontmatter: {
        order: { ne: null }
      }
    },
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
`

  const fetchSubPages = rootLevelPages.map(async ({ node }) => {
    const folderName = node.fields.slug
    const isHomePage = node.fields.slug === '/'

    const getSubPages = await fetchData(getSubPagesQuery(folderName), graphql)

    const hasSubMenuItems = !!getSubPages.data.subMenuItems.edges.length
    const subMenuItems =
      hasSubMenuItems && !isHomePage
        ? getSubPages.data.subMenuItems.edges
        : null

    return {
      subMenuItems,
      menuItem: { ...node.fields }
    }
  })

  const subMenuItems = await Promise.all(fetchSubPages)

  return new Promise(resolve => {
    if (subMenuItems) {
      return resolve(subMenuItems)
    }
  })
}

module.exports = {
  getFiles,
  writefile,
  buildMenu,
  hasMultipleSlashes,
  isRootLevelDocContainer
}
