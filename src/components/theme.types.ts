export type BreakpointSize =
  | 'small'
  | 'medium'
  | 'large'
  | 'xLarge'
  | 'xxLarge'
  | 'xxxLarge'
  | 'mobileMenu'

export type Breakpoints = { [option in BreakpointSize]: string }

export type FontSizeOption =
  | 'xSmall'
  | 'small'
  | 'base'
  | 'medium'
  | 'large'
  | 'xLarge'
  | 'xxLarge'

export type FontSizes = { [option in FontSizeOption]: number }

export type WidthOption =
  | 'container'
  | 'gutter'
  | 'sidebarRight'
  | 'logo'
  | 'content'
  | 'dropdown'

export type Widths = { [option in WidthOption]: string }

export type MaxWidthOption =
  | 'content'
  | 'sidebarRight'

export type MaxWidths = { [option in MaxWidthOption]: string }

export type HeightOption = 'header'

export type Heights = { [option in HeightOption]: string }

export type ColorOptionStates =
  | 'dark'
  | 'light'
  | 'disabled'
  | 'success'
  | 'successDark'
  | 'warning'
  | 'warningDark'
  | 'danger'
  | 'dangerDark'
  | 'info'
  | 'infoDark'
  | 'neutral'

export type ColorOptionType =
  | 'primary'
  | 'secondary'
  | 'grey'
  | 'default'
  | 'red'
  | 'text'

export type ColorOptionShade =
  | 'default'
  | 'primary'
  | 'dark'
  | 'darker'
  | 'darkest'
  | 'light'
  | 'lighter'
  | 'lightest'
  | 'secondary'
  | 'disabled'

export type Colors =
  | { [option in ColorOptionStates]: string }
  | { [option in ColorOptionType]: { [option in ColorOptionShade]?: string } }

export type ColorStates = { [option in ColorOptionStates]: string }
export type ColorOptionTypes = {
  [option in ColorOptionType]: { [option in ColorOptionShade]?: string }
}
