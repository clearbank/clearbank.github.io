const SwaggerParser = require('swagger-parser')
const $RefParser = require('@apidevtools/json-schema-ref-parser')
const { writefile, getFiles } = require('./helpers')

module.exports = async () => {
  createEndpointFile()
  createWebhooksFile()

  // Merge all the endpoints into one file
  // Use SwaggerParser to dereference all the $ref locations
  async function createEndpointFile () {
    const files = await getFiles('./data/endpoints/')

    const documents = await Promise.all(
      files.map(async file => {
        const document = await SwaggerParser.dereference(require(`../../data/endpoints/${file}`))

        return {
          document,
          externalApi: document.info['x-external-api'] || 'FIAPI',
          apiVersion: document.info.version
        }
      })
    )

    const formatted = documents.reduce((acc, item) => {
      const { externalApi, apiVersion, document } = item

      if (!acc[externalApi]) acc[externalApi] = {}

      acc[externalApi][apiVersion] = {
        ...document
      }

      return acc
    }, {})

    writefile(
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

    writefile(
      './data/webhooks.json',
      formatted,
      'Webhooks Manifest File, Saved ⚡️'
    )
  }
}
