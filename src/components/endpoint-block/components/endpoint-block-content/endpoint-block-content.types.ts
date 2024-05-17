export interface EndpointBlockContentProps {
  allProperties: any
  requiredPropertyKeys: any
  propertyGroups?: object
}

export interface OneOfProps {
  type: string,
  required: Array<string>,
  properties: Object,
}
