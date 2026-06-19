export type ColorOptions = 'blue' | 'green' | 'orange' | 'red'
export type CalloutPreset = 'deprecation'

export interface CalloutProps {
  colour?: ColorOptions
  preset?: CalloutPreset
  deprecationDocsHref?: string
  deprecationDocsLabel?: string
}