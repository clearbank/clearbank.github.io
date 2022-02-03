import React, { ReactElement } from 'react'

import { Collapse, CollapseItem } from 'src/components/clearbank-ui'
import * as DataRow from 'src/components/data-row/data-row.styles'

import * as Types from './endpoint-block-content.types'

const isRequired = (key: string, requiredItems: string[]) =>
  requiredItems.some(requiredItem => requiredItem === key)

const EndpointBlockContent: React.FunctionComponent<Types.EndpointBlockContentProps> = ({
  allProperties,
  requiredPropertyKeys
}): ReactElement => {
  // whitelisted attributes
  const additionalAttributes = ['minimum', 'maximum', 'minLength', 'maxLength', 'pattern', 'enum']
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

        let {
          type,
          description,
          items,
          properties,
          required,
          allOf
        } = allProperties[propertyKey]

        const hasNestedProperties = !!properties
        const hasNestedItems = !!items && !!items.properties
        const hasAdditionalAttributes = additionalAttributes.some(
          additionalAttribute => additionalAttribute in currentProperty
        )
        let showAdditionalAttributes = false
        // Check if schema to combine - schema can have multiple models
        // Note, for more complex scenarios a more intelligent alogrith is required
        const hasAnyOf = allOf && allOf.length > 0
        let allOfSchema:any = {}

        if (hasAnyOf) {
          description = allOf[0].description // description is always from first key
          // remaining schema models are merged, i.e enums. Only supports one schema
          allOfSchema = allOf.reduce((result, current) => {
            return Object.assign(result, current)
          }, {})
          type = allOfSchema.type // Layout only supports single type
        }

        if (hasAdditionalAttributes || hasAnyOf) {
          showAdditionalAttributes = true
        }

        return (
          <DataRow.DataListItem key={propertyKey}>
            <DataRow.Header className='great-primer'>
              {propertyKey}
            </DataRow.Header>
            {type && (
              <>
                <DataRow.Type> {type}</DataRow.Type>
              </>
            )}
            {requiredPropertyKeys &&
              isRequired(propertyKey, requiredPropertyKeys) && (
                <>
                  {type && <>,{'  '}</>}
                  <DataRow.Required>Required</DataRow.Required>
                </>
              )}
            {/* new line */}
            {description && (
              <>
                <DataRow.Description>{description}</DataRow.Description>
              </>
            )}
            {showAdditionalAttributes &&
              additionalAttributes.map(additionalAttribute => {
                const targetAttributes = hasAnyOf ? allOfSchema : currentProperty
                const hasAttributeFromList =
                  additionalAttribute in targetAttributes

                if (!hasAttributeFromList) {
                  return null
                }

                const attributeKey =
                  additionalAttribute in attributeNameMap
                    ? attributeNameMap[additionalAttribute]
                    : additionalAttribute // fallback
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
              <DataRow.DataList nested>
                <Collapse>
                  <CollapseItem title='Show children' nested>
                    {hasNestedProperties && (
                      <EndpointBlockContent
                        allProperties={properties}
                        requiredPropertyKeys={required}
                      />
                    )}
                    {hasNestedItems && (
                      <EndpointBlockContent
                        allProperties={items.properties}
                        requiredPropertyKeys={items.required}
                      />
                    )}
                  </CollapseItem>
                </Collapse>
              </DataRow.DataList>
            )}
          </DataRow.DataListItem>
        )
      })}
    </>
  )
}

export default EndpointBlockContent
