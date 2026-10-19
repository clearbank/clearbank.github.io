import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import ReactLiveProvider from './LiveProvider'

jest.mock('copy-to-clipboard', () => jest.fn())

jest.mock('react-live', () => {
  const React = require('react')

  return {
    LiveProvider: ({ children }) => <div>{children}</div>,
    LiveEditor: ({ onChange }) => (
      <textarea
        aria-label='Code editor'
        onChange={event => onChange(event.target.value)}
      />
    ),
    LiveError: () => null,
    LivePreview: () => null
  }
})

const mockCopy: jest.Mock = require('copy-to-clipboard')

beforeEach(() => {
  mockCopy.mockReset()
  mockCopy.mockReturnValue(true)
})

test('copies the initial example', () => {
  render(<ReactLiveProvider code='const value = 1;' />)

  fireEvent.click(screen.getByRole('button', { name: 'Copy code' }))

  expect(mockCopy.mock.calls[0][0]).toBe('const value = 1;')
})

test('copies edited code instead of the original example', () => {
  render(<ReactLiveProvider code='const value = 1;' />)

  fireEvent.change(screen.getByRole('textbox', { name: 'Code editor' }), {
    target: { value: 'const value = 2;' }
  })

  fireEvent.click(screen.getByRole('button', { name: 'Copy code' }))

  expect(mockCopy.mock.calls[0][0]).toBe('const value = 2;')
})