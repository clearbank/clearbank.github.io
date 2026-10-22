import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-'
})

turndown.use(gfm)

turndown.addRule('articleTableCell', {
  filter: ['th', 'td'],
  replacement: (content, node) => {
    const cellContent = content
      .trim()
      .replace(/\\?\|/g, '\\|')
      .replace(/[ \t]*\r?\n(?:[ \t]*\r?\n)*[ \t]*/g, '<br>')

    const prefix = node.previousElementSibling ? ' ' : '| '

    return `${prefix}${cellContent} |`
  }
})

function getCode(pre: HTMLElement): string {
  const originalCode = pre.getAttribute('data-markdown-code')

  if (originalCode !== null) {
    return originalCode
  }

  const lines = Array.from(pre.children).filter(
    element => element.tagName === 'DIV'
  )

  if (lines.length > 0) {
    return lines.map(line => line.textContent || '').join('\n')
  }

  return pre.textContent || ''
}

turndown.addRule('articleCodeBlock', {
  filter: 'pre',
  replacement: (_content, node) => {
    const pre = node as HTMLElement
    const code = getCode(pre)

    const codeElement = pre.querySelector('code')
    const classNames = [
      pre.className,
      codeElement?.className || ''
    ].join(' ')

    const language =
      pre.getAttribute('data-markdown-language') ||
      classNames.match(/(?:language|lang)-([\w+-]+)/)?.[1] ||
      ''

    const backtickRuns = code.match(/`+/g) || []
    const longestRun = backtickRuns.reduce(
      (longest, run) => Math.max(longest, run.length),
      0
    )
    const fence = '`'.repeat(Math.max(3, longestRun + 1))
    const trailingNewline = code.endsWith('\n') ? '' : '\n'

    return `\n\n${fence}${language}\n${code}${trailingNewline}${fence}\n\n`
  }
})

export function htmlToMarkdown(
  article: HTMLElement,
  pageUrl?: string
): string {
  const copy = article.cloneNode(true) as HTMLElement

  copy
    .querySelectorAll(
      '[data-markdown-exclude], button, [role="status"], .copy-code-control'
    )
    .forEach(element => element.remove())

  copy.querySelectorAll('.cb-icon-edit').forEach(icon => {
    icon.closest('a')?.remove()
  })

  copy.querySelectorAll('.el-collapse-item__header').forEach(header => {
    const label = header.textContent?.trim()

    if (label === 'Show children' || label === 'Hide children') {
      header.remove()
    }
  })

  if (pageUrl) {
    copy.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href')

      if (href) {
        link.setAttribute('href', new URL(href, pageUrl).href)
      }
    })

    copy.querySelectorAll('img[src]').forEach(image => {
      const src = image.getAttribute('src')

      if (src) {
        image.setAttribute('src', new URL(src, pageUrl).href)
      }
    })
  }

  return turndown.turndown(copy.innerHTML).trim()
}