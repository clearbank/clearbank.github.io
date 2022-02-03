import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './code-overlay'

import * as Types from './code-overlay.types'

jest.mock('react-transition-group', () => {
  const FakeTransition = jest.fn(props => {
    return props.in ? <div>Children</div> : null
  })

  return { Transition: FakeTransition }
})

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const defaultProps: Types.CodeOverlayProps = {
  showCodeOverlay: true,
  message: 'overlay message'
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

  test('has children when showCodeOverlay is true', () => {
    expect(root.hasChildNodes()).toBeTruthy()
    expect(root.textContent.toLowerCase().includes('children')).toBeTruthy()
  })

  test('has no children when showCodeOverlay is false', () => {
    component.rerender(
      <Component showCodeOverlay={false} message={defaultProps.message} />
    )

    expect(root.hasChildNodes()).toBeFalsy()
    expect(root.textContent.toLowerCase().includes('children')).toBeFalsy()
    expect(root.textContent.length).toBeFalsy()
  })
})
