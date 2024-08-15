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
  return path.match(new RegExp('^\/[a-zA-Z]+\/docs\/([^\/]+)$', 'g'))
}

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

async function buildMenu (rootLevelPages, graphql) {
  const fetchSubPages = rootLevelPages.map(async ({ node }) => {
    const folderName = node.fields.slug
    const isHomePage = node.fields.slug === '/'

    const subPages = await fetchData(getSubPagesQuery(folderName), graphql)

    const hasSubMenuItems = !!subPages.data.subMenuItems.edges.length
    const subMenuItems =
      hasSubMenuItems && !isHomePage
        ? subPages.data.subMenuItems.edges
        : null

    return {
      subMenuItems,
      menuItem: { ...node.fields }
    }
  })

  return Promise.all(fetchSubPages)
}

module.exports = {
  getFiles,
  writefile,
  buildMenu,
  hasMultipleSlashes,
  isRootLevelDocContainer
}
