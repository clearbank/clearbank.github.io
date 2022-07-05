import styled, { css } from 'styled-components'

import { colors, widths, breakpoints } from 'src/components/theme'

export const Container = styled.div`
  color: ${colors.brandLight};
  user-select: none;

  @media screen and (min-width: ${breakpoints.large}) {
    position: sticky;
    top: 100px; // header height + margin top where it becomes stuck
    bottom: 0;
    width: ${widths.sidebarRight};
    height: calc(100vh - 60px); // 60px header top
    margin-top: 40px;
    margin-bottom: 80px;
    padding-right: 15px; // reserved space for scrollbar
    overflow-y: auto;
    overscroll-behavior: contain;
  }
`

export const Title = styled.h5`
  margin: 0;
  color: ${colors.body};
  font-weight: 600;
  font-size: 22px;
  cursor: default;
  line-height: 1.25; // 25px
`

export const List = styled.ul`
  list-style: none;
  margin-left: ${({ level }) => level * 10}px;

  ${({ level }) =>
    level === 0 &&
    css`
      padding-bottom: 40px;
    `}

  @media screen and (min-width: ${breakpoints.large}) {
    margin-left: ${({ level }) => level * 20}px;
  }
`

export const Entry = styled.li`
  margin-top: 20px;

  &:first-of-type {
    margin-top: 10px;
  }
`

export const SecondLevelEntry = styled(Entry)`
  margin-top: 10px;
`

export const Link = styled.a`
  display: block;
  color: ${colors.ceruleanBlue};
  font-size: 14px;
  font-weight: 600;
  transition: none;

  &:hover {
    color: ${colors.brandSecondaryDarkest};
  }
`

export const FirstLevelLink = styled(Link)`
  font-weight: 600;

  @media screen and (min-width: ${breakpoints.large}) {
    padding-left: 7px;
    border-left: 3px solid transparent;

    ${({ isHighlighted }) =>
      isHighlighted &&
      css`
        border-left-color: ${colors.highlightAqua};
      `}
  }
`

export const SecondLevelLink = styled(Link)`
  font-weight: 400;

  ${({ isHighlighted }) =>
    isHighlighted &&
    css`
      color: ${colors.brandSecondaryDarkest};
      font-weight: 600;
    `}
`

export const Type = styled.span`
  margin-right: 5px;
  text-transform: uppercase;
`
