import styled from "styled-components"

import { Button } from 'src/components/clearbank-ui'

import { colors, breakpoints, widths } from 'src/components/theme'

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  background: ${colors.brandSecondaryDarkest};
`

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  max-width: ${widths.content};
  margin: auto;
  padding: 0 15px;

  @media only screen and (min-width: ${breakpoints.small}) {
    flex-direction: row;
  }
`

export const Copy = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.brandLight};

  a {
    color: ${colors.brandPrimaryDark};
  }
`

export const CTA = styled(Button)`
  width: 100%;
  flex-direction: row;
  margin-top: 20px;
  color: #fff;
  box-shadow: inset 0 0 0 2px #fff!important;
  background: none;

  @media only screen and (min-width: ${breakpoints.small}) {
    min-width: 200px;
    width: auto;
    margin-top: 0;
  }

  &:hover:before, span:hover {
    background: ${colors.brandPrimaryDark};
  }
`

export const Link = styled.a`
  &:hover {
    color: ${colors.brandLight};
  }
`

export const ArrowIcon = styled.i``
