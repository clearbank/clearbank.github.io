import React, { ReactElement } from 'react'

import * as DataRow from 'src/components/data-row/data-row.styles'

import * as Types from './endpoint-block-content.types'

const isRequired = (key: string, requiredItems: string[]) =>
  requiredItems.some(requiredItem => requiredItem === key)

const getOneOfGroup = (propertyName: string, groups: object) => {
  const appearsIn = groups[propertyName]

  if (!appearsIn) {
    return ''
  }

  return 'Group: ' + appearsIn.map((group: number) => group + 1).join(', ')
}

const EndpointBlockContent: React.FunctionComponent<
  Types.EndpointBlockContentProps
> = ({
  allProperties,
  requiredPropertyKeys,
  propertyGroups = {}
}): ReactElement => {
  const additionalAttributes = [
    'minimum',
    'maximum',
    'minLength',
    'maxLength',
    'pattern',
    'enum'
  ]

  const attributeNameMap = {
    maximum: 'Maximum',
    minimum: 'Minimum',
    minLength: 'Minimum length',
    maxLength: 'Maximum length',
    pattern: 'Pattern',
    enum: 'Enum array'
  }

  return (
    <>
      {Object.keys(allProperties).map((propertyKey: string) => {
        const currentProperty = allProperties[propertyKey]

        let { type, description, items, properties, required, allOf, oneOf } =
          allProperties[propertyKey]

        const isOneOf = oneOf && Array.isArray(oneOf) && oneOf.length > 0

        if (isOneOf) {
          required = oneOf.reduce(
            (output: Array<Object>, choice: Types.OneOfProps) =>
              output.concat(choice.required || []),
            []
          )

          properties = oneOf.reduce(
            (output: Array<Object>, choice: Types.OneOfProps) =>
              Object.assign(output, choice.properties),
            {}
          )
        }

        const hasNestedProperties = !!properties
        const hasNestedItems = !!items && !!items.properties
        const hasAdditionalAttributes = additionalAttributes.some(
          additionalAttribute => additionalAttribute in currentProperty
        )

        let showAdditionalAttributes = false
        const hasAnyOf = allOf && allOf.length > 0

        // Record which oneOf alternatives each property belongs to.
        const oneOfPropertyGroups: object = (isOneOf ? oneOf : []).reduce(
          (output: object, choice: Types.OneOfProps, index: number) => {
            if (choice.properties) {
              Object.keys(choice.properties).forEach(prop => {
                output[prop] = (output[prop] || []).concat([index])
              })
            }

            return output
          },
          {}
        )

        const parentObjectGuidance = isOneOf
          ? oneOf.length < 2
            ? ''
            : oneOf.reduce(
                (output: string, choice: Types.OneOfProps, index: number) => {
                  const choicePropertyNames = Object.keys(
                    choice.properties || {}
                  )

                  if (choicePropertyNames.length === 0) {
                    return (
                      output +
                      ' the value of the property with the type ' +
                      choice.type
                    )
                  }

                  const requirementDescription = choicePropertyNames.map(
                    (propertyName, index) => {
                      if (
                        index !== 0 &&
                        index === choicePropertyNames.length - 1
                      ) {
                        return ', and ' + propertyName
                      }

                      if (
                        index !== 0 &&
                        index === choicePropertyNames.length - 2
                      ) {
                        return ', ' + propertyName
                      }

                      return propertyName
                    }
                  )

                  if (index === 0) {
                    return output + requirementDescription.join('')
                  }

                  if (index !== oneOf.length - 1) {
                    return output + ', ' + requirementDescription.join('')
                  }

                  return (
                    output +
                    '; OR ' +
                    requirementDescription.join('') +
                    ", per each field's group number below."
                  )
                },
                ' You can provide either: '
              )
          : ''

        let allOfSchema: any = {}

        if (hasAnyOf) {
          description = allOf[0].description

          allOfSchema = allOf.reduce(
            (result: Array<string>, current: Object) =>
              Object.assign(result, current),
            {}
          )

          type = allOfSchema.type
        }

        if (hasAdditionalAttributes || hasAnyOf || isOneOf) {
          showAdditionalAttributes = true
        }

        return (
          <DataRow.DataListItem key={propertyKey}>
            <DataRow.Header className='great-primer'>
              {propertyKey}
            </DataRow.Header>

            {type && <DataRow.Type> {type}</DataRow.Type>}

            {requiredPropertyKeys &&
              isRequired(propertyKey, requiredPropertyKeys) && (
                <>
                  {type && <>,{'  '}</>}
                  <DataRow.Required>Required</DataRow.Required>
                </>
              )}

            <DataRow.Description>
              {getOneOfGroup(propertyKey, propertyGroups)}
            </DataRow.Description>

            {description && (
              <DataRow.Description>
                {description + parentObjectGuidance}
              </DataRow.Description>
            )}

            {showAdditionalAttributes &&
              additionalAttributes.map(additionalAttribute => {
                const targetAttributes = hasAnyOf
                  ? allOfSchema
                  : currentProperty

                if (!(additionalAttribute in targetAttributes)) {
                  return null
                }

                const attributeKey =
                  additionalAttribute in attributeNameMap
                    ? attributeNameMap[additionalAttribute]
                    : additionalAttribute

                const attributeValue = targetAttributes[additionalAttribute]
                const isComplexType = Array.isArray(attributeValue)

                return (
                  <DataRow.AdditionalAttributesList key={additionalAttribute}>
                    <DataRow.AdditionalAttributeKey>
                      {attributeKey}
                    </DataRow.AdditionalAttributeKey>

                    <DataRow.AdditionalAttributeValue
                      isComplexType={isComplexType}
                    >
                      {isComplexType
                        ? attributeValue.join(', ')
                        : attributeValue}
                    </DataRow.AdditionalAttributeValue>
                  </DataRow.AdditionalAttributesList>
                )
              })}

            {(hasNestedProperties || hasNestedItems) && (
              <DataRow.SchemaDetails>
                <summary data-markdown-exclude='true'>
                  Show children
                </summary>

                <DataRow.DataList nested>
                  {hasNestedProperties && (
                    <EndpointBlockContent
                      allProperties={properties}
                      requiredPropertyKeys={required}
                      propertyGroups={oneOfPropertyGroups}
                    />
                  )}

                  {hasNestedItems && (
                    <EndpointBlockContent
                      allProperties={items.properties}
                      requiredPropertyKeys={items.required}
                      propertyGroups={oneOfPropertyGroups}
                    />
                  )}
                </DataRow.DataList>
              </DataRow.SchemaDetails>
            )}
          </DataRow.DataListItem>
        )
      })}
    </>
  )
}

export default EndpointBlockContent