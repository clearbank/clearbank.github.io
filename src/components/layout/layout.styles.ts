import styled from 'styled-components'
import {
  breakpoints,
  colors,
  widths,
  heights,
  fonts,
  maxWidths
} from 'src/components/theme'

import * as Callout from 'src/components/callout/callout.styles'
import * as EndpointBlock from 'src/components/endpoint-block/endpoint-block.styles'
import * as WebHookPlaceholder from 'src/components/webhook-placeholder/webhook-placeholder.styles'

export const Wrapper = styled.div`
  display: -ms-grid;
  display: grid;
  grid-template-areas:
    'header'
    'sidebarLeft'
    'sidebarRight'
    'content'
    'footer';
  grid-template-rows:
    ${heights.header}
    auto
    auto
    1fr
    auto;
  grid-template-columns: 1fr;
  min-height: 95vh; // 100vh unreliable in mobile browsers

  @media screen and (min-width: ${breakpoints.large}) {
    grid-template-areas:
      'header      header  header'
      'sidebarLeft content sidebarRight'
      'sidebarLeft footer  footer';
    grid-template-rows:
      ${heights.header}
      1fr
      auto;
    -ms-grid-columns: ${widths.sidebarLeft} 1fr auto;
    // prettier-ignore
    grid-template-columns: ${widths.sidebarLeft} 1fr auto;
    min-height: 100vh;
  }

  // emulate max-width on content by setting a fixed width and make right sidebar to fill the remaining availale space
  @media screen and (min-width: ${breakpoints.xxxLarge}) {
    -ms-grid-columns: ${widths.sidebarLeft} 1fr auto;
    // prettier-ignore
    grid-template-columns: ${widths.sidebarLeft} ${maxWidths.content} 1fr;
  }
`

export const HeaderWrapper = styled.header`
  grid-area: header;
  -ms-grid-column: 1;
  -ms-grid-column-span: 3;
  -ms-grid-row: 1;
  position: fixed;
  left: 0;
  right: 0;
  background: ${colors.downriver};
  z-index: 1;
`

export const LeftSidebarWrapper = styled.nav`
  grid-area: sidebarLeft;
  -ms-grid-column: 1;
  -ms-grid-row-span: 2;
  -ms-grid-row: 2;
  background: ${colors.brandGrayLightest};
  display: none;

  @media screen and (min-width: ${breakpoints.large}) {
    display: block;
  }
`

export const ContentWrapper = styled.article`
  grid-area: content;
  -ms-grid-column: 2;
  -ms-grid-row: 2;
  display: flex;
  padding: 20px;
  min-width: 0;

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: 20px 60px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    padding: 40px 30px 40px 30px;
  }

  @media screen and (min-width: ${breakpoints.xLarge}) {
    padding: 40px 60px 40px 60px;
  }

  ${Callout.Container} {
    margin-bottom: 30px;
  }

  ${EndpointBlock.Container} {
    max-width: 970px;
  }

  ${WebHookPlaceholder.Container} {
    margin-top: 30px;
    max-width: ${widths.content};

    @media screen and (min-width: ${breakpoints.medium}) {
      margin-top: 50px;
    }
  }
`

export const RightSidebarWrapper = styled.aside`
  grid-area: sidebarRight;
  -ms-grid-column: 3;
  -ms-grid-row: 2;
  padding: 60px 20px 40px 20px;

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: 80px 60px 40px 60px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    padding: 0 60px 0 0;
    min-width: ${widths.sidebarRight}; // prevent sidebar-collapse on pages without sidebar
    box-sizing: content-box; // add padding to min-width
  }

  @media screen and (min-width: ${breakpoints.xLarge}) {
    padding: 0 100px 0 0;
  }
`
export const InnerContentWrapper = styled.main`
  flex: 1 1 auto;
  margin-top: 0;
  min-width: 0;

  @media screen and (min-width: ${breakpoints.large}) {
    margin-top: 0;
  }
`

export const FooterWrapper = styled.footer`
  grid-area: footer;
  -ms-grid-column: 2;
  -ms-grid-column-span: 2;
  -ms-grid-row: 3;
`

export const PageHeader = styled.h1`
  font-family: ${fonts.body};
  font-weight: 700;
  font-size: 27.5px;
  color: ${colors.baliHai};
  line-height: 19px;
  margin-bottom: 50px;

  @media screen and (min-width: ${breakpoints.large}) {
    display: none;
  }
`
