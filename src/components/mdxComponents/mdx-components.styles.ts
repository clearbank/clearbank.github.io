import styled from 'styled-components'
import { Text } from 'rebass'

import AnchorTag from './anchor'
import { breakpoints, widths, colors, fonts, heights } from 'src/components/theme'

export const Header = styled(Text)`
  max-width: ${widths.content};
  margin-top: 20px;
  padding-right: 50px; // preserve space for share button
  font-family: ${fonts.heading};
  font-weight: 600;
  scroll-margin-top: ${heights.header};
  color: ${colors.businessBlue};
`

// TODO: This style doesn't exist in the styleguide and needs sorting out properly
export const H1 = styled(Header)`
  margin-top: 40px;
  font-family: ${fonts.body};
  font-weight: 400;
  color: ${colors.baliHai};
  font-size: 15px;
  line-height: 19px;
`

export const H2 = styled(Header)`
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 27.5px;
  line-height: 40px;
  color: ${colors.businessBlue};
  margin-top: 0;

  &:not(:first-of-type) {
    margin-top: 60px;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    font-size: 35px;
  }
`

// TODO: style not in styleguide
export const H3 = styled(Header)`
  font-family: ${fonts.body};
  font-weight: 700;
  font-size: 24px;
  color: ${colors.businessBlue};
  line-height: 34px;
  margin-bottom: 15px;
  margin-top: 40px;
  scroll-margin-top: ${heights.header};
`

export const List = styled.ul`
  margin: 0 24px 24px 24px;
  max-width: ${widths.content};
`

export const ListItem = styled.li`
  font-size: 18px;
  line-height: 1.8;
  color: ${colors.body};
`

export const Img = styled.img`
  width: 100%;

  @media screen and (min-width: ${breakpoints.large}) {
    max-width: 75%;
  }
`

export const Paragraph = styled(Text)`
  font-family: ${fonts.body};
  font-weight: 400;
  font-size: 16px;
  color: ${colors.body};
  line-height: 28px;
  max-width: ${widths.content};
  margin-bottom: 20px;
  margin-top: 10px;

  @media screen and (min-width: ${breakpoints.small}) {
    font-size: 18px;
  }

  code {
    font-family: ${fonts.monospace};
    font-weight: 500;
    font-size: 15px;
    color: ${colors.body};
    background-color: ${colors.concrete};
    border-radius: 10px;
    padding: 5px 10px;
    white-space: nowrap;
  }
`

export const Link = styled(AnchorTag)`
  color: brown;
`

export const Pre = styled.div``
