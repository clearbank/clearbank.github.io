import styled from 'styled-components'

import { breakpoints, colors } from 'src/components/theme'

import * as Types from './article.types';

export const Article = styled.article<{ variant?: Types.ArticleVariant }>`
  position: relative;
  padding: 20px 18px;
  border: 1px solid #8D8BA7;
  border-radius: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: 38px 30px 30px 30px;
    border-radius: 24px;
  }

  &:hover {
    background: ${props => props.variant === 'secondary' ? '#F3F3F3' : '#88F6DD'};
  }
`

export const Title = styled.h3`
  line-height: 1.3;
  font-size: 20px;
  font-weight: 600;
  margin: 0;

  @media screen and (min-width: ${breakpoints.medium}) {
    line-height: 38px;
    font-size: 28px;
  }
`

export const SubTitle = styled.p`
  margin-top: 10px;
  line-height: 30px;
  font-size: 18px;
  font-weight: 400;
  flex-grow: 2;
  color: ${colors.brandDark};
`

export const Link = styled.a<{ variant: Types.ArticleVariant }>`
  position: relative;
  width: fit-content;
  display: inline-flex;
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  background-color: ${props => props.variant === 'secondary' ? 'transparent' : colors.brandLight};
  text-decoration: none;
  border-radius: 35px;
  padding: 15px;
  margin-left: -15px;
  cursor: pointer;

  /* Stretched-link: the anchor stays a normal inline "Learn more" button
     visually, but this pseudo-element expands its actual clickable hit-area
     to fill Article (its nearest position: relative ancestor), so the whole
     card is clickable/tappable while remaining a single semantic link -
     no nested-link markup, still one Tab stop per card. */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
  }
`

export const LinkIcon = styled.img`
  margin-left: 7px;
`