import styled from 'styled-components'

import { breakpoints } from 'src/components/theme'

export const PageTitle = styled.h1`
  line-height: 46px;
  font-size: 64px;
  font-weight: 600;
`

export const PageSubTitle = styled.p`
  margin-top: 35px;
  line-height: 30px;
  font-size: 24px;
`

export const Row = styled.div`
  display: flex;
`

export const IntroductionContainer = styled.div`
  padding: 45px 45px 35px 45px;
  border-radius: 36px;
  border: 1px solid #8D8BA7;
  flex: 2;
  margin-right: 30px;
`

export const IntroductionContentWrapper = styled.div`
  display: flex;
`

export const IntroductionTitle = styled.h2`
  line-height: 46px;
  font-size: 36px;
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

export const ArticlesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -12.5px -20px;
`

export const GuidesSectionTitle = styled.h3`
  margin-top: 55px;
  line-height: 46px;
  font-size: 36px;
  font-weight: 400;
`