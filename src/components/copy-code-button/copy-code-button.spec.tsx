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

test('copies the exact code and shows the copied state', () => {
  const code = '{\n  "account": "example"\n}\n'

  render(<CopyCodeButton text={code} />)

  const button = screen.getByRole('button', { name: 'Copy code' })

  expect(button).toHaveAttribute('data-state', 'idle')
  expect(button).toHaveAttribute('title', 'Copy code')

  fireEvent.click(button)

  expect(mockCopy).toHaveBeenCalledTimes(1)
  expect(mockCopy.mock.calls[0][0]).toBe(code)
  expect(screen.getByRole('status')).toHaveTextContent('Code copied')
  expect(button).toHaveAttribute('data-state', 'copied')
  expect(button).toHaveAttribute('title', 'Copied!')
})

test('reports a failed copy without displaying success', () => {
  mockCopy.mockReturnValue(false)

  render(<CopyCodeButton text='example' />)

  const button = screen.getByRole('button', { name: 'Copy code' })

  fireEvent.click(button)

  expect(screen.getByRole('status')).toHaveTextContent(
    'Copy failed. Select and copy the code manually.'
  )
  expect(screen.getByRole('status')).not.toHaveTextContent('Code copied')
  expect(button).toHaveAttribute('data-state', 'idle')
})

test('clears feedback and returns to idle after 2.5 seconds', () => {
  render(<CopyCodeButton text='example' />)

  const button = screen.getByRole('button', { name: 'Copy code' })

  fireEvent.click(button)

  act(() => {
    jest.advanceTimersByTime(2499)
  })

  expect(screen.getByRole('status')).toHaveTextContent('Code copied')
  expect(button).toHaveAttribute('data-state', 'copied')

  act(() => {
    jest.advanceTimersByTime(1)
  })

  expect(screen.getByRole('status')).toBeEmptyDOMElement()
  expect(button).toHaveAttribute('data-state', 'idle')
  expect(button).toHaveAttribute('title', 'Copy code')
})

test('copies updated text and clears feedback when the text changes', () => {
  const { rerender } = render(<CopyCodeButton text='original' />)

  fireEvent.click(screen.getByRole('button', { name: 'Copy code' }))

  rerender(<CopyCodeButton text='updated' />)

  const button = screen.getByRole('button', { name: 'Copy code' })

  expect(screen.getByRole('status')).toBeEmptyDOMElement()
  expect(button).toHaveAttribute('data-state', 'idle')

  fireEvent.click(button)

  expect(mockCopy).toHaveBeenCalledTimes(2)
  expect(mockCopy.mock.calls[1][0]).toBe('updated')
  expect(button).toHaveAttribute('data-state', 'copied')
})