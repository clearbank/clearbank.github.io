export interface IMenuItem {
  node: {
    fields: {
      title: string
      slug: string
      id: string
    }
  }
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
}

export interface IHeaderSubMenuProps {
  item: IMenu
  isActive?: boolean
}
