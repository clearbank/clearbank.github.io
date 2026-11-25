export interface SearchItem {
  title: string
  slug: string
  excerpt: string
}

export interface HeaderProps {
  location?: any
  searchIndex?: SearchItem[]
  hasDocumentationNavigation: boolean
  isMobileNavigationOpen: boolean
  onMobileNavigationToggle: () => void
  mobileNavigationId: string
}