const config = require('../../config')

// githubDocsRoot shape: https://github.com/<owner>/<repo>/tree/<branch>/content
// Parsed once here so the AI-agent note, the per-page <link rel="alternate">
// and the llms.txt generator all derive the same repo/branch/raw host.
function parseDocsLocation (docsRoot = config.header.githubDocsRoot) {
  const match = docsRoot.match(
    /^https:\/\/github\.com\/([^/]+)\/([^/]+)\/tree\/([^/]+)/
  )

  if (!match) {
    return null
  }

  const [, owner, repo, branch] = match
  const repoUrl = `https://github.com/${owner}/${repo}`

  return {
    owner,
    repo,
    branch,
    repoUrl,
    treeBaseUrl: `${repoUrl}/tree/${branch}`,
    rawBaseUrl: `https://raw.githubusercontent.com/${owner}/${repo}/${branch}`
  }
}

// Raw URL of a documentation page's Markdown source for a given slug.
function rawContentUrl (slug) {
  const location = parseDocsLocation()

  if (!location || !slug) {
    return undefined
  }

  return `${location.rawBaseUrl}/content${slug}.mdx`
}

module.exports = { parseDocsLocation, rawContentUrl }
