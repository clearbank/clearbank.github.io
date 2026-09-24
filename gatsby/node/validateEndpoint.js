const HTTP_METHODS = ['get', 'put', 'post', 'delete', 'options', 'head', 'patch', 'trace']

const hasJsonSchema = content =>
  !!(content && content['application/json'] && content['application/json'].schema)

const describeContent = content =>
  content ? `found [${Object.keys(content).join(', ') || 'none'}]` : 'no "content" block'

// Checks a dereferenced OpenAPI spec for shapes the endpoint-block components can't render.
function findEndpointIssues (file, spec) {
  const issues = []

  if (!spec || !spec.info || !spec.info.version) {
    issues.push(`${file}: missing "info.version" (used as the key MDX pages reference the spec by)`)
  }

  for (const [path, operations] of Object.entries((spec && spec.paths) || {})) {
    for (const [method, operation] of Object.entries(operations || {})) {
      if (!HTTP_METHODS.includes(method)) continue

      const location = `${file}: paths["${path}"].${method}`
      const { requestBody, responses } = operation || {}

      if (requestBody && !hasJsonSchema(requestBody.content)) {
        issues.push(
          `${location}.requestBody.content must include "application/json" with a "schema" (${describeContent(requestBody.content)})`
        )
      }

      for (const [code, response] of Object.entries(responses || {})) {
        if (response && response.content && !hasJsonSchema(response.content)) {
          issues.push(
            `${location}.responses["${code}"].content must include "application/json" with a "schema" (${describeContent(response.content)})`
          )
        }
      }
    }
  }

  return issues
}

module.exports = { findEndpointIssues }
