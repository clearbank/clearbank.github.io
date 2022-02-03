import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/vsDark'
import * as Types from './code-highlight.types'

const CodeHighlight: React.FunctionComponent<Types.CodeHighlightProps> = ({
  code,
  language
}: Types.CodeHighlightProps) => (
  <Highlight {...defaultProps} code={code} language={language} theme={vsDark}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
)

export default CodeHighlight
