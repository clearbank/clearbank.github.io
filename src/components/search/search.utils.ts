// Pure, framework-free search ranking/filtering logic for the Ctrl+K modal.
// No React, no DOM, no Gatsby APIs — keeps this unit-testable in isolation
// and reusable if the modal implementation ever changes.

export type Region = 'uk' | 'eu'

// Shape of each entry in the build-time-generated static/search-index.json,
// matching gatsby/node/search-index/build-index.js's SearchIndexItem output.
export interface SearchIndexItem {
  id: string
  region: Region
  title: string
  breadcrumb: string
  path: string
  heading: string | null
  anchor: string | null
  text: string
}

// A search result is an index item plus a rendering-ready snippet showing
// the matched text in context.
export interface SearchResult extends SearchIndexItem {
  snippet: string
}

const MAX_RESULTS = 5
const SNIPPET_CONTEXT_CHARS = 40

/**
 * Normalises a raw user query for comparison: trims surrounding whitespace
 * and lowercases it, so matching is case-insensitive throughout.
 */
export function normaliseQuery (query: string): string {
  return query.trim().toLowerCase()
}

/**
 * Determines how strongly an index item matches a (already-normalised)
 * query, returning the best (lowest) rank found:
 *   0 = title match (strongest signal - the whole page is about this)
 *   1 = heading match (a specific section is about this)
 *   2 = body text match (mentioned somewhere in the prose)
 *   null = no match at all; the item should be excluded from results
 */
export function getMatchRank (item: SearchIndexItem, query: string): number | null {
  const normalisedQuery = normaliseQuery(query)
  if (normalisedQuery.length === 0) return null

  if (item.title.toLowerCase().includes(normalisedQuery)) return 0
  if (item.heading && item.heading.toLowerCase().includes(normalisedQuery)) return 1
  if (item.text.toLowerCase().includes(normalisedQuery)) return 2

  return null
}

/**
 * Builds a short, readable excerpt of `text` centred on the first
 * occurrence of `normalisedQuery`, with `contextChars` of surrounding text
 * on each side. Adds a leading/trailing ellipsis only when text was
 * actually cut off on that side, so short matches near the start/end of
 * the source text are not given a misleading "…".
 */
export function buildSnippet (text: string, normalisedQuery: string, contextChars: number = SNIPPET_CONTEXT_CHARS): string {
  const lowerText = text.toLowerCase()
  const matchIndex = lowerText.indexOf(normaliseQuery(normalisedQuery))

  // No match found (e.g. this snippet is being built for a title/heading
  // match where the body text itself doesn't contain the query) - just
  // return the start of the text as a fallback.
  if (matchIndex === -1) {
    return text.length > contextChars * 2 ? `${text.slice(0, contextChars * 2)}…` : text
  }

  const matchLength = normaliseQuery(normalisedQuery).length
  const start = Math.max(0, matchIndex - contextChars)
  const end = Math.min(text.length, matchIndex + matchLength + contextChars)

  const prefix = start > 0 ? '…' : ''
  const suffix = end < text.length ? '…' : ''

  return `${prefix}${text.slice(start, end)}${suffix}`
}

/**
 * The main entry point the search modal calls on every keystroke: filters
 * the full static index down to the current region, ranks matches by
 * where the query was found (title > heading > body), and returns at most
 * MAX_RESULTS results with a display-ready snippet attached.
 *
 * Region-scoping happens first and unconditionally - a UK user must never
 * see EU results (or vice versa), since the two regions document different
 * payment schemes and mixing them would be a correctness problem, not just
 * a UX one.
 */
export function filterAndRankResults (
  index: SearchIndexItem[],
  query: string,
  currentRegion: Region
): SearchResult[] {
  const normalisedQuery = normaliseQuery(query)

  if (normalisedQuery.length === 0) return []

  const regionScoped = index.filter(item => item.region === currentRegion)

  const ranked = regionScoped
    .map(item => ({ item, rank: getMatchRank(item, normalisedQuery) }))
    .filter((entry): entry is { item: SearchIndexItem; rank: number } => entry.rank !== null)
    .sort((a, b) => a.rank - b.rank)

  return ranked
    .slice(0, MAX_RESULTS)
    .map(({ item }) => ({
      ...item,
      snippet: buildSnippet(item.text, normalisedQuery),
    }))
}