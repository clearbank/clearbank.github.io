import React, { useMemo, useState } from 'react';
import glossaryTerms from '../../data/glossary';

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
    return 'glossary-0-9';
  }

  return `glossary-${letter.toLowerCase()}`;
};

const getPaymentCycleText = item => {
  if (!Array.isArray(item.paymentCycle)) {
    return [];
  }

  return item.paymentCycle.map(step => {
    if (typeof step === 'string') {
      return step;
    }

    if (step && typeof step === 'object') {
      return `${step.title || ''} ${
        step.description || ''
      }`;
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
    ...(item.aliases || []),
    ...getPaymentCycleText(item),
    ...(item.paymentTypes || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
};

const Glossary = ({ region }) => {
  const [query, setQuery] = useState('');

  const regionalTerms = useMemo(() => {
    return glossaryTerms
      .filter(item => {
        return (
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

    return React.createElement(
      'a',
      {
        href: `#${letterId}`,
        style: styles.alphabetLink,
        'aria-label':
          letter === '0-9'
            ? 'Jump to glossary terms beginning with a number'
            : `Jump to glossary terms beginning with ${letter}`,
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

  const renderPaymentCycle = item => {
    if (
      !Array.isArray(item.paymentCycle) ||
      item.paymentCycle.length === 0
    ) {
      return null;
    }

    return (
      <section
        style={styles.additionalSection}
        aria-label={`${getDisplayName(
          item
        )} payment cycle`}
      >
        <h4 style={styles.sectionHeading}>
          Payment cycle
        </h4>

        <ol style={styles.list}>
          {item.paymentCycle.map(
            (step, index) => {
              const isStructuredStep =
                step &&
                typeof step === 'object' &&
                !Array.isArray(step);

              const key = isStructuredStep
                ? step.title || `step-${index}`
                : step || `step-${index}`;

              return (
                <li
                  key={key}
                  style={styles.listItem}
                >
                  {isStructuredStep ? (
                    <>
                      {step.title ? (
                        <strong>
                          {step.title}
                          {step.title.endsWith(':')
                            ? ''
                            : ':'}
                        </strong>
                      ) : null}

                      {step.title &&
                      step.description
                        ? ' '
                        : null}

                      {step.description || ''}
                    </>
                  ) : (
                    step
                  )}
                </li>
              );
            }
          )}
        </ol>
      </section>
    );
  };

  const renderPaymentTypes = item => {
    if (
      !Array.isArray(item.paymentTypes) ||
      item.paymentTypes.length === 0
    ) {
      return null;
    }

    return (
      <section
        style={styles.additionalSection}
        aria-label={`${getDisplayName(
          item
        )} payment types`}
      >
        <h4 style={styles.sectionHeading}>
          Payment types
        </h4>

        <ul style={styles.list}>
          {item.paymentTypes.map(type => (
            <li
              key={type}
              style={styles.listItem}
            >
              {type}
            </li>
          ))}
        </ul>
      </section>
    );
  };

  const renderEntry = item => {
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

        {renderPaymentCycle(item)}

        {renderPaymentTypes(item)}
      </article>
    );
  };

  const resultText =
    filteredTerms.length === 1
      ? 'Showing 1 term'
      : `Showing ${filteredTerms.length} terms`;

  return (
    <div style={styles.glossary}>
      <div style={styles.searchSection}>
        <label
          htmlFor="glossary-search"
          style={styles.searchLabel}
        >
          Search the glossary
        </label>

        <div style={styles.searchContainer}>
          <input
            id="glossary-search"
            type="search"
            value={query}
            placeholder="Search by term, acronym or phrase"
            autoComplete="off"
            aria-describedby="glossary-result-count"
            style={styles.searchInput}
            onChange={event => {
              setQuery(event.target.value);
            }}
          />

          {query ? (
            <button
              type="button"
              style={styles.clearButton}
              aria-label="Clear glossary search"
              onClick={clearSearch}
            >
              Clear
            </button>
          ) : null}
        </div>

        <p
          id="glossary-result-count"
          role="status"
          aria-live="polite"
          style={styles.resultCount}
        >
          {resultText}
        </p>
      </div>

      {availableLetters.length > 0 ? (
        <nav
          aria-label="Glossary alphabet"
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
            const letterId =
              getLetterId(letter);

            const terms =
              groupedTerms[letter] || [];

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
            acronym or phrase.
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
  glossary: {
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

export default Glossary;