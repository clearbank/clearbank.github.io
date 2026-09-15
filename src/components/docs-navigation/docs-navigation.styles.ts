import styled from 'styled-components'
import { colors, fonts } from 'src/components/theme'

export const Nav = styled.nav`
  font-family: ${fonts.body};
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0 0 0 6px;
`

export const SubList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 18px;
`

export const LeafList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 32px;
`

export const NavLink = styled.a`
  display: block;
  padding: 4px 0;
  color: ${colors.brandDark};
  text-decoration: none;
  font-size: 16px;
  line-height: 1.75;
  padding: 5px 0;

  &[aria-current='page'] {
    font-weight: 600;
    color: ${colors.wedgewoodapprox};
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
`

export const DisclosureButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-left: auto;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${colors.brandDark};

  &:focus-visible {
    outline: 2px solid ${colors.wedgewoodapprox};
    outline-offset: 2px;
  }
`