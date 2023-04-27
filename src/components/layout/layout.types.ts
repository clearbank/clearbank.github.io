import { ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
  location: any
  data: any
  pageContext: any
  disableFooter?: boolean
}
