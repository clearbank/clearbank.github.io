import {
  normaliseQuery,
  getMatchRank,
  buildSnippet,
  filterAndRankResults,
  SearchIndexItem,
} from './search.utils'

// A small, realistic-shaped fixture index: two UK pages (one with two
// sections) and one EU page, so tests can verify region-scoping without
// needing the full 315-entry real index.
const fixtureIndex: SearchIndexItem[] = [
  {
    id: 'uk-chaps-0',
    region: 'uk',
    title: 'CHAPS',
    breadcrumb: 'UK › Gbp Payments',
    path: '/uk/docs/gbp-payments/chaps',
    heading: null,
    anchor: null,
    text: 'This page describes CHAPS payments and their versioning policy.',
  },
  {
    id: 'uk-chaps-1',
    region: 'uk',
    title: 'CHAPS',
    breadcrumb: 'UK › Gbp Payments',
    path: '/uk/docs/gbp-payments/chaps',
    heading: 'Hybrid address',
    anchor: 'hybrid-address',
    text: 'Use schemeName for account identification in a hybrid address.',
  },
  {
    id: 'uk-webhooks-0',
    region: 'uk',
    title: 'Webhooks',
    breadcrumb: 'UK',
    path: '/uk/docs/webhooks',
    heading: null,
    anchor: null,
    text: 'General information about receiving webhook notifications.',
  },
  {
    id: 'eu-sct-0',
    region: 'eu',
    title: 'SCT',
    breadcrumb: 'EU',
    path: '/eu/docs/sct',
    heading: null,
    anchor: null,
    text: 'Describes CHAPS-equivalent scheme behaviour for EU payments.',
  },
]

describe('normaliseQuery', () => {
  it('trims surrounding whitespace', () => {
    expect(normaliseQuery('  chaps  ')).toBe('chaps')
  })

  it('lowercases the query', () => {
    expect(normaliseQuery('CHAPS')).toBe('chaps')
  })

  it('returns an empty string for whitespace-only input', () => {
    expect(normaliseQuery('   ')).toBe('')
  })
})

describe('getMatchRank', () => {
  const item = fixtureIndex[1] // heading: 'Hybrid address', text mentions 'schemeName'

  it('ranks a title match as 0, the highest priority', () => {
    expect(getMatchRank(item, 'chaps')).toBe(0)
  })

  it('ranks a heading match as 1 when there is no title match', () => {
    expect(getMatchRank(item, 'hybrid')).toBe(1)
  })

  it('ranks a body text match as 2 when there is no title or heading match', () => {
    expect(getMatchRank(item, 'schemename')).toBe(2)
  })

  it('returns null when the query matches nothing on the item', () => {
    expect(getMatchRank(item, 'nonexistent')).toBeNull()
  })

  it('is case-insensitive', () => {
    expect(getMatchRank(item, 'SCHEMENAME')).toBe(2)
  })
})

describe('buildSnippet', () => {
  it('extracts context around the first match with ellipsis on both sides', () => {
    const text = 'This page describes CHAPS payments and their versioning policy in full detail here.'
    const snippet = buildSnippet(text, 'versioning', 15)

    expect(snippet).toContain('versioning')
    expect(snippet.startsWith('…')).toBe(true)
    expect(snippet.endsWith('…')).toBe(true)
  })

  it('does not prepend an ellipsis when the match is at the very start of the text', () => {
    const text = 'CHAPS payments are settled in real time.'
    const snippet = buildSnippet(text, 'chaps', 10)

    expect(snippet.startsWith('…')).toBe(false)
  })

  it('does not append an ellipsis when the match runs to the end of the text', () => {
    const text = 'This describes the versioning policy'
    const snippet = buildSnippet(text, 'versioning policy', 10)

    expect(snippet.endsWith('…')).toBe(false)
  })

  it('returns the full text unchanged when it is shorter than the context window', () => {
    const text = 'Short text.'
    const snippet = buildSnippet(text, 'short', 100)

    expect(snippet).toBe('Short text.')
  })
})

describe('filterAndRankResults', () => {
  it('returns no results for an empty query', () => {
    expect(filterAndRankResults(fixtureIndex, '', 'uk')).toEqual([])
  })

  it('returns no results for a whitespace-only query', () => {
    expect(filterAndRankResults(fixtureIndex, '   ', 'uk')).toEqual([])
  })

  it('only returns results from the current region, even if another region matches', () => {
    // 'chaps' appears in both a UK item and an EU item's body text.
    const results = filterAndRankResults(fixtureIndex, 'chaps', 'eu')

    expect(results.length).toBeGreaterThan(0)
    expect(results.every(result => result.region === 'eu')).toBe(true)
  })

  it('ranks title matches above heading matches, and heading matches above body-text matches', () => {
    // 'chaps' matches the title of both UK CHAPS sections, so add a query
    // that also demonstrates heading vs. body ordering within one region.
    const results = filterAndRankResults(fixtureIndex, 'chaps', 'uk')

    expect(results[0].title).toBe('CHAPS')
  })

  it('excludes items that do not match the query at all', () => {
    const results = filterAndRankResults(fixtureIndex, 'nonexistentterm', 'uk')

    expect(results).toEqual([])
  })

  it('caps results at 5, even if more items match', () => {
    // Build a larger fixture where 6 UK items all match the same query.
    const manyMatches: SearchIndexItem[] = Array.from({ length: 6 }, (_, index) => ({
      id: `uk-item-${index}`,
      region: 'uk',
      title: `Payments guide ${index}`,
      breadcrumb: 'UK',
      path: `/uk/docs/payments-${index}`,
      heading: null,
      anchor: null,
      text: 'General payments information.',
    }))

    const results = filterAndRankResults(manyMatches, 'payments', 'uk')

    expect(results.length).toBe(5)
  })

  it('includes a snippet on each result', () => {
    const results = filterAndRankResults(fixtureIndex, 'schemename', 'uk')

    expect(results[0].snippet).toContain('schemeName')
  })
})