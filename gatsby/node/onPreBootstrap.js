const SwaggerParser = require('swagger-parser')
const { writefile, getFiles } = require('./helpers')

// NOTE: There is intentionally no webhook manifest step here. The webhook docs
// now live as `.mdx` files in `data/webhooks/` (see gatsby-config.js) and are
// consumed via the `allMdx` GraphQL query. The old `createWebhooksFile()` helper
// dereferenced JSON schemas in `data/webhooks/` into a `data/webhooks.json`
// manifest that nothing imported, so it was removed to avoid crashing on the
// `.mdx` files. If you need per-webhook JSON schemas again, reintroduce it with a
// `.json`-only file filter so it ignores the `.mdx` docs.
module.exports = async () => {
  await createEndpointFile()

  // Merge all the endpoints into one file
  // Use SwaggerParser to dereference all the $ref locations
  async function createEndpointFile () {
    const files = await getFiles('./data/endpoints/')

    const jsonPromises = files.map(file =>
      SwaggerParser.dereference(require(`../../data/endpoints/${file}`))
    )

    const resolvedJSONRefs = await Promise.all(jsonPromises)

    const formatted = resolvedJSONRefs.reduce((prev, curr) => {
      const total = { ...prev }

      total[curr.info.version] = {
        ...curr
      }

      return total
    }, {})

    return writefile(
      './data/endpoints.json',
      formatted,
      'Endpoints Manifest File, Saved ⚡️'
    )
  }
}
