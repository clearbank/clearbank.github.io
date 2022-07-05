import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './github-connector'

import * as Types from './github-connector.types'

// Mock popover element
jest.mock('element-react/dist/npm/es6/src/popover', () => {
  const Popover = props => <div className='popover-element'>{props.children}</div>

  return Popover
})

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const defaultProps: Types.GithubConnectorProps = {
  filePath: 'file/path.mdx'
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

  test('has child elements', () => {
    expect(root.hasChildNodes()).toBeTruthy()
  })

  test('has filePath attribute from props', () => {
    expect(root.querySelector('a')).toHaveAttribute('href')
    expect(root.querySelectorAll(`[href="${defaultProps.filePath}"]`).length)
      .toBeTruthy
  })

  test('has target _blank attribute', () => {
    expect(root.querySelector('a')).toHaveAttribute('target')
    expect(root.querySelectorAll('[target="_blank"]').length).toBeTruthy
  })

  test('has correct icon', () => {
    expect(root.querySelectorAll('.cb-icon-edit').length).toBeTruthy
    expect(root.querySelector('.cb-icon-edit').tagName.toLowerCase()).toBe('i')
  })
})
