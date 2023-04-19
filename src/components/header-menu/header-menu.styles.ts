import styled, { keyframes } from 'styled-components'
import { colors, easings } from 'src/components/theme'
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
  display: flex;
  justify-content: space-between;
  margin: 0px 75px;
`

export const Container = styled.div`
  padding: 25px 0px;
  position: relative;
  min-width: 120px;

  &:hover {
    color: ${colors.wedgewoodapprox};
  }
`

export const TitleContainer = styled.div`
  padding: 0px 13px;
`

export const Underline = styled.div`
  background: #8E8E8E;
  margin-top: 7px;
  height: 3px;
  width: 100%;
  border-radius: 10px;
`

export const Title = styled(LinkBase)<{ isActive?: boolean }>`
  line-height: 38px;
  font-size: 25px;
  font-weight: ${props => props.isActive ? 600 : 400};
  color: ${props => props.isActive ? colors.wedgewoodapprox : colors.brandDark};

  &:hover {
    color: ${colors.wedgewoodapprox};
  }
`

const rotateMenu = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

export const List = styled.ul`
  overflow: hidden;
  display: none;
  z-index: 1;
  width: 100%;
  margin-top: 15px;
  position: absolute;
  background: ${colors.brandGrayLight};
  border-radius: 0px 0px 10px 10px;
  list-style: none;

  ${Container}:hover & {
    display: block;
    animation: ${rotateMenu} 200ms ${easings.easeIn};
    transform-origin: top center;
  }
`

export const ListItem = styled(LinkBase)`
  padding: 15px;
  color: ${colors.brandDark};

  &:hover {
    color: ${colors.wedgewoodapprox};
  }
`