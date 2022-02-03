import { keyframes } from 'styled-components'

export const animationButtonIn = keyframes`
  0% {
    transform: translateY(0);
  } to {
    transform: translateY(-100%);
  }
`

export const animationButtonOut = keyframes`
  0% {
    transform: translateY(100%);
  } to {
    transform: translateY(0);
  }
`
