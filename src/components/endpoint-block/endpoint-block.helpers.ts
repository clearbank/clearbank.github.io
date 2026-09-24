import { sample } from 'openapi-sampler'

import { SectionType, CodeblockType } from 'src/global.types'

import { SectionTypeEnum, BlockStatusColourEnum } from './endpoint-block.types'

const prettyPrintJson = (payload:JSON):string => {
  return JSON.stringify(payload, null, 2)
}

const getCardColour = (payload: any):string => {
  return BlockStatusColourEnum[payload.description] || BlockStatusColourEnum.Default
}

const getCardTitle = (section: SectionType, payload: any):string => {
  if (section === SectionTypeEnum.RESPONSE) {
    return payload.description
  }

  return section
}

const createCodeBlock = (section: SectionType, payload: any, source: string):CodeblockType | null => {
  const schema = payload?.content?.['application/json']?.schema

  if (!schema) {
    const found = Object.keys(payload?.content || {}).join(', ') || 'none'
    console.error(
      `[endpoint-block] ${source} ${section}${section === SectionTypeEnum.RESPONSE ? ` "${payload?.description}"` : ''}: ` +
      `no "application/json" schema to build an example from (content types found: ${found}). Check the matching file in data/endpoints/.`
    )
    return null
  }

  const content = sample(schema)

  return {
    title: getCardTitle(section, payload),
    section,
    color: getCardColour(payload),
    language: 'json',
    codeSnippet: prettyPrintJson(content)
  }
}

export const generateDefaultCodeblocks = (section:SectionType, content:any, source = 'unknown endpoint'):CodeblockType[] => {
  if (!content) {
    return null
  }

  const codeblocks:CodeblockType[] = []

  if (section === SectionTypeEnum.REQUEST) {
    codeblocks.push(createCodeBlock(section, content, source))
  } else if (section === SectionTypeEnum.RESPONSE) {
    const responseCodes = Object.values(content)

    for (const response of responseCodes) {
      if (!response.hasOwnProperty('content')) continue
      codeblocks.push(createCodeBlock(section, response, source))
    }
  }

  return codeblocks.filter(Boolean)
}

export const getWebhook = (webhooks: any, fileName: string) => {
  const { node } = webhooks.find(
    (webhook: any) => webhook.node.fields.slug === fileName
  )

  return node
}
