import React, { ReactElement } from 'react'

import * as DataRow from 'src/components/data-row/data-row.styles'
import Codeblock from 'src/components/codeblock'
import { CodeblockType } from 'src/global.types'

import * as Types from './endpoint-block-parameters.types'
import * as Styles from './endpoint-block-parameters.styles'

// TODO: add typings

const EndpointBlockParameters: React.FunctionComponent<Types.EndpointBlockParametersProps> = ({
  parameters,
  codeblocks
}): ReactElement => {
  return (
    <>
      <DataRow.BlockTitle as='h4' className='double-pica'>
        Parameters
      </DataRow.BlockTitle>
      <DataRow.Container>
        <Styles.FlexContainer>
          <Styles.DataListWrapper>
            <DataRow.DataList border>
              {!!parameters &&
              parameters.map((parameter: any) => {
                const {
                  name,
                  schema,
                  required,
                  description,
                  in: inCurrent // in is reserved words
                } = parameter

                const hasSchemaType = schema && schema.type

                return (
                  <DataRow.DataListItem key={name}>
                    <DataRow.Header className='great-primer'>
                      {name}
                    </DataRow.Header>
                    {hasSchemaType && (
                      <>
                        <DataRow.Type> {schema.type}</DataRow.Type>
                      </>
                    )}
                    {inCurrent && (
                      <>
                        {schema && <>,{'  '}</>}
                        <DataRow.In>{inCurrent}</DataRow.In>
                      </>
                    )}
                    {required && (
                      <>
                        {(hasSchemaType || inCurrent) && <>,{'  '}</>}
                        <DataRow.Required>Required</DataRow.Required>
                      </>
                    )}
                    {/* new line */}
                    {description && (
                      <DataRow.Description>{description}</DataRow.Description>
                    )}
                  </DataRow.DataListItem>
                )
              })}
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

export default EndpointBlockParameters
