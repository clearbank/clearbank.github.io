import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './scope-summary'

let component: any = null

beforeEach(() => {
  component = render(<Component region='uk' />)
})

describe('Component', () => {
  test('matches snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
