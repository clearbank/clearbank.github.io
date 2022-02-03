import styled from 'styled-components'
import * as DataRow from 'src/components/data-row/data-row.styles'
import * as MDXComponents from '../mdxComponents/mdx-components.styles'
import * as Table from 'src/components/table/table.styles'

import { colors, breakpoints, fonts } from 'src/components/theme'
export const Container = styled.aside`

  ${MDXComponents.List} {
    margin-bottom: 5px;
  }

  ${MDXComponents.ListItem} {
    font-size: 16px;
    margin-bottom: 0;
  }

  ${DataRow.Description} {
    margin-bottom: 5px;
    font-size: 16px;
  }

  ${DataRow.Header} {
    margin-bottom: 0;
    margin-top: 30px;
  }

  ${DataRow.SubHeader} {
    margin-bottom: 20px;
  }

  // code samples
  ${MDXComponents.Pre} {
    margin: 15px 0 30px 0;
    max-width: 100%;
  }

  ${DataRow.BlockTitle} {
    margin-top: 30px;
    margin-bottom: 5px !important;
  }

  ${DataRow.BlockTitle} + ${DataRow.Header} {
    margin-top: 10px;
  }

  /* Table Stlyes */

  ${Table.Table} {
    margin-top: 15px;
    margin-bottom: 60px;
    width: 100%;
    table-layout: fixed; // take width from td/ths in first tr

    @media screen and (min-width: ${breakpoints.xLarge}) {
        table-layout: auto;
      }
  }

  ${Table.Thead} ${Table.Th} {
    width: auto;

    &:first-child {
      width: 40%;

      @media screen and (min-width: ${breakpoints.xLarge}) {
        width: auto;
      }
    }
  }

  // first-column
  ${Table.Tbody} ${Table.Trow} ${Table.Tdata}:first-child {
    font-size: 13px;
    font-weight: bold;
    font-family: ${fonts.monospace};
    color: ${colors.brandSecondaryDarkest};
  }

  /* Table: IF there are 3 columns, style the middle one. */

  ${Table.Tdata}:nth-last-of-type(2):nth-child(2) {
    font-size: 13px;
    color: ${colors.brandGreenDark};
    font-family: ${fonts.monospace};
  }

`

export const Link: any = styled.a``
export const Version: any = styled.p``
export const Title: any = styled.div``
