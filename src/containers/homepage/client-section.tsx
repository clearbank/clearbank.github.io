import React from 'react'

import * as Styles from './client-section.styles'

import arrowRight from '../../../static/assets/images/arrow-right.png'

interface IClientSectionProps {
}

const ClientSection: React.FC<IClientSectionProps> = () => {
  return (
    <Styles.ClientSection>
      <Styles.Title>
        Not a ClearBank client?
      </Styles.Title>
      <Styles.Subtitle>
        Experience the ClearBank difference.
      </Styles.Subtitle>
      <Styles.LinkContainer>
        <Styles.PrimaryLink href="https://clear.bank/begin" target="_blank" rel="noopener noreferrer">
          Apply now
        </Styles.PrimaryLink>
      </Styles.LinkContainer>
    </Styles.ClientSection>
  )
}

export default ClientSection
