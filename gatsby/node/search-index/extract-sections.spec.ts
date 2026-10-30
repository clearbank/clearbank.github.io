const {
  stripFrontmatter,
  stripImports,
  extractCodeFences,
  restoreCodeFences,
  stripTags,
  stripMarkdownSyntax,
  splitIntoSections,
  extractSections
} = require('./extract-sections')

describe('stripFrontmatter', () => {
  test('removes a leading YAML frontmatter block', () => {
    const source = [
      '---',
      'title: "CHAPS"',
      'metaTitle: "CHAPS"',
      'order: 5',
      'showPageMenu: true',
      '---',
      '',
      '## CHAPS',
      '',
      'ClearBank accounts support inbound and outbound CHAPS payments.'
    ].join('\n')

    const result = stripFrontmatter(source)

    expect(result).not.toContain('title:')
    expect(result).not.toContain('---')
    expect(result).toContain('## CHAPS')
    expect(result).toContain('ClearBank accounts support inbound and outbound CHAPS payments.')
  })

  test('leaves content unchanged when there is no frontmatter', () => {
    const source = '## CHAPS\n\nSome content with no frontmatter block.'

    expect(stripFrontmatter(source)).toBe(source)
  })
})

describe('stripImports', () => {
  test('removes MDX component import statements', () => {
    const source = [
      'import EndpointBlock from "src/components/endpoint-block"',
      'import WebhookPlaceholder from \'src/components/webhook-placeholder\'',
      'import Callout from "src/components/callout";',
      'import ExternalLink from \'src/components/external-link\';',
      '',
      '## CHAPS',
      '',
      'ClearBank accounts support inbound and outbound CHAPS payments.'
    ].join('\n')

    const result = stripImports(source)

    expect(result).not.toContain('import ')
    expect(result).toContain('## CHAPS')
    expect(result).toContain('ClearBank accounts support inbound and outbound CHAPS payments.')
  })

  test('leaves content unchanged when there are no imports', () => {
    const source = '## CHAPS\n\nSome content with no imports.'

    expect(stripImports(source)).toBe(source)
  })
})

describe('extractCodeFences / restoreCodeFences', () => {
  // This is the exact shape of content found in content/uk/docs/gbp-payments/chaps.mdx:
  // a fenced code block containing literal XML tags that must survive later
  // HTML/JSX-tag stripping untouched, rather than being deleted as if it
  // were real markup.
  const chapsExampleSource = [
    'Here is an example hybrid address:',
    '```',
    '<Nm>Jane Doe</Nm>',
    '<PstlAdr>',
    '  <TwnNm>Chicago</TwnNm>',
    '  <Ctry>US</Ctry>',
    '  <AdrLine>222 Merchandise Plaza 20th Floor Suite 2024, IL 60654</AdrLine>',
    '</PstlAdr>',
    '```',
    '',
    '### Version 6 mandatory fields'
  ].join('\n')

  test('replaces fenced code blocks with placeholders and captures their content', () => {
    const { withPlaceholders, fences } = extractCodeFences(chapsExampleSource)

    expect(withPlaceholders).not.toContain('<AdrLine>')
    expect(withPlaceholders).toContain('CODEFENCEPLACEHOLDER0')
    expect(withPlaceholders).toContain('Here is an example hybrid address:')
    expect(withPlaceholders).toContain('### Version 6 mandatory fields')

    expect(fences).toHaveLength(1)
    expect(fences[0]).toContain('<AdrLine>222 Merchandise Plaza 20th Floor Suite 2024, IL 60654</AdrLine>')
  })

  test('restoreCodeFences puts the original code text back verbatim', () => {
    const { withPlaceholders, fences } = extractCodeFences(chapsExampleSource)
    const restored = restoreCodeFences(withPlaceholders, fences)

    expect(restored).toContain('<Nm>Jane Doe</Nm>')
    expect(restored).toContain('<AdrLine>222 Merchandise Plaza 20th Floor Suite 2024, IL 60654</AdrLine>')
  })

  test('handles multiple code fences independently', () => {
    const source = [
      '```',
      'first block',
      '```',
      'some prose in between',
      '```json',
      '{ "second": "block" }',
      '```'
    ].join('\n')

    const { withPlaceholders, fences } = extractCodeFences(source)

    expect(fences).toHaveLength(2)
    expect(fences[0]).toBe('first block')
    expect(fences[1]).toBe('{ "second": "block" }')
    expect(withPlaceholders).toContain('CODEFENCEPLACEHOLDER0')
    expect(withPlaceholders).toContain('CODEFENCEPLACEHOLDER1')
    expect(withPlaceholders).toContain('some prose in between')
  })

  test('leaves content unchanged when there are no code fences', () => {
    const source = '### Version 6 mandatory fields\n\nSome plain prose.'
    const { withPlaceholders, fences } = extractCodeFences(source)

    expect(withPlaceholders).toBe(source)
    expect(fences).toHaveLength(0)
  })
})

describe('stripTags', () => {
  test('removes custom MDX component tags but keeps inner text', () => {
    const source = '<Callout colour="blue">This is important guidance.</Callout>'

    const result = stripTags(source)

    expect(result).not.toContain('<Callout')
    expect(result).not.toContain('</Callout>')
    expect(result).toContain('This is important guidance.')
  })

  test('removes self-closing tags entirely, including their attributes', () => {
    const source = 'Line one.<br />Line two.<WebhookPlaceholder eventType="x" />'

    const result = stripTags(source)

    expect(result).not.toContain('<br')
    expect(result).not.toContain('<WebhookPlaceholder')
    expect(result).toContain('Line one.')
    expect(result).toContain('Line two.')
  })

  test('removes raw HTML tags like <a href> and <strong> while keeping text', () => {
    const source = 'See our <a href="../api/versioning">versioning policy</a> and <strong>13 May 2026</strong>.'

    const result = stripTags(source)

    expect(result).not.toContain('<a href')
    expect(result).not.toContain('<strong>')
    expect(result).toContain('versioning policy')
    expect(result).toContain('13 May 2026')
  })
})

describe('stripMarkdownSyntax', () => {
  test('converts markdown links to plain text', () => {
    const result = stripMarkdownSyntax('See the [POST /payments/chaps/v6/customer-payments](#send-a-chaps-payment) endpoint.')

    expect(result).toBe('See the POST /payments/chaps/v6/customer-payments endpoint.')
  })

  test('strips bold and italic emphasis markers', () => {
    expect(stripMarkdownSyntax('The **postalAddress** field is now mandatory.'))
      .toBe('The postalAddress field is now mandatory.')
    expect(stripMarkdownSyntax('This is *optional* in v5.'))
      .toBe('This is optional in v5.')
  })

  test('strips inline code backticks', () => {
    expect(stripMarkdownSyntax('The `schemeName` field is now enforced.'))
      .toBe('The schemeName field is now enforced.')
  })

  test('strips leading heading and list markers', () => {
    const source = '### Hybrid address\n- Hybrid address formats contain up to two tags'
    const result = stripMarkdownSyntax(source)

    expect(result).not.toContain('###')
    expect(result).toContain('Hybrid address')
    expect(result).toContain('Hybrid address formats contain up to two tags')
  })
})

describe('splitIntoSections', () => {
  test('creates an anchor-less section for content before the first heading', () => {
    const source = 'Intro paragraph before any heading.\n\n## CHAPS\n\nBody text under CHAPS.'

    const sections = splitIntoSections(source)

    expect(sections[0].heading).toBeNull()
    expect(sections[0].anchor).toBeNull()
    expect(sections[0].text).toContain('Intro paragraph before any heading.')
  })

  test('splits on h2/h3/h4 and generates kebab-case anchors matching mdxComponents', () => {
    const source = [
      '## CHAPS',
      'Top level content.',
      '### What\'s changed in version 6',
      'Version 6 details.',
      '#### Version 6 mandatory fields',
      'Mandatory field details.'
    ].join('\n')

    const sections = splitIntoSections(source)
    const headings = sections.map(s => s.heading)
    const anchors = sections.map(s => s.anchor)

    expect(headings).toEqual(['CHAPS', "What's changed in version 6", 'Version 6 mandatory fields'])
    expect(anchors).toEqual(['chaps', 'whats-changed-in-version-6', 'version-6-mandatory-fields'])
  })

  test('does not create an anchor for h5/h6, matching mdxComponents which only anchors h2-h4', () => {
    const source = '## CHAPS\nBody.\n##### Not anchored\nThis text belongs to the CHAPS section.'

    const sections = splitIntoSections(source)

    // A line starting with ##### does not match the h2-h4 heading pattern,
    // so it is treated as ordinary text within the current (CHAPS) section,
    // not as a new section boundary.
    expect(sections).toHaveLength(1)
    expect(sections[0].heading).toBe('CHAPS')
    expect(sections[0].text).toContain('Not anchored')
  })

  test('drops sections that end up empty after cleaning', () => {
    const source = '## Empty section\n\n## Populated section\nSome real text.'

    const sections = splitIntoSections(source)

    expect(sections).toHaveLength(1)
    expect(sections[0].heading).toBe('Populated section')
  })
})

describe('extractSections (end-to-end orchestration)', () => {
  test('produces clean, anchored sections from realistic raw MDX source', () => {
    const source = [
      '---',
      'title: "CHAPS"',
      'order: 5',
      '---',
      '',
      'import Callout from "src/components/callout";',
      'import WebhookPlaceholder from \'src/components/webhook-placeholder\'',
      '',
      '## CHAPS',
      '',
      '<Callout colour="blue">This is important guidance.</Callout>',
      '',
      'ClearBank accounts support inbound and outbound **CHAPS** payments.<br />',
      'See the [versioning policy](../api/versioning) for details.',
      '',
      '### Hybrid address',
      '',
      'Here is an example:',
      '```',
      '<AdrLine>222 Merchandise Plaza</AdrLine>',
      '```',
      '',
      'Use `schemeName` for account identification.<WebhookPlaceholder eventType="x" />'
    ].join('\n')

    const sections = extractSections(source)

    // Frontmatter and imports must be gone entirely.
    expect(sections.some(s => s.text.includes('title:'))).toBe(false)
    expect(sections.some(s => s.text.includes('import '))).toBe(false)

    // Custom component wrapper tags are gone, but their real text remains.
    expect(sections.some(s => s.text.includes('This is important guidance.'))).toBe(true)
    expect(sections.some(s => s.text.includes('<Callout'))).toBe(false)

    // Markdown emphasis/links are flattened to plain text.
    const chapsSection = sections.find(s => s.heading === 'CHAPS')
    expect(chapsSection.text).toContain('CHAPS payments.')
    expect(chapsSection.text).toContain('versioning policy')
    expect(chapsSection.text).not.toContain('**')
    expect(chapsSection.text).not.toContain('[versioning policy]')

    // The Hybrid address section keeps its code-fence example text intact.
    const hybridSection = sections.find(s => s.heading === 'Hybrid address')
    expect(hybridSection.anchor).toBe('hybrid-address')
    expect(hybridSection.text).toContain('<AdrLine>222 Merchandise Plaza</AdrLine>')
    expect(hybridSection.text).toContain('schemeName')

    // Self-closing custom components disappear without a trace.
    expect(sections.some(s => s.text.includes('WebhookPlaceholder'))).toBe(false)
  })
})