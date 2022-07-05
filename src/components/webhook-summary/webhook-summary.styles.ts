import styled from 'styled-components'

import {
  colors,
  fonts,
  httpMethodColors,
  breakpoints
} from 'src/components/theme'

export const Summary = styled.ul`
  padding: 40px 0;
  border: 1px solid ${colors.brandGray};
  border-radius: 4px;

  // two columns
  @media screen and (min-width: ${breakpoints.xxLarge}) {
    display: flex;
  }
`

export const Column = styled.li`
  display: block;
  flex: 1 1 0;
  padding: 0 40px;
  min-width: 0;

  &:first-child {
    padding-bottom: 40px;

    @media screen and (min-width: ${breakpoints.xxLarge}) {
      padding-bottom: 0;
      border-right: 1px solid ${colors.brandGray};
    }
  }
`

export const Title = styled.h4`
  margin-bottom: 20px;
  font-size: 20px;
  font-family: ${fonts.body};
  font-weight: bold;
  color: ${colors.downriver};
`

export const List = styled.ul`
  list-style: none;
`

export const ListEntry = styled.li`
  display: block;

  & + & {
    margin-top: 10px;
  }
`

export const EndpointTitle = styled.div`
  display: flex;
  align-items: center;
`

export const EndpointMethod = styled.span`
  flex: 0 0 auto;
  margin-right: 10px;
  padding: 5px 10px;
  text-transform: capitalize;
  font-size: 12px;
  font-family: ${fonts.monospace};
  text-transform: uppercase;
  color: ${colors.brandLight};
  background: ${({ type }) =>
    type in httpMethodColors
      ? httpMethodColors[type]
      : httpMethodColors.default};
`

export const EndpointName = styled.a`
  flex: 0 1 auto;
  color: ${colors.highlightAqua};
  font-size: 18px;
  line-height: 1.5;
`

export const WebhookTitle = styled.a`
  color: ${colors.highlightAqua};
  font-size: 18px;
  line-height: 1.5;

  &:hover {
    color: ${colors.hoverOrange};
  }
`
