import { CodeblockType } from 'src/global.types'

export interface EndpointBlockResponseProps {
  apiData: any
  path: string
  type: string
  codeblocks?: CodeblockType[]
}
