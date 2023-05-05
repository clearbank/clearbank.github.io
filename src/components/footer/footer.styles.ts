import styled from 'styled-components'
import { Box } from 'rebass'

import { colors } from 'src/components/theme'

export const Container = styled(Box).attrs(() => ({ mt: '140px' }))``

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 7%;
  padding: 0 5%;
  border-bottom: 1px solid ${colors.mischkaapprox};
`

export const ColumnContainer = styled.div`
  max-width: 200px;
`

export const Title = styled.h2`
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

export const List = styled.ul`
  margin-top: 40px;
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
  margin-right: 75px;
  margin-left: auto;
  text-align: right;
  color: ${colors.brandSecondaryDarker};
`
