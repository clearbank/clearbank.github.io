import { IMenu, IMenuItem, ILeafMenuItem } from 'src/components/header-menu/header-menu.types'

export interface FooterProps {}

export interface IFooterMenuItemProps {
  item: IMenuItem
  maxWidth: number
}

export interface IFooterMenuProps {
  menu: IMenu
}

export interface IFooterLeafMenuProps {
  id: string
  title: string
  items: ILeafMenuItem[]
  maxWidth: number
}