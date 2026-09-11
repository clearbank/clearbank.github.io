// Pure logic for turning queried MDX node records into search-index items.
// No GraphQL calls happen here - the Gatsby build step (added next) queries
// nodes and hands them to buildSearchIndex as plain objects, keeping this
// file testable without spinning up Gatsby at all.

const startCase = require('lodash.startcase')
const { extractSections } = require('./extract-sections')

/**
 * Derives the top-level region ('uk' or 'eu') from a page slug, e.g.
 * '/uk/docs/gbp-payments/chaps' -> 'uk'. Every page in this site lives
 * under /uk/... or /eu/... (see gatsby/node/createPages.js), so this is
 * the one source of truth search results are scoped against.
 */
function deriveRegion (slug) {
  const [firstSegment] = slug.split('/').filter(Boolean)
  return firstSegment
}

/**
 * Builds a human-readable breadcrumb (e.g. ['UK', 'GBP Payments']) from a
 * page slug, using the URL path segments rather than the ukMenuItems/
 * euMenuItems menu tree built in createPages.js. This keeps the search
 * index independent of that menu-building logic, at the cost of imperfect
 * capitalisation for acronym-heavy segments (e.g. 'gbp-payments' becomes
 * 'Gbp Payments' rather than 'GBP Payments').
 */
function buildBreadcrumb (slug) {
  const segments = slug.split('/').filter(Boolean)
  const region = segments[0]

  // Drop the region (shown separately) and the page's own final segment
  // (already shown as the result title), and ignore any literal 'docs'
  // segment used purely for URL grouping rather than real hierarchy.
  const middleSegments = segments
    .slice(1, -1)
    .filter(segment => segment !== 'docs')

  return [region.toUpperCase(), ...middleSegments.map(segment => startCase(segment))]
}

/**
 * Groups flat MDX node records by their rendered page slug. This mirrors
 * src/templates/pages.tsx, where doc.tsx's `pageContent` query aggregates
 * every Mdx node sharing a slug into a single rendered page - so the search
 * index must group the same way to avoid emitting duplicate, fragmented
 * results for one URL.
 */
function groupNodesBySlug (nodes) {
  const groups = new Map()

  nodes.forEach(node => {
    const existing = groups.get(node.slug) || []
    existing.push(node)
    groups.set(node.slug, existing)
  })

  return Array.from(groups.values()).map(group =>
    [...group].sort((a, b) => a.order - b.order)
  )
}

/**
 * Builds the full search index from queried MDX node records. Each `node`
 * is expected to look like:
 *   { slug, title, order, absolutePath }
 * i.e. the `fields` already set on an Mdx node (see onCreateNode.js) plus
 * its parent File node's absolutePath.
 *
 * `readFile` and `extractSectionsFn` are injectable purely so this stays
 * unit-testable without touching the real filesystem or re-testing
 * extract-sections.js's own behaviour here.
 */
function buildSearchIndex (nodes, { readFile = require('fs').readFileSync, extractSectionsFn = extractSections } = {}) {
  const groups = groupNodesBySlug(nodes)
  const items = []

  groups.forEach(group => {
    const slug = group[0].slug
    const region = deriveRegion(slug)
    const breadcrumb = buildBreadcrumb(slug)
    // The lowest-order node's title represents the page as a whole. In the
    // common case there is exactly one node per slug, so this is simply
    // that node's title; when several nodes share a slug, the first
    // (lowest order) one is treated as the canonical page title.
    const pageTitle = group[0].title

    group.forEach(node => {
      const rawSource = readFile(node.absolutePath, 'utf8')
      const sections = extractSectionsFn(rawSource)

      sections.forEach((section, index) => {
        items.push({
          id: `${slug}--${node.order}-${index}`,
          region,
          title: pageTitle,
          breadcrumb,
          path: slug,
          heading: section.heading,
          anchor: section.anchor,
          text: section.text
        })
      })
    })
  })

  return items
}

module.exports = {
  deriveRegion,
  buildBreadcrumb,
  groupNodesBySlug,
  buildSearchIndex
}