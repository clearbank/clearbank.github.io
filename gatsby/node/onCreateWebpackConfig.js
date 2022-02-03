const path = require('path')

module.exports = async ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        buble: '@philpl/buble' // to reduce bundle size
      }
    }
  })
}
