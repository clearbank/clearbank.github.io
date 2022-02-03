import styled from 'styled-components'
import { Box } from 'rebass'

import { colors, breakpoints } from 'src/components/theme'

export const Container: any = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  border-top: dashed 1px ${colors.alto};

  @media screen and (min-width: ${breakpoints.large}) {
    align-items: start;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    padding: 30px;
  }
`

export const LogoWrapper: any = styled.div`
  max-width: 170px;
  display: block;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 30px;

  @media screen and (min-width: ${breakpoints.large}) {
    margin-top: 0;
  }
`

export const CopywriteWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media screen and (min-width: ${breakpoints.medium}) {
    margin-top: 30px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    padding-right: 50px; // space for to top button
  }
`

export const CopyContainer = styled.div`
  padding: 0 20px;
`

export const Copy = styled.p`
  display: block;
  width: 100%;
  color: ${colors.brandSecondaryDarker};
  font-size: 14px;

  @media screen and (min-width: ${breakpoints.large}) {
    padding-right: 55px;

    &:first-child {
      margin-top: 30px;
    }
  }
`

export const Copywrite = styled.span`
  white-space: nowrap;
  color: ${colors.brandSecondaryDarker};
`
