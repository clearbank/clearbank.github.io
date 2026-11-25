const fs = require('fs')
const path = require('path')
const esbuild = require('esbuild')
const { JSDOM } = require('jsdom')

const publicDir = path.resolve(__dirname, '..', 'public')
const siteUrl = (process.env.SITE_URL || 'https://clearbank.github.io').replace(/\/$/, '')
const redirects = require('../gatsby/node/static-data/redirects.json')

const { outputFiles } = esbuild.buildSync({
  entryPoints: [path.resolve(__dirname, '..', 'src', 'helpers', 'htmlToMarkdown.ts')],
  bundle: true,
  write: false,
  platform: 'node',
  format: 'cjs'
})
const mod = { exports: {} }
new Function('module', 'exports', 'require', outputFiles[0].text)(mod, mod.exports, require)
const { htmlToMarkdown } = mod.exports

function findPages(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return findPages(full)
    return entry.name === 'index.html' ? [full] : []
  })
}

const index = []

for (const file of findPages(publicDir)) {
  const rel = path.relative(publicDir, file).split(path.sep)
  if (!['uk', 'eu'].includes(rel[0]) || rel[1] !== 'docs') continue

  const dom = new JSDOM(fs.readFileSync(file, 'utf8'))
  const article = dom.window.document.querySelector('[data-markdown-article]')
  if (!article) continue

  const pageUrl = `${siteUrl}/${rel.slice(0, -1).join('/')}`
  const markdown = htmlToMarkdown(article, pageUrl)
  const title = (dom.window.document.querySelector('h1')?.textContent || rel.slice(-2, -1)[0]).trim()

  fs.writeFileSync(path.join(path.dirname(file), 'index.md'), markdown + '\n')
  index.push({ title, url: `${pageUrl}/index.md` })
}

index.sort((a, b) => a.url.localeCompare(b.url))
const indexFile = path.join(publicDir, 'llms.txt')
const startMarker = '<!-- BEGIN published Markdown pages -->'
const endMarker = '<!-- END published Markdown pages -->'

if (!fs.existsSync(indexFile)) {
  throw new Error('Cannot add published Markdown pages: public/llms.txt is missing. Run the Gatsby build first.')
}

const existing = fs.readFileSync(indexFile, 'utf8')
const start = existing.indexOf(startMarker)
const end = existing.indexOf(endMarker)

if (
  (start === -1) !== (end === -1) ||
  (start !== -1 && (
    end < start ||
    existing.indexOf(startMarker, start + startMarker.length) !== -1 ||
    existing.indexOf(endMarker, end + endMarker.length) !== -1
  ))
) {
  throw new Error('Cannot update public/llms.txt: published Markdown section markers are invalid.')
}

const sourceIndex = start === -1
  ? existing
  : existing.slice(0, start) + existing.slice(end + endMarker.length)

const publishedSection = [
  startMarker,
  '## Published Markdown pages',
  ...index.map(p => `- [${p.title}](${p.url})`),
  endMarker
].join('\n')

fs.writeFileSync(indexFile, `${sourceIndex.trimEnd()}\n\n${publishedSection}\n`, 'utf8')
console.log(`Generated ${index.length} markdown files`)

const isDocsPath = value => /^\/(?:uk\/|eu\/)?docs\//.test(value)

for (const { fromPath, toPath } of redirects) {
  if (!isDocsPath(fromPath) || !isDocsPath(toPath)) continue

  const destination = path.join(
    publicDir,
    toPath.replace(/^\/+/, ''),
    'index.md'
  )

  if (!fs.existsSync(destination)) {
    console.warn(`Skipping Markdown redirect; destination not generated: ${toPath}`)
    continue
  }

  const alias = path.join(
    publicDir,
    fromPath.replace(/^\/+/, ''),
    'index.md'
  )

  fs.mkdirSync(path.dirname(alias), { recursive: true })
  fs.copyFileSync(destination, alias)
}