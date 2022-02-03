import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './logo'

import * as Types from './logo.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const defaultProps: Types.LogoProps = {
  inverted: true,
  width: '200px'
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

  test('has children', () => {
    expect(root.hasChildNodes()).toBeTruthy()
  })

  test('has width attribute from props', () => {
    expect(root).toHaveAttribute('width')
    expect(root.getAttribute('width')).toBe(defaultProps.width)
  })

  test.skip('inverted props changes class', () => {
    component.rerender(<Component inverted={false} width='200px' />)
  })
})
