const fs = require('fs')
const path = require('path')
const config = require('../../config')
const { parseDocsLocation } = require('../../src/helpers/githubSource')

const REPO_ROOT = path.resolve(__dirname, '../../')
const CONTENT_DIR = path.join(REPO_ROOT, 'content')
const ENDPOINTS_DIR = path.join(REPO_ROOT, 'data/endpoints')
const WEBHOOKS_DIR = path.join(REPO_ROOT, 'data/webhooks')
const OUTPUT_FILE = path.join(REPO_ROOT, 'public/llms.txt')

function walk (dir, predicate, acc = []) {
  if (!fs.existsSync(dir)) {
    return acc
  }

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      walk(fullPath, predicate, acc)
    } else if (predicate(entry.name)) {
      acc.push(fullPath)
    }
  }

  return acc
}

function toRepoPath (absPath) {
  return path.relative(REPO_ROOT, absPath).split(path.sep).join('/')
}

// Reads an OpenAPI spec's info.version so agents can map an EndpointBlock's
// `version` string (used on the pages) straight to its source file.
function readEndpointVersion (absPath) {
  try {
    const spec = JSON.parse(fs.readFileSync(absPath, 'utf8'))
    return spec && spec.info && spec.info.version
  } catch (err) {
    return undefined
  }
}

const isMarkdown = name => name.endsWith('.mdx') || name.endsWith('.md')
const isJson = name => name.endsWith('.json')

// Generates /llms.txt (https://llmstxt.org) so AI agents can read the raw,
// complete source files instead of scraping the rendered pages, where schemas
// and webhook payloads are collapsed behind interactive dropdowns.
module.exports = async ({ reporter }) => {
  const warn = reporter ? reporter.warn.bind(reporter) : console.warn

  const location = parseDocsLocation()

  if (!location) {
    warn('[llms.txt] Could not parse header.githubDocsRoot; skipping generation')
    return
  }

  const { branch, rawBaseUrl } = location
  const rawUrl = repoPath => `${rawBaseUrl}/${repoPath}`
  const link = repoPath => `- [${repoPath}](${rawUrl(repoPath)})`

  const contentFiles = walk(CONTENT_DIR, isMarkdown).map(toRepoPath).sort()
  const webhookFiles = walk(WEBHOOKS_DIR, isMarkdown).map(toRepoPath).sort()
  const endpointLinks = walk(ENDPOINTS_DIR, isJson)
    .sort()
    .map(absPath => {
      const repoPath = toRepoPath(absPath)
      const version = readEndpointVersion(absPath)
      const prefix = version ? `\`${version}\` — ` : ''
      return `- ${prefix}[${repoPath}](${rawUrl(repoPath)})`
    })

  const lines = [
    `# ${config.siteMetadata.title}`,
    '',
    `> ${config.siteMetadata.description}. This site renders API documentation from a public GitHub repository and collapses API schemas, request/response examples and webhook payloads behind interactive dropdowns that are often missing from the rendered HTML. The links below point to the raw source files (branch \`${branch}\`), which contain the complete, machine-readable content. Prefer these over scraping the rendered pages.`,
    '',
    '## Documentation pages (Markdown/MDX)',
    ...contentFiles.map(link),
    '',
    '## API endpoint schemas (OpenAPI JSON)',
    'Pages reference each schema by its OpenAPI `info.version`, shown below.',
    ...endpointLinks,
    '',
    '## Webhook payload schemas (MDX)',
    ...webhookFiles.map(link),
    ''
  ]

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true })
  fs.writeFileSync(OUTPUT_FILE, lines.join('\n'), 'utf8')

  console.log(
    `llms.txt generated: ${contentFiles.length} pages, ${endpointLinks.length} endpoint schemas, ${webhookFiles.length} webhook schemas ⚡️`
  )
}
