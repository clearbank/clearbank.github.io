import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './layout'

import * as Types from './layout.types'

let component: any = null
const defaultProps:Types.LayoutProps = {
  children: '<div></div>',
  location: {
    pathname: '/',
    hash: ''
  },
  data: {},
  pageContext: {
    menuItems: [],
  }
}

beforeEach(() => {
  component = render(<Component {...defaultProps} />)
})

describe('Component', () => {
  test('matches snapshot', () => {
    expect(component.asFragment()).toMatchSnapshot()
  })

  test('closes On this page after selecting a heading and restores focus', () => {
  component.unmount()

  const { getByRole, queryByRole } = render(
    <Component
      {...defaultProps}
      data={{
        mdx: {
          frontmatter: {
            showPageMenu: true
          }
        }
      }}
    >
      <section className='page' id='doc-page-test'>
        <h2 id='test-heading' className='page-menu-entry'>
          Test heading
        </h2>
      </section>
    </Component>
  )

  const button = getByRole('button', { name: 'On this page' })

  fireEvent.click(button)

  expect(button).toHaveAttribute('aria-expanded', 'true')

  const link = getByRole('link', { name: 'Test heading' })

  expect(link).toHaveAttribute('href', '#test-heading')

  fireEvent.click(link)

  expect(button).toHaveAttribute('aria-expanded', 'false')
  expect(
    queryByRole('link', { name: 'Test heading' })
  ).not.toBeInTheDocument()
  expect(button).toHaveFocus()
})
})
