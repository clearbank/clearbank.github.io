import { htmlToMarkdown } from './htmlToMarkdown'

function createArticle(html: string): HTMLDivElement {
  const article = document.createElement('div')
  article.innerHTML = html
  return article
}

test('converts article content to Markdown and removes UI controls', () => {
  const article = createArticle(`
    <h2>Getting started</h2>
    <p>Read the <a href="https://example.com">API guide</a>.</p>
    <ul><li>First step</li></ul>
    <table>
      <thead><tr><th>Name</th><th>Value</th></tr></thead>
      <tbody><tr><td>Account</td><td>Example</td></tr></tbody>
    </table>
    <pre><code class="language-json">{
      "account": "example"
    }</code><button>Copy code</button></pre>
    <span class="copy-code-control">
      <button>Copy code</button>
      <span role="status">Code copied</span>
    </span>
    <a href="https://github.com/example">
      <i class="cb-icon-edit"></i>
    </a>
  `)

  const markdown = htmlToMarkdown(article)

  expect(markdown).toContain('## Getting started')
  expect(markdown).toContain('[API guide](https://example.com)')
  expect(markdown).toMatch(/(?:^|\n)(?:-|\*)\s+First step/)
  expect(markdown).toContain('| Name | Value |')
  expect(markdown).toContain('```json')
  expect(markdown).toContain('"account": "example"')
  expect(markdown).not.toContain('Copy code')
  expect(markdown).not.toContain('Code copied')
  expect(markdown).not.toContain('https://github.com/example')
})

test('does not modify the rendered article', () => {
  const article = createArticle(`
    <p>Article content</p>
    <button>Copy code</button>
  `)

  htmlToMarkdown(article)

  expect(article.querySelector('button')).not.toBeNull()
})

test('preserves original code instead of flattening highlighted lines', () => {
  const article = createArticle(`
    <pre data-markdown-language="json">
      <div>{</div>
      <div>  "account": "example"</div>
      <div>}</div>
    </pre>
  `)

  const code = '{\n  "account": "example"\n}'
  article.querySelector('pre')!.setAttribute('data-markdown-code', code)

  expect(htmlToMarkdown(article)).toBe(
    '```json\n' + code + '\n```'
  )
})

test('preserves highlighted line boundaries without original code metadata', () => {
  const article = createArticle(
    '<pre><div>first line</div><div>second line</div></pre>'
  )

  expect(htmlToMarkdown(article)).toBe(
    '```\nfirst line\nsecond line\n```'
  )
})

test('removes UI labels but preserves nested documentation', () => {
  const article = createArticle(`
    <div data-markdown-exclude="true">Code copied</div>
    <div data-markdown-exclude="true">Edit this section on GitHub</div>
    <div class="el-collapse-item__header">Show children</div>
    <div><p>Customer first name</p></div>
  `)

  const markdown = htmlToMarkdown(article)

  expect(markdown).toBe('Customer first name')
})

test('resolves links and images against the page URL', () => {
  const article = createArticle(`
    <p><a href="./savings-accounts">Savings accounts</a></p>
    <p><a href="#requirements">Requirements</a></p>
    <img src="/assets/diagram.png" alt="Diagram">
  `)

  const pageUrl =
    'https://docs.example.com/uk/docs/embedded-banking/retail-customers'

  const markdown = htmlToMarkdown(article, pageUrl)

  expect(markdown).toContain(
    '[Savings accounts](https://docs.example.com/uk/docs/embedded-banking/savings-accounts)'
  )
  expect(markdown).toContain(
    `[Requirements](${pageUrl}#requirements)`
  )
  expect(markdown).toContain(
    '![Diagram](https://docs.example.com/assets/diagram.png)'
  )
})

test('uses matching fences longer than backticks inside the code', () => {
  const article = createArticle('<pre></pre>')
  const code = 'before\n```\nafter'
  const pre = article.querySelector('pre')!

  pre.textContent = code
  pre.setAttribute('data-markdown-code', code)

  const fence = '`'.repeat(4)

  expect(htmlToMarkdown(article)).toBe(
    `${fence}\n${code}\n${fence}`
  )
})