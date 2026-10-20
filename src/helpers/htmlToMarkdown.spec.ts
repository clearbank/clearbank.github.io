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