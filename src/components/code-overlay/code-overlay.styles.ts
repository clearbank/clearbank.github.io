import styled from 'styled-components'
import * as Types from './code-overlay.types'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const Message = styled.div`
  padding: 22px 42px;
  font-family: 'Roboto Mono', monospace;
  font-size: 13px;
  font-weight: bold;
  background-color: #f2f2f2;

  ${(props: Types.TransitionProps) => {
    const { state } = props

    if (
      state === Types.TransitionState.ENTERING ||
      state === Types.TransitionState.ENTERED
    ) {
      return `
        opacity: 1;
        transition: opacity 0s;
    `
    }
    if (state === Types.TransitionState.EXITING) {
      return `
        opacity: 1;
        transition: opacity 1s;
    `
    }
    if (state === Types.TransitionState.EXITED) {
      return `
        opacity: 0;
        transition: opacity 1s;
    `
    }
  }}
`
