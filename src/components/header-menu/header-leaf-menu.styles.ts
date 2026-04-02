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

export const LeafContainer = styled.li`
  position: relative;
`

export const LeafListItem = styled.div`
  display: flex;
  padding: 15px;
  color: ${colors.brandDark};

  &:hover {
    color: ${colors.wedgewoodapprox};
  }
  
  &:after {
    margin-left: auto;
    padding-top: 2px;
    height: 17px;
    content: url(/assets/images/leaf-menu-icon.png);
  }
`

export const LeafList = styled.ul<{ left?: boolean }>`
  min-width: 140px;
  overflow: hidden;
  display: block;
  visibility: hidden;
  z-index: 1;
  width: 75%;
  color: ${colors.brandDark};
  position: absolute;
  top: 0%;
  left: ${(props) => (props.left) ? "-100%" : "100%" };
  background: ${colors.brandGrayLight};
  border-radius: ${(props) => (props.left) ? "10px 0px 10px 10px" : "0px 10px 10px 10px" };
  list-style: none;
  
  ${LeafContainer}:hover & {
    visibility: visible;
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