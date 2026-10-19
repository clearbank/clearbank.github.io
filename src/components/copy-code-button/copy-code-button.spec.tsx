import React from 'react'
import {
  act,
  cleanup,
  fireEvent,
  render,
  screen
} from '@testing-library/react'

import CopyCodeButton from './copy-code-button'

jest.mock('copy-to-clipboard', () => jest.fn())

const mockCopy: jest.Mock = require('copy-to-clipboard')

beforeEach(() => {
  jest.useFakeTimers()
  mockCopy.mockReset()
  mockCopy.mockReturnValue(true)
})

afterEach(() => {
  cleanup()
  jest.clearAllTimers()
  jest.useRealTimers()
})

test('copies the exact code, including indentation and newlines', () => {
  const code = '{\n  "account": "example"\n}\n'

  render(<CopyCodeButton text={code} />)
  fireEvent.click(screen.getByRole('button', { name: 'Copy code' }))

  expect(mockCopy.mock.calls[0][0]).toBe(code)
  expect(screen.getByRole('status')).toHaveTextContent('Code copied')
})

test('reports a failed copy without displaying success', () => {
  mockCopy.mockReturnValue(false)

  render(<CopyCodeButton text='example' />)
  fireEvent.click(screen.getByRole('button', { name: 'Copy code' }))

  expect(screen.getByRole('status')).toHaveTextContent(
    'Copy failed. Select and copy the code manually.'
  )
  expect(screen.getByRole('status')).not.toHaveTextContent('Code copied')
})

test('clears feedback after 2.5 seconds', () => {
  render(<CopyCodeButton text='example' />)
  fireEvent.click(screen.getByRole('button', { name: 'Copy code' }))

  act(() => {
    jest.advanceTimersByTime(2499)
  })

  expect(screen.getByRole('status')).toHaveTextContent('Code copied')

  act(() => {
    jest.advanceTimersByTime(1)
  })

  expect(screen.getByRole('status')).toBeEmptyDOMElement()
})

test('copies updated text and clears feedback when the text changes', () => {
  const { rerender } = render(<CopyCodeButton text='original' />)

  fireEvent.click(screen.getByRole('button', { name: 'Copy code' }))

  rerender(<CopyCodeButton text='updated' />)

  expect(screen.getByRole('status')).toBeEmptyDOMElement()

  fireEvent.click(screen.getByRole('button', { name: 'Copy code' }))

  expect(mockCopy.mock.calls[1][0]).toBe('updated')
})