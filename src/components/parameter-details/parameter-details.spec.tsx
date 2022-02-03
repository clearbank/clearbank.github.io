import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './parameter-details'

import * as Types from './parameter-details.types'

let component: any = null
const defaultProps: Types.ParameterDetailsProps = {
  parameter: {
    name: 'name',
    type: 'type',
    location: 'header',
    required: true,
    methods: ['post'],
    body: 'body',
    example: null
  }
}

beforeEach(() => {
  component = render(<Component {...defaultProps} />)
})

describe('Component', () => {
  test('matches snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })
})
