import styled from 'styled-components'

import { breakpoints, colors } from 'src/components/theme'

import { Article } from './article.styles'

export const ClientSection = styled(Article)`
  position: relative;
  margin: 0;
  flex: 1;
  padding-bottom: 90px;

  @media screen and (min-width: ${breakpoints.medium}) {
    padding-bottom: 110px;
  }

  &:hover {
    background-color: #F3F3F3;
  }
`

export const Title = styled.h2`
  line-height: 1.3;
  font-size: 22px;
  margin-bottom: 10px;

  @media screen and (min-width: ${breakpoints.medium}) {
    line-height: 46px;
    font-size: 36px;
    margin-bottom: 15px;
  }
`

export const Subtitle = styled.p`
  line-height: 1.4;
  font-size: 16px;
  font-weight: 400;
  color: ${colors.brandDark};

  @media screen and (min-width: ${breakpoints.medium}) {
    line-height: 35px;
    font-size: 25px;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 20px;
  left: 17px;

  @media screen and (min-width: ${breakpoints.medium}) {
    bottom: 35px;
  }
`

export const PrimaryLink = styled.a`
  line-height: 1.4;
  width: fit-content;
  font-size: 18px;
  padding: 12px 24px;
  display: inline-block;
  text-decoration: none;
  background-color: ${colors.brandDark};
  color: ${colors.brandLight};
  border-radius: 70px;
  cursor: pointer;
  border: 1px solid #5D5A88;

  @media screen and (min-width: ${breakpoints.medium}) {
    line-height: 38px;
    font-size: 30px;
    padding: 17px 35px;
  }

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