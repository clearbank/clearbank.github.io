export interface ILeafMenuItem {
  fields: {
    title: string
    slug: string
    id: string
  }
}

export interface IMenuItem {
  fields: {
    title: string
    slug: string
    id: string
  }
  
  leafMenuItems: ILeafMenuItem[]
}

export interface IMenu {
  menuItem: {
    title: string
    slug: string
  }
  subMenuItems: IMenuItem[]
}

export interface IHeaderMenuProps {
  items: IMenu[]
  hideNavigation?: boolean
}

export interface IHeaderSubMenuProps {
  item: IMenu
  isActive?: boolean
}

export interface IHeaderLeafMenuProps {
  id: string
  title: string
  items: ILeafMenuItem[]
}

export interface IHeaderMenuItemProps {
  item: IMenuItem
}
