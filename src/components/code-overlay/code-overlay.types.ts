export interface CodeOverlayProps {
  showCodeOverlay: boolean
  message: string
}

export interface TransitionProps {
  state: TransitionState
}

export enum TransitionState {
  ENTERING = 'entering',
  ENTERED = 'entered',
  EXITING = 'exiting',
  EXITED = 'exited'
}
