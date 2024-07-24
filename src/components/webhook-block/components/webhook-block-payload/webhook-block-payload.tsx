import React, { ReactElement } from 'react'

import * as DataRow from 'src/components/data-row/data-row.styles'

import * as Types from './webhook-block-payload.types'
import * as Styles from './webhook-block-payload.styles'

import WebhookData from '../../../../../data/webhooks.json'
import { Collapse, CollapseItem } from "../../../clearbank-ui"
import EndpointBlockContent from "../../../endpoint-block/components/endpoint-block-content"

const WebhookBlockPayload: React.FunctionComponent<Types.WebhookBlockPayloadProps> = ({
  webhookName
}): ReactElement => {

  // whitelisted attributes
  const additionalAttributes = [
    //"minimum",
    //"maximum",
    "minLength",
    "maxLength",
    "pattern",
    //"enum",
  ]
  const attributeNameMap = {
    //maximum: "Maximum",
    //minimum: "Minimum",
    minLength: "Minimum length",
    maxLength: "Maximum length",
    pattern: "Pattern",
    //enum: "Enum array",
  }

  const requiredProperties = WebhookData[webhookName]['required'];

  return (
    <>
      <DataRow.BlockTitle as='h4' className='double-pica'>
        Payload
      </DataRow.BlockTitle>
      <DataRow.Container>
        <Styles.FlexContainer>
          <Styles.DataListWrapper>
            <DataRow.DataList border>
              {!!WebhookData[webhookName] &&
                Object.entries(WebhookData[webhookName]['properties']).map(([key, currentProperty]: [string, any]) => {
                  const {
                    type,
                    description,
                    title,
                    oneOf
                  } = currentProperty

                  const isOneOf = oneOf && Array.isArray(oneOf) && oneOf.length > 0

                  // Merge properties and required into one object
                  if (isOneOf) {
                    // required = oneOf.reduce(
                    //   (output: Array<Object>, choice: Types.OneOfProps) =>
                    //     output.concat(choice.required || []),
                    //   []
                    // )
                    // properties = oneOf.reduce(
                    //   (output: Array<Object>, choice: Types.OneOfProps) =>
                    //     Object.assign(output, choice.properties),
                    //   {}
                    // )
                  }

                  const hasAdditionalAttributes = additionalAttributes.some(
                    (additionalAttribute) => additionalAttribute in currentProperty
                  )
                  let showAdditionalAttributes = true

                  const required = requiredProperties ? requiredProperties.includes(key) : false;

                  const hasSchemaType = !!type;

                  //const hasNestedProperties = !!properties
                  const hasNestedProperties = !!isOneOf

                  //const hasNestedItems = !!items && !!items.properties
                  const hasNestedItems = isOneOf

                  // This will be used to then seed the display with information on mutually
                  // exclusive groups. Note this doesn't currently deal with recursion i.e. a oneOf
                  // nested within a oneOf - that needs some thought
                  const oneOfPropertyGroups: object = (isOneOf ? oneOf : []).reduce(
                    (output: object, choice: Types.OneOfProps, index: number) => {
                      if (choice.properties) {
                        Object.keys(choice.properties).forEach((prop) => {
                          output[prop] = (output[prop] || []).concat([index])
                        })
                      }

                      return output
                    },
                    {}
                  )

                  return (
                    <DataRow.DataListItem key={title}>
                      <DataRow.Header className='great-primer'>
                        {key} {title && '(' + title + ')'}
                      </DataRow.Header>
                      {type && (
                        <>
                          <DataRow.Type> {type}</DataRow.Type>
                        </>
                      )}
                      {required && (
                        <>
                          {hasSchemaType && <>,{'  '}</>}
                          <DataRow.Required>Required</DataRow.Required>
                        </>
                      )}
                      {description && (
                        <DataRow.Description>{description}</DataRow.Description>
                      )}
                      {showAdditionalAttributes &&
                        additionalAttributes.map((additionalAttribute) => {
                          // const targetAttributes = hasAnyOf
                          //   ? allOfSchema
                          //   : currentProperty
                          const targetAttributes = currentProperty;
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
                                  ? attributeValue.join(", ")
                                  : attributeValue}
                              </DataRow.AdditionalAttributeValue>
                            </DataRow.AdditionalAttributesList>
                          )
                        })}
                      {(hasNestedProperties || hasNestedItems) && (
                        <DataRow.DataList nested>
                          <Collapse>
                            <CollapseItem title="Show children" nested>
                              {/*{hasNestedProperties && (*/}
                              {/*  <EndpointBlockContent*/}
                              {/*    allProperties={properties}*/}
                              {/*    requiredPropertyKeys={required}*/}
                              {/*    propertyGroups={oneOfPropertyGroups}*/}
                              {/*  />*/}
                              {/*)}*/}
                              {/*{hasNestedItems && (*/}
                              {/*  <EndpointBlockContent*/}
                              {/*    allProperties={items.properties}*/}
                              {/*    requiredPropertyKeys={items.required}*/}
                              {/*    propertyGroups={oneOfPropertyGroups}*/}
                              {/*  />*/}
                              {/*)}*/}
                            </CollapseItem>
                          </Collapse>
                        </DataRow.DataList>
                      )}
                    </DataRow.DataListItem>
                  )
                })}
            </DataRow.DataList>
          </Styles.DataListWrapper>
        </Styles.FlexContainer>
      </DataRow.Container>
    </>
  )
}

export default WebhookBlockPayload
