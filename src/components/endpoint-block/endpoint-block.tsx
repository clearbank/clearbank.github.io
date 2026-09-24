import React, { ReactElement, useState } from 'react'

import { SelectDropdown, SelectOption } from 'src/components/select-dropdown'
import { SectionType } from 'src/global.types'

import EndpointBlockModel from './components/endpoint-block-model'
import EndpointBlockRespsonse from './components/endpoint-block-response'
import EndpointBlockParameters from './components/endpoint-block-parameters'
import EndpointBlockWebhooks from './components/endpoint-block-webhooks'
import CodeSnippet from 'src/components/code-snippet'

import * as Types from './endpoint-block.types'
import * as Styles from './endpoint-block.styles'
import * as Helpers from './endpoint-block.helpers'
import { getAllWebhooks } from 'src/hooks/allWebhooks'

import APIFiles from '../../../data/endpoints.json'
import kebabCase from 'lodash.kebabcase'

const renderDescription = (descriptionApi: any, descriptionProps: any) => (
  <>
    <Styles.Description
      dangerouslySetInnerHTML={{ __html: descriptionApi }}
    />
    {descriptionProps}
  </>
)

const getCodeBlocks = (
  section: SectionType,
  codeblocks: Types.Codeblock[] = [],
  content?: any,
  source?: string
) => {
  const customCodeblocksForSection = codeblocks.filter(
    (codeblock: Types.Codeblock) => codeblock.section === section
  )

  if (customCodeblocksForSection.length >= 1) {
    return customCodeblocksForSection
  }

  return Helpers.generateDefaultCodeblocks(section, content, source)
}

const renderVersionDropdown = (
  endpoints: any,
  setCurrentVersion: any,
  currentVersion: any
) => (
  <SelectDropdown
    onChange={(value: number) => setCurrentVersion(value)}
    value={currentVersion}
    placeholder='API Version' // Avoids flash of Mandarin/Cantonese placeholder
  >
    {endpoints.map(
      (endpoint: any, index: number): React.ReactNode => {
        const { version } = endpoint
        const versionFormatted = parseInt(version, 10)
          .toString()
          .padStart(3, '\u00A0')
        const label = `API Version ${versionFormatted}`

        return <SelectOption key={index} label={label} value={index} />
      }
    )}
  </SelectDropdown>
)

const getRelatedWebhooks = (webhooks: string[] = []) => {
  const allWebhooks: any = getAllWebhooks()

  if (typeof allWebhooks === 'undefined') {
    return []
  }

  return webhooks.map(webhookTitle => {
    const { allMdx } = allWebhooks
    const { frontmatter } = Helpers.getWebhook(allMdx.edges, `/${webhookTitle}`)
    const { title } = frontmatter

    return title
  })
}

const EndpointBlock: React.FunctionComponent<Types.EndpointProps> = ({
  title,
  message,
  children,
  type,
  endpoints,
  boxProps,
  description: descriptionProps
}): ReactElement => {
  const [currentVersion, setCurrentVersion] = useState(0)
  const hasCustomContent = !!children
  const currentEndpoint = endpoints[currentVersion]

  if (!endpoints.length || typeof currentEndpoint === 'undefined') {
    return null
  }

  const {
    path,
    codeblocks,
    version,
    webhooks
  } = currentEndpoint

  const source = `${type.toUpperCase()} ${path} (version "${version}")`
  const operation = APIFiles[version]?.paths?.[path]?.[type]

  if (!operation) {
    const reason = !APIFiles[version]
      ? `no spec with info.version "${version}" in data/endpoints.json (it may have failed validation - check the gatsby terminal output)`
      : `spec "${version}" has no "${type}" operation at path "${path}"`
    console.error(`[endpoint-block] "${title}": ${reason}`)

    return process.env.NODE_ENV === 'production' ? null : (
      <Styles.Container mt={['40px', '40px']} {...boxProps}>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Description>Endpoint definition not found for {source}: {reason}.</Styles.Description>
      </Styles.Container>
    )
  }

  const {
    summary,
    description: descriptionApi,
    parameters,
    requestBody,
    responses
  } = operation

  const apiURL = (
    <>
      <Styles.Type className='code-type'>{type}</Styles.Type>
      <Styles.Path className='code-path'>
        <span>{path}</span>
      </Styles.Path>
    </>
  )

  const titleTransformed = kebabCase(title.toLowerCase())
  const relatedWebhooks = getRelatedWebhooks(webhooks)

  if (hasCustomContent) {
    return children(operation)
  }

  return (
    <Styles.Container
      mt={['40px', '40px']}
      {...boxProps}
      className='endpoint-block-container page-menu-entry-parent'
    >
      <Styles.Title
        className='endpoint-block-title page-menu-entry'
        id={titleTransformed}
      >
        {title}
      </Styles.Title>
      <Styles.DropdownWrapper>
        <CodeSnippet
          type={type}
          code={apiURL}
          className='endpoint-block-code'
        />
        {renderVersionDropdown(endpoints, setCurrentVersion, currentVersion)}
      </Styles.DropdownWrapper>
      <Styles.Description>{message}</Styles.Description>

      {summary && <Styles.SubTitle>{summary}</Styles.SubTitle>}

      {renderDescription(descriptionApi, descriptionProps)}

      <Styles.FlexContainer>
        <Styles.EndpointWrapper>
          <EndpointBlockParameters
            parameters={parameters}
            codeblocks={getCodeBlocks('parameters', codeblocks)}
          />
          <EndpointBlockModel
            path={path}
            type={type}
            apiData={APIFiles[version]}
            codeblocks={getCodeBlocks('request', codeblocks, requestBody, source)}
          />
          <EndpointBlockRespsonse
            path={path}
            type={type}
            apiData={APIFiles[version]}
            codeblocks={getCodeBlocks('response', codeblocks, responses, source)}
          />
          <EndpointBlockWebhooks webhooks={relatedWebhooks} />
        </Styles.EndpointWrapper>
      </Styles.FlexContainer>
    </Styles.Container>
  )
}

export default EndpointBlock
