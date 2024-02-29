import React, { ReactElement } from "react"

import { Collapse, CollapseItem } from "src/components/clearbank-ui"
import * as DataRow from "src/components/data-row/data-row.styles"

import * as Types from "./endpoint-block-content.types"

const isRequired = (key: string, requiredItems: string[]) =>
  requiredItems.some((requiredItem) => requiredItem === key)

/**
 * Get group labels for display on-screen
 * @param propertyName The property to be displayed
 * @param groups The available groups defined from oneOf
 * @returns The string to display that defines the groups
 */
const getOneOfGroup = (propertyName: string, groups: object) => {
  const appearsIn = groups[propertyName]

  if (!appearsIn) {
    return ""
  }

  return "Group: " + appearsIn.map((group: number) => group + 1).join(", ")
}

const EndpointBlockContent: React.FunctionComponent<
  Types.EndpointBlockContentProps
> = ({
  allProperties,
  requiredPropertyKeys,
  propertyGroups = {},
}): ReactElement => {
  // whitelisted attributes
  const additionalAttributes = [
    "minimum",
    "maximum",
    "minLength",
    "maxLength",
    "pattern",
    "enum",
  ]
  const attributeNameMap = {
    maximum: "Maximum",
    minimum: "Minimum",
    minLength: "Minimum length",
    maxLength: "Maximum length",
    pattern: "Pattern",
    enum: "Enum array",
  }

  return (
    <>
      {Object.keys(allProperties).map((propertyKey: string) => {
        const currentProperty = allProperties[propertyKey]

        let { type, description, items, properties, required, allOf, oneOf } =
          allProperties[propertyKey]

        const isOneOf = oneOf && Array.isArray(oneOf) && oneOf.length > 0

        // Merge properties and required into one object
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
          (additionalAttribute) => additionalAttribute in currentProperty
        )
        let showAdditionalAttributes = false
        // Check if schema to combine - schema can have multiple models
        // Note, for more complex scenarios a more intelligent algorithm is required
        const hasAnyOf = allOf && allOf.length > 0

        // Group properties by oneOf groups and create of a map of property to group
        // The same name could appear in both groups so ensure there is an array

        // This will be used to then seed the display with information on mutually
        // exclusive groups. Note this doesn't currently deal with recursion i.e. a oneOf
        // nested within a oneOf - that needs some thought
        const oneOfPropertyGroups: object = (isOneOf ? oneOf : []).reduce(
          (output: object, choice: Types.OneOfProps, index: number) => {
            Object.keys(choice.properties).forEach((prop) => {
              output[prop] = (output[prop] || []).concat([index])
            })

            return output
          },
          {}
        )

        let parentObjectGuidance = isOneOf
          ? oneOf.length < 2
            ? ""
            : oneOf.reduce(
                (output: string, choice: Types.OneOfProps, index: number) => {
                  const choicePropertyNames = Object.keys(choice.properties)
                  const requirementDescription = choicePropertyNames.map(
                    (propertyName, index) => {
                      if (
                        index !== 0 &&
                        index === choicePropertyNames.length - 1
                      ) {
                        return ", and " + propertyName
                      }
                      if (
                        index !== 0 &&
                        index === choicePropertyNames.length - 2
                      ) {
                        return ", " + propertyName
                      }

                      return propertyName
                    }
                  )

                  if (index === 0) {
                    return (
                      " You need to include EITHER " +
                      requirementDescription.join("")
                    )
                  }

                  if (index !== oneOf.length - 1) {
                    return output + ", " + requirementDescription.join("")
                  }

                  return (
                    output +
                    " OR " +
                    requirementDescription.join("") +
                    " as shown in the groups below."
                  )
                },
                ""
              )
          : ""

        let allOfSchema: any = {}

        if (hasAnyOf) {
          description = allOf[0].description // description is always from first key
          // remaining schema models are merged, i.e enums. Only supports one schema
          allOfSchema = allOf.reduce(
            (result: Array<string>, current: Object) => {
              return Object.assign(result, current)
            },
            {}
          )
          type = allOfSchema.type // Layout only supports single type
        }

        if (hasAdditionalAttributes || hasAnyOf || isOneOf) {
          showAdditionalAttributes = true
        }

        return (
          <DataRow.DataListItem key={propertyKey}>
            <DataRow.Header className="great-primer">
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
                  {type && <>,{"  "}</>}
                  <DataRow.Required>Required</DataRow.Required>
                </>
              )}
            {/* new line */}
            {
              <>
                <DataRow.Description>
                  {getOneOfGroup(propertyKey, propertyGroups)}
                </DataRow.Description>
              </>
            }
            {description && (
              <>
                <DataRow.Description>
                  {description + parentObjectGuidance}
                </DataRow.Description>
              </>
            )}
            {showAdditionalAttributes &&
              additionalAttributes.map((additionalAttribute) => {
                const targetAttributes = hasAnyOf
                  ? allOfSchema
                  : currentProperty
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
