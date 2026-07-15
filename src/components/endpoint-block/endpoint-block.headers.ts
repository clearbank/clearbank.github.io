// Standard request headers injected into the Parameters section of every
// EndpointBlock. These are rendered by the component rather than being baked
// into each OpenAPI schema, so that a single endpoint definition can be shown
// against two different APIs (Financial Institution API and External Gateway)
// which share identical request/response bodies but require different headers.

export enum ApiVariant {
  FinancialInstitution = 'FinancialInstitution',
  ExternalGateway = 'ExternalGateway'
}

export const API_VARIANT_LABELS: Record<ApiVariant, string> = {
  [ApiVariant.FinancialInstitution]: 'Financial Institution API',
  [ApiVariant.ExternalGateway]: 'External Gateway'
}

// Shape matches the OpenAPI parameter objects rendered by
// EndpointBlockParameters (name / schema.type / in / required / description).
export interface HeaderParameter {
  name: string
  in: 'header'
  required?: boolean
  description: string
  schema: { type: string }
}

const header = (
  name: string,
  description: string,
  required = false
): HeaderParameter => ({
  name,
  in: 'header',
  required,
  description,
  schema: { type: 'string' }
})

// Financial Institution API headers vary by HTTP method (see getting-started.mdx):
//   GET              -> Authorization
//   POST/PATCH/PUT   -> Authorization, DigitalSignature, X-Request-Id
//   DELETE           -> Authorization, X-Request-Id
const fiAuthorization = header(
  'Authorization',
  'Your API token retrieved from the ClearBank Portal.',
  true
)
const fiDigitalSignature = header(
  'DigitalSignature',
  'A hash of the request body signed with your private key.',
  true
)
const fiRequestId = header(
  'X-Request-Id',
  'A unique identifier you generate to check for duplicate requests. It must be unique (max length 83) for any subsequent requests sent for at least 24 hours after the initial request.',
  true
)

const financialInstitutionHeadersByMethod: Record<string, HeaderParameter[]> = {
  get: [fiAuthorization],
  post: [fiAuthorization, fiDigitalSignature, fiRequestId],
  patch: [fiAuthorization, fiDigitalSignature, fiRequestId],
  put: [fiAuthorization, fiDigitalSignature, fiRequestId],
  delete: [fiAuthorization, fiRequestId]
}

// External Gateway headers. TODO: confirm which of these are mandatory and
// whether they vary by HTTP method. For now the same set is applied to every
// method and none are marked Required pending confirmation.
const externalGatewayHeaders: HeaderParameter[] = [
  header(
    'Authorization',
    'Your access token obtained from our authentication service, as a bearer token.'
  ),
  header(
    'X-fapi-interaction-id',
    'Universally unique identifier (RFC4122 UID) for the request. Provides request level idempotency and allows request tracing.'
  ),
  header('Signature', "The HTTP Request's digital Signature."),
  header(
    'Signature-Input',
    'This is a Dictionary Structured Header [RFC8941] containing the metadata for the requests Signature.'
  )
]

// Every header name owned by either variant. Any header parameter already
// present on a schema whose name matches one of these is removed before the
// standard headers are injected, so headers are not rendered twice.
export const STANDARD_HEADER_NAMES: string[] = [
  'Authorization',
  'DigitalSignature',
  'X-Request-Id',
  'X-Request-Time',
  'X-fapi-interaction-id',
  'Signature',
  'Signature-Input'
]

const standardHeaderNamesLower = STANDARD_HEADER_NAMES.map(name =>
  name.toLowerCase()
)

const isStandardHeader = (parameter: any): boolean =>
  !!parameter &&
  (parameter.in === 'header' || parameter.in === 'Header') &&
  typeof parameter.name === 'string' &&
  standardHeaderNamesLower.includes(parameter.name.toLowerCase())

// Removes the standard headers baked into a schema while keeping every
// endpoint-specific parameter (path, query and any non-standard headers).
export const stripStandardHeaders = (parameters: any[] = []): any[] => {
  if (!Array.isArray(parameters)) {
    return []
  }

  return parameters.filter(parameter => !isStandardHeader(parameter))
}

// Returns the injected headers for the given API variant and HTTP method.
export const getInjectedHeaders = (
  variant: ApiVariant,
  type: string
): HeaderParameter[] => {
  if (variant === ApiVariant.ExternalGateway) {
    return externalGatewayHeaders
  }

  const method = (type || '').toLowerCase()

  return financialInstitutionHeadersByMethod[method] || [fiAuthorization]
}
