const {
  deriveRegion,
  buildBreadcrumb,
  groupNodesBySlug,
  buildSearchIndex
} = require('./build-index')

describe('deriveRegion', () => {
  test('derives uk from a uk slug', () => {
    expect(deriveRegion('/uk/docs/gbp-payments/chaps')).toBe('uk')
  })

  test('derives eu from an eu slug', () => {
    expect(deriveRegion('/eu/docs/sepa/credit-transfer')).toBe('eu')
  })
})

describe('buildBreadcrumb', () => {
  test('builds a region-only breadcrumb for a top-level region home page', () => {
    expect(buildBreadcrumb('/uk')).toEqual(['UK'])
  })

  test('builds a region-only breadcrumb for a root doc container page', () => {
    // /uk/docs/gbp-payments is itself the "GBP Payments" section landing
    // page - its own title already conveys that, so the breadcrumb above
    // it is just the region.
    expect(buildBreadcrumb('/uk/docs/gbp-payments')).toEqual(['UK'])
  })

  test('builds a region + section breadcrumb for a leaf page', () => {
    expect(buildBreadcrumb('/uk/docs/gbp-payments/chaps')).toEqual(['UK', 'Gbp Payments'])
  })

  test('builds a region + section breadcrumb for an eu leaf page', () => {
    expect(buildBreadcrumb('/eu/docs/multi-currency/fx-trade')).toEqual(['EU', 'Multi Currency'])
  })
})

describe('groupNodesBySlug', () => {
  test('groups nodes sharing a slug and sorts them by order', () => {
    const nodes = [
      { slug: '/uk/docs/gbp-payments/chaps', order: 2, title: 'CHAPS', absolutePath: 'b.mdx' },
      { slug: '/uk/docs/gbp-payments/chaps', order: 1, title: 'CHAPS', absolutePath: 'a.mdx' }
    ]

    const groups = groupNodesBySlug(nodes)

    expect(groups).toHaveLength(1)
    expect(groups[0].map(n => n.absolutePath)).toEqual(['a.mdx', 'b.mdx'])
  })

  test('keeps nodes with different slugs in separate groups', () => {
    const nodes = [
      { slug: '/uk/docs/gbp-payments/chaps', order: 1, title: 'CHAPS', absolutePath: 'a.mdx' },
      { slug: '/uk/docs/gbp-payments/bacs', order: 1, title: 'BACS', absolutePath: 'b.mdx' }
    ]

    const groups = groupNodesBySlug(nodes)

    expect(groups).toHaveLength(2)
  })
})

describe('buildSearchIndex', () => {
  // Fake file contents keyed by absolutePath, injected via readFile so no
  // real filesystem access happens in this test.
  const fakeFiles = {
    'chaps.mdx': [
      '---',
      'title: "CHAPS"',
      '---',
      '',
      'Intro paragraph about CHAPS payments.',
      '',
      '## Sending a payment',
      '',
      'Use the customer-payments endpoint.'
    ].join('\n'),
    'chaps-extra.mdx': [
      '---',
      'title: "CHAPS extra"',
      '---',
      '',
      '## Returning a payment',
      '',
      'Use the return-payments endpoint.'
    ].join('\n')
  }

  const readFile = (absolutePath: string) => {
    if (!(absolutePath in fakeFiles)) {
      throw new Error(`No fake file registered for ${absolutePath}`)
    }
    return fakeFiles[absolutePath]
  }

  test('produces one item per section, with page-level region/title/breadcrumb/path', () => {
    const nodes = [
      { slug: '/uk/docs/gbp-payments/chaps', order: 5, title: 'CHAPS', absolutePath: 'chaps.mdx' }
    ]

    const items = buildSearchIndex(nodes, { readFile })

    expect(items).toHaveLength(2)
    items.forEach(item => {
      expect(item.region).toBe('uk')
      expect(item.title).toBe('CHAPS')
      expect(item.breadcrumb).toEqual(['UK', 'Gbp Payments'])
      expect(item.path).toBe('/uk/docs/gbp-payments/chaps')
    })

    expect(items[0].heading).toBeNull()
    expect(items[0].text).toContain('Intro paragraph about CHAPS payments.')

    expect(items[1].heading).toBe('Sending a payment')
    expect(items[1].anchor).toBe('sending-a-payment')
    expect(items[1].text).toContain('customer-payments endpoint')
  })

  test('aggregates multiple mdx nodes sharing one slug into one set of results, without duplicating the page', () => {
    const nodes = [
      { slug: '/uk/docs/gbp-payments/chaps', order: 2, title: 'CHAPS extra', absolutePath: 'chaps-extra.mdx' },
      { slug: '/uk/docs/gbp-payments/chaps', order: 1, title: 'CHAPS', absolutePath: 'chaps.mdx' }
    ]

    const items = buildSearchIndex(nodes, { readFile })

    // Every item still points at the same single page path - this is the
    // "multiple mdx nodes aggregate into one URL" case from doc.tsx, and
    // the index must not fragment it into separate pseudo-pages.
    const uniquePaths = new Set(items.map(item => item.path))
    expect(uniquePaths.size).toBe(1)

    // Page title comes from the lowest-order node (chaps.mdx, order 1),
    // even though chaps-extra.mdx (order 2) is processed second.
    expect(items.every(item => item.title === 'CHAPS')).toBe(true)

    const headings = items.map(item => item.heading)
    expect(headings).toEqual([null, 'Sending a payment', 'Returning a payment'])
  })

  test('generates unique ids across sections and nodes', () => {
    const nodes = [
      { slug: '/uk/docs/gbp-payments/chaps', order: 1, title: 'CHAPS', absolutePath: 'chaps.mdx' }
    ]

    const items = buildSearchIndex(nodes, { readFile })
    const ids = items.map(item => item.id)

    expect(new Set(ids).size).toBe(ids.length)
  })
})