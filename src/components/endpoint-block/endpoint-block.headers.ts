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

// Financial Institution API headers vary by HTTP method and by region.
//
// UK (see getting-started.mdx):
//   GET              -> Authorization
//   POST/PATCH/PUT   -> Authorization, DigitalSignature, X-Request-Id
//   DELETE           -> Authorization, X-Request-Id
//
// EU (see content/eu/docs/api/parameters.json):
//   GET/DELETE       -> Authorization, DigitalSignature, X-Request-Id, X-Request-Time
//   POST/PATCH/PUT   -> Authorization, DigitalSignature, X-Request-Id
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
const euDigitalSignature = header(
  'DigitalSignature',
  'For PUT, POST, and PATCH, this is a hash of the request body signed with your private key. For GET and DELETE, this value is generated from your HTTP method, query path, X-Request-Id, and X-Request-Time values.',
  true
)
const euRequestTime = header(
  'X-Request-Time',
  'The current UNIX timestamp in seconds. This value will be rejected if it is more than 60 seconds late.',
  true
)

const ukFinancialInstitutionHeadersByMethod: Record<
  string,
  HeaderParameter[]
> = {
  get: [fiAuthorization],
  post: [fiAuthorization, fiDigitalSignature, fiRequestId],
  patch: [fiAuthorization, fiDigitalSignature, fiRequestId],
  put: [fiAuthorization, fiDigitalSignature, fiRequestId],
  delete: [fiAuthorization, fiRequestId]
}

const euFinancialInstitutionHeadersByMethod: Record<
  string,
  HeaderParameter[]
> = {
  get: [fiAuthorization, euDigitalSignature, fiRequestId, euRequestTime],
  post: [fiAuthorization, euDigitalSignature, fiRequestId],
  patch: [fiAuthorization, euDigitalSignature, fiRequestId],
  put: [fiAuthorization, euDigitalSignature, fiRequestId],
  delete: [fiAuthorization, euDigitalSignature, fiRequestId, euRequestTime]
}

// External Gateway headers are the same regardless of region. Content-Digest is
// only present when the request has a body (see getInjectedHeaders).
const externalGatewayContentDigest = header(
  'Content-Digest',
  'A digest of the request body, as defined in RFC 9530. Required for requests that contain a body.',
  true
)
const externalGatewayHeaders: HeaderParameter[] = [
  header(
    'Authorization',
    'Your access token obtained from our authentication service, as a bearer token.',
    true
  ),
  header(
    'X-fapi-interaction-id',
    'Universally unique identifier (RFC4122 UID) for the request. Provides request level idempotency and allows request tracing.',
    true
  ),
  header('Signature', "The HTTP Request's digital Signature.", true),
  header(
    'Signature-Input',
    'This is a Dictionary Structured Header [RFC8941] containing the metadata for the requests Signature.',
    true
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
  'Signature-Input',
  'Content-Digest'
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

// Returns the injected headers for the given API variant, HTTP method and
// region. External Gateway headers are region-independent; Content-Digest is
// only included when the request has a body.
export const getInjectedHeaders = (
  variant: ApiVariant,
  type: string,
  isEu = false,
  hasRequestBody = false
): HeaderParameter[] => {
  if (variant === ApiVariant.ExternalGateway) {
    return [
      externalGatewayHeaders[0],
      externalGatewayHeaders[1],
      ...(hasRequestBody ? [externalGatewayContentDigest] : []),
      externalGatewayHeaders[2],
      externalGatewayHeaders[3]
    ]
  }

  const method = (type || '').toLowerCase()
  const headersByMethod = isEu
    ? euFinancialInstitutionHeadersByMethod
    : ukFinancialInstitutionHeadersByMethod

  return headersByMethod[method] || [fiAuthorization]
}
