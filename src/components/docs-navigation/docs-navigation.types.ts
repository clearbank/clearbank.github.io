import { IMenu } from 'src/components/menu/menu.types'

export interface DocsNavigationProps {
  items: IMenu[]
  currentPath: string
}