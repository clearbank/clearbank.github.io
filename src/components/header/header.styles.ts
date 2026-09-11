import styled, { css } from 'styled-components'
import Link from '../link'
import { widths, colors, themeBreakpoints, breakpoints, borderRadius } from 'src/components/theme'


export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (min-width: ${themeBreakpoints.large}) {
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

  @media only screen and (min-width: ${themeBreakpoints.large}) {
    display: none;
  }
`

export const LogoWrapper = styled(Link)`
  display: flex;
  height: 100%;
  padding: 40px 14px 40px 60px;
  align-items: center;

  svg {
    display: block;
    width: ${widths.logo};
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
`

// A pill-shaped button styled to look like a search field (Stripe/Twilio-docs
// style), sitting centred in the header. It only opens the Search modal on
// click - the actual typing happens inside that modal, not here - so this
// stays a simple trigger rather than a second input to keep in sync.
export const SearchTrigger = styled.button`
  display: flex;
  margin-right: 140px;
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
    display: none;
  }
`

// Groups the search trigger and region switch together so Container's
// justify-content: space-between only has to position 3 things (logo,
// burger, this group) - keeping the search bar a fixed distance from the
// region switch at every viewport width, instead of drifting as space is
// redistributed between 4 separately-spaced siblings.
export const RightGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`

export const SearchTriggerLabel = styled.span`
  flex: 1;
  text-align: left;
  color: ${colors.brandGrayDark};
`

export const SearchTriggerHint = styled.kbd`
  font-size: 12px;
  border: 1px solid ${colors.brandGray};
  border-radius: 3px;
  padding: 1px 6px;
  color: ${colors.brandGrayDark};
`