import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './data-row'

import * as Types from './data-row.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const defaultProps: Types.DataRowProps = {
  data: {
    name: 'name',
    type: 'type',
    required: true,
    in: 'in',
    border: 'dashed'
  },
  header: 'header',
  expand: true
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

  test('is not empty', () => {
    expect(root.textContent.length).toBeTruthy()
  })
})
