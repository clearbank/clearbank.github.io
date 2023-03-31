import styled, { css } from 'styled-components'

import { colors, widths, breakpoints } from 'src/components/theme'

export const Container = styled.div`
  color: ${colors.brandLight};
  height: 100%;
  user-select: none;
  padding: 50px 23px 0px 23px;
  border-left: 3px solid ${colors.boulderapprox};
`

export const Title = styled.h5`
  margin: 0;
  color: ${colors.body};
  font-weight: 600;
  font-size: 32px;
  cursor: default;
  line-height: 38px;
`

export const List = styled.ul`
  list-style: none;
  margin-top: 15px;
`

export const BaseLink = styled.a<{ isActive?: boolean }>`
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.isActive ? colors.wedgewoodapprox : colors.brandDark};
  font-weight: ${props => props.isActive ? 600 : 400};
  line-height: 38px;
  font-size: 20px;


  &:hover {
    color: ${colors.wedgewoodapprox};
  }

  &:before {
    margin-right: 11px;
    content: url(/assets/images/arrow-icon.png);
    vertical-align: middle;
  }
`

export const FirstLevelLink = styled(BaseLink)`
  font-weight: 600;
  user-select: none;

  &:before {
    content: none;
  }
`

export const ThirdLevelLink = styled(BaseLink)`
  margin-left: 35px;
  font-size: 16px;
`

export const FourthLevelLink = styled(ThirdLevelLink)`
  &:before {
    content: none;
  }
`