import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './endpoint-block'

import * as Types from './endpoint-block.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const defaultProps: Types.EndpointProps = {
  title: 'title2',
  path: 'path',
  type: 'type',
  boxProps: {},
  endpoints: []
}

beforeEach(() => {
  component = render(<Component {...defaultProps} children='children' />)

  fragment = component.asFragment()
  root = component.container.firstChild
})

afterEach(() => {
  fragment = null
  root = null
})

describe('Component', () => {
  test('matches snapshot', () => {
    expect(root).toMatchSnapshot()
  })
})
