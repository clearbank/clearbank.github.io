import React from 'react'

import * as Types from './callout.types'
import * as Styles from './callout.styles'

const Callout: React.FunctionComponent<Types.CalloutProps> = ({
  colour,
  children
}): JSX.Element => (
  <Styles.Container color={colour}>{children}</Styles.Container>
)

export default Callout
