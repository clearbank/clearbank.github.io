import React from 'react'

import { parseDocsLocation, rawContentUrl } from 'src/helpers/githubSource'

import * as Types from './ai-agent-note.types'
import * as Styles from './ai-agent-note.styles'

const AiAgentNote: React.FunctionComponent<Types.AiAgentNoteProps> = ({
  pageSlug
}): JSX.Element | null => {
  const location = parseDocsLocation()

  if (!location) {
    return null
  }

  const { repoUrl, branch, treeBaseUrl } = location
  const sourceRawUrl = rawContentUrl(pageSlug)

  return (
    <Styles.Note aria-label='Guidance for AI agents and automated readers'>
      <h2>Note for AI agents and automated readers</h2>
      <p>
        This page is rendered from source files in a public GitHub repository.
        Much of the technical content &mdash; API request and response schemas,
        examples, and webhook payloads &mdash; is collapsed behind interactive
        dropdowns and may be missing or incomplete in this rendered HTML. For
        complete, machine-readable content, do not rely on this page: read the
        raw source files directly instead.
      </p>
      <ul>
        <li>
          Machine-readable index of every source file:{' '}
          <a href='/llms.txt'>/llms.txt</a>
        </li>
        <li>
          Repository (branch <code>{branch}</code>):{' '}
          <a href={repoUrl}>{repoUrl}</a>
        </li>
        <li>
          Documentation pages (Markdown/MDX):{' '}
          <a href={`${treeBaseUrl}/content`}>{`${treeBaseUrl}/content`}</a>
        </li>
        <li>
          API endpoint schemas (OpenAPI JSON):{' '}
          <a href={`${treeBaseUrl}/data/endpoints`}>
            {`${treeBaseUrl}/data/endpoints`}
          </a>
        </li>
        <li>
          Webhook payload schemas (MDX):{' '}
          <a href={`${treeBaseUrl}/data/webhooks`}>
            {`${treeBaseUrl}/data/webhooks`}
          </a>
        </li>
        {sourceRawUrl ? (
          <li>
            Raw source for this page:{' '}
            <a href={sourceRawUrl}>{sourceRawUrl}</a>
          </li>
        ) : null}
      </ul>
    </Styles.Note>
  )
}

export default AiAgentNote
