import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import mdxComponents from './index'
import webhookComponents from
  '../webhook-placeholder/webhook-placeholder-mdx-components'

jest.mock('copy-to-clipboard', () => jest.fn())

const mockCopy: jest.Mock = require('copy-to-clipboard')

beforeEach(() => {
  mockCopy.mockReset()
  mockCopy.mockReturnValue(true)
})

const mappings = [
  { name: 'documentation', components: mdxComponents },
  { name: 'webhook', components: webhookComponents }
]

mappings.forEach(({ name, components }) => {
  describe(`${name} code rendering`, () => {
    test('copies fenced code without nesting pre elements', () => {
      const Pre = components.pre
      const Code = components.code
      const code = 'const account = "example";\n'

      const { container } = render(
        <Pre>
          <Code className='language-javascript'>{code}</Code>
        </Pre>
      )

      fireEvent.click(screen.getByRole('button', { name: 'Copy code' }))

      expect(mockCopy.mock.calls[0][0]).toBe(code)
      expect(container.querySelectorAll('pre')).toHaveLength(1)
      expect(container.querySelector('pre pre')).toBeNull()
      expect(container.querySelector('pre button')).toBeNull()
    })

    test('keeps inline code without a copy button', () => {
      const Code = components.code

      const { container } = render(
        <p>
          Use <Code>accountId</Code> here.
        </p>
      )

      expect(container.querySelector('code')).toHaveTextContent('accountId')
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
  })
})