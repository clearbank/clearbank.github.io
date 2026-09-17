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

const collapsedSidebarWidth = '72px'

// Falls back to the old compact token for the instant before hydration (SSR
// / first paint), then Layout's ResizeObserver overwrites this custom
// property with the header's real measured height - so every consumer below
// stays correct even when tab titles wrap or the breakpoint changes, instead
// of drifting out of sync with a hardcoded pixel guess.
const headerHeight = `var(--header-height, ${heights.headerCompact})`

export const Wrapper = styled.div<{
  hasLeftNavigation?: boolean
  isLeftSidebarCollapsed?: boolean
}>`
  position: relative;
  display: -ms-grid;
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows:
    ${headerHeight}
    1fr
    auto;
  grid-template-columns: minmax(0, 1fr);   // was: 1fr
  min-height: 95vh; // 100vh unreliable in mobile browsers

  @media screen and (min-width: ${breakpoints.large}) {
    grid-template-areas:
      'header header'
      'content content'
      'footer footer';
    grid-template-rows:
      ${headerHeight}
      1fr
      auto;
    -ms-grid-columns: 1fr;
    // prettier-ignore
    grid-template-columns: minmax(0, 1fr);   // was: 1fr
    min-height: 100vh;
  }

    @media screen and (min-width: ${breakpoints.xLarge}) {
  grid-template-areas:
    'header header'
    '${props =>
      props.hasLeftNavigation ? 'sidebarLeft' : 'content'} content'
    '${props =>
      props.hasLeftNavigation ? 'sidebarLeft' : 'footer'} footer';
  grid-template-rows:
    ${headerHeight}
    1fr
    auto;
  -ms-grid-columns: auto 1fr;
  // prettier-ignore
  grid-template-columns:
    ${props =>
      props.hasLeftNavigation
        ? props.isLeftSidebarCollapsed
          ? collapsedSidebarWidth
          : widths.sidebarLeft
        : '0'}
    minmax(0, 1fr);
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
  background: ${colors.brandLight};
  z-index: 10;
`

export const LeftSidebarWrapper = styled.aside<{ isCollapsed?: boolean }>`
  display: none;
  background: ${colors.brandGrayLight};
  box-shadow: inset -1px 0 0 ${colors.brandGrayLight};

  @media screen and (min-width: ${breakpoints.xLarge}) {
    display: flex;
    flex-direction: column;
    grid-area: sidebarLeft;
    -ms-grid-column: 1;
    -ms-grid-row: 2;
    position: sticky;
    top: ${headerHeight};
    align-self: stretch;
    min-height: calc(100vh - ${headerHeight});
    height: calc(100vh - ${headerHeight});
    max-height: calc(100vh - ${headerHeight});
    overflow: hidden;
    padding: ${props => props.isCollapsed ? '10px 10px' : '10px 12px 24px 16px'};
    z-index: 0;
  }
`

export const RightSidebarWrapper = styled.aside<{ isCollapsed?: boolean }>`
  display: none;
  background: ${colors.brandGrayLight};
  border-left: 1px solid ${colors.brandGray};

  @media screen and (min-width: ${breakpoints.xLarge}) {
    display: flex;
    flex-direction: column;
    max-width: ${maxWidths.sidebarRight};
    grid-area: sidebarRight;
    -ms-grid-column: 3;
    -ms-grid-row: 2;
    position: sticky;
    top: ${headerHeight};
    align-self: start;
    max-height: calc(100vh - ${headerHeight});
    overflow-y: auto;
    padding: ${props => props.isCollapsed ? '40px 8px' : '0'};
  }
`

const SidebarToggleBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  min-width: 48px;
  height: 38px;
  border: none;
  border-radius: 8px;
  background: ${colors.brandGrayDark};
  color: ${colors.brandLight};
  cursor: pointer;
  font-family: ${fonts.body};
  font-size: 18px;
  line-height: 1;
  box-shadow: none;

  &:hover {
    background: ${colors.wedgewoodapprox};
  }

  &:focus-visible {
    outline: 2px solid ${colors.wedgewoodapprox};
    outline-offset: 3px;
  }
`

export const LeftSidebarToggle = styled(SidebarToggleBase)<{ isCollapsed?: boolean }>`
  align-self: ${props => props.isCollapsed ? 'center' : 'flex-end'};
  margin: ${props => props.isCollapsed ? '0 0 16px 0' : '0 0 16px auto'};
`

export const RightSidebarToggle = styled(SidebarToggleBase)`
  align-self: flex-start;
  margin: 0 0 14px 0;
`

export const CollapsedSidebarLabel = styled.span`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  align-self: center;
  margin-top: 16px;
  color: ${colors.brandDark};
  font-family: ${fonts.body};
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`

export const SidebarPanel = styled.div`
  min-width: 0;
  flex: 1 1 auto;
  overflow-y: auto;
`

export const ContentWrapper = styled.article`
  grid-area: content;
  -ms-grid-column: 2;
  -ms-grid-row: 2;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 24px 20px 20px;

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: 32px 60px 20px;
  }

  @media screen and (min-width: ${breakpoints.large}) {
    padding: 32px 30px 40px;
  }

  @media screen and (min-width: ${breakpoints.xLarge}) {
    padding: 40px 60px 40px;
  }

  ${Callout.Container} {
    margin-bottom: 30px;
    max-width: ${widths.content};
  }

  ${EndpointBlock.Container} {
    max-width: ${widths.content};
  }

  ${WebHookPlaceholder.Container} {
    margin-top: 30px;
    max-width: ${widths.content};

    @media screen and (min-width: ${breakpoints.medium}) {
      margin-top: 50px;
    }
  }
`

export const InnerContentWrapper = styled.main`
  flex: 1 1 auto;
  width: 100%;
  max-width: ${widths.content};
  margin-top: 0;
  min-width: 0;

  @media screen and (min-width: ${breakpoints.large}) {
    margin-top: 0;
  }
`

export const FooterWrapper = styled.footer`
  grid-area: footer;
  -ms-grid-column: 1;
  -ms-grid-row: 3;
  background: ${colors.brandLight};

  @media screen and (min-width: ${breakpoints.xLarge}) {
    -ms-grid-column: 2;
  }
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

export const ArticleToolbar = styled.div`
  position: sticky;
  top: ${headerHeight};
  z-index: 1;
  align-self: flex-start;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
  margin: 0 0 16px;
  padding: 8px 0;
  background: ${colors.brandLight};
`

export const OnThisPageDisclosure = styled.div`
  display: inline-block;
  position: relative;
`

export const OnThisPageButton = styled.button`
  display: inline-grid;
  grid-template-columns: auto 16px;
  align-items: center;
  column-gap: 10px;
  min-height: 44px;
  padding: 0 18px;
  border-radius: 10px;
  background: ${colors.brandGrayLight};
  color: ${colors.brandDark};
  cursor: pointer;
  font-family: ${fonts.body};
  font-size: 16px;
  font-weight: 600;
  line-height: 1;
  list-style: none;

  &:after {
    content: '▾';
    display: flex;
    align-items: center;
    line-height: 1;
    transform: translateY(-1px);
  }

  &[aria-expanded='true']:after {
    content: '▴';
    transform: translateY(1px);
  }

  &:focus-visible {
    outline: 2px solid ${colors.wedgewoodapprox};
    outline-offset: 3px;
  }
`

export const OnThisPagePanel = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 3;
  min-width: 320px;
  max-width: 420px;
  max-height: 60vh;
  overflow-y: auto;
  border-radius: 0 0 12px 12px;
  background: ${colors.brandLight};
  border: 1px solid ${colors.brandLight};
  box-shadow: none;

  #pageMenu {
    position: static;
    top: auto;
    max-height: none;
    height: auto;
    padding: 18px 22px;
    border-left: none;
  }

  #pageMenu h5 {
    display: none;
  }
`

export const MobileNavigationOverlay = styled.div`
  position: fixed;
  top: ${headerHeight};
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  display: flex;
  align-items: flex-start;
  background: ${colors.brandGrayLight};

  @media screen and (min-width: ${breakpoints.xLarge}) {
    display: none;
  }
`

export const MobileNavigationDialog = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: calc(100vh - ${headerHeight});
  background: ${colors.brandLight};
  border-bottom: 1px solid ${colors.brandGray};
`

export const MobileNavigationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 0 20px;
  border-bottom: 1px solid ${colors.brandGray};

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: 0 60px;
  }
`

export const MobileNavigationTitle = styled.h2`
  margin: 0;
  color: ${colors.brandDark};
  font-family: ${fonts.body};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
`

export const MobileNavigationCloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-right: -10px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: ${colors.brandDark};
  cursor: pointer;
  font-family: ${fonts.body};
  font-size: 28px;
  line-height: 1;

  &:hover {
    background: ${colors.brandGrayLight};
  }

  &:focus-visible {
    outline: 2px solid ${colors.wedgewoodapprox};
    outline-offset: 2px;
  }
`

export const MobileNavigationContent = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  padding: 20px;

  @media screen and (min-width: ${breakpoints.medium}) {
    padding: 24px 60px;
  }
`