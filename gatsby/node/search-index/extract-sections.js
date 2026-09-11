// Pure, framework-free text processing for the search index.
// No Gatsby APIs, no filesystem access — keeps this unit-testable in isolation
// and reusable from both the gatsby-node build step and Jest.

const kebabCase = require('lodash.kebabcase')

/**
 * Removes a leading YAML frontmatter block (--- ... ---) from raw MDX source.
 * Frontmatter is metadata (title, order, etc.), not page content, so it must
 * never end up in search snippets.
 */
function stripFrontmatter (source) {
  return source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
}

/**
 * Removes `import ... from '...'` statements used to bring custom MDX
 * components (EndpointBlock, Callout, etc.) into scope. These are JS module
 * wiring, not prose, and would otherwise show up as noise in snippets.
 */
function stripImports (source) {
  return source.replace(/^import\s+.*?from\s+['"].*?['"];?\s*$/gm, '')
}

/**
 * Temporarily swaps out fenced code blocks (```...```) for a placeholder
 * token so that later HTML/JSX-tag-stripping passes cannot mistake literal
 * example content (e.g. `<AdrLine>` in a CHAPS XML sample) for real markup.
 * Call `restoreCodeFences` with the same `fences` array once the rest of the
 * text has been cleaned, to put the original, verbatim code text back.
 *
 * The placeholder uses only letters and digits (no underscores, asterisks
 * or backticks) so that stripMarkdownSyntax's bold/italic/inline-code
 * regexes cannot accidentally match and corrupt it before it is restored.
 */
function extractCodeFences (source) {
  const fences = []

  const withPlaceholders = source.replace(/```[a-zA-Z]*\r?\n([\s\S]*?)```/g, (_match, code) => {
    const index = fences.length
    fences.push(code.trim())
    return `\nCODEFENCEPLACEHOLDER${index}\n`
  })

  return { withPlaceholders, fences }
}

function restoreCodeFences (source, fences) {
  return fences.reduce(
    (text, code, index) => text.replace(`CODEFENCEPLACEHOLDER${index}`, code),
    source
  )
}

/**
 * Strips HTML and JSX/MDX component tags (e.g. <Callout>, <br/>, <strong>,
 * <a href="...">) while keeping their inner text content. This must run
 * AFTER extractCodeFences has swapped out fenced code blocks, so literal
 * example tags like <AdrLine> inside a ```code block``` are never touched.
 *
 * Self-closing tags with no inner text (e.g. <br />, <WebhookPlaceholder />)
 * simply disappear, since there is no text to preserve.
 */
function stripTags (source) {
  return source
    // Self-closing tags: <br/>, <br />, <WebhookPlaceholder someProp="x" />
    .replace(/<[a-zA-Z][^>]*\/>/g, ' ')
    // Opening tags with attributes: <Callout colour="blue">, <a href="...">
    .replace(/<[a-zA-Z][^>]*>/g, '')
    // Closing tags: </Callout>, </a>, </p>
    .replace(/<\/[a-zA-Z][^>]*>/g, '')
}

/**
 * Strips common inline markdown syntax (links, emphasis, inline code) down
 * to their visible text, so snippets read as plain prose rather than raw
 * markdown source.
 */
function stripMarkdownSyntax (source) {
  return source
    // [link text](url) -> link text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    // **bold** or __bold__ -> bold
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    // *italic* or _italic_ -> italic
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // `inline code` -> inline code
    .replace(/`([^`]+)`/g, '$1')
    // heading markers, blockquote markers, list markers at line start
    .replace(/^(#{1,6}|>|-|\*)\s+/gm, '')
}

/**
 * Collapses repeated whitespace/blank lines left over after tag and markdown
 * stripping into single spaces, producing readable snippet text.
 */
function normaliseWhitespace (source) {
  return source.replace(/\s+/g, ' ').trim()
}

/**
 * Splits cleaned MDX body text into sections by h2/h3/h4 heading. Only
 * h2-h4 receive an `anchor`, matching src/components/mdxComponents/index.js
 * where only those levels get `id={kebabCase(children.toLowerCase())}` -
 * h5/h6 are styled headings with no anchor, so they cannot be deep-linked.
 *
 * Content appearing before the first heading becomes its own section with
 * heading: null and anchor: null, so it deep-links to the page URL with no
 * #fragment rather than being merged into whatever heading follows it.
 */
function splitIntoSections (source) {
  const headingPattern = /^(#{2,4})\s+(.+)$/gm
  const sections = []
  let lastIndex = 0
  let lastHeading = null
  let lastAnchor = null
  let match

  while ((match = headingPattern.exec(source)) !== null) {
    const textBefore = source.slice(lastIndex, match.index)
    sections.push({ heading: lastHeading, anchor: lastAnchor, text: textBefore })

    const headingText = match[2].trim()
    lastHeading = headingText
    lastAnchor = kebabCase(headingText.toLowerCase())
    lastIndex = headingPattern.lastIndex
  }

  sections.push({ heading: lastHeading, anchor: lastAnchor, text: source.slice(lastIndex) })

  return sections
    .map(section => ({ ...section, text: normaliseWhitespace(section.text) }))
    .filter(section => section.text.length > 0)
}

/**
 * Turns raw MDX source (frontmatter, imports, JSX, markdown and all) into
 * clean, heading-anchored sections ready for the search index. This is the
 * single entry point the Gatsby build step calls — everything above it is
 * an internal implementation detail, exported only so each step can be
 * unit-tested in isolation.
 */
function extractSections (rawMdxSource) {
  const withoutFrontmatter = stripFrontmatter(rawMdxSource)
  const withoutImports = stripImports(withoutFrontmatter)
  const { withPlaceholders, fences } = extractCodeFences(withoutImports)
  const withoutTags = stripTags(withPlaceholders)

  // Split into sections BEFORE stripping markdown syntax: stripMarkdownSyntax
  // removes '##'/'###'/'####' heading markers, which splitIntoSections still
  // needs intact to find section boundaries. Splitting first, then cleaning
  // markdown syntax within each section afterward, avoids that conflict.
  const rawSections = splitIntoSections(withoutTags)

  return rawSections
    .map(section => {
      const withoutMarkdown = stripMarkdownSyntax(section.text)
      const withCodeRestored = restoreCodeFences(withoutMarkdown, fences)
      return { ...section, text: normaliseWhitespace(withCodeRestored) }
    })
    .filter(section => section.text.length > 0)
}

module.exports = {
  stripFrontmatter,
  stripImports,
  extractCodeFences,
  restoreCodeFences,
  stripTags,
  stripMarkdownSyntax,
  normaliseWhitespace,
  splitIntoSections,
  extractSections
}