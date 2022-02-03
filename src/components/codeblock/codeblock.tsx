import React, { useState, useEffect, useRef } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

import CodeHighlight from 'src/components/code-highlight'
import CodeOverlay from 'src/components/code-overlay'

import * as Styles from './codeblock.styles'
import * as Types from './codeblock.types'

const Codeblock: React.FunctionComponent<Types.CodeblockProps> = ({
  codeblock
}: Types.CodeblockProps) => {
  const { title, codeSnippet, copyCode, color, language } = codeblock
  const [showCodeOverlay, setShowCodeOverlay] = useState(false)
  let codeOverlayTimeoutId = -1

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    codeOverlayTimeoutId = setTimeout(() => setShowCodeOverlay(false), 2500)

    return () => {
      clearTimeout(codeOverlayTimeoutId)
    }
  }, [showCodeOverlay])

  return (
    <Styles.Container>
      <Styles.Header color={color}>
        <Styles.RequestDetails>{title}</Styles.RequestDetails>
        {copyCode && (
          <CopyToClipboard
            text={codeSnippet}
            onCopy={() => setShowCodeOverlay(!showCodeOverlay)}
          >
            <Styles.CopyButton>Copy code</Styles.CopyButton>
          </CopyToClipboard>
        )}
      </Styles.Header>
      <Styles.Body>
        <CodeHighlight code={codeSnippet} language={language} />
      </Styles.Body>
      <Styles.Overlay>
        <CodeOverlay showCodeOverlay={showCodeOverlay} message='Code copied' />
      </Styles.Overlay>
    </Styles.Container>
  )
}

export default Codeblock
