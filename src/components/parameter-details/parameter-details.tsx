import React, {Fragment} from 'react'

import CodeHighlight from 'src/components/code-highlight'

import * as Types from './parameter-details.types'
import * as Styles from './parameter-details.styles'

const Settings: React.FunctionComponent<Types.SettingsProps> = ({
  visibleSettings,
  type,
  location,
  required
}) => (
  <Styles.SettingsList>
    {visibleSettings.map(entry => (
      <Fragment key={entry}>
        {entry === 'type' && (
          <Styles.SettingValue key={entry}>
            <Styles.Type>{type}</Styles.Type>
          </Styles.SettingValue>
        )}
        {entry === 'location' && (
          <Styles.SettingValue key={entry}>
            <Styles.Location>{location}</Styles.Location>
          </Styles.SettingValue>
        )}
        {entry === 'required' && required && (
          <Styles.SettingValue key={entry}>
            <Styles.Required>Required</Styles.Required>
          </Styles.SettingValue>
        )}
      </Fragment>
    ))}
  </Styles.SettingsList>
)

const Methods: React.FunctionComponent<Types.MethodsProps> = ({ methods }) => (
  <Styles.MethodsList>
    {methods.map(method => (
      <Styles.MethodsEntry key={method}>
        <Styles.Method type={method}>{method}</Styles.Method>
      </Styles.MethodsEntry>
    ))}
  </Styles.MethodsList>
)

const ParameterDetails: React.FunctionComponent<Types.ParameterDetailsProps> = ({
  parameter
}): JSX.Element => {
  const visibleSettings = ['type', 'location', 'required']
  const { name, type, location, required, methods, body, example } = parameter

  const showCodeHighlight = example !== null && !!example.length

  return (
    <Styles.Container>
      <Styles.Head>
        <Styles.Title>{name}</Styles.Title>
        <Settings
          visibleSettings={visibleSettings}
          type={type}
          location={location}
          required={required}
        />
        <Methods methods={methods} />
      </Styles.Head>
      <Styles.Content dangerouslySetInnerHTML={{ __html: body }} />
      {showCodeHighlight && (
        <Styles.Aside>
          <Styles.Subtitle>Example</Styles.Subtitle>
          <CodeHighlight code={example} language='javascript' />
        </Styles.Aside>
      )}
    </Styles.Container>
  )
}

export default ParameterDetails
