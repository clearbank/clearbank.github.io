import React, { useMemo, useState } from 'react';
import technicalReferenceTerms from '../../data/technical-reference';

const getDisplayName = item => {
  if (!item.acronym) {
    return item.term;
  }

  return `${item.term} (${item.acronym})`;
};

const getLetter = item => {
  const firstCharacter = String(item.term || '')
    .charAt(0)
    .toUpperCase();

  if (/^[A-Z]$/.test(firstCharacter)) {
    return firstCharacter;
  }

  return '0-9';
};

const getLetterId = letter => {
  if (letter === '0-9') {
    return 'technical-reference-0-9';
  }

  return `technical-reference-${letter.toLowerCase()}`;
};

const getArrayText = value => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map(item => {
    if (typeof item === 'string') {
      return item;
    }

    if (item && typeof item === 'object') {
      return [
        item.title,
        item.label,
        item.name,
        item.value,
        item.code,
        item.description,
      ]
        .filter(Boolean)
        .join(' ');
    }

    return '';
  });
};

const buildSearchText = item => {
  return [
    item.term,
    item.acronym,
    item.definition,
    item.category,
    item.note,
    ...(item.aliases || []),
    ...getArrayText(item.usedIn),
    ...getArrayText(item.acceptedValues),
    ...getArrayText(item.examples),
    ...getArrayText(item.notes),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
};

const TechnicalReference = ({ region }) => {
  const [query, setQuery] = useState('');

  const regionalTerms = useMemo(() => {
    return technicalReferenceTerms
      .filter(item => {
        return (
          item &&
          item.id &&
          item.term &&
          Array.isArray(item.regions) &&
          item.regions.includes(region)
        );
      })
      .sort((firstItem, secondItem) => {
        return firstItem.term.localeCompare(
          secondItem.term,
          'en-GB',
          {
            sensitivity: 'base',
          }
        );
      });
  }, [region]);

  const filteredTerms = useMemo(() => {
    const searchQuery = query
      .trim()
      .toLowerCase();

    if (!searchQuery) {
      return regionalTerms;
    }

    return regionalTerms.filter(item => {
      return buildSearchText(item).includes(
        searchQuery
      );
    });
  }, [query, regionalTerms]);

  const groupedTerms = useMemo(() => {
    return filteredTerms.reduce(
      (groups, item) => {
        const letter = getLetter(item);

        if (!groups[letter]) {
          groups[letter] = [];
        }

        groups[letter].push(item);

        return groups;
      },
      {}
    );
  }, [filteredTerms]);

  const availableLetters = useMemo(() => {
    return Object.keys(groupedTerms).sort(
      (firstLetter, secondLetter) => {
        if (firstLetter === '0-9') {
          return 1;
        }

        if (secondLetter === '0-9') {
          return -1;
        }

        return firstLetter.localeCompare(
          secondLetter
        );
      }
    );
  }, [groupedTerms]);

  const clearSearch = () => {
    setQuery('');
  };

  const renderAlphabetLink = letter => {
    const letterId = getLetterId(letter);

    const ariaLabel =
      letter === '0-9'
        ? 'Jump to technical reference entries beginning with a number'
        : `Jump to technical reference entries beginning with ${letter}`;

    return React.createElement(
      'a',
      {
        href: `#${letterId}`,
        style: styles.alphabetLink,
        'aria-label': ariaLabel,
      },
      letter
    );
  };

  const renderTermLink = item => {
    const displayName = getDisplayName(item);

    return React.createElement(
      'a',
      {
        href: `#${item.id}`,
        style: styles.termLink,
        title: `Link to ${displayName}`,
        'aria-label': `Link to ${displayName}`,
      },
      displayName
    );
  };

  const renderDetailList = ({
    heading,
    items,
    ariaLabel,
  }) => {
    if (
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return null;
    }

    return (
      <section
        style={styles.additionalSection}
        aria-label={ariaLabel}
      >
        <h4 style={styles.sectionHeading}>
          {heading}
        </h4>

        <ul style={styles.list}>
          {items.map((item, index) => {
            const isStructuredItem =
              item &&
              typeof item === 'object' &&
              !Array.isArray(item);

            const itemTitle = isStructuredItem
              ? item.title ||
                item.label ||
                item.name ||
                item.value ||
                item.code ||
                ''
              : '';

            const itemDescription = isStructuredItem
              ? item.description || ''
              : '';

            const itemKey = isStructuredItem
              ? itemTitle || `item-${index}`
              : item || `item-${index}`;

            return (
              <li
                key={itemKey}
                style={styles.listItem}
              >
                {isStructuredItem ? (
                  <>
                    {itemTitle ? (
                      <strong>
                        {itemTitle}
                        {itemDescription &&
                        !itemTitle.endsWith(':')
                          ? ':'
                          : ''}
                      </strong>
                    ) : null}

                    {itemTitle && itemDescription
                      ? ' '
                      : null}

                    {itemDescription}
                  </>
                ) : (
                  item
                )}
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderExamples = item => {
    if (
      !Array.isArray(item.examples) ||
      item.examples.length === 0
    ) {
      return null;
    }

    return (
      <section
        style={styles.additionalSection}
        aria-label={`${getDisplayName(item)} examples`}
      >
        <h4 style={styles.sectionHeading}>
          Examples
        </h4>

        <ul style={styles.exampleList}>
          {item.examples.map((example, index) => {
            const isStructuredExample =
              example &&
              typeof example === 'object' &&
              !Array.isArray(example);

            const label = isStructuredExample
              ? example.title ||
                example.label ||
                example.name ||
                ''
              : '';

            const value = isStructuredExample
              ? example.value ||
                example.code ||
                example.description ||
                ''
              : example;

            const exampleKey =
              label ||
              value ||
              `example-${index}`;

            return (
              <li
                key={exampleKey}
                style={styles.exampleListItem}
              >
                {label ? (
                  <span style={styles.exampleLabel}>
                    {label}
                  </span>
                ) : null}

                <code style={styles.inlineCode}>
                  {value}
                </code>
              </li>
            );
          })}
        </ul>
      </section>
    );
  };

  const renderEntry = item => {
    const displayName = getDisplayName(item);

    return (
      <article
        key={item.id}
        id={item.id}
        style={styles.entry}
      >
        <h3 style={styles.termHeading}>
          {renderTermLink(item)}
        </h3>

        <p style={styles.definition}>
          {item.definition}
        </p>

        {renderDetailList({
          heading: 'Used in',
          items: item.usedIn,
          ariaLabel: `${displayName} usage`,
        })}

        {renderDetailList({
          heading: 'Accepted values',
          items: item.acceptedValues,
          ariaLabel: `${displayName} accepted values`,
        })}

        {renderExamples(item)}

        {renderDetailList({
          heading: 'Notes',
          items: item.notes,
          ariaLabel: `${displayName} notes`,
        })}

        {item.note ? (
          <div
            role="note"
            style={styles.note}
          >
            <strong style={styles.noteLabel}>
              Note:
            </strong>{' '}
            {item.note}
          </div>
        ) : null}
      </article>
    );
  };

  const resultText =
    filteredTerms.length === 1
      ? 'Showing 1 term'
      : `Showing ${filteredTerms.length} terms`;

  return (
    <div style={styles.technicalReference}>
      <div style={styles.searchSection}>
        <label
          htmlFor="technical-reference-search"
          style={styles.searchLabel}
        >
          Search the technical reference
        </label>

        <div style={styles.searchContainer}>
          <input
            id="technical-reference-search"
            type="search"
            value={query}
            placeholder="Search by term, identifier, acronym or phrase"
            autoComplete="off"
            aria-describedby="technical-reference-result-count"
            style={styles.searchInput}
            onChange={event => {
              setQuery(event.target.value);
            }}
          />

          {query ? (
            <button
              type="button"
              style={styles.clearButton}
              aria-label="Clear technical reference search"
              onClick={clearSearch}
            >
              Clear
            </button>
          ) : null}
        </div>

        <p
          id="technical-reference-result-count"
          role="status"
          aria-live="polite"
          style={styles.resultCount}
        >
          {resultText}
        </p>
      </div>

      {availableLetters.length > 0 ? (
        <nav
          aria-label="Technical reference alphabet"
          style={styles.alphabetNavigation}
        >
          <span style={styles.alphabetLabel}>
            Jump to:
          </span>

          <ul style={styles.alphabetList}>
            {availableLetters.map(letter => (
              <li
                key={letter}
                style={styles.alphabetListItem}
              >
                {renderAlphabetLink(letter)}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {filteredTerms.length > 0 ? (
        <div>
          {availableLetters.map(letter => {
            const letterId = getLetterId(letter);
            const terms = groupedTerms[letter] || [];

            return (
<section
  key={letter}
  aria-labelledby={letterId}
  style={styles.letterSection}
>
  <h2
    id={letterId}
    data-id={letterId}
    className="cannon page-menu-entry"
    style={styles.letterHeading}
  >
    {letter}
  </h2>

  {terms.map(renderEntry)}
</section>

            );
          })}
        </div>
      ) : (
        <div style={styles.emptyState}>
          <h2 style={styles.emptyStateHeading}>
            No matching terms
          </h2>

          <p style={styles.emptyStateText}>
            Try searching for a different term,
            identifier, acronym or phrase.
          </p>

          <button
            type="button"
            style={styles.resetButton}
            onClick={clearSearch}
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  technicalReference: {
    width: '100%',
    maxWidth: '900px',
    marginTop: '24px',
  },

  searchSection: {
    marginBottom: '20px',
    padding: '24px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #e1e1e1',
    borderRadius: '4px',
  },

  searchLabel: {
    display: 'block',
    marginBottom: '8px',
    color: '#111111',
    fontSize: '16px',
    fontWeight: '600',
  },

  searchContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '680px',
  },

  searchInput: {
    boxSizing: 'border-box',
    width: '100%',
    minHeight: '48px',
    padding: '12px 76px 12px 16px',
    color: '#111111',
    backgroundColor: '#ffffff',
    border: '1px solid #767676',
    borderRadius: '3px',
    fontFamily: 'inherit',
    fontSize: '16px',
    lineHeight: '1.5',
  },

  clearButton: {
    position: 'absolute',
    top: '7px',
    right: '8px',
    minHeight: '34px',
    padding: '4px 10px',
    color: '#111111',
    backgroundColor: '#ffffff',
    border: '0',
    borderRadius: '2px',
    fontFamily: 'inherit',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'underline',
    cursor: 'pointer',
  },

  resultCount: {
    marginTop: '12px',
    marginBottom: '0',
    color: '#555555',
    fontSize: '14px',
  },

  alphabetNavigation: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '12px',
    marginTop: '24px',
    marginBottom: '16px',
    paddingTop: '16px',
    paddingBottom: '16px',
    borderBottom: '1px solid #d8d8d8',
  },

  alphabetLabel: {
    color: '#333333',
    fontSize: '15px',
    fontWeight: '600',
  },

  alphabetList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    margin: '0',
    padding: '0',
    listStyle: 'none',
  },

  alphabetListItem: {
    margin: '0',
    padding: '0',
  },

  alphabetLink: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '32px',
    minHeight: '32px',
    padding: '0 4px',
    color: '#111111',
    backgroundColor: '#ffffff',
    border: '1px solid #b8b8b8',
    borderRadius: '3px',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '1',
    textDecoration: 'none',
  },

  letterSection: {
    margin: '0',
    padding: '0',
  },

  letterHeading: {
    marginTop: '40px',
    marginBottom: '0',
    paddingBottom: '10px',
    color: '#111111',
    borderBottom: '2px solid #111111',
    fontSize: '26px',
    fontWeight: '600',
    lineHeight: '1.3',
    scrollMarginTop: '32px',
  },

  entry: {
    paddingTop: '24px',
    paddingBottom: '24px',
    borderBottom: '1px solid #d8d8d8',
    scrollMarginTop: '32px',
  },

  termHeading: {
    marginTop: '0',
    marginBottom: '10px',
    color: '#111111',
    fontSize: '21px',
    fontWeight: '600',
    lineHeight: '1.35',
  },

  termLink: {
    color: '#111111',
    fontWeight: '600',
    textDecoration: 'none',
  },

  definition: {
    maxWidth: '760px',
    marginTop: '0',
    marginBottom: '0',
    color: '#333333',
    fontSize: '16px',
    lineHeight: '1.7',
  },

  additionalSection: {
    maxWidth: '760px',
    marginTop: '24px',
  },

  sectionHeading: {
    marginTop: '0',
    marginBottom: '10px',
    color: '#111111',
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: '1.4',
  },

  list: {
    marginTop: '0',
    marginBottom: '0',
    paddingLeft: '24px',
  },

  listItem: {
    marginBottom: '8px',
    color: '#333333',
    fontSize: '16px',
    lineHeight: '1.6',
  },

  exampleList: {
    margin: '0',
    padding: '0',
    listStyle: 'none',
  },

  exampleListItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '6px',
    marginBottom: '12px',
  },

  exampleLabel: {
    color: '#333333',
    fontSize: '14px',
    fontWeight: '600',
  },

  inlineCode: {
    boxSizing: 'border-box',
    display: 'inline-block',
    maxWidth: '100%',
    padding: '4px 8px',
    overflowWrap: 'anywhere',
    whiteSpace: 'pre-wrap',
    color: '#222222',
    backgroundColor: '#f1f1f1',
    border: '1px solid #dddddd',
    borderRadius: '3px',
    fontFamily:
      'Consolas, Monaco, "Courier New", monospace',
    fontSize: '14px',
    lineHeight: '1.5',
  },

  note: {
    maxWidth: '760px',
    marginTop: '20px',
    padding: '12px 16px',
    color: '#333333',
    backgroundColor: '#f5f5f5',
    borderLeft: '4px solid #666666',
    fontSize: '15px',
    lineHeight: '1.6',
  },

  noteLabel: {
    color: '#111111',
  },

  emptyState: {
    marginTop: '24px',
    padding: '32px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    border: '1px solid #d8d8d8',
    borderRadius: '4px',
  },

  emptyStateHeading: {
    marginTop: '0',
    marginBottom: '8px',
    color: '#111111',
    fontSize: '22px',
  },

  emptyStateText: {
    marginTop: '0',
    marginBottom: '20px',
    color: '#444444',
  },

  resetButton: {
    minHeight: '42px',
    padding: '8px 18px',
    color: '#ffffff',
    backgroundColor: '#111111',
    border: '1px solid #111111',
    borderRadius: '3px',
    fontFamily: 'inherit',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
  },
};

export default TechnicalReference;