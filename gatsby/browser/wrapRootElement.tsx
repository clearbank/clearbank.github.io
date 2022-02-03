import React from 'react'
import { ViewportProvider } from '../../src/context/viewport'
import { LocationProvider } from '@reach/router'

const wrapRootElement = ({ element }): JSX.Element => (
  <LocationProvider>
    <ViewportProvider>{element}</ViewportProvider>
  </LocationProvider>
)

export default wrapRootElement
