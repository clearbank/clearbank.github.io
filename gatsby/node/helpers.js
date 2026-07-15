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
      nodes {
        fields {
          id
          order
          slug
          title
        }
        parent {
          ... on File {
            relativeDirectory
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

    const hasSubMenuItems = !!subPages.data.subMenuItems.nodes.length
    const subMenuItems = hasSubMenuItems && !isHomePage ? subPages.data.subMenuItems.nodes : null

    const slugMap = new Map()

    subMenuItems.forEach(item => {
      item.leafMenuItems = []
      slugMap.set(item.fields.slug, item)
    })

    // Note this only performs one step of the algorithm to link up the 3rd level
    // If we wanted to add further levels we'd need to effectively perform a full DFS
    // i.e. keep track of the next directory level to link up using a stack.
    subMenuItems.forEach(item => {
      let parentDirectory = "/" + item.parent.relativeDirectory;

      if (slugMap.has(parentDirectory)) {
        let parent = slugMap.get(parentDirectory)
        parent.leafMenuItems.push(item)
        slugMap.delete(item.fields.slug)
      }
    })

    return {
      subMenuItems: Array.from(slugMap.values()),
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
