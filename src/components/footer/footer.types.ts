import { IMenuItem, ILeafMenuItem } from 'src/components/header-menu/header-menu.types'

export interface FooterProps {}

export interface IFooterMenuItemProps {
  item: IMenuItem
}

export interface IFooterLeafMenuProps {
  id: string
  title: string
  items: ILeafMenuItem[]
}