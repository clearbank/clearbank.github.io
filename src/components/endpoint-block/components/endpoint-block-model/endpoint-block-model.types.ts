import { CodeblockType } from 'src/global.types'

export interface EndpointBlockModelProps {
  apiData: any
  path: string
  type: string
  codeblocks?: CodeblockType[]
}
