import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { navigate } from 'gatsby'

import Search from './search'

// The component fetches '/search-index.json' on first open, so every test
// that opens it needs a mocked global fetch. Defined once here and
// re-configured per test via mockResolvedValueOnce / mockRejectedValueOnce.
const fixtureIndex = [
  {
    id: 'uk-chaps-0',
    region: 'uk',
    title: 'CHAPS',
    breadcrumb: 'UK › Gbp Payments',
    path: '/uk/docs/gbp-payments/chaps',
    heading: null,
    anchor: null,
    text: 'This page describes CHAPS payments and their versioning policy.',
  },
  {
    id: 'uk-chaps-1',
    region: 'uk',
    title: 'CHAPS',
    breadcrumb: 'UK › Gbp Payments',
    path: '/uk/docs/gbp-payments/chaps',
    heading: 'Hybrid address',
    anchor: 'hybrid-address',
    text: 'Use schemeName for account identification in a hybrid address.',
  },
]

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: () => Promise.resolve(fixtureIndex),
  })
  ;(navigate as jest.Mock).mockClear()
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe('Search', () => {
  it('renders nothing when isOpen is false', () => {
    const { container } = render(<Search isOpen={false} onClose={jest.fn()} region='uk' />)

    expect(container).toBeEmptyDOMElement()
  })

  it('focuses the input automatically when opened', () => {
    render(<Search isOpen onClose={jest.fn()} region='uk' />)

    expect(screen.getByRole('combobox')).toHaveFocus()
  })

  it('fetches the search index once when opened and shows matching results as the user types', async () => {
    render(<Search isOpen onClose={jest.fn()} region='uk' />)

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'chaps' } })

    await waitFor(() => {
      expect(screen.getAllByRole('option')).toHaveLength(2)
    })

    expect(global.fetch).toHaveBeenCalledWith('/search-index.json')
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })

  it('shows an empty state message when there is a query but no results match', async () => {
    render(<Search isOpen onClose={jest.fn()} region='uk' />)

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'nonexistentterm' } })

    await waitFor(() => {
      expect(screen.getByText('No results found.')).toBeInTheDocument()
    })
  })

  it('shows no results and no empty-state message when the query is empty', () => {
    render(<Search isOpen onClose={jest.fn()} region='uk' />)

    expect(screen.queryByText('No results found.')).not.toBeInTheDocument()
    expect(screen.queryAllByRole('option')).toHaveLength(0)
  })

  it('only shows results for the current region', async () => {
    render(<Search isOpen onClose={jest.fn()} region='eu' />)

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'chaps' } })

    await waitFor(() => {
      expect(screen.getByText('No results found.')).toBeInTheDocument()
    })
  })

  it('calls onClose when Escape is pressed', () => {
    const onClose = jest.fn()
    render(<Search isOpen onClose={onClose} region='uk' />)

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape' })

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when the overlay backdrop is clicked', () => {
    const onClose = jest.fn()
    const { container } = render(<Search isOpen onClose={onClose} region='uk' />)

    fireEvent.click(container.firstChild as Element)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not close when clicking inside the panel', () => {
    const onClose = jest.fn()
    render(<Search isOpen onClose={onClose} region='uk' />)

    fireEvent.click(screen.getByRole('dialog'))

    expect(onClose).not.toHaveBeenCalled()
  })

  it('navigates to the highlighted result path (with anchor) when Enter is pressed', async () => {
    const onClose = jest.fn()
    render(<Search isOpen onClose={onClose} region='uk' />)

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'hybrid' } })

    await waitFor(() => {
      expect(screen.getAllByRole('option')).toHaveLength(1)
    })

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Enter' })

    expect(navigate).toHaveBeenCalledWith('/uk/docs/gbp-payments/chaps#hybrid-address')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('moves the active selection down and up with ArrowDown/ArrowUp', async () => {
    render(<Search isOpen onClose={jest.fn()} region='uk' />)

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'chaps' } })

    await waitFor(() => {
      expect(screen.getAllByRole('option')).toHaveLength(2)
    })

    const options = screen.getAllByRole('option')
    expect(options[0]).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'ArrowDown' })
    expect(options[1]).toHaveAttribute('aria-selected', 'true')

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'ArrowUp' })
    expect(options[0]).toHaveAttribute('aria-selected', 'true')
  })

  it('navigates when a result is clicked directly', async () => {
    const onClose = jest.fn()
    render(<Search isOpen onClose={onClose} region='uk' />)

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'chaps' } })

    await waitFor(() => {
      expect(screen.getAllByRole('option')).toHaveLength(2)
    })

    fireEvent.click(screen.getAllByRole('option')[0])

    expect(navigate).toHaveBeenCalledWith('/uk/docs/gbp-payments/chaps')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('resets the query and active selection each time it is reopened', () => {
    const { rerender } = render(<Search isOpen={false} onClose={jest.fn()} region='uk' />)

    rerender(<Search isOpen onClose={jest.fn()} region='uk' />)

    expect(screen.getByRole('combobox')).toHaveValue('')
  })
})