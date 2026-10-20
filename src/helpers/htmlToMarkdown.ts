import TurndownService from 'turndown'
import { gfm } from 'turndown-plugin-gfm'

const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
})

turndown.use(gfm)

turndown.addRule('fencedCodeBlock', {
  filter: 'pre',
  replacement: (_content, node) => {
    const pre = node as HTMLElement
    const code = pre.textContent || ''
    const classNames = [
      pre.className,
      ...Array.from(pre.querySelectorAll('[class]')).map(element =>
        element.className.toString()
      )
    ].join(' ')

    const language = classNames.match(/(?:language|lang)-([\w+-]+)/)?.[1] || ''
    const backtickRuns = code.match(/`+/g) || []
    const longestRun = backtickRuns.reduce(
      (longest, run) => Math.max(longest, run.length),
      0
    )
    const fence = '`'.repeat(Math.max(3, longestRun + 1))
    const body = code.replace(/\n+$/, '')

    return `\n\n${fence}${language}\n${body}\n${fence}\n\n`
  }
})

export function htmlToMarkdown(article: HTMLElement): string {
  const copy = article.cloneNode(true) as HTMLElement

  copy
    .querySelectorAll('button, [role="status"], .copy-code-control')
    .forEach(element => element.remove())

  copy.querySelectorAll('.cb-icon-edit').forEach(icon => {
    icon.closest('a')?.remove()
  })

  return turndown.turndown(copy.innerHTML).trim()
}