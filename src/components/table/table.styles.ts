import styled from 'styled-components'
import { colors, breakpoints } from 'src/components/theme'

export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  padding: 0;
  line-height: 24px;
  border-style: none;
  border-collapse: collapse;
  margin-top: 30px;

  tr:nth-child(2n) {
    background: ${colors.whiteLilac};
  }

  tr th :first-child,
  tr td :first-child {
    margin-top: 0;
  }

  tr th :first-child,
  tr td :first-child {
    margin-top: 0;
  }

  tr th :last-child,
  tr td :last-child {
    margin-bottom: 0;
  }
`

export const Thead = styled.thead`
  text-align: left;
  font-size: 18px;
  background: ${colors.cornflowerBlue};
  color: ${colors.brandSecondaryDarkest};
`

export const Th = styled.th`
  padding: 30px 20px;
  font-weight: 400;
`

export const Tbody = styled.tbody``

export const Tdata = styled.td`
  margin: 0;
  padding: 20px;
  font-size: 16px;
  text-align: left;
  color: ${colors.brandGrayDarker};

  &.has-wrappable-content {
    code {
      overflow-wrap: break-word;
      white-space: normal;

      @media screen and (min-width: ${breakpoints.large}) {
        overflow-wrap: anywhere;
      }

      @media screen and (min-width: ${breakpoints.xLarge}) {
        overflow-wrap: break-word;
      }

      @media screen and (min-width: ${breakpoints.xxLarge}) {
        overflow-wrap: normal;
        white-space: nowrap;
      }
    }
  }

  code {
    font-size: 12px;
  }
`

export const Trow = styled.tr`
  margin: 0;
  padding: 0;
`
