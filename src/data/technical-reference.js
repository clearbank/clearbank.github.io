const technicalReferenceTerms = [
  {
    id: 'account-id',
    term: 'Account ID',
    acronym: 'AccountId',
    aliases: [
      'accountid',
      'account id',
      'account identifier',
    ],
    category: 'entity-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'An AccountId identifies an account in applicable API requests, responses and webhook events.',
    usedIn: [
      'Account API requests and responses',
      'Payment API requests and responses',
      'Applicable webhook events',
    ],
    notes: [
      'Use the AccountId associated with the account involved in the operation.',
      'Do not substitute a CustomerId, PaymentId or TransactionId.',
      'Refer to the applicable API or webhook documentation for scope and lifecycle requirements.',
    ],
    seoTitle: 'What is an AccountId?',
    seoDescription:
      'Learn what an AccountId identifies and how it is used in applicable API requests, responses and webhook events.',
    relatedTerms: [
      'customer-id',
      'payment-id',
      'transaction-id',
    ],
  },

  {
    id: 'actual-end-to-end-transaction-id',
    term: 'Actual End-to-End Transaction ID',
    acronym: 'ActualEndToEndTransactionId',
    aliases: [
      'actualendtoendtransactionid',
      'actual end to end transaction id',
      'actual end-to-end id',
      'actual payment reference',
    ],
    category: 'scheme-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'An ActualEndToEndTransactionId contains the end-to-end transaction reference associated with the payment after applicable processing.',
    usedIn: [
      'Applicable payment responses',
      'Applicable payment webhook events',
      'Payment reconciliation',
    ],
    notes: [
      'This value may be different from the end-to-end reference originally supplied in the payment request.',
      'Use this field when the applicable payment response or webhook provides the processed reference.',
      'Refer to the relevant payment-scheme documentation for format and length requirements.',
    ],
    seoTitle:
      'What is an ActualEndToEndTransactionId?',
    seoDescription:
      'Learn what an ActualEndToEndTransactionId represents and how it relates to an end-to-end payment reference.',
    relatedTerms: [
      'end-to-end-identifier',
      'end-to-end-transaction-identification',
      'end-to-end-transaction-id',
      'payment-id',
    ],
  },

  {
    id: 'application-programming-interface',
    term: 'Application Programming Interface',
    acronym: 'API',
    aliases: [
      'api',
      'clearbank api',
      'banking api',
      'payment api',
      'application interface',
    ],
    category: 'api',
    regions: ['uk', 'eu'],
    definition:
      'An Application Programming Interface (API) is a defined way for software applications to exchange requests and responses. ClearBank APIs allow an authorised client application to interact with applicable ClearBank services.',
    usedIn: [
      'Account operations',
      'Payment operations',
      'Customer and mandate operations',
      'Retrieving information from ClearBank services',
    ],
    notes: [
      'Each API operation defines its own request fields, response fields and validation requirements.',
      'Webhook events notify a client about applicable events without requiring the client to repeatedly request the same information.',
    ],
    seoTitle:
      'What is an Application Programming Interface (API)?',
    seoDescription:
      'Learn what an API is and how authorised client applications interact with applicable ClearBank services.',
    relatedTerms: [
      'idempotency-key',
      'request-id',
      'correlation-id',
      'webhook',
    ],
  },

  {
    id: 'bacs-transaction-id',
    term: 'Bacs Transaction ID',
    acronym: 'BacsTransactionId',
    aliases: [
      'bacstransactionid',
      'bacs transaction id',
      'bacs payment identifier',
      'bacs transaction identifier',
    ],
    category: 'scheme-identifiers',
    regions: ['uk'],
    definition:
      'A BacsTransactionId identifies an applicable Bacs transaction in ClearBank data.',
    usedIn: [
      'Applicable Bacs responses',
      'Applicable Bacs webhook events',
      'Bacs transaction reconciliation',
      'Payment investigations',
    ],
    notes: [
      'Use the BacsTransactionId when reconciling or investigating the corresponding Bacs transaction.',
      'Do not substitute a PaymentId or an end-to-end payment reference.',
      'Refer to the applicable Bacs documentation for scope, format and lifecycle requirements.',
    ],
    seoTitle: 'What is a BacsTransactionId?',
    seoDescription:
      'Learn what a BacsTransactionId identifies and how it supports applicable Bacs reconciliation and investigations.',
    relatedTerms: [
      'payment-id',
      'service-user-number',
      'transaction-id',
    ],
  },

  {
    id: 'category-purpose-code',
    term: 'Category Purpose Code',
    acronym: '',
    aliases: [
      'categorypurpose',
      'category purpose',
      'category purpose code',
      'payment category',
    ],
    category: 'payment-fields',
    regions: ['uk', 'eu'],
    definition:
      'A Category Purpose Code identifies the broad business category of a payment.',
    usedIn: [
      'Applicable payment requests',
      'Applicable ISO 20022 payment messages',
    ],
    notes: [
      'A Category Purpose Code describes a broader category than a Purpose Code.',
      'Use only values supported by the applicable payment scheme or API operation.',
    ],
    seoTitle: 'What is a Category Purpose Code?',
    seoDescription:
      'Learn how a Category Purpose Code identifies the broad business category of a payment.',
    relatedTerms: [
      'purpose-code',
      'iso-20022',
    ],
  },

  {
    id: 'certificate-signing-request',
    term: 'Certificate Signing Request',
    acronym: 'CSR',
    aliases: [
      'csr',
      'certificate request',
      'digital certificate request',
      'pkcs 10 request',
    ],
    category: 'security',
    regions: ['uk', 'eu'],
    definition:
      'A Certificate Signing Request (CSR) is a file containing a public key and identifying information used to request a digital certificate.',
    usedIn: [
      'Certificate enrolment',
      'Mutual TLS setup',
      'Applicable security onboarding processes',
    ],
    notes: [
      'The private key associated with the CSR must remain under the control of its owner.',
      'A CSR is not itself a digital certificate.',
    ],
    seoTitle:
      'What is a Certificate Signing Request (CSR)?',
    seoDescription:
      'Learn what a CSR contains and how it is used when requesting a digital certificate.',
    relatedTerms: [
      'mutual-transport-layer-security',
      'public-key-cryptography-standards',
      'hardware-security-module',
    ],
  },

  {
    id: 'correlation-id',
    term: 'Correlation ID',
    acronym: 'X-Correlation-Id',
    aliases: [
      'x-correlation-id',
      'x correlation id',
      'correlationid',
      'correlation id',
      'correlation identifier',
      'tracking id',
    ],
    category: 'request-response-tracking',
    regions: ['uk', 'eu'],
    definition:
      'An X-Correlation-Id associates related API requests, responses and processing activity so that an operation can be traced across applicable services.',
    usedIn: [
      'Applicable API request headers',
      'Applicable API response headers',
      'Troubleshooting and support investigations',
    ],
    notes: [
      'A Correlation ID can relate to more than one piece of processing activity.',
      'Do not assume that a Correlation ID identifies a business entity such as an account, payment or transaction.',
      'Refer to the applicable API documentation for generation, reuse and validity requirements.',
    ],
    seoTitle: 'What is an X-Correlation-Id?',
    seoDescription:
      'Learn how an X-Correlation-Id associates related API activity for tracing and troubleshooting.',
    relatedTerms: [
      'request-id',
      'idempotency-key',
    ],
  },

  {
    id: 'customer-id',
    term: 'Customer ID',
    acronym: 'CustomerId',
    aliases: [
      'customerid',
      'customer id',
      'customer identifier',
    ],
    category: 'entity-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'A CustomerId identifies a customer in applicable API requests, responses and webhook events.',
    usedIn: [
      'Applicable customer operations',
      'Applicable account operations',
      'Applicable webhook events',
    ],
    notes: [
      'Use a CustomerId only where the field represents the customer entity.',
      'Do not substitute an AccountId or other entity identifier.',
      'Refer to the applicable API or webhook documentation for scope and lifecycle requirements.',
    ],
    seoTitle: 'What is a CustomerId?',
    seoDescription:
      'Learn what a CustomerId identifies and how it is used in applicable API operations and webhook events.',
    relatedTerms: [
      'account-id',
      'payment-id',
      'transaction-id',
    ],
  },

  {
    id: 'direct-debit-mandate-id',
    term: 'Direct Debit Mandate ID',
    acronym: 'DirectDebitMandateId',
    aliases: [
      'directdebitmandateid',
      'direct debit mandate id',
      'direct debit mandate identifier',
      'mandate id',
      'mandateid',
    ],
    category: 'entity-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'A DirectDebitMandateId identifies a Direct Debit mandate in applicable API responses and webhook events.',
    usedIn: [
      'Applicable Direct Debit operations',
      'Applicable mandate webhook events',
    ],
    notes: [
      'Some documentation or payloads may use MandateId for the same type of entity.',
      'Use the field name specified by the applicable API or webhook schema.',
      'Refer to the relevant documentation for scope, immutability and lifecycle requirements.',
    ],
    seoTitle:
      'What is a DirectDebitMandateId?',
    seoDescription:
      'Learn what a DirectDebitMandateId identifies and how it relates to MandateId in applicable Direct Debit integrations.',
    relatedTerms: [
      'mandate-id',
      'original-transaction-id',
    ],
  },

  {
    id: 'end-to-end-identifier',
    term: 'End-to-End Identifier',
    acronym: 'EndToEndId',
    aliases: [
      'endtoendid',
      'end to end id',
      'end-to-end id',
      'end to end identifier',
      'payment reference',
    ],
    category: 'payment-references',
    regions: ['uk', 'eu'],
    definition:
      'An EndToEndId is a payment reference assigned by the initiating party and passed through the payment chain, subject to the requirements of the applicable payment scheme.',
    usedIn: [
      'Applicable payment requests',
      'Applicable payment responses',
      'Applicable payment webhook events',
      'Payment reconciliation',
    ],
    notes: [
      'The field can appear under different names across payment schemes and schemas.',
      'Maximum length and permitted characters depend on the applicable API operation and payment scheme.',
      'Do not use this value as a substitute for a ClearBank-assigned PaymentId or TransactionId.',
    ],
    seoTitle: 'What is an EndToEndId?',
    seoDescription:
      'Learn what an EndToEndId is and how the initiating party uses it as a payment reference.',
    relatedTerms: [
      'actual-end-to-end-transaction-id',
      'end-to-end-transaction-identification',
      'end-to-end-transaction-id',
      'unique-end-to-end-transaction-reference',
    ],
  },

  {
    id: 'end-to-end-transaction-id',
    term: 'End-to-End Transaction ID',
    acronym: 'EndToEndTransactionId',
    aliases: [
      'endtoendtransactionid',
      'end to end transaction id',
      'end-to-end transaction id',
      'end to end payment reference',
      'endtoendid',
    ],
    category: 'payment-references',
    regions: ['uk', 'eu'],
    definition:
      'An EndToEndTransactionId is a field name used for an end-to-end payment reference supplied by the initiating party.',
    usedIn: [
      'Applicable payment requests',
      'Applicable payment responses',
      'Payment reconciliation',
    ],
    notes: [
      'This field represents the same general concept as EndToEndId, but naming varies between schemas.',
      'Use the exact field name required by the applicable schema.',
      'Maximum length and permitted characters may vary by API operation and payment scheme.',
    ],
    seoTitle:
      'What is an EndToEndTransactionId?',
    seoDescription:
      'Learn what an EndToEndTransactionId represents and how its field name varies between payment schemas.',
    relatedTerms: [
      'actual-end-to-end-transaction-id',
      'end-to-end-identifier',
      'end-to-end-transaction-identification',
    ],
  },

  {
    id: 'end-to-end-transaction-identification',
    term: 'End-to-End Transaction Identification',
    acronym: 'EndToEndTransactionIdentification',
    aliases: [
      'endtoendtransactionidentification',
      'end to end transaction identification',
      'end-to-end transaction identification',
      'endtoendid',
    ],
    category: 'payment-references',
    regions: ['uk', 'eu'],
    definition:
      'EndToEndTransactionIdentification is a field name used for an end-to-end payment reference supplied by the initiating party.',
    usedIn: [
      'Applicable payment requests',
      'Applicable payment responses',
      'Payment reconciliation',
    ],
    notes: [
      'This field represents the same general concept as EndToEndId, but naming varies between schemas.',
      'Use the exact field name required by the applicable schema.',
      'Maximum length and permitted characters may vary by API operation and payment scheme.',
    ],
    seoTitle:
      'What is EndToEndTransactionIdentification?',
    seoDescription:
      'Learn what EndToEndTransactionIdentification represents and how the name relates to other end-to-end payment fields.',
    relatedTerms: [
      'actual-end-to-end-transaction-id',
      'end-to-end-identifier',
      'end-to-end-transaction-id',
    ],
  },

  {
    id: 'event-id',
    term: 'Event ID',
    acronym: 'EventId',
    aliases: [
      'eventid',
      'event id',
      'event identifier',
      'webhook event id',
    ],
    category: 'webhooks',
    regions: ['uk', 'eu'],
    definition:
      'An EventId identifies an applicable webhook event.',
    usedIn: [
      'Applicable webhook payloads',
      'Webhook troubleshooting',
      'Event processing records',
    ],
    notes: [
      'An EventId identifies the webhook event, not necessarily the payment, account or transaction described by that event.',
      'Use the corresponding entity identifier when acting on the entity represented by the event.',
      'Refer to the applicable webhook documentation for scope and lifecycle requirements.',
    ],
    seoTitle: 'What is a Webhook EventId?',
    seoDescription:
      'Learn what an EventId identifies and how it differs from the entity IDs contained in a webhook.',
    relatedTerms: [
      'webhook',
      'payment-id',
      'transaction-id',
    ],
  },

  {
    id: 'faster-payment-identifier',
    term: 'Faster Payment Identifier',
    acronym: 'FPID',
    aliases: [
      'fpid',
      'faster payment id',
      'faster payment identifier',
      'faster payment reference',
      'faster payment identification number',
    ],
    category: 'scheme-identifiers',
    regions: ['uk'],
    definition:
      'A Faster Payment Identifier (FPID) is a reference associated with a Faster Payment and can support payment investigations, reconciliation and recovery processes.',
    usedIn: [
      'Applicable Faster Payment responses',
      'Applicable Faster Payment webhook events',
      'Payment investigations',
      'Credit Payment Recovery',
    ],
    notes: [
      'Use the FPID when the applicable Faster Payments process requires the scheme-associated reference.',
      'Do not substitute a PaymentId, TransactionId or user-supplied end-to-end reference.',
    ],
    seoTitle:
      'What is a Faster Payment Identifier (FPID)?',
    seoDescription:
      'Learn what an FPID is and how it supports applicable Faster Payments investigations and recovery processes.',
    relatedTerms: [
      'payment-id',
      'transaction-id',
      'end-to-end-identifier',
    ],
  },

  {
    id: 'hardware-security-module',
    term: 'Hardware Security Module',
    acronym: 'HSM',
    aliases: [
      'hsm',
      'cryptographic module',
      'key management device',
      'key protection device',
    ],
    category: 'security',
    regions: ['uk', 'eu'],
    definition:
      'A Hardware Security Module (HSM) is a physical or virtual security device used to generate, protect and use cryptographic keys.',
    usedIn: [
      'Cryptographic key management',
      'Certificate operations',
      'Digital signing',
    ],
    notes: [
      'The applicable implementation determines whether an HSM is required.',
      'Cryptographic keys should be handled according to the applicable security requirements.',
    ],
    seoTitle:
      'What is a Hardware Security Module (HSM)?',
    seoDescription:
      'Learn what an HSM is and how it is used to generate, protect and use cryptographic keys.',
    relatedTerms: [
      'certificate-signing-request',
      'public-key-cryptography-standards',
      'mutual-transport-layer-security',
    ],
  },

  {
    id: 'idempotency-key',
    term: 'Idempotency Key',
    acronym: '',
    aliases: [
      'idempotency',
      'idempotency header',
      'idempotent request',
      'duplicate request prevention',
    ],
    category: 'api',
    regions: ['uk', 'eu'],
    definition:
      'An Idempotency Key is a value supplied with an applicable API request to allow repeated submissions of the same operation to be recognised.',
    usedIn: [
      'Applicable API requests',
      'Request retry handling',
      'Duplicate-operation prevention',
    ],
    notes: [
      'Use a new value for each distinct operation.',
      'Reuse the value only when retrying the same operation in accordance with the applicable API requirements.',
      'Refer to the API documentation for the supported header name, format and validity period.',
    ],
    seoTitle: 'What is an Idempotency Key?',
    seoDescription:
      'Learn how an Idempotency Key helps an API recognise retries of the same operation.',
    relatedTerms: [
      'request-id',
      'correlation-id',
    ],
  },

  {
    id: 'iso-20022',
    term: 'ISO 20022',
    acronym: '',
    aliases: [
      'iso20022',
      'financial messaging standard',
      'payment messaging standard',
      'iso payment message',
    ],
    category: 'message-standards',
    regions: ['uk', 'eu'],
    definition:
      'ISO 20022 is an international standard for structured financial messages and the business data exchanged within them.',
    usedIn: [
      'Applicable payment-scheme messages',
      'Payment instructions',
      'Payment status and return messages',
      'Account reporting',
    ],
    notes: [
      'Individual ISO 20022 message types have distinct purposes and schemas.',
      'Refer to the applicable message specification for required fields, supported values and validation rules.',
    ],
    seoTitle: 'What is ISO 20022?',
    seoDescription:
      'Learn what ISO 20022 is and how it supports structured financial messaging.',
    relatedTerms: [
      'pacs-004',
      'pacs-008',
      'pacs-009',
      'purpose-code',
      'category-purpose-code',
    ],
  },

  {
    id: 'mandate-id',
    term: 'Mandate ID',
    acronym: 'MandateId',
    aliases: [
      'mandateid',
      'mandate id',
      'mandate identifier',
      'directdebitmandateid',
      'direct debit mandate id',
    ],
    category: 'entity-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'A MandateId identifies a mandate in applicable API requests, responses and webhook events.',
    usedIn: [
      'Applicable mandate operations',
      'Applicable Direct Debit operations',
      'Applicable mandate webhook events',
    ],
    notes: [
      'Some schemas may use DirectDebitMandateId for the same type of entity.',
      'Use the exact field name required by the applicable API or webhook schema.',
      'Refer to the relevant documentation for scope, immutability and lifecycle requirements.',
    ],
    seoTitle: 'What is a MandateId?',
    seoDescription:
      'Learn what a MandateId identifies and how it relates to DirectDebitMandateId in applicable integrations.',
    relatedTerms: [
      'direct-debit-mandate-id',
      'original-transaction-id',
    ],
  },

  {
    id: 'mutual-transport-layer-security',
    term: 'Mutual Transport Layer Security',
    acronym: 'mTLS',
    aliases: [
      'mtls',
      'mutual tls',
      'mutual authentication',
      'client certificate authentication',
    ],
    category: 'security',
    regions: ['uk', 'eu'],
    definition:
      'Mutual Transport Layer Security (mTLS) is a security mechanism in which the client and server authenticate each other using digital certificates.',
    usedIn: [
      'Applicable API connections',
      'Client authentication',
      'Secure transport between systems',
    ],
    notes: [
      'The client must present a valid certificate accepted by the server.',
      'Use certificates and keys according to the applicable onboarding and security requirements.',
    ],
    seoTitle:
      'What is Mutual Transport Layer Security (mTLS)?',
    seoDescription:
      'Learn how mTLS uses digital certificates to authenticate both the client and server.',
    relatedTerms: [
      'certificate-signing-request',
      'hardware-security-module',
      'public-key-cryptography-standards',
    ],
  },

  {
    id: 'nonce',
    term: 'Nonce',
    acronym: '',
    aliases: [
      'webhook nonce',
      'cryptographic nonce',
      'signed response nonce',
      'one-time value',
    ],
    category: 'webhooks',
    regions: ['uk', 'eu'],
    definition:
      'A nonce is a cryptographically secure value included in the applicable webhook process and returned in the signed response.',
    usedIn: [
      'Applicable webhook requests',
      'Applicable signed webhook responses',
    ],
    notes: [
      'Return the nonce as required by the applicable webhook documentation.',
      'Do not use the nonce to determine whether webhook events are duplicates.',
      'Use the appropriate event or entity identifier for event processing and reconciliation.',
    ],
    seoTitle: 'What is a Webhook Nonce?',
    seoDescription:
      'Learn what a nonce is and how it is used in an applicable signed webhook response.',
    relatedTerms: [
      'event-id',
      'webhook',
      'webhook-signature-verification',
    ],
  },

  {
    id: 'original-transaction-id',
    term: 'Original Transaction ID',
    acronym: 'OriginalTransactionId',
    aliases: [
      'originaltransactionid',
      'original transaction id',
      'original payment transaction id',
      'original transaction identifier',
    ],
    category: 'entity-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'An OriginalTransactionId identifies the earlier transaction to which a subsequent operation or event relates.',
    usedIn: [
      'Applicable returns',
      'Applicable reversals',
      'Applicable payment investigations',
      'Applicable webhook events',
    ],
    notes: [
      'Use this field to associate a subsequent operation with its original transaction.',
      'Do not assume that OriginalTransactionId is the same as PaymentId or an end-to-end payment reference.',
      'Refer to the applicable schema for the type and scope of the referenced transaction.',
    ],
    seoTitle: 'What is an OriginalTransactionId?',
    seoDescription:
      'Learn how an OriginalTransactionId links a subsequent operation or event to an earlier transaction.',
    relatedTerms: [
      'payment-id',
      'transaction-id',
      'actual-end-to-end-transaction-id',
    ],
  },

  {
    id: 'pacs-004',
    term: 'pacs.004',
    acronym: '',
    aliases: [
      'pacs004',
      'pacs 004',
      'payment return',
      'payment return message',
      'iso 20022 payment return',
    ],
    category: 'message-standards',
    regions: ['uk', 'eu'],
    definition:
      'A pacs.004 is an ISO 20022 payment-return message used to return funds from a previously processed payment.',
    usedIn: [
      'Applicable payment-return flows',
      'Applicable payment-scheme messaging',
    ],
    notes: [
      'Use the applicable message specification for required fields, supported reason codes and scheme-specific rules.',
    ],
    seoTitle: 'What is a pacs.004 message?',
    seoDescription:
      'Learn what a pacs.004 ISO 20022 message is and how it is used in applicable payment-return flows.',
    relatedTerms: [
      'iso-20022',
      'pacs-008',
      'pacs-009',
      'original-transaction-id',
    ],
  },

  {
    id: 'pacs-008',
    term: 'pacs.008',
    acronym: '',
    aliases: [
      'pacs008',
      'pacs 008',
      'customer credit transfer',
      'customer credit transfer message',
      'iso 20022 customer credit transfer',
    ],
    category: 'message-standards',
    regions: ['uk', 'eu'],
    definition:
      'A pacs.008 is an ISO 20022 message used for an interbank customer credit transfer.',
    usedIn: [
      'Applicable customer credit-transfer flows',
      'Applicable payment-scheme messaging',
    ],
    notes: [
      'Use the applicable message specification for required fields, supported values and scheme-specific rules.',
    ],
    seoTitle: 'What is a pacs.008 message?',
    seoDescription:
      'Learn what a pacs.008 ISO 20022 message is and how it is used for applicable customer credit transfers.',
    relatedTerms: [
      'iso-20022',
      'pacs-004',
      'pacs-009',
      'end-to-end-identifier',
    ],
  },

  {
    id: 'pacs-009',
    term: 'pacs.009',
    acronym: '',
    aliases: [
      'pacs009',
      'pacs 009',
      'financial institution credit transfer',
      'financial institution credit transfer message',
      'iso 20022 interbank transfer',
    ],
    category: 'message-standards',
    regions: ['uk', 'eu'],
    definition:
      'A pacs.009 is an ISO 20022 message used for a credit transfer between financial institutions.',
    usedIn: [
      'Applicable financial-institution credit-transfer flows',
      'Applicable payment-scheme messaging',
    ],
    notes: [
      'Use the applicable message specification for required fields, supported values and scheme-specific rules.',
    ],
    seoTitle: 'What is a pacs.009 message?',
    seoDescription:
      'Learn what a pacs.009 ISO 20022 message is and how it is used for applicable transfers between financial institutions.',
    relatedTerms: [
      'iso-20022',
      'pacs-004',
      'pacs-008',
      'unique-end-to-end-transaction-reference',
    ],
  },

  {
    id: 'payment-id',
    term: 'Payment ID',
    acronym: 'PaymentId',
    aliases: [
      'paymentid',
      'payment id',
      'payment identifier',
    ],
    category: 'entity-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'A PaymentId identifies a payment in applicable ClearBank API requests, responses and webhook events.',
    usedIn: [
      'Applicable payment API operations',
      'Applicable payment responses',
      'Applicable payment webhook events',
      'Payment support investigations',
    ],
    notes: [
      'Use a PaymentId when an operation requires the ClearBank payment entity.',
      'Do not substitute a TransactionId, scheme identifier or user-supplied payment reference.',
      'Refer to the applicable documentation for scope, immutability and lifecycle requirements.',
    ],
    seoTitle: 'What is a PaymentId?',
    seoDescription:
      'Learn what a PaymentId identifies and how it is used in applicable payment API operations and webhook events.',
    relatedTerms: [
      'transaction-id',
      'original-transaction-id',
      'end-to-end-identifier',
      'faster-payment-identifier',
    ],
  },

  {
    id: 'public-key-cryptography-standards',
    term: 'Public-Key Cryptography Standards',
    acronym: 'PKCS',
    aliases: [
      'pkcs',
      'public key cryptography standards',
      'pkcs 8',
      'pkcs #8',
      'pkcs8',
      'pkcs 10',
      'pkcs #10',
      'pkcs10',
    ],
    category: 'security',
    regions: ['uk', 'eu'],
    definition:
      'Public-Key Cryptography Standards (PKCS) are a family of specifications for working with public-key cryptography. Applicable ClearBank documentation may refer to PKCS #8 for private-key information and PKCS #10 for certificate-signing requests.',
    usedIn: [
      'Private-key handling',
      'Certificate-signing requests',
      'Applicable certificate and security setup',
    ],
    notes: [
      'PKCS refers to a family of standards rather than a single format.',
      'Use the specific PKCS format required by the applicable documentation.',
    ],
    seoTitle:
      'What are Public-Key Cryptography Standards (PKCS)?',
    seoDescription:
      'Learn what PKCS means and how PKCS #8 and PKCS #10 relate to keys and certificate-signing requests.',
    relatedTerms: [
      'certificate-signing-request',
      'hardware-security-module',
      'mutual-transport-layer-security',
    ],
  },

  {
    id: 'purpose-code',
    term: 'Purpose Code',
    acronym: '',
    aliases: [
      'purposecode',
      'purpose code',
      'payment purpose',
      'payment purpose code',
    ],
    category: 'payment-fields',
    regions: ['uk', 'eu'],
    definition:
      'A Purpose Code identifies the specific business purpose of a payment.',
    usedIn: [
      'Applicable payment requests',
      'Applicable ISO 20022 payment messages',
    ],
    notes: [
      'A Purpose Code describes a more specific purpose than a Category Purpose Code.',
      'Use only values supported by the applicable payment scheme or API operation.',
    ],
    seoTitle: 'What is a Purpose Code?',
    seoDescription:
      'Learn how a Purpose Code identifies the specific business purpose of a payment.',
    relatedTerms: [
      'category-purpose-code',
      'iso-20022',
    ],
  },

  {
    id: 'request-id',
    term: 'Request ID',
    acronym: 'X-Request-Id',
    aliases: [
      'x-request-id',
      'x request id',
      'requestid',
      'request id',
      'request identifier',
      'request reference',
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
  },

  {
    id: 'service-user-number',
    term: 'Service User Number',
    acronym: 'ServiceUserNumber',
    aliases: [
      'serviceusernumber',
      'service user number',
      'sun',
      'bacs sun',
      'bacs service user number',
    ],
    category: 'scheme-identifiers',
    regions: ['uk'],
    definition:
      'A ServiceUserNumber identifies an organisation authorised to submit applicable Bacs instructions.',
    usedIn: [
      'Applicable Bacs requests and responses',
      'Applicable Direct Debit operations',
      'Bacs reconciliation',
    ],
    notes: [
      'A Service User Number is commonly abbreviated to SUN.',
      'Use the ServiceUserNumber associated with the relevant Bacs service user.',
      'Do not substitute an AccountId, CustomerId or payment identifier.',
    ],
    seoTitle: 'What is a ServiceUserNumber?',
    seoDescription:
      'Learn what a ServiceUserNumber identifies and how it is used in applicable Bacs and Direct Debit operations.',
    relatedTerms: [
      'bacs-transaction-id',
      'payment-id',
    ],
  },

  {
    id: 'transaction-id',
    term: 'Transaction ID',
    acronym: 'TransactionId',
    aliases: [
      'transactionid',
      'transaction id',
      'transaction identifier',
    ],
    category: 'entity-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'A TransactionId identifies a transaction in applicable API responses and webhook events.',
    usedIn: [
      'Applicable transaction responses',
      'Applicable transaction webhook events',
      'Transaction reconciliation',
      'Support investigations',
    ],
    notes: [
      'A transaction is not necessarily the same entity as a payment.',
      'Do not substitute a PaymentId, OriginalTransactionId or scheme identifier.',
      'Refer to the applicable documentation for scope, immutability and lifecycle requirements.',
    ],
    seoTitle: 'What is a TransactionId?',
    seoDescription:
      'Learn what a TransactionId identifies and how it differs from other payment and transaction references.',
    relatedTerms: [
      'payment-id',
      'original-transaction-id',
      'account-id',
    ],
  },

  {
    id: 'unique-end-to-end-transaction-reference',
    term: 'Unique End-to-End Transaction Reference',
    acronym: 'UETR',
    aliases: [
      'uetr',
      'unique end to end transaction reference',
      'unique payment tracking reference',
      'payment tracking identifier',
      'swift uetr',
    ],
    category: 'scheme-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'A Unique End-to-End Transaction Reference (UETR) is a universally unique reference used to trace an applicable payment across participating institutions.',
    usedIn: [
      'Applicable cross-border payment messages',
      'Payment tracking',
      'Payment investigations',
      'Payment reconciliation',
    ],
    notes: [
      'A UETR is different from a user-supplied EndToEndId.',
      'Use the UETR when tracing an applicable payment across participating institutions.',
    ],
    seoTitle:
      'What is a Unique End-to-End Transaction Reference (UETR)?',
    seoDescription:
      'Learn what a UETR is and how it is used to trace an applicable payment across participating institutions.',
    relatedTerms: [
      'end-to-end-identifier',
      'actual-end-to-end-transaction-id',
      'payment-id',
      'transaction-id',
    ],
  },

  {
    id: 'webhook',
    term: 'Webhook',
    acronym: '',
    aliases: [
      'web hook',
      'event notification',
      'http callback',
      'callback',
      'webhook event',
      'payment notification',
      'account notification',
    ],
    category: 'webhooks',
    regions: ['uk', 'eu'],
    definition:
      'A webhook is an automated HTTP request sent to a configured endpoint when an applicable event occurs.',
    usedIn: [
      'Payment event notifications',
      'Account event notifications',
      'Mandate event notifications',
      'Asynchronous integration workflows',
    ],
    notes: [
      'The receiving system should process the event according to the applicable webhook documentation.',
      'Use the identifiers within the payload to determine the event and affected entity.',
    ],
    seoTitle: 'What is a Webhook?',
    seoDescription:
      'Learn what a webhook is and how applicable events are sent automatically to a configured endpoint.',
    relatedTerms: [
      'event-id',
      'nonce',
      'webhook-signature-verification',
      'application-programming-interface',
    ],
  },

  {
    id: 'webhook-signature-verification',
    term: 'Webhook Signature Verification',
    acronym: '',
    aliases: [
      'webhook signature',
      'event signature',
      'signature verification',
      'verify webhook',
      'signed webhook response',
    ],
    category: 'webhooks',
    regions: ['uk', 'eu'],
    definition:
      'Webhook Signature Verification is the process of validating an applicable webhook or signed webhook response according to the required cryptographic procedure.',
    usedIn: [
      'Applicable webhook authentication',
      'Applicable signed webhook responses',
      'Webhook security validation',
    ],
    notes: [
      'Follow the applicable ClearBank webhook documentation for the required signing and verification procedure.',
      'Do not process a webhook as trusted solely because it was delivered to the configured endpoint.',
    ],
    seoTitle:
      'What is Webhook Signature Verification?',
    seoDescription:
      'Learn what webhook signature verification is and how it supports validation of applicable webhook messages.',
    relatedTerms: [
      'webhook',
      'nonce',
      'public-key-cryptography-standards',
    ],
  },
];

export default technicalReferenceTerms;