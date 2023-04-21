import styled from 'styled-components'

import { breakpoints, colors, heights } from 'src/components/theme'

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
  scroll-margin-top: ${heights.header};

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

export const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -12.5px -20px;
`

export const GitHubSectionContainer = styled.div`
  display: flex;
  margin-left: 30px;
  align-items: center;
`

export const GitHubSectionDescription = styled.p`
  margin-left: 10px;
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.brandDark};
`

export const SectionTitle = styled.h3`
  margin-top: 55px;
  line-height: 46px;
  font-size: 36px;
  font-weight: 400;
`

export const TableWrapper = styled.div`
margin-left: 30px;
border-radius: 25px;
  max-height: 270px;
  overflow-y: scroll;
  margin-bottom: 40px;
  // scroll-margin: 20px;
  scroll-margin-right: 30px;

  &::-webkit-scrollbar {
    width: 18px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    height: 115px;
    background-color: #444444;
    opacity: 0.7;
    border-radius: 45px;
  }
`

export const Table = styled.table`
  background-color: #F3F3F3;
  border-collapse: collapse;
  border: none;
`

export const TableTitleCell = styled.td`
  width: 60%;
  padding: 25px;
  line-height: 38px;
  font-size: 24px;
  border-right: 4px solid #BCBCBC;
  border-bottom: 4px solid #BCBCBC;
`
export const TableDateCell = styled(TableTitleCell)`
  text-align: center;
  width: none;
  border-right: none;
`