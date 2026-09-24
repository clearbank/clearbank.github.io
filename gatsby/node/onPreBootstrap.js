const SwaggerParser = require('swagger-parser')
const { writefile, getFiles } = require('./helpers')
const { findEndpointIssues } = require('./validateEndpoint')

// NOTE: There is intentionally no webhook manifest step here. The webhook docs
// now live as `.mdx` files in `data/webhooks/` (see gatsby-config.js) and are
// consumed via the `allMdx` GraphQL query. The old `createWebhooksFile()` helper
// dereferenced JSON schemas in `data/webhooks/` into a `data/webhooks.json`
// manifest that nothing imported, so it was removed to avoid crashing on the
// `.mdx` files. If you need per-webhook JSON schemas again, reintroduce it with a
// `.json`-only file filter so it ignores the `.mdx` docs.
module.exports = async ({ reporter }) => {
  await createEndpointFile()

  // Merge all the endpoints into one file
  // Use SwaggerParser to dereference all the $ref locations
  async function createEndpointFile () {
    const files = (await getFiles('./data/endpoints/')).filter(file => file.endsWith('.json'))
    const issues = []

    const results = await Promise.all(
      files.map(async file => {
        try {
          const spec = await SwaggerParser.dereference(require(`../../data/endpoints/${file}`))
          issues.push(...findEndpointIssues(file, spec))
          return spec
        } catch (err) {
          issues.push(`${file}: failed to parse or dereference - ${err.message}`)
          return null
        }
      })
    )

    if (issues.length) {
      // Fails `gatsby build`; during `gatsby develop` it only logs, and broken specs are skipped.
      reporter.panicOnBuild(
        `Found ${issues.length} problem(s) in data/endpoints/*.json:\n  - ${issues.join('\n  - ')}`
      )
    }

    const formatted = results
      .filter(spec => spec && spec.info && spec.info.version)
      .reduce((prev, curr) => {
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
