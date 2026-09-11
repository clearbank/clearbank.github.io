import React, { useState, useEffect, useRef, useCallback } from 'react'
import { navigate } from 'gatsby'

import * as Styles from './search.styles'
import { SearchProps } from './search.types'
import { filterAndRankResults, SearchResult, SearchIndexItem } from './search.utils'

const Search: React.FunctionComponent<SearchProps> = ({ isOpen, onClose, region }) => {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState<SearchIndexItem[] | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const inputRef = useRef<HTMLInputElement>(null)
  const previouslyFocusedElement = useRef<HTMLElement | null>(null)

  const results: SearchResult[] = index ? filterAndRankResults(index, query, region) : []

  // Lazy-fetch the static index the first time the modal is opened, not on
  // every page load. `index` stays `null` (not an empty array) until the
  // fetch resolves, so we can distinguish "not loaded yet" from "loaded but
  // no results" in the render below.
  useEffect(() => {
    if (isOpen && index === null) {
      fetch('/search-index.json')
        .then(response => response.json())
        .then(setIndex)
        .catch(() => setIndex([])) // fail closed: treat a fetch error as "no results", never break the page
    }
  }, [isOpen, index])

  // Reset transient state and manage focus whenever the modal opens/closes.
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement
      setQuery('')
      setActiveIndex(0)
      inputRef.current?.focus()
    } else {
      previouslyFocusedElement.current?.focus()
    }
  }, [isOpen])

  // Keep the active selection in range whenever the result set changes size
  // (e.g. the user keeps typing and the list shrinks).
  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  const handleSelect = useCallback((result: SearchResult) => {
    const destination = result.anchor ? `${result.path}#${result.anchor}` : result.path
    onClose()
    navigate(destination)
  }, [onClose])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActiveIndex(current => Math.min(current + 1, results.length - 1))
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActiveIndex(current => Math.max(current - 1, 0))
      return
    }

    if (event.key === 'Enter' && results[activeIndex]) {
      event.preventDefault()
      handleSelect(results[activeIndex])
    }
  }

  if (!isOpen) return null

  return (
    <Styles.Overlay onClick={onClose} data-cy='search-overlay'>
      <Styles.Panel
        role='dialog'
        aria-modal='true'
        aria-label='Search documentation'
        onClick={event => event.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <Styles.InputWrapper>
          <Styles.Input
            ref={inputRef}
            type='text'
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder='Search documentation…'
            aria-label='Search documentation'
            aria-activedescendant={results[activeIndex] ? `search-result-${results[activeIndex].id}` : undefined}
            aria-controls='search-results-list'
            aria-autocomplete='list'
            role='combobox'
            aria-expanded={results.length > 0}
            data-cy='search-input'
          />
        </Styles.InputWrapper>

        {/* Live region so screen readers announce result-count changes as the user types. */}
        <div aria-live='polite' style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden' }}>
          {query.trim().length > 0 && `${results.length} result${results.length === 1 ? '' : 's'} found`}
        </div>

        {query.trim().length > 0 && results.length === 0 && (
          <Styles.EmptyState>No results found.</Styles.EmptyState>
        )}

        <Styles.ResultsList id='search-results-list' role='listbox' data-cy='search-results'>
          {results.map((result, resultIndex) => (
            <Styles.ResultItem
              key={result.id}
              id={`search-result-${result.id}`}
              role='option'
              aria-selected={resultIndex === activeIndex}
              isActive={resultIndex === activeIndex}
              onMouseEnter={() => setActiveIndex(resultIndex)}
              onClick={() => handleSelect(result)}
              data-cy='search-result-item'
            >
              <Styles.ResultBreadcrumb>{result.breadcrumb}</Styles.ResultBreadcrumb>
              <Styles.ResultTitle>{result.heading || result.title}</Styles.ResultTitle>
              <Styles.ResultSnippet>{result.snippet}</Styles.ResultSnippet>
            </Styles.ResultItem>
          ))}
        </Styles.ResultsList>
      </Styles.Panel>
    </Styles.Overlay>
  )
}

export default Search