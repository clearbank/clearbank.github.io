import styled from 'styled-components'

import { colors } from 'src/components/theme'

import { Article } from './article.styles'

export const ClientSection = styled(Article)`
  position: relative;
  margin: 0;
  flex: 1;

  &:hover {
    background-color: #F3F3F3;
  }
`

export const Title = styled.h2`
  line-height: 46px;
  font-size: 36px;
  margin-bottom: 15px;
`

export const Subtitle = styled.p`
  line-height: 35px;
  font-size: 25px;
  font-weight: 400;
  color: ${colors.brandDark};
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 35px;
  left: 17px;
`

export const PrimaryLink = styled.a`
  line-height: 38px;
  width: fit-content;
  font-size: 30px;
  padding: 17px 35px;
  display: inline-block;
  text-decoration: none;
  background-color: ${colors.brandDark};
  color: ${colors.brandLight};
  border-radius: 70px;
  cursor: pointer;
  border: 1px solid #5D5A88;

  &:hover {
    color: ${colors.brandLight};
    background-color: #478E96;
  }
`

export const SecondaryLink = styled.a`
  width: fit-content;
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  background-color: transparent;
  text-decoration: none;
  border-radius: 35px;
  padding: 15px;
  cursor: pointer;
`

export const LinkIcon = styled.img`
  margin-left: 7px;
`