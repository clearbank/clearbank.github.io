import * as Types from './theme.types'

export const fontSizes: Types.FontSizes = {
  xSmall: 18.6,
  small: 15.6,
  base: 25.6,
  medium: 27.6,
  large: 28.6,
  xLarge: 31.6,
  xxLarge: 42
}

export const target = {
  ie: '(-ms-high-contrast: none), (-ms-high-contrast: active)'
}

export const space = [0, 10, 20, 30, 40, 50, 60, 70, 80]

export const themeBreakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xLarge: '1200px',
  xxLarge: '1500px',
  xxxLarge: '1800px'
}

export const breakpoints: Types.Breakpoints = {
  ...themeBreakpoints,
  mobileMenu: '895px'
}

export const getEM = (pixels: number): string => {
  const point = (pixels * 3) / 4

  return `${point / 12}em;`
}

export const getCurrentBreakpoint = (innerWidth: number): string => {
  const getIndex = Object.values(themeBreakpoints).findIndex(
    breakpoint =>
      Math.round(parseInt(getEM(innerWidth).replace('em', ''), 10)) <
      parseInt(getEM(parseInt(breakpoint, 10)).replace('em', ''), 10)
  )

  return getIndex < 0
    ? Object.keys(themeBreakpoints)[Object.keys(themeBreakpoints).length - 1]
    : Object.keys(themeBreakpoints)[getIndex]
}

export const shadows = {
  global: '0 3px 10px rgba(105,176,225,.2)'
}

export const zIndex = {
  header: 1,
  subMenu: 1,
  homeBanner: 0
}

export const borderRadius = {
  global: 5
}

export const easings = {
  easeIn: 'cubic-bezier(0.19, 1, 0.22, 1)'
}

export const widths: Types.Widths = {
  logo: '244px',
  gutter: '20px',
  container: '1400px',
  content: '1200px',
  dropdown: '270px'
}

export const heights: Types.Heights = {
  header: '220px'
}

export const maxWidths: Types.MaxWidths = {
  content: '1200px',
  sidebarRight: '380px',
}

export const fonts: Types.Fonts = {
  body: 'clear-sans-text,arial,sans-serif',
  monospace: 'clear-sans-text,"Roboto Mono",monospace',
  heading: 'clear-sans-text,arial,sans-serif'
}

export const colors = {
  brandDark: '#000',
  brandLight: '#fff',

  // Primary
  brandPrimary: '#FF9A00',
  brandPrimaryDark: '#259098',
  brandPrimaryDarker: '#C95D00',
  brandPrimaryDarkest: '#000',
  brandPrimaryLight: '#000',
  brandPrimaryLighter: '#000',
  brandPrimaryLightest: '#000',

  // Secondary
  brandSecondary: '#6B99DD', // V2
  brandSecondaryDark: '#3389D7',
  brandSecondaryDarker: '#6C7F98',
  brandSecondaryDarkest: '#000000',
  brandSecondaryLight: '#B4D8F1',
  brandSecondaryLighter: '#000',
  brandSecondaryLightest: '#000',

  // Tertiary
  brandTertiary: '#000',
  brandTertiaryDark: '#000',
  brandTertiaryDarker: '#000',
  brandTertiaryDarkest: '#000',
  brandTertiaryLight: '#000',
  brandTertiaryLighter: '#000',
  brandTertiaryLightest: '#000',

  // Gray
  brandGray: '#E0E0E0',
  brandGrayDark: '#8F9DB0',
  brandGrayDarker: '#6C7F98',
  brandGrayDarkest: '#0B2145',
  brandGrayLight: '#F8F8F8',
  brandGrayLighter: '#EBF1F5',
  brandGrayLightest: '#FFFFFF',

  // Green
  brandGreen: '#4EBE7E',
  brandGreenDark: '#178880',
  brandGreenDarker: '#125A66',
  brandGreenDarkest: '#000',
  brandGreenLlight: '#000',
  brandGreenLighter: '#000',
  brandGreenLightest: '#000',

  // Red
  brandRed: '#F95757',
  brandRedDark: '#C22C41',
  brandRedDarker: '#7C0F2F',
  brandRedDarkest: '#000',
  brandRedLight: '#000',
  brandRedLighter: '#000',
  brandRedLightest: '#000',

  // UI
  brandDisabled: '#000',
  brandSuccess: '#4EBE7E',
  brandSuccessDark: '#178880',
  brandWarning: '#FF9A00',
  brandWarningDark: '#C95D00',
  brandDanger: '#F95757',
  brandDangerDark: '#C22C41',
  brandInfo: '#000000',
  brandInfoDark: '#0B2145',
  brandNeutral: '#E0E0E0',
  brandTextPrimary: '#000',
  brandTextSecondary: '#000',
  brandTextDisabled: '#000',

  // NEW COLOURS
  // Names generated from: http://chir.ag/projects/name-that-color/
  downriver: '#000000', // V2
  cornflowerBlue: '#e5e5e5',
  whiteLilac: '#fafbfd',
  frenchPass: '#b3defd',
  nobel: '#b5b5b5',
  alabaster: '#fbfbfb',
  aliceBlue: '#EFF8FF',
  lynch: '#6c7f98',
  ceruleanBlue: '#000000',
  pictonBlue: '#4e99e9',
  emerald: '#00CF8A', // V2
  indigo: '#5644D3', // V2
  red: '#F00000', // V2
  baliHai: '#000000', // V2
  dodgerBlue: '#45B0FF', // V2
  blackSqueeze: '#f3fbfb', // V2
  concrete: '#F2F2F2', // V2
  alto: '#E0E0E0', // V2
  wedgewoodapprox: '#478E96',
  boulderapprox: '#747474',
  mischkaapprox: '#D4D2E3',

  // New branding colours V2 - TODO: these color vars need sorting out
  billionaireBlue: '#000000',
  businessBlue: '#000000',
  bonusBlue: '#f8f8f8',
  highlightAqua: '#3DDED0',
  hoverOrange: '#000000',
  body: '#000000',
  hippieGreen: '#678d4b',
  dustyGray: '#9b9b9b',
  gray: '#7F7F7F',
  richRed: '#D00202'
}

export const httpMethodColors = {
  get: colors.dodgerBlue,
  post: colors.emerald,
  patch: colors.indigo,
  delete: colors.red,
  request: colors.downriver,
  response: colors.gray,
  default: colors.brandDark // fallback
}

export default {
  space,
  colors,
  fonts,
  fontSizes,
  breakpoints: Object.values(themeBreakpoints),
  httpMethodColors
}
