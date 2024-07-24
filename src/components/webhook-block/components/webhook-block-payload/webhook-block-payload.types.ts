import { CodeblockType } from 'src/global.types'

export interface WebhookBlockPayloadProps {
  webhookName: string
  //parameters: any
  // codeblocks?: CodeblockType[]
}

export interface OneOfProps {
  type: string,
  required: Array<string>,
  properties: Object,
}
