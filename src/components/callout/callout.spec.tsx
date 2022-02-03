import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './callout'

import * as Types from './callout.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const defaultProps: Types.CalloutProps = {
  colour: 'blue'
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

  test('has attributes from props', () => {
    expect(root).toHaveAttribute('color')
  })

  test('has no attributes if missing props', () => {
    component.rerender(<Component />)

    expect(root).not.toHaveAttribute('color')
  })

  test('is not empty', () => {
    expect(fragment.textContent.length).toBeTruthy()
  })
})
