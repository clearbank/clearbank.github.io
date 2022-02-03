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

const createCodeBlock = (section: SectionType, payload: any):CodeblockType => {
  const content = sample(payload.content['application/json'].schema)

  return {
    title: getCardTitle(section, payload),
    section,
    color: getCardColour(payload),
    language: 'json',
    codeSnippet: prettyPrintJson(content)
  }
}

export const generateDefaultCodeblocks = (section:SectionType, content:any):CodeblockType[] => {
  if (!content) {
    return null
  }

  const codeblocks:CodeblockType[] = []

  if (section === SectionTypeEnum.REQUEST) {
    codeblocks.push(createCodeBlock(section, content))
  } else if (section === SectionTypeEnum.RESPONSE) {
    const responseCodes = Object.values(content)

    for (const response of responseCodes) {
      if (!response.hasOwnProperty('content')) continue
      codeblocks.push(createCodeBlock(section, response))
    }
  }

  return codeblocks
}

export const getWebhook = (webhooks: any, fileName: string) => {
  const { node } = webhooks.find(
    (webhook: any) => webhook.node.fields.slug === fileName
  )

  return node
}
