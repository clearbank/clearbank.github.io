import styled from 'styled-components'

import { breakpoints } from 'src/components/theme'

export const Container = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: 50px 0 40px 0;
  padding-top: 15px;

  @media screen and (min-width: ${breakpoints.medium}) {
    padding-top: 60px;
    flex-wrap: nowrap;
  }
`
