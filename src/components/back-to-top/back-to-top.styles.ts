import styled, { css } from 'styled-components'

import { colors } from 'src/components/theme'
import {
  animationButtonIn,
  animationButtonOut
} from 'src/components/clearbank-ui/styles'

const transitionDuration = '0.5s'

export const Container = styled.div`
  position: fixed;
  bottom: 40px;
  right: 10px;
  will-change: visibility, opacity, transition;
  cursor: default;
  visibility: hidden;
  opacity: 0;

  // wait transitionDuration before changing visibility since visibility is not animatable
  transition: visibility 0s linear ${transitionDuration},
    opacity ${transitionDuration};

  ${({ isVisible }) =>
    isVisible &&
    css`
      cursor: pointer;
      visibility: visible;
      opacity: 1;
      // change visibility right away then transition opacity
      transition: visibility 0s linear 0s, opacity ${transitionDuration};
    `}
`

export const Button = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  text-align: center;
  box-shadow: 0 5px 10px 0 rgba(73, 151, 222, 0.2);
  background: ${colors.brandLight};
  color: ${colors.ceruleanBlue};
  overflow: hidden;
  outline: none;
  cursor: inherit;
  transition: all ${transitionDuration};

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
  font-size: 24px;

  // hover on parent
  ${Button}:hover & {
    animation: ${animationButtonIn} 0.15s ease-in,
      ${animationButtonOut} 0.15s 0.15s ease-out;
  }
`
