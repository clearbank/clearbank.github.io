import React from 'react'

import arrowRight from '../../../static/assets/images/arrow-right.png'

import * as Styles from './article.styles'
import * as Types from './article.types'

const Article: React.FC<Types.IArticleProps> = ({ title, subtitle, width, iconSrc, variant, href }) => {
  return (
    <Styles.Article width={width} variant={variant}>
      {iconSrc && (<img src={iconSrc} height={72} width={72} alt="preview"/>)}
      <Styles.Title>{title}</Styles.Title>
      {subtitle && (<Styles.SubTitle>{subtitle}</Styles.SubTitle>)}
      <Styles.Link variant={variant} href={href}>Learn more <Styles.LinkIcon src={arrowRight} alt="arrow right"/></Styles.Link>
    </Styles.Article> 
  )
}

export default Article
