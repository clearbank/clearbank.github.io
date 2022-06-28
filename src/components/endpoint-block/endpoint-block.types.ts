import { ReactElement } from 'react'
import { BoxProps } from 'rebass'
import { CodeblockType } from 'src/global.types'

export interface EndpointProps {
  path: string
  title: string
  message?: string
  type: string
  dynamic?: boolean
  boxProps?: BoxProps
  codeblocks?: CodeblockType[]
  children?: (any) => ReactElement
  description?: ReactElement
  endpoints?: any[]
  webhooks?: string[]
}

export type Codeblock = CodeblockType

export enum SectionTypeEnum {
  REQUEST = 'request',
  RESPONSE = 'response'
}

export enum BlockStatusColourEnum {
  'Success' = '#678D4B',
  'Bad Request' = '#F00000',
  'Request' = '#000000',
  'Default' = '#000000'
}
