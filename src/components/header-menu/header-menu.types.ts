import { ILeafMenuItem, IMenu, IMenuItem } from 'src/components/menu/menu.types'

export { ILeafMenuItem, IMenu, IMenuItem }

export interface IHeaderMenuProps {
  items: IMenu[]
  hideNavigation?: boolean
}

export interface IHeaderSubMenuProps {
  item: IMenu
  isActive?: boolean
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

export interface IHeaderLeafMenuProps {
  id: string
  title: string
  items: ILeafMenuItem[]
  onHover: (state: string) => void
  isLast: boolean
}

export interface IHeaderMenuItemProps {
  item: IMenuItem
  onHover: (state: string) => void
  isLast: boolean
}