import React from 'react'

import * as Types from './callout.types'
import * as Styles from './callout.styles'

const presetConfig: Record<
  Types.CalloutPreset,
  {
    colour: Types.ColorOptions
    fallbackText: React.ReactNode
    defaultDocsLabel: string
  }
> = {
  deprecation: {
    colour: 'red',
    fallbackText: (
      <>
        <strong>Deprecation notice:</strong>
        {' The documentation on this page describes a legacy version of the API. New customers should refer to the External Gateway docs.'}
      </>
    ),
    defaultDocsLabel: 'External Gateway docs'
  }
}

const Callout: React.FunctionComponent<Types.CalloutProps> = ({
  colour,
  preset,
  children,
  deprecationDocsHref,
  deprecationDocsLabel
}): JSX.Element => {
  const presetValues = preset ? presetConfig[preset] : null
  const resolvedColour = colour ?? presetValues?.colour

  const renderPresetContent = (): React.ReactNode => {
    if (preset !== 'deprecation') return null

    if (!deprecationDocsHref) {
      return presetValues?.fallbackText ?? null
    }

    const docsLabel = deprecationDocsLabel ?? presetValues?.defaultDocsLabel

    return (
      <>
        <strong>Deprecation notice:</strong>
        {' The documentation on this page describes a legacy version of the API. New customers should refer to the '}
        <a href={deprecationDocsHref}>{docsLabel}</a>
        {'.'}
      </>
    )
  }

  const content = children ?? renderPresetContent()

  return <Styles.Container color={resolvedColour}>{content}</Styles.Container>
}

export default Callout