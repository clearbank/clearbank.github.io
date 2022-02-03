const startCase = require('lodash.startcase')

module.exports = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)
    let value = parent.relativePath.replace(parent.ext, '')

    if (value === 'index') {
      value = ''
    }

    createNodeField({
      node,
      name: `slug`,
      value: `/${value}`
    })

    createNodeField({
      node,
      name: 'id',
      value: node.id
    })

    createNodeField({
      node,
      name: 'order',
      value: node.frontmatter.order
    })

    createNodeField({
      node,
      name: 'title',
      value: node.frontmatter.title || startCase(parent.name)
    })
  }
}
