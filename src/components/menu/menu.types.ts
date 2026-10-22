export interface IMenuEntryFields {
  title: string
  slug: string
  id: string
}

export interface ILeafMenuItem {
  fields: IMenuEntryFields
}

export interface IMenuItem {
  fields: IMenuEntryFields
  leafMenuItems: ILeafMenuItem[]
}

export interface IMenu {
  menuItem: IMenuEntryFields
  subMenuItems: IMenuItem[]
}