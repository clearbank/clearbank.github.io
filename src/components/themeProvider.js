import * as React from 'react'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import { default as defaultTheme } from './theme'

import './styles.css'
import '../assets/fonts/fonts.css'

export default function ThemeProvider ({ children, theme = {}, location }) {
  return (
    <EmotionThemeProvider theme={{ ...defaultTheme, ...theme }}>
      {children}
    </EmotionThemeProvider>
  )
}
