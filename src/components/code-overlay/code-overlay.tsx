import React from 'react'
import { Transition } from 'react-transition-group'

import * as Types from './code-overlay.types'
import * as Styles from './code-overlay.styles'

const CodeOverlay: React.FunctionComponent<Types.CodeOverlayProps> = ({
  message,
  showCodeOverlay
}: Types.CodeOverlayProps) => (
  <Styles.Container>
    <Transition in={showCodeOverlay} enter={false} timeout={0}>
      {(state: string) => (
        <Styles.Message state={state}>{message}</Styles.Message>
      )}
    </Transition>
  </Styles.Container>
)

export default CodeOverlay
