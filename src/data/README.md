# Reference content authoring guide

The Developer Portal contains two reference libraries:

- **Glossary**, populated from `glossary.js`
- **Technical Reference**, populated from `technical-reference.js`

Both reference libraries support:

- Search
- A–Z navigation
- Region-specific content
- Direct links to individual entries

The two libraries serve different purposes:

- The **Glossary** explains banking, payments, regulatory and ClearBank-specific concepts.
- The **Technical Reference** explains fields, identifiers, message standards, webhook concepts and other technical terminology used in APIs and integrations.

---

# Glossary

The Glossary provides definitions for banking, payments, financial services, regulatory terminology and ClearBank-specific concepts.

The Glossary is intended to:

- Help readers understand specialist financial terminology.
- Provide consistent definitions across products and documentation.
- Improve discoverability through search.
- Support direct links to individual definitions.

The Glossary is populated from:

```text
src/data/glossary.js
```

---

## What belongs in the Glossary

### Payment schemes

Examples include:

- Bacs
- Faster Payments
- CHAPS
- SEPA Credit Transfer
- SEPA Instant Credit Transfer
- T2

### Banking and payment concepts

Examples include:

- Beneficiary
- Creditor
- Debtor
- Clearing
- Settlement
- Payment Finality
- Real-Time Gross Settlement
- Cross-Border Payment
- IBAN
- BIC
- SWIFT

### Regulatory and compliance terminology

Examples include:

- FCA
- PRA
- FSCS
- CASS 7
- KYC
- KYB
- UBO
- LEI

### Direct Debit terminology

Examples include:

- Direct Debit
- Direct Debit Instruction
- Direct Debit Mandate
- Direct Debit Indemnity Claim
- Service User
- Service User Number
- AUDDIS
- ADDACS
- ARUDD

### Foreign exchange terminology

Examples include:

- Foreign Exchange
- FX Trade
- Request for Quote
- Multicurrency

### ClearBank-specific concepts

Examples include:

- Operating Account
- Institution Account
- Hub Account
- Real Account
- Virtual Account
- General Segregation Account
- Bacs Suspense Account
- Mandated Minimum Balance Account
- Intraday Liquidity Pool

---

## What does not belong in the Glossary

Do not add:

- API field definitions
- Request and response identifiers
- Webhook field definitions
- Certificate and cryptography terminology
- ISO 20022 message types
- API endpoint descriptions
- Error-code reference material
- Product walkthroughs
- Release notes
- Internal team terminology
- Generic terms that are not relevant to ClearBank documentation

These may belong in the Technical Reference or on a dedicated documentation page.

---

# Technical Reference

The Technical Reference provides definitions for identifiers, fields, message standards, webhook concepts, security terminology and other technical concepts used throughout ClearBank APIs and integrations.

The Technical Reference is intended to:

- Explain identifiers used in requests, responses and webhooks.
- Provide a consistent source of truth for technical field names.
- Clarify similar or inconsistently named fields.
- Explain how identifiers relate to one another.
- Explain API and integration terminology.
- Improve discoverability through search.
- Support direct links to individual technical definitions.

The Technical Reference is populated from:

```text
src/data/technical-reference.js
```

---

## What belongs in the Technical Reference

### API concepts

Examples include:

- Application Programming Interface
- Idempotency Key
- Request ID
- Correlation ID

### Request and response tracking

Examples include:

- `X-Request-Id`
- `X-Correlation-Id`

Definitions should explain:

- What the identifier represents
- Where it appears
- Whether it relates to one request or several related operations
- How it may be used during troubleshooting
- Any documented generation, reuse or validity requirements

Do not state that an identifier expires or remains valid indefinitely unless this is explicitly documented.

### Entity identifiers

Examples include:

- `AccountId`
- `CustomerId`
- `PaymentId`
- `TransactionId`
- `MandateId`
- `DirectDebitMandateId`
- `OriginalTransactionId`

Definitions should explain:

- Which entity the ID identifies
- Where the ID appears
- What the ID must not be confused with
- Any documented scope or lifecycle information

Do not state that an ID is globally unique, workspace-scoped, account-scoped or immutable unless this is explicitly documented.

### User-supplied payment references

Examples include:

- `EndToEndId`
- `EndToEndTransactionId`
- `EndToEndTransactionIdentification`
- `ActualEndToEndTransactionId`

Definitions should explain:

- Who assigns the reference
- Where the reference appears
- Whether the value passes through the payment chain
- How the reference supports reconciliation
- How similarly named fields relate to one another
- Whether lengths or permitted characters differ by scheme

Use aliases to capture inconsistent field names rather than assuming that developers will know the fields represent the same general concept.

### Scheme-specific identifiers

Examples include:

- `FPID`
- `BacsTransactionId`
- `ServiceUserNumber`
- `UETR`

Definitions should explain:

- Which payment scheme uses the identifier
- What the identifier represents
- Whether it is assigned by ClearBank, the client or the payment scheme
- How it may be used in reconciliation, tracking, recovery or investigations
- What other identifiers it must not be confused with

### Webhook concepts

Examples include:

- Webhook
- `EventId`
- Nonce
- Webhook Signature Verification

Definitions should explain:

- Where the value appears
- What the value represents
- How the value is used
- What the value must not be used for
- How it relates to other webhook and entity identifiers

For example, the Nonce definition should make clear that the value must be returned in the applicable signed response and must not be used to identify duplicate events.

### Security and certificate terminology

Examples include:

- Certificate Signing Request
- Hardware Security Module
- Mutual Transport Layer Security
- Public-Key Cryptography Standards
- PKCS #8
- PKCS #10

Definitions should explain:

- What the concept or artefact is
- Where it is used
- How it relates to certificates, keys or authentication
- Any security-sensitive distinctions developers need to understand

Do not include private key material, secrets or operationally sensitive information in the Technical Reference.

### Message standards

Examples include:

- ISO 20022
- `pacs.004`
- `pacs.008`
- `pacs.009`
- `camt.052`
- `camt.053`
- `camt.054`

Definitions should explain:

- The purpose of the standard or message
- The type of flow in which it is used
- How related message types differ

Do not reproduce full message specifications in the Technical Reference. Link to the appropriate detailed documentation where necessary.

### Payment field concepts

Examples include:

- Purpose Code
- Category Purpose Code

Definitions should explain:

- What the field communicates
- Where the field appears
- How similar fields differ
- Whether supported values depend on an API operation or payment scheme

---

## What does not belong in the Technical Reference

Do not add:

- General banking terminology
- Regulatory definitions
- Product marketing language
- Product walkthroughs
- Full API operation documentation
- Complete request or response schemas
- Complete ISO 20022 specifications
- Error-code catalogues
- Release notes
- Internal processes
- Internal-only identifiers
- Implementation details that should remain private

These may belong in the Glossary, API reference or another dedicated documentation page.

---

# Deciding where an entry belongs

Use the following questions to decide where to add an entry.

## Add it to the Glossary when the question is:

> What is this banking, payments, regulatory or ClearBank concept?

Examples:

- What is CHAPS?
- What is Faster Payments?
- What is a Beneficiary?
- What is KYC?
- What is an Operating Account?

## Add it to the Technical Reference when the question is:

> What does this API field, identifier, header, message or technical concept mean?

Examples:

- What is `EndToEndId`?
- What is `X-Correlation-Id`?
- What is a `PaymentId`?
- What is a UETR?
- What is `pacs.008`?
- What is a Nonce?

## Add it to a dedicated documentation page when the question is:

> How do I implement, configure or troubleshoot this feature?

Examples:

- How do I verify webhook signatures?
- How do I create a Certificate Signing Request?
- How do I send a Faster Payment?
- How do I resolve an API error?
- How do I process a `pacs.008` message?

The Glossary and Technical Reference should define concepts. They should not replace implementation guidance.

---

# Glossary entry structure

Every Glossary entry should use the following core structure:

```js
{
  id: '',
  term: '',
  acronym: '',
  aliases: [],
  regions: ['uk'],
  category: '',
  definition: '',
  seoTitle: '',
  seoDescription: '',
  relatedTerms: [],
}
```

Some Glossary entries may include additional structured content where it provides meaningful context.

For example:

```js
{
  id: 'bacs',
  term: 'Bankers’ Automated Clearing Services',
  acronym: 'Bacs',
  aliases: [
    'bacs',
    'bacs payment',
    'bacs payments',
    'bacs transfer',
  ],
  regions: ['uk'],
  category: 'payments',
  definition:
    'Bankers’ Automated Clearing Services (Bacs) is a UK payment system used to process Direct Debit and Direct Credit transactions between bank accounts.',
  paymentCycle: [
    {
      title: 'Day 1 (input)',
      description:
        'Payment instructions are submitted to Bacs.',
    },
  ],
  paymentTypes: [
    'Direct Debit',
    'Direct Credit',
  ],
  seoTitle: 'What is Bacs?',
  seoDescription:
    'Learn what Bacs is and how Direct Debit and Direct Credit payments are processed.',
  relatedTerms: [
    'direct-debit',
    'faster-payments',
    'chaps',
  ],
}
```

Only add entry-specific fields when the component supports them.

---

# Technical Reference entry structure

Every Technical Reference entry should use the following core structure:

```js
{
  id: '',
  term: '',
  acronym: '',
  aliases: [],
  category: '',
  regions: ['uk'],
  definition: '',
  usedIn: [],
  notes: [],
  seoTitle: '',
  seoDescription: '',
  relatedTerms: [],
}
```

Example:

```js
{
  id: 'request-id',
  term: 'Request ID',
  acronym: 'X-Request-Id',
  aliases: [
    'x-request-id',
    'x request id',
    'requestid',
    'request identifier',
  ],
  category: 'request-response-tracking',
  regions: ['uk', 'eu'],
  definition:
    'An X-Request-Id identifies a single applicable API request and can be supplied when investigating that request.',
  usedIn: [
    'Applicable API request headers',
    'Applicable API response headers',
    'Troubleshooting and support investigations',
  ],
  notes: [
    'A Request ID relates to an individual request, while a Correlation ID can associate related processing activity.',
    'Do not use a Request ID as a business-entity identifier.',
    'Refer to the applicable API documentation for generation and validity requirements.',
  ],
  seoTitle: 'What is an X-Request-Id?',
  seoDescription:
    'Learn how an X-Request-Id identifies an individual API request for tracing and troubleshooting.',
  relatedTerms: [
    'correlation-id',
    'idempotency-key',
  ],
}
```

---

# Field guidance

## `id`

The `id`:

- Must be unique within the file.
- Must use lowercase kebab case.
- Must not contain spaces.
- Is used as the entry’s URL anchor.
- Should not be changed after publication unless redirects or links are also updated.

Example:

```js
id: 'end-to-end-identifier'
```

This produces an anchor similar to:

```text
#end-to-end-identifier
```

Before adding an entry, search the file to make sure the ID does not already exist.

---

## `term`

Use the clearest expanded name for the concept.

Example:

```js
term: 'Unique End-to-End Transaction Reference'
```

For a field definition, use a readable field name:

```js
term: 'Payment ID'
```

The exact field name can be stored in `acronym` or `aliases`.

---

## `acronym`

Use `acronym` for:

- Acronyms
- Abbreviations
- Exact API field names
- Exact header names

Examples:

```js
acronym: 'UETR'
```

```js
acronym: 'PaymentId'
```

```js
acronym: 'X-Request-Id'
```

If the entry has no acronym or exact field-name label, use:

```js
acronym: ''
```

---

## `aliases`

Use `aliases` for terms that users may enter into search.

Aliases can include:

- Acronyms
- Abbreviations
- Alternative spelling
- Case variations
- Hyphenated and unhyphenated variants
- Exact field names
- Legacy field names
- Common terminology
- Alternate names used by different schemas or schemes

Example:

```js
aliases: [
  'endtoendid',
  'end to end id',
  'end-to-end id',
  'end to end identifier',
  'payment reference',
]
```

Do not use empty aliases:

```js
aliases: ['']
```

Use an empty array instead:

```js
aliases: []
```

---

## `regions`

Use:

```js
regions: ['uk']
```

for UK-only entries.

Use:

```js
regions: ['eu']
```

for EU-only entries.

Use:

```js
regions: ['uk', 'eu']
```

when an entry applies to both sets of documentation.

Do not add descriptive text to a region value.

Avoid:

```js
regions: ['uk only']
```

```js
regions: ['eu primary']
```

```js
regions: ['uk and eu']
```

The component expects exact region values.

---

## `category`

Use an existing category wherever possible.

### Glossary categories

Use one of:

```text
accounts
banking
compliance
currencies
direct-debits
foreign-exchange
liquidity
payments
security
```

### Technical Reference categories

Use one of:

```text
api
entity-identifiers
message-standards
payment-fields
payment-references
request-response-tracking
scheme-identifiers
security
webhooks
```

Do not use:

```js
category: 'general'
```

If an entry does not fit an existing category, consider whether it belongs in the reference library before introducing another category.

---

## `definition`

A definition should:

- Explain what the term or field is.
- Use plain English.
- Use terminology consistently.
- Be understandable without requiring the reader to open another page first.
- Be concise enough to scan.
- Avoid reproducing full implementation guidance.

A Technical Reference definition should identify the field or concept without making unsupported claims.

Good:

```js
definition:
  'A PaymentId identifies a payment in applicable ClearBank API requests, responses and webhook events.'
```

Avoid:

```js
definition:
  'A PaymentId is a globally unique and permanent identifier for every payment.'
```

The second definition should only be used if global uniqueness and permanence are explicitly documented and verified.

---

## `usedIn`

`usedIn` is primarily used in the Technical Reference.

Use it to identify the types of documentation, payloads or workflows in which the term appears.

Example:

```js
usedIn: [
  'Applicable payment API operations',
  'Applicable payment responses',
  'Applicable payment webhook events',
  'Payment support investigations',
]
```

Keep the descriptions concise.

Do not list every endpoint containing the field.

---

## `notes`

Use `notes` to capture important distinctions or constraints.

Notes can explain:

- What the term must not be confused with
- Which related identifier should be used instead
- Where field names vary between schemas
- Where requirements depend on the scheme or API operation
- Where readers should refer to more detailed documentation

Example:

```js
notes: [
  'A transaction is not necessarily the same entity as a payment.',
  'Do not substitute a PaymentId, OriginalTransactionId or scheme identifier.',
  'Refer to the applicable documentation for scope, immutability and lifecycle requirements.',
]
```

Do not use notes to add unsupported assumptions.

---

## `seoTitle`

Use a natural question that reflects what readers may search for.

Examples:

```js
seoTitle: 'What is an AccountId?'
```

```js
seoTitle: 'What is CHAPS?'
```

```js
seoTitle:
  'What is a Unique End-to-End Transaction Reference (UETR)?'
```

---

## `seoDescription`

The SEO description should:

- Summarise the entry accurately.
- Use plain English.
- Include the recognised term or field name.
- Explain the value of the entry.
- Avoid generic wording such as “Learn how this relates to banking”.

Example:

```js
seoDescription:
  'Learn what a TransactionId identifies and how it differs from other payment and transaction references.'
```

---

## `relatedTerms`

Use `relatedTerms` to connect closely related entries.

Every value must exactly match an existing `id` in the same data file.

Good:

```js
relatedTerms: [
  'payment-id',
  'original-transaction-id',
  'account-id',
]
```

Avoid:

```js
relatedTerms: [
  'Payment ID',
  'OriginalTransactionId',
]
```

Do not use empty values:

```js
relatedTerms: ['']
```

Use:

```js
relatedTerms: []
```

Do not link a Technical Reference entry directly to a Glossary ID unless the component explicitly supports cross-file related-term links.

---

# Naming conventions

## Use readable names for headings

Prefer:

```js
term: 'Payment ID',
acronym: 'PaymentId',
```

rather than:

```js
term: 'PaymentId',
acronym: '',
```

This gives the reader both the readable term and the exact field name.

## Preserve exact field names

Exact field names should retain their documented casing.

Examples:

```text
AccountId
CustomerId
PaymentId
TransactionId
OriginalTransactionId
EndToEndId
X-Request-Id
X-Correlation-Id
```

Add lowercase versions to `aliases` to support case-insensitive search.

## Keep similar concepts distinct

Do not merge identifiers merely because their names are similar.

For example:

- `PaymentId` identifies a payment entity.
- `TransactionId` identifies a transaction.
- `OriginalTransactionId` links an operation to an earlier transaction.
- `EndToEndId` is a payment reference supplied by the initiating party.
- `UETR` is used to trace an applicable payment across participating institutions.

The definitions and notes should make these distinctions clear.

---

# Editorial review

Add:

```js
editorialReview: true
```

when:

- A definition is based on internal understanding.
- The scope of an identifier has not been confirmed.
- The lifecycle of an identifier has not been confirmed.
- Product terminology may change.
- Legal, regulatory, security or scheme wording requires review.
- A ClearBank-specific account or service definition requires owner approval.

Remove the flag after the definition has been approved.

Example:

```js
{
  id: 'hub-account',
  term: 'Hub Account',
  acronym: '',
  aliases: [
    'hub accounts',
    'account hub',
  ],
  regions: ['uk'],
  category: 'accounts',
  definition:
    'A Hub Account is a ClearBank account type used within applicable embedded-banking account structures.',
  seoTitle: 'What is a Hub Account?',
  seoDescription:
    'Learn how the term Hub Account is used in ClearBank embedded-banking documentation.',
  relatedTerms: [
    'institution-account',
    'real-account',
    'virtual-account',
  ],
  editorialReview: true,
}
```

---

# Editing workflow

## Adding a Glossary entry

1. Confirm that the entry is a banking, payments, regulatory or ClearBank-specific concept.
2. Search `glossary.js` for the term, acronym and proposed ID.
3. Confirm that the entry does not already exist under another name.
4. Add the new object to `glossary.js`.
5. Use an existing Glossary category.
6. Add aliases for common searches and alternative names.
7. Add only related terms whose IDs already exist in `glossary.js`.
8. Assign the correct region or regions.
9. Add `editorialReview: true` when approval is required.
10. Build the Developer Portal and confirm that:
    - The entry appears in the correct regional page.
    - The entry appears under the correct letter.
    - Search finds the term and its aliases.
    - The direct anchor link works.
    - Related terms do not create broken links.

## Adding a Technical Reference entry

1. Confirm that the entry is an API field, identifier, header, message, webhook concept, security term or technical integration concept.
2. Search `technical-reference.js` for:
   - The exact field name
   - The readable term
   - Known aliases
   - The proposed ID
3. Confirm whether a similarly named entry already represents the same concept.
4. Add the new object to `technical-reference.js`.
5. Use an existing Technical Reference category.
6. Add the exact field name to `acronym` or `aliases`.
7. Explain where the field is used through `usedIn`.
8. Use `notes` to distinguish the field from related identifiers.
9. Do not state scope, uniqueness, immutability, reuse or expiry unless confirmed by source documentation.
10. Add only related terms whose IDs already exist in `technical-reference.js`.
11. Assign the correct region or regions.
12. Add `editorialReview: true` when technical or product confirmation is required.
13. Build the Developer Portal and confirm that:
    - The entry appears in the correct regional page.
    - The entry appears under the correct letter.
    - Search finds the readable term, exact field name and aliases.
    - The direct anchor link works.
    - Optional `usedIn` and `notes` sections display correctly.
    - Related terms do not create broken links.

---

# Updating an existing entry

When updating an entry:

1. Keep the existing `id` wherever possible.
2. Update aliases if terminology has changed or another field name has been introduced.
3. Check whether the definition remains accurate across both regions.
4. Update `regions` if applicability has changed.
5. Check all `relatedTerms`.
6. Search the repository for links to the entry before changing its ID.
7. Add `editorialReview: true` if the revised wording needs approval.
8. Preview the UK and EU pages after the change.

Changing an existing ID can break direct links from documentation, search engines and external sources.

---

# Removing an entry

Before removing an entry:

1. Search the repository for its `id`.
2. Search both data files for references to the ID in `relatedTerms`.
3. Check whether documentation links directly to the entry.
4. Remove or update affected links.
5. Remove the entry.
6. Build both regional versions of the Developer Portal.
7. Confirm that no related-term or anchor links are broken.

Do not remove an entry solely because terminology is changing. Where appropriate, retain the existing ID and add the new terminology through `term`, `acronym` or `aliases`.

---

# Validation checklist

Before submitting changes, check the following.

## Data quality

- [ ] Every `id` is present and unique.
- [ ] Every `term` is present.
- [ ] Every `regions` value is `uk`, `eu` or both.
- [ ] Every entry uses an approved category.
- [ ] No array contains an empty string.
- [ ] Every `relatedTerms` value matches an existing ID in the same file.
- [ ] No placeholder or empty entry remains.
- [ ] Exact API field names use the documented casing.

## Content quality

- [ ] The definition explains what the term represents.
- [ ] The definition does not make unsupported claims.
- [ ] Technical entries explain where the field is used.
- [ ] Similar identifiers are clearly distinguished.
- [ ] Scheme-specific limitations are attributed to the applicable scheme.
- [ ] ClearBank-specific definitions have been reviewed where required.
- [ ] UK spelling and terminology are used consistently.

## Preview checks

- [ ] The page builds without errors.
- [ ] The entry appears in the intended region.
- [ ] The entry appears under the correct A–Z heading.
- [ ] The A–Z heading appears in the page menu.
- [ ] Search finds the term.
- [ ] Search finds the acronym or field name.
- [ ] Search finds the aliases.
- [ ] The direct entry link works.
- [ ] Optional sections render correctly.
- [ ] No duplicate React keys or IDs are reported.

---

# Technical Reference priorities

The Technical Reference was created to provide clearer and more consistent explanations of identifiers used in requests, responses and webhooks.

Prioritise content in the following order:

1. Request and response tracking identifiers
2. Entity identifiers
3. User-supplied payment references
4. Scheme-specific identifiers
5. Webhook fields and security concepts
6. Certificate and authentication terminology
7. ISO 20022 messages and payment fields
8. Broader API concepts that appear repeatedly in the documentation

Do not expand the Technical Reference into a general software-development glossary. Add a term when it is relevant to ClearBank documentation and helps a developer understand or use a ClearBank integration.