import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
  location: any
  data: any
  pageContext: any
  hideFooterNavigation?: boolean
}

export interface LayoutProps {
  children: ReactNode
  location: any
  data: any
  pageContext: any
  hideFooterNavigation?: boolean
  articleActions?: ReactNode
}