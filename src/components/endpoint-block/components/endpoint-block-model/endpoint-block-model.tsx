import React, { ReactElement } from "react"

import Codeblock from "src/components/codeblock"
import * as DataRow from "src/components/data-row/data-row.styles"
import { CodeblockType } from "src/global.types"

import EndpointBlockContent from "../endpoint-block-content"

import * as Styles from "./endpoint-block-model.styles"
import * as Types from "./endpoint-block-model.types"

const getInitialProperties = (apiData: any, path: string, type: string) => {
  const { requestBody } = apiData.paths[path][type]

  if (!requestBody) {
    return [false, false]
  }

  const { properties, required } =
    requestBody.content["application/json"].schema

  return [properties, required]
}

const EndpointBlockModel: React.FunctionComponent<
  Types.EndpointBlockModelProps
> = ({ path, type, apiData, codeblocks }): ReactElement => {
  const [initialProperties, initialRequiredProperties] = getInitialProperties(
    apiData,
    path,
    type
  )

  if (!initialProperties) return null

  return (
    <>
      <Styles.Header>
        <DataRow.BlockTitle as="h4" className="double-pica">
          Request Payload{" "}
          <DataRow.LighterText>(application/json)</DataRow.LighterText>
        </DataRow.BlockTitle>
      </Styles.Header>

      <DataRow.Container>
        <Styles.FlexContainer>
          <Styles.DataListWrapper>
            <DataRow.DataList css={Styles.ParentListStyle} border>
              <EndpointBlockContent
                allProperties={initialProperties}
                requiredPropertyKeys={initialRequiredProperties}
              />
            </DataRow.DataList>
          </Styles.DataListWrapper>
          <Styles.CodeblockWrapper>
            {!!codeblocks &&
              codeblocks.map((codeblock: CodeblockType, index: number) => (
                <Codeblock codeblock={codeblock} key={index} />
              ))}
          </Styles.CodeblockWrapper>
        </Styles.FlexContainer>
      </DataRow.Container>
    </>
  )
}

export default EndpointBlockModel
