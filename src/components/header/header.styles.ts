import styled, { css } from 'styled-components'
import Link from '../link'
import { widths, colors, themeBreakpoints } from 'src/components/theme'

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (min-width: ${themeBreakpoints.large}) {
    width: 270px;
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
  padding: 0 14px 0 12px;
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
