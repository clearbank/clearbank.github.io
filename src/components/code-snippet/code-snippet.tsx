import React from 'react'

import * as Types from './code-snippet.types'
import * as Styles from './code-snippet.styles'

// TODO: copy on click

const CodeSnippet: React.FunctionComponent<Types.CodeSnippetProps> = ({
  code,
  type,
  className
}): JSX.Element => (
  <Styles.Container type={type} className={className}>{code}</Styles.Container>
)

export default CodeSnippet
