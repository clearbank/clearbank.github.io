import styled, { keyframes } from 'styled-components'
import { colors, easings } from 'src/components/theme'
import { Box } from 'rebass'

export const Container = styled(Box).attrs(() => ({ mt: '140px' }))``

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 7%;
  margin-left: 50px;
  padding: 0 5%;
  padding-left: 0;
  border-bottom: 1px solid ${colors.mischkaapprox};
`

export const ColumnContainer = styled.div`
  max-width: 200px;
`

const expandMenu = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

export const LeafContainer = styled.li<{ maxWidth?: number }>`
  max-width:  ${(props) => props.maxWidth + "px" };
  margin-bottom: 20px;
`

export const Title = styled.h2`
  padding: 0px, 13px, 0px, 13px;
  cursor: default;
  margin: 0;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  color: ${colors.brandDark}
`;

export const SubTitle = styled.a`
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
  color: ${colors.brandDark}
`

export const LeafTitle = styled.div`
  display: flex;
  line-height: 20px;
  text-decoration: none;
  cursor: default;
  font-weight: 400;
  font-size: 18px;

  &:after {
    padding-top: 2px;
    margin-left: auto;
    content: url(/assets/images/footer-leaf-menu-icon.png);
  }

  &:hover {
    color: ${colors.wedgewoodapprox};
  }

  color: ${colors.brandDark};
`

export const LeafList = styled.ul`
  display: none;
  margin: 20px 0px 0px 2px;
  list-style: none;
  padding-left: 10px;
  border-left: 3px solid #747474;

  ${LeafContainer}:hover & {
    display: block;
    animation: ${expandMenu} 400ms ${easings.easeIn};
    transform-origin: top center;
  }
`

export const List = styled.ul`
  margin-top: 30px;
  list-style: none;
  padding: 0;
`

export const ListItem = styled.li`
  margin-bottom: 20px;
`

export const LogoWrapper = styled.div`
  max-width: 170px;
  display: block;
  margin: 40px 0px 20px 40px; 
`

export const CopywriteWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

export const Copywrite = styled.p`
  max-width: 70%;
  margin-left: 50px;
  margin-right: auto;
  text-align: left;
  font-size: 0.8em;
  color: ${colors.brandPrimary};
`
