import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import Component from './docs-navigation'
import * as Types from './docs-navigation.types'

const buildProps = (currentPath: string): Types.DocsNavigationProps => ({
  currentPath,
  items: [
    {
      menuItem: { id: 'root', slug: '/uk/docs/api', title: 'API' },
      subMenuItems: [
        {
          fields: { id: 'sub', slug: '/uk/docs/api/overview', title: 'Overview' },
          leafMenuItems: [
            { fields: { id: 'leaf', slug: '/uk/docs/api/overview/detail', title: 'Detail' } }
          ]
        }
      ]
    }
  ]
})

test('renders all three levels', () => {
  const { getByText } = render(<Component {...buildProps('/uk/docs/api/overview')} />)

  expect(getByText('API')).toBeInTheDocument()
  expect(getByText('Overview')).toBeInTheDocument()
  expect(getByText('Detail')).toBeInTheDocument()
})

test('marks only the exact current page as aria-current', () => {
  const { getByText } = render(<Component {...buildProps('/uk/docs/api/overview')} />)

  expect(getByText('Overview')).toHaveAttribute('aria-current', 'page')
  expect(getByText('API')).not.toHaveAttribute('aria-current')
  expect(getByText('Detail')).not.toHaveAttribute('aria-current')
})

test('auto-expands every ancestor of the current page on initial render', () => {
  const { getByText } = render(<Component {...buildProps('/uk/docs/api/overview/detail')} />)

  expect(getByText('Detail')).toBeVisible()
})

test('collapses a branch that does not contain the current page', () => {
  const { getByText } = render(<Component {...buildProps('/uk/docs/api')} />)

  expect(getByText('Overview')).not.toBeVisible()
})

test('keyboard/mouse toggling a disclosure button expands and collapses its branch', () => {
  const { getByText, getAllByRole } = render(<Component {...buildProps('/uk/docs/api')} />)

  const [rootToggle] = getAllByRole('button')

  expect(rootToggle).toHaveAttribute('aria-expanded', 'false')
  expect(getByText('Overview')).not.toBeVisible()

  fireEvent.click(rootToggle)

  expect(rootToggle).toHaveAttribute('aria-expanded', 'true')
  expect(getByText('Overview')).toBeVisible()
})

test('shows current-page operations and removes them when navigating to a guide', () => {
  const renderPage = (currentPath: string, showOperation: boolean) => (
    <>
      <section className='page'>
        {showOperation && (
          <h3
            id='create-a-new-account-real'
            className='endpoint-block-title page-menu-entry'
            data-http-method='POST'
          >
            Create a new account (real)
          </h3>
        )}
      </section>

      <Component {...buildProps(currentPath)} />
    </>
  )

  const { getByRole, queryByRole, rerender } = render(
    renderPage('/uk/docs/api/overview', true)
  )

  expect(
    getByRole('link', {
      name: /POST\s+Create a new account \(real\)/i
    })
  ).toHaveAttribute('href', '#create-a-new-account-real')

  rerender(renderPage('/uk/docs/api', false))

  expect(
    queryByRole('link', {
      name: /Create a new account \(real\)/i
    })
  ).not.toBeInTheDocument()

  expect(queryByRole('list', { name: 'API operations' }))
    .not.toBeInTheDocument()
})