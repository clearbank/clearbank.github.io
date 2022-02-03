module.exports = async (query, graphql) => {
  return new Promise((resolve, reject) =>
    resolve(
      graphql(`{${query}}`).then(result => {
        if (result.errors) {
          console.error(result.errors)

          reject(result.errors)
        }

        return result
      })
    )
  )
}
