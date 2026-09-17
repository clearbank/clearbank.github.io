import styled, { css } from 'styled-components'
import Link from '../link'
import { widths, colors, themeBreakpoints, breakpoints, borderRadius, heights } from 'src/components/theme'
import * as Types from './header.types'


export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 96px;

  @media screen and (min-width: ${breakpoints.xLarge}) {
    height: auto;
    min-height: 60px;
    flex-grow: 0;
  }
`

export const BurgerIconWrapper: any = styled.div`
  display: block;
  z-index: 100;
  width: auto;
  flex-basis: 44px;
  margin: 5px 15px;

  ${({ isMenuOpen }: Types.HeaderMenuToggleProps) =>
    isMenuOpen &&
    css`
      background: ${colors.brandLight};
      position: absolute;
      top: 5px;
      right: -5px;
      border-radius: 100%;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      box-shadow: 0 5px 10px 0 rgba(73,151,222,0.2)}
  `}

  @media only screen and (min-width: ${themeBreakpoints.xLarge}) {
    display: none;
  }
`

export const LogoWrapper = styled(Link)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 96px;
  padding: 18px 20px;

  svg {
    display: block;
    width: 130px;
    max-height: 44px;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    padding-left: 40px;
  }

  @media screen and (min-width: ${breakpoints.xLarge}) {
    height: auto;
    padding: 40px 14px 30px 40px;

    svg {
      width: ${widths.logo};
      max-height: none;
    }
  }
`

export const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  outline: none;
`

export const SwitchContainer = styled.div`
  margin-right: 0;
`

// Groups the search trigger and region switch together so Container's
// justify-content: space-between only has to position 3 things (logo,
// burger, this group) - keeping the search bar a fixed distance from the
// region switch at every viewport width, instead of drifting as space is
// redistributed between 4 separately-spaced siblings.
export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: auto;
  margin-right: 30px;

  @media screen and (min-width: ${breakpoints.medium}) {
    margin-right: 60px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    margin-right: 30px;
  }

  @media screen and (min-width: ${breakpoints.xLarge}) {
    margin-right: 60px;
  }

  @media screen and (max-width: ${themeBreakpoints.medium}) {
    gap: 16px;
    margin-right: 14px;
  }
`

export const SearchTrigger = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 1px solid ${colors.brandGray};
  border-radius: ${borderRadius.global}px;
  background: ${colors.brandGrayLight};
  color: ${colors.brandGrayDark};
  font-size: 14px;
  cursor: pointer;
  min-width: 350px;
  max-width: 450px;

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  @media (max-width: ${themeBreakpoints.large}) {
    min-width: 220px;
    max-width: 260px;
    padding: 8px 12px;
  }

  @media (max-width: ${themeBreakpoints.medium}) {
    min-width: auto;
    width: 40px;
    height: 40px;
    justify-content: center;
    padding: 0;
  }
`

export const SearchTriggerLabel = styled.span`
  flex: 1;
  text-align: left;
  color: ${colors.brandGrayDark};

  @media (max-width: ${themeBreakpoints.medium}) {
    display: none;
  }
`

export const SearchTriggerHint = styled.kbd`
  font-size: 12px;
  border: 1px solid ${colors.brandGray};
  border-radius: 3px;
  padding: 1px 6px;
  color: ${colors.brandGrayDark};

  @media (max-width: ${themeBreakpoints.medium}) {
    display: none;
  }
`