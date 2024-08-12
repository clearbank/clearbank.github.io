import React from 'react'

import arrowRight from '../../../static/assets/images/arrow-right.png'

import * as Styles from './guide.styles'
import * as Types from './guide.types'

const Guide: React.FC<Types.IGuideProps> = ({ title, subtitle, width, iconSrc, variant, href }) => {
  return (
    <Styles.Guide width={width} variant={variant}>
      {iconSrc && (<img src={iconSrc} height={72} width={72} alt="preview"/>)}
      <Styles.Title>{title}</Styles.Title>
      {subtitle && (<Styles.SubTitle>{subtitle}</Styles.SubTitle>)}
      <Styles.Link variant={variant} href={href}>Learn more <Styles.LinkIcon src={arrowRight} alt="arrow right"/></Styles.Link>
    </Styles.Guide> 
  )
}

export default Guide
