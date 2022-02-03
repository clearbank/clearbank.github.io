import styled from 'styled-components'
import Link from '../../components/link'
import { breakpoints, fonts, colors, widths, themeBreakpoints } from 'src/components/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${themeBreakpoints.large}) {
    flex-grow: 0;
  }
`

export const LogoWrapper = styled(Link)`
  display: flex;
  height: 100%;
  padding: 0 14px 0 12px;
  align-items: center;
  margin-left: 40px;
  min-height: 60px;


  svg {
    display: block;
    width: ${widths.logo};
  }
`

export const ContentWrapper = styled.div`
    margin: 130px 0 0 100px;
    width: 75%;
    display: flex;
    flex-direction: column;

    p {
        color: ${colors.body};
        font-size: 24px;
    }

    img {
        margin-top: 100px;
        width: 90%;
    }

    @media (min-width: ${themeBreakpoints.large}) {
        margin: 260px 0 0 160px;
        width: 1120px;
        flex-direction: row;

        img {
            margin-top: 0;
            max-width: 50%;
            object-fit: contain;
        }
    }
`

export const Content = styled.div`
    width: 100%;

    @media (min-width: ${themeBreakpoints.medium}) {
       width: 472px;
    }
`

export const Title = styled.h1`
  margin-top: 40px;
  font-family: ${fonts.heading};
  font-weight: 800;
  color: ${colors.downriver};
  font-size: 50px;
  line-height: 77px;

  @media screen and (min-width: ${breakpoints.medium}) {
    font-size: 80px;
  }
`

export const H2 = styled.h2`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 27.5px;
  line-height: 40px;
  font-weight: 800;
  color: ${colors.downriver};
  font-family: ${fonts.heading};

  &:not(:first-of-type) {
    margin-top: 60px;
  }

  @media screen and (min-width: ${breakpoints.medium}) {
    font-size: 35px;
  }
`