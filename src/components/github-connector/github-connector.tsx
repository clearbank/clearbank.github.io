import React from 'react'
import Popover from 'element-react/dist/npm/es6/src/popover'

import * as Types from './github-connector.types'
import * as Styles from './github-connector.styles'

const GithubConnector: React.FunctionComponent<Types.GithubConnectorProps> = ({
  filePath
}): JSX.Element => (
  <Popover
    placement='left'
    width='225'
    trigger='hover'
    content='Edit this section on GitHub'
  >
    <Styles.ShareLink href={filePath} target='_blank'>
      <Styles.Icon className='cb-icon-edit' />
    </Styles.ShareLink>
  </Popover>
)

export default GithubConnector
