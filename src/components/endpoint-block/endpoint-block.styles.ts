import styled from 'styled-components'
import { Box } from 'rebass'

import { breakpoints, fonts, heights } from 'src/components/theme'

export const Title: any = styled.h3`
  margin: 0;
  font-family: ${fonts.heading};
  scroll-margin-top: ${heights.header};
  font-size: 30px;
  font-weight: 700;
  line-height: 34px;
`
export const Container: any = styled(Box)``

export const FlexContainer: any = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: ${breakpoints.large}) {
    flex-wrap: nowrap;
  }
`

export const EndpointWrapper = styled.div`
  flex: 1 1 0;
  min-width: 100%;

  @media screen and (min-width: ${breakpoints.large}) {
    min-width: 0;
  }
`

export const DataListWrapper = styled.div`
  flex: 1 1 0;
  min-width: 100%;

  @media screen and (min-width: ${breakpoints.large}) {
    margin-right: 35px;
    min-width: 0;
  }

  ul > li {
    padding-right: 20px;
  }
`

export const CodeblockWrapper = styled.div`
  flex: 1 1 0;
  width: 100%;
  display: none;

  @media screen and (min-width: ${breakpoints.xLarge}) {
    display: block;
    min-width: 0;
    flex: 1 1 0;
  }
`

export const DropdownWrapper = styled.div`
  margin-bottom: 15px;
  width: 100%;
`

export const Type: any = styled.span`
  padding-right: 10px;
  text-transform: uppercase;
`
export const Path: any = styled.span``

export const SubTitle: any = styled.p``

export const Description: any = styled.p``
