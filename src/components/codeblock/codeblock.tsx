import React from 'react'

import CodeHighlight from 'src/components/code-highlight'
import CopyCodeButton from '../copy-code-button/copy-code-button'

import * as Styles from './codeblock.styles'
import * as Types from './codeblock.types'

const Codeblock: React.FunctionComponent<Types.CodeblockProps> = ({
  codeblock
}: Types.CodeblockProps) => {
  const { title, codeSnippet, copyCode, color, language } = codeblock

  return (
    <Styles.Container>
      <Styles.Header color={color}>
        <Styles.RequestDetails>{title}</Styles.RequestDetails>
        {copyCode !== false && (
          <CopyCodeButton text={codeSnippet} />
        )}
      </Styles.Header>
      <Styles.Body>
        <CodeHighlight code={codeSnippet} language={language} />
      </Styles.Body>
    </Styles.Container>
  )
}

export default Codeblock