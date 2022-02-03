export type DataType = {
  name: string
  type: string
  required: boolean
  in: string
}

export interface DataRowProps {
  data: {
    name: string
    type: string
    required: boolean
    in: string
    nested?: DataType[]
    border?: string
  }
  header: string
  expand?: boolean
}
