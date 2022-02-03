export type SectionType = 'parameters' | 'response' | 'request' | 'model'

export interface CodeblockType {
  title: string
  codeSnippet: string
  section: SectionType
  language?: string
  copyCode?: boolean
  color?: string
}
