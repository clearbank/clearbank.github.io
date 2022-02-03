import React, { ReactElement } from 'react'

import { Collapse, CollapseItem } from 'src/components/clearbank-ui'

import { CodeblockType } from 'src/global.types'
import Codeblock from 'src/components/codeblock'
import * as DataRow from 'src/components/data-row/data-row.styles'
import EndpointBlockContent from '../endpoint-block-content'

import * as Styles from './endpoint-block-response.styles'
import * as Types from './endpoint-block-response.types'

const getResponseProperties = response => {
  if (response.content) {
    const { properties } = response.content['application/json'].schema

    return properties
  }

  return false
}

const getRequiredResponseKeys = response => {
  if (
    response.content &&
    response.content['application/json'] &&
    response.content['application/json'].schema &&
    response.content['application/json'].schema.required
  ) {
    return response.content['application/json'].schema.required
  }

  return []
}

const EndpointBlockModel: React.FunctionComponent<Types.EndpointBlockResponseProps> = ({
  path,
  type,
  apiData,
  codeblocks
}): ReactElement => {
  const { responses } = apiData.paths[path][type]

  return (
    <>
      <Styles.Header>
        <DataRow.BlockTitle as='h4' className='double-pica'>
          Response <DataRow.LighterText>(application/json)</DataRow.LighterText>
        </DataRow.BlockTitle>
      </Styles.Header>

      <DataRow.Container>
        <Styles.FlexContainer>
          <Styles.DataListWrapper>
            <DataRow.DataList nested border>
              {Object.keys(responses).map((responseKey: string, index) => (
                <DataRow.DataListItem key={index}>
                  <DataRow.Header className='great-primer'>
                    {responseKey}{' '}
                  </DataRow.Header>
                  {responses[responseKey].description && (
                    <DataRow.Description as='span' className='body-copy'>
                      {responses[responseKey].description}
                      {!!responses[responseKey].content && (
                        <Collapse>
                          <CollapseItem title='Response model' nested>
                            <EndpointBlockContent 
                              allProperties={getResponseProperties(responses[responseKey])} 
                              requiredPropertyKeys={getRequiredResponseKeys(
                                responses[responseKey]
                              )}
                            />
                          </CollapseItem>
                        </Collapse>
                      )}
                    </DataRow.Description>
                  )}
                </DataRow.DataListItem>
              ))}
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
