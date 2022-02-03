import styled from 'styled-components'

import { breakpoints, fonts, colors } from 'src/components/theme'

export const Title = styled.h1`
  margin-top: 40px;
  font-family: ${fonts.body};
  font-weight: 700;
  font-size: 15px;
  color: ${colors.baliHai};
  line-height: 19px;
  display: none;

  @media screen and (min-width: ${breakpoints.medium}) {
    margin-top: 0px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    display: block;
  }
`

export const Page = styled.section`
  position: relative;
  scroll-margin-top: 90px;

  & + & {
    margin-top: 60px;
  }

  &:first-of-type > h2:first-of-type {
    font-size: 27.5px;
    line-height: 62px;
    margin-bottom: 30px;

    @media screen and (min-width: ${breakpoints.medium}) {
      font-size: 55px;
    }
  }
`

export const ShareContainer = styled.div`
  position: absolute;
  right: 0;
  // first headline has larger margin top
  top: ${({ isFirstEntry }) => (isFirstEntry ? '15px' : '3px;')};
`
