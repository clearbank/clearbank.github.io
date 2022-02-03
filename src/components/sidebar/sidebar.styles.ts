import styled from 'styled-components'
import { Link } from 'gatsby'

import { colors, fonts, widths, breakpoints } from 'src/components/theme'

export const Container = styled.div`
  background: ${colors.brandGrayLightest};
  position: fixed;
  top: 60px;
  bottom: 0px; // space for chrome link bubbles
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  user-select: none;

  @media screen and (min-width: ${breakpoints.large}) {
    width: ${widths.sidebarLeft};
    bottom: 20px; // space for chrome link bubbles
  }
`

export const List = styled.ul`
  list-style: none;
  font-family: ${fonts.body};
  font-size: 16px;
  font-weight: 400;
`

export const ListEntry = styled.li`
  display: block;
`

export const LinkBase = styled(Link)`
  display: block;
  padding: 8px 0px 8px 30px;
  color: ${colors.body};
  border-width: 0 0 0 5px;
  border-color: transparent;
  border-style: solid;
  transition: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  &:focus {
    color: inherit;
    outline: none;
  }

  &:hover,
  &.active {
    color: ${colors.body};
    border-left: 5px solid ${colors.highlightOrange};
  }
`

export const FirstLevelLink = styled(LinkBase)`
  padding-left: 25px;
  font-weight: 600;

  &.active {
    color: ${colors.body};
    border-left: 5px solid ${colors.highlightOrange};
  }
`

export const FirstLevelText = styled(LinkBase)`
  padding-left: 25px;
`

export const SecondLevelLink = styled(LinkBase)`
  padding-left: 40px;

  &.active {
    color: ${colors.body};
    border-left: 5px solid ${colors.highlightOrange};
  }
`
