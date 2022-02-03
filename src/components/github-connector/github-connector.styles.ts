import styled from 'styled-components'

import { colors } from 'src/components/theme'

import {
  animationButtonIn,
  animationButtonOut
} from 'src/components/clearbank-ui/styles'

const transitionDuration = '0.5s'

// todo: replace with new button design from new styleguide once available
export const ShareLink = styled.a`
  display: block;
  height: 40px;
  width: 40px;
  background-color: ${colors.brandGrayLightest};
  color: ${colors.businessBlue};
  border-radius: 50%;
  transition: all ${transitionDuration};
  overflow: hidden;

  &:hover {
    background: ${colors.brandSecondaryDarkest};
    color: ${colors.brandLight};
  }

  &:focus,
  &:active {
    background: ${colors.brandInfoDark};
    color: ${colors.brandLight};
  }
`

export const Icon = styled.i`
  display: block;
  padding: 10px;
  font-size: 20px;

  // hover on parent
  ${ShareLink}:hover & {
    animation: ${animationButtonIn} 0.15s ease-in,
      ${animationButtonOut} 0.15s 0.15s ease-out;
  }
`
