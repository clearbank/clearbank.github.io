import styled, { css, keyframes } from 'styled-components'
import { breakpoints, colors, easings } from 'src/components/theme'
import { Link } from 'gatsby'

export const LinkBase = styled(Link)`
  padding: 0;
  display: block;
  border-color: transparent;
  transition: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  text-decoration: none;
`

export const MenuContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 4px 12px;
  width: 100%;
  padding: 8px 20px;
  /* Intentionally not overflow-x: auto here: setting one axis to auto/scroll
     forces the browser to compute the other axis as auto too (per the CSS
     Overflow spec), which silently clipped the tap-to-open dropdown (List,
     position: absolute) below this container on mobile. Wrapping the tabs
     onto multiple lines instead avoids needing horizontal scroll at all, and
     keeps both axes truly visible so the dropdown can render. */
  overflow: visible;
  background: ${colors.brandGrayLight};

  @media screen and (min-width: ${breakpoints.small}) {
    justify-content: space-between;
    flex-wrap: nowrap;
    gap: 0;
    padding: 0 56px;
  }
`

export const Container = styled.div`
  position: relative;
  flex: 0 0 auto;
  padding: 8px 0;

  @media screen and (min-width: ${breakpoints.small}) {
    flex: 1 1 0;
    min-width: 0;
    padding: 18px 0;
    text-align: center;
  }
`

export const Title = styled.h2<{ isActive?: boolean }>`
  margin: 0;
  color: ${props =>
    props.isActive ? colors.wedgewoodapprox : colors.brandDark};
  white-space: nowrap;
  font-size: 15px;
  font-weight: ${props => (props.isActive ? 600 : 400)};
  line-height: 28px;

  @media screen and (min-width: ${breakpoints.small}) {
    white-space: normal;
    overflow-wrap: break-word;
  }

  @media screen and (min-width: ${breakpoints.xLarge}) {
    font-size: 16px;
    line-height: 32px;
  }
`

export const TitleContainer = styled.div`
  padding: 0 8px;

  @media screen and (min-width: ${breakpoints.xLarge}) {
    padding: 0 10px;
  }
`

export const TitleButton = styled.button`
  all: unset;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid ${colors.wedgewoodapprox};
    outline-offset: 2px;
    border-radius: 4px;
  }
`

export const Underline = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 2px;
  border-radius: 10px;
  background: ${colors.brandGrayDark};

  @media screen and (min-width: ${breakpoints.xLarge}) {
    height: 3px;
    margin-top: 7px;
  }
`

const expandMenu = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

export const List = styled.ul<{ borderState?: string; isOpen?: boolean }>`
  overflow: visible;
  visibility: hidden;
  display: block;
  z-index: 1;
  /* Below the small breakpoint, Container shrinks to fit its own tab label
     (flex: 0 0 auto), so width: 100% here would size the dropdown to that
     narrow tab instead of its content - the li text/links then overflow
     past that tiny background box and render directly over the page with
     nothing behind them, which is what looked "transparent". Give the
     dropdown its own width on mobile instead of inheriting the tab's width. */
  left: 0;
  width: max-content;
  min-width: 220px;
  max-width: calc(100vw - 40px);
  margin-top: 15px;
  position: absolute;
  background: ${colors.brandGrayLight};
  border-radius: ${(props) => {
    switch (props.borderState) {
      case 'leaf-bottom-right':
        return '0px 0px 0px 10px';
      case 'leaf-bottom-left':
        return '0px 0px 10px 0px';
      default:
        return '0px 0px 10px 10px';
    }
  }};
  list-style: none;

  @media screen and (min-width: ${breakpoints.small}) {
    width: 100%;
    max-width: none;
  }

  @media screen and (min-width: ${breakpoints.xLarge}) {
    ${Container}:hover & {
      visibility: visible;
      animation: ${expandMenu} 200ms ${easings.easeIn};
      transform-origin: top center;
    }
  }

  ${props =>
    props.isOpen &&
    css`
      visibility: visible;
      animation: ${expandMenu} 200ms ${easings.easeIn};
      transform-origin: top center;
    `}
`

export const ListItem = styled(LinkBase)`
  padding: 15px;
  color: ${colors.brandDark};

  &:hover {
    color: ${colors.wedgewoodapprox};
  }
`