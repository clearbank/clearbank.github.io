const SwaggerParser = require('swagger-parser')
const { writefile, getFiles } = require('./helpers')

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
