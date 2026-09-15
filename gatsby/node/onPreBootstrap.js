const SwaggerParser = require('swagger-parser')
const $RefParser = require('@apidevtools/json-schema-ref-parser')
const { writefile, getFiles } = require('./helpers')
const buildScopes = require('./scopes/build-scopes')

module.exports = async () => {
  await createEndpointFile()
  await createWebhooksFile()
  await createScopesFile()

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

  // Merge all the webhooks into one file
  async function createWebhooksFile () {
    const files = await getFiles('./data/webhooks/')

    const jsonPromises = files.map(file =>
      $RefParser.dereference(`./data/webhooks/${file}`)
    )

    const resolvedJSONRefs = await Promise.all(jsonPromises)

    const formatted = resolvedJSONRefs.reduce((prev, curr) => {
      const total = { ...prev }

      total[curr.title] = {
        ...curr
      }

      return total
    }, {})

    return writefile(
      './data/webhooks.json',
      formatted,
      'Webhooks Manifest File, Saved ⚡️'
    )
  }

  // Merge the External Gateway auth + reverse-proxy config into the scopes
  // manifest consumed by the site. See gatsby/node/scopes/build-scopes.js.
  async function createScopesFile () {
    const authSettings = require('../../data/scopes/auth-settings.json')
    const reverseProxy = require('../../data/scopes/reverse-proxy.json')

    const scopes = buildScopes({ authSettings, reverseProxy })

    return writefile(
      './data/scopes.json',
      scopes,
      'Scopes Manifest File, Saved ⚡️'
    )
  }
}
