import React from 'react'

import * as Types from './pagination-link.types'
import * as Styles from './pagination-link.styles'

const content = {
  next: {
    label: 'Next',
    icon: 'cb-icon-arrow-right'
  },
  previous: {
    label: 'Previous',
    icon: 'cb-icon-arrow-left'
  }
}

const PaginationLink: React.FunctionComponent<Types.PaginationLinkProps> = ({
  slug,
  title,
  direction
}): JSX.Element => {
  if (!(direction in content)) {
    return null
  }

  const { label, icon } = content[direction]

  return (
    <Styles.Container direction={direction}>
      <Styles.Label>{label}</Styles.Label>
      <Styles.Link to={slug} direction={direction}>
        <Styles.IconWrapper>
          <Styles.Icon className={icon} />
        </Styles.IconWrapper>
        <Styles.Text>{title}</Styles.Text>
      </Styles.Link>
    </Styles.Container>
  )
}

export default PaginationLink
