import styled, { keyframes } from 'styled-components'
import { colors, easings } from 'src/components/theme'
import { Link } from 'gatsby'

const expandMenu = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

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

export const LeafContainer = styled.div`
  min-width: 120px;
`

export const LeafListItem = styled.div`
  padding: 15px;
  color: ${colors.brandDark};

  &:hover {
    color: ${colors.wedgewoodapprox};
  }
`

export const LeafList = styled.ul`
  overflow: hidden;
  display: none;
  z-index: 1;
  width: 100%;
  padding: 15px;
  color: ${colors.brandDark};
  position: relative;
  background: ${colors.brandGrayLight};
  border-radius: 0px 0px 10px 10px;
  list-style: none;

  ${LeafContainer}:hover & {
    display: block;
    animation: ${expandMenu} 200ms ${easings.easeIn};
    transform-origin: top right;
  }
`

export const LeafListSubItem = styled(LinkBase)`
  padding: 15px;
  color: ${colors.brandDark};

  &:hover {
    color: ${colors.wedgewoodapprox};
  }
`