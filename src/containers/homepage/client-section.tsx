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
        <Styles.PrimaryLink href="https://clear.bank/eligibility-assessment-criteria" target="_blank" rel="noopener noreferrer">
          Apply now
        </Styles.PrimaryLink>
        <Styles.SecondaryLink href="https://clear.bank/" target="_blank" rel="noopener noreferrer">
          Click here to learn more <Styles.LinkIcon src={arrowRight} alt="arrow right"/>
        </Styles.SecondaryLink>
      </Styles.LinkContainer>
    </Styles.ClientSection>
  )
}

export default ClientSection
