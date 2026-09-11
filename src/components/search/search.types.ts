import { SearchIndexItem, SearchResult, Region } from './search.utils'

export interface SearchProps {
  isOpen: boolean
  onClose: () => void
  region: Region
}

// Re-exported here so consumers of the component (header.tsx) can import
// everything search-related from one place if needed.
export { SearchIndexItem, SearchResult, Region }