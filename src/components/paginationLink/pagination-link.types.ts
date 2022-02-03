export enum direction {
  previous = 'previous',
  next = 'next'
}

export interface PaginationLinkProps {
  slug: string
  title: string
  direction: 'next' | 'previous'
}
