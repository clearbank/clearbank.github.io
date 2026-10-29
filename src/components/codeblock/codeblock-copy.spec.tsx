import React from 'react'
import { render, screen } from '@testing-library/react'

import Codeblock from './codeblock'
import { CodeblockProps } from './codeblock.types'

const example: CodeblockProps['codeblock'] = {
  title: 'Request',
  codeSnippet: '{"account":"example"}',
  section: 'request',
  language: 'json',
  color: 'red'
}

test('shows the copy button by default', () => {
  render(<Codeblock codeblock={example} />)

  expect(
    screen.getByRole('button', { name: 'Copy code' })
  ).toBeInTheDocument()
})

test('shows the copy button when explicitly enabled', () => {
  render(<Codeblock codeblock={{ ...example, copyCode: true }} />)

  expect(
    screen.getByRole('button', { name: 'Copy code' })
  ).toBeInTheDocument()
})

test('hides the copy button when explicitly disabled', () => {
  render(<Codeblock codeblock={{ ...example, copyCode: false }} />)

  expect(
    screen.queryByRole('button', { name: 'Copy code' })
  ).not.toBeInTheDocument()
})