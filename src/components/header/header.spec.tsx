import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './header'

import * as Types from './header.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const defaultProps: Types.HeaderProps = {
  menuItems: [],
  currentPageURL: '/'
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

  test('has attributes from props', () => {
    expect(root.classList.contains('header')).toBe(true)
  })

  test('has child elements', () => {
    expect(root.querySelectorAll('a').length).toBeGreaterThanOrEqual(1)
    expect(root.querySelectorAll('button').length).toBeGreaterThanOrEqual(1)
  })

  test('has currentPageURL attribute from props', () => {
    expect(root.querySelector('a')).toHaveAttribute('href')
    expect(
      root.querySelectorAll(`a[href="${defaultProps.currentPageURL}"]`).length
    ).toBeTruthy
  })
})
