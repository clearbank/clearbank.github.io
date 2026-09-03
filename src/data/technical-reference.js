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
      'An AccountId identifies an account.',
    externalLinks: [],
    seoTitle:
      'What is an AccountId?',
    seoDescription:
      'Learn what an AccountId is and where it is used.',
    relatedTerms: [
      'customer-id',
      'payment-id',
      'transaction-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
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
      'A CustomerId identifies a customer.',
    externalLinks: [],
    seoTitle:
      'What is a CustomerId?',
    seoDescription:
      'Learn what a CustomerId is and where it is used.',
    relatedTerms: [
      'account-id',
      'payment-id',
      'transaction-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
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
      'A PaymentId identifies a payment.',rnalLinks: [],
    seoTitle:
      'What is a PaymentId?',
    seoDescription:
      'Learn what a PaymentId is and where it is used.',
    relatedTerms: [
      'transaction-id',
      'original-transaction-id',
      'end-to-end-id',
      'faster-payment-identifier',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
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
      'A TransactionId identifies a transaction.',
    externalLinks: [],
    seoTitle:
      'What is a TransactionId?',
    seoDescription:
      'Learn what a TransactionId is and where it is used.',
    relatedTerms: [
      'payment-id',
      'original-transaction-id',
      'end-to-end-id',
      'account-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'mandate-id',
    term: 'Mandate ID',
    acronym: 'MandateId',
    aliases: [
      'mandateid',
      'mandate id',
      'mandate identifier',
    ],
    category: 'entity-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'A MandateId identifies a mandate. Some APIs and webhooks may use DirectDebitMandateId for the same general concept.',
    externalLinks: [],
    seoTitle:
      'What is a MandateId?',
    seoDescription:
      'Learn what a MandateId is and where it is used.',
    relatedTerms: [
      'direct-debit-mandate-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'direct-debit-mandate-id',
    term: 'Direct Debit Mandate ID',
    acronym: 'DirectDebitMandateId',
    aliases: [
      'directdebitmandateid',
      'direct debit mandate id',
      'direct debit mandate identifier',
    ],
    category: 'entity-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'A DirectDebitMandateId identifies a Direct Debit mandate. Some APIs and webhooks may use MandateId for the same general concept.',
    externalLinks: [],
    seoTitle:
      'What is a DirectDebitMandateId?',
    seoDescription:
      'Learn what a DirectDebitMandateId is and where it is used.',
    relatedTerms: [
      'mandate-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'original-transaction-id',
    term: 'Original Transaction ID',
    acronym: 'OriginalTransactionId',
    aliases: [
      'originaltransactionid',
      'original transaction id',
      'original transaction identifier',
    ],
    category: 'entity-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'An OriginalTransactionId identifies the earlier transaction to which a subsequent operation relates.',
    externalLinks: [],
    seoTitle:
      'What is an OriginalTransactionId?',
    seoDescription:
      'Learn what an OriginalTransactionId is and where it is used.',
    relatedTerms: [
      'transaction-id',
      'payment-id',
      'end-to-end-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'end-to-end-id',
    term: 'End-to-End ID',
    acronym: 'EndToEndId',
    aliases: [
      'endtoendid',
      'end to end id',
      'end to end identifier',
    ],
    category: 'payment-references',
    regions: ['uk', 'eu'],
    definition:
      'An EndToEndId is a payment reference supplied by the initiating party.',
    externalLinks: [],
    seoTitle:
      'What is an EndToEndId?',
    seoDescription:
      'Learn what an EndToEndId is and where it is used.',
    relatedTerms: [
      'end-to-end-transaction-id',
      'end-to-end-transaction-identification',
      'payment-id',
      'transaction-id',
      'unique-end-to-end-transaction-reference',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'end-to-end-transaction-id',
    term: 'End-to-End Transaction ID',
    acronym: 'EndToEndTransactionId',
    aliases: [
      'endtoendtransactionid',
      'end to end transaction id',
      'end to end transaction identifier',
    ],
    category: 'payment-references',
    regions: ['uk', 'eu'],
    definition:
      'An EndToEndTransactionId is a field name used for a payment reference supplied by the initiating party. Represents the same general concept as EndToEndId.',
    externalLinks: [],
    seoTitle:
      'What is an EndToEndTransactionId?',
    seoDescription:
      'Learn what an EndToEndTransactionId is and where it is used.',
    relatedTerms: [
      'end-to-end-id',
      'end-to-end-transaction-identification',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'end-to-end-transaction-identification',
    term: 'End-to-End Transaction Identification',
    acronym: 'EndToEndTransactionIdentification',
    aliases: [
      'endtoendtransactionidentification',
      'end to end transaction identification',
      'end to end transaction identifier',
    ],
    category: 'payment-references',
    regions: ['uk', 'eu'],
    definition:
      'EndToEndTransactionIdentification is a field name used for a payment reference supplied by the initiating party. Represents the same general concept as EndToEndId.',
    externalLinks: [],
    seoTitle:
      'What is EndToEndTransactionIdentification?',
    seoDescription:
      'Learn what EndToEndTransactionIdentification is and where it is used.',
    relatedTerms: [
      'end-to-end-id',
      'end-to-end-transaction-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'x-request-id',
    term: 'X-Request-Id',
    acronym: '',
    aliases: [
      'x-request-id',
      'request id',
      'request identifier',
    ],
    category: 'tracking-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'An X-Request-Id identifies an API request.',
    externalLinks: [],
    seoTitle:
      'What is an X-Request-Id?',
    seoDescription:
      'Learn what an X-Request-Id is and where it is used.',
    relatedTerms: [
      'x-correlation-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'x-correlation-id',
    term: 'X-Correlation-Id',
    acronym: '',
    aliases: [
      'x-correlation-id',
      'correlation id',
      'correlation identifier',
    ],
    category: 'tracking-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'An X-Correlation-Id is an identifier used to assist with tracing API activity.',
    externalLinks: [],
    seoTitle:
      'What is an X-Correlation-Id?',
    seoDescription:
      'Learn what an X-Correlation-Id is and where it is used.',
    relatedTerms: [
      'x-request-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'faster-payment-identifier',
    term: 'Faster Payments Identifier',
    acronym: 'FPID',
    aliases: [
      'fpid',
      'faster payments identifier',
      'faster payment reference',
    ],
    category: 'scheme-identifiers',
    regions: ['uk'],
    definition:
      'A Faster Payments Identifier (FPID) is a reference associated with a Faster Payment.',
    externalLinks: [],
    seoTitle:
      'What is an FPID?',
    seoDescription:
      'Learn what an FPID is and where it is used.',
    relatedTerms: [
      'actual-end-to-end-transaction-id',
      'payment-id',
      'transaction-id',
      'end-to-end-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'actual-end-to-end-transaction-id',
    term: 'Actual End-to-End Transaction ID',
    acronym: 'ActualEndToEndTransactionId',
    aliases: [
      'actualendtoendtransactionid',
      'actual end to end transaction id',
      'actual end to end transaction identifier',
    ],
    category: 'scheme-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'An ActualEndToEndTransactionId is a scheme-generated payment reference. The value and format depend on the applicable payment scheme.',
    externalLinks: [],
    seoTitle:
      'What is an ActualEndToEndTransactionId?',
    seoDescription:
      'Learn what an ActualEndToEndTransactionId is and where it is used.',
    relatedTerms: [
      'faster-payment-identifier',
      'end-to-end-id',
      'payment-id',
      'transaction-id',
      'unique-end-to-end-transaction-reference',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'bacs-transaction-id',
    term: 'Bacs Transaction ID',
    acronym: 'BacsTransactionId',
    aliases: [
      'bacstransactionid',
      'bacs transaction id',
      'bacs transaction identifier',
    ],
    category: 'scheme-identifiers',
    regions: ['uk'],
    definition:
      'A BacsTransactionId identifies a Bacs transaction.',
    externalLinks: [],
    seoTitle:
      'What is a BacsTransactionId?',
    seoDescription:
      'Learn what a BacsTransactionId is and where it is used.',
    relatedTerms: [
      'service-user-number',
      'payment-id',
      'transaction-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'service-user-number',
    term: 'Service User Number',
    acronym: 'SUN',
    aliases: [
      'sun',
      'service user number',
      'service user',
    ],
    category: 'scheme-identifiers',
    regions: ['uk'],
    definition:
      'A Service User Number (SUN) identifies a Bacs Service User.',
    externalLinks: [],
    seoTitle:
      'What is a Service User Number (SUN)?',
    seoDescription:
      'Learn what a Service User Number is and where it is used.',
    relatedTerms: [
      'bacs-transaction-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'unique-end-to-end-transaction-reference',
    term: 'Unique End-to-End Transaction Reference',
    acronym: 'UETR',
    aliases: [
      'uetr',
      'unique end-to-end transaction reference',
      'swift uetr',
    ],
    category: 'scheme-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'A Unique End-to-End Transaction Reference (UETR) identifies and traces a payment carried over SWIFT.', 
    externalLinks: [
      {
        title: 'SWIFT: What is a UETR?',
        url:
          'https://www.swift.com/payments/what-unique-end-end-transaction-reference-uetr',
      },
    ],
    seoTitle:
      'What is a Unique End-to-End Transaction Reference (UETR)?',
    seoDescription:
      'Learn what a UETR is and how it is used to trace payments carried over SWIFT.',
    relatedTerms: [
      'end-to-end-id',
      'actual-end-to-end-transaction-id',
      'payment-id',
      'transaction-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'nonce',
    term: 'Nonce',
    acronym: '',
    aliases: [
      'nonce',
      'webhook nonce',
    ],
    category: 'security',
    regions: ['uk', 'eu'],
    definition:
      'A nonce is a random or unique number used once in an applicable security process. Do not use a nonce as a business identifier.',
    externalLinks: [],
    seoTitle:
      'What is a nonce?',
    seoDescription:
      'Learn what a nonce is and why it is used in security processes.',
    relatedTerms: [
      'event-id',
      'webhook',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'webhook',
    term: 'Webhook',
    acronym: '',
    aliases: [
      'webhook',
      'webhooks',
    ],
    category: 'api',
    regions: ['uk', 'eu'],
    definition:
      'A webhook is an automated HTTP request sent when an event occurs. Webhook payloads may contain multiple identifiers.',
    externalLinks: [],
    seoTitle:
      'What is a webhook?',
    seoDescription:
      'Learn what a webhook is and how it is used.',
    relatedTerms: [
      'event-id',
      'nonce',
      'api',
    ],
    relatedGuides: [],
    editorialReview: true,
  },

  {
    id: 'event-id',
    term: 'Event ID',
    acronym: 'EventId',
    aliases: [
      'eventid',
      'event id',
      'event identifier',
    ],
    category: 'tracking-identifiers',
    regions: ['uk', 'eu'],
    definition:
      'An EventId identifies a webhook event.',
    externalLinks: [],
    seoTitle:
      'What is an EventId?',
    seoDescription:
      'Learn what an EventId is and where it is used.',
    relatedTerms: [
      'webhook',
      'nonce',
      'payment-id',
      'transaction-id',
    ],
    relatedGuides: [
      {
        title: 'IDs and Identifiers',
        url: '/reference/ids-and-identifiers',
      },
    ],
    editorialReview: true,
  },

  {
    id: 'api',
    term: 'Application Programming Interface',
    acronym: 'API',
    aliases: [
      'api',
      'application programming interface',
    ],
    category: 'api',
    regions: ['uk', 'eu'],
    definition:
      'An Application Programming Interface (API) enables software systems to exchange requests and responses. ClearBank APIs provide access to applicable banking and payment functionality.',
    externalLinks: [],
    seoTitle:
      'What is an API?',
    seoDescription:
      'Learn what an API is and how it is used.',
    relatedTerms: [
      'x-request-id',
      'x-correlation-id',
      'webhook',
      'mutual-transport-layer-security',
    ],
    relatedGuides: [],
    editorialReview: true,
  },

  {
    id: 'iso-20022',
    term: 'ISO 20022',
    acronym: '',
    aliases: [
      'iso20022',
      'iso 20022',
    ],
    category: 'message-standards',
    regions: ['uk', 'eu'],
    definition:
      'ISO 20022 is an international standard for structured financial messaging.',
    externalLinks: [
      {
        title: 'ISO 20022 official website',
        url:
          'https://www.iso20022.org',
      },
      {
        title: 'ISO 20022 message definitions',
        url:
          'https://www.iso20022.org/iso-20022-message-definitions',
      },
    ],
    seoTitle:
      'What is ISO 20022?',
    seoDescription:
      'Learn what ISO 20022 is and how it is used in financial messaging.',
    relatedTerms: [
      'pacs-004',
      'pacs-008',
      'pacs-009',
      'unique-end-to-end-transaction-reference',
    ],
    relatedGuides: [],
    editorialReview: true,
  },

  {
    id: 'pacs-004',
    term: 'pacs.004',
    acronym: '',
    aliases: [
      'pacs.004',
      'pacs004',
    ],
    category: 'message-standards',
    regions: ['uk', 'eu'],
    definition:
      'A pacs.004 is an ISO 20022 payment-return message. It is used in applicable payment-return processes.',
    externalLinks: [
      {
        title: 'ISO 20022 message definitions',
        url:
          'https://www.iso20022.org/iso-20022-message-definitions',
      },
    ],
    seoTitle:
      'What is a pacs.004 message?',
    seoDescription:
      'Learn what a pacs.004 message is and where it is used.',
    relatedTerms: [
      'iso-20022',
      'pacs-008',
      'pacs-009',
      'original-transaction-id',
    ],
    relatedGuides: [],
    editorialReview: true,
  },

  {
    id: 'pacs-008',
    term: 'pacs.008',
    acronym: '',
    aliases: [
      'pacs.008',
      'pacs008',
    ],
    category: 'message-standards',
    regions: ['uk', 'eu'],
    definition:
      'A pacs.008 is an ISO 20022 customer credit-transfer message. It is used in applicable customer credit-transfer processing.',
    externalLinks: [
      {
        title: 'ISO 20022 message definitions',
        url:
          'https://www.iso20022.org/iso-20022-message-definitions',
      },
    ],
    seoTitle:
      'What is a pacs.008 message?',
    seoDescription:
      'Learn what a pacs.008 message is and where it is used.',
    relatedTerms: [
      'iso-20022',
      'pacs-004',
      'pacs-009',
      'end-to-end-id',
    ],
    relatedGuides: [],
    editorialReview: true,
  },

  {
    id: 'pacs-009',
    term: 'pacs.009',
    acronym: '',
    aliases: [
      'pacs.009',
      'pacs009',
    ],
    category: 'message-standards',
    regions: ['uk', 'eu'],
    definition:
      'A pacs.009 is an ISO 20022 financial institution credit-transfer message. It is used in applicable financial institution credit-transfer processing.',
    externalLinks: [
      {
        title: 'ISO 20022 message definitions',
        url:
          'https://www.iso20022.org/iso-20022-message-definitions',
      },
    ],
    seoTitle:
      'What is a pacs.009 message?',
    seoDescription:
      'Learn what a pacs.009 message is and where it is used.',
    relatedTerms: [
      'iso-20022',
      'pacs-004',
      'pacs-008',
      'unique-end-to-end-transaction-reference',
    ],
    relatedGuides: [],
    editorialReview: true,
  },

  {
    id: 'certificate-signing-request',
    term: 'Certificate Signing Request',
    acronym: 'CSR',
    aliases: [
      'csr',
      'certificate signing request',
    ],
    category: 'security',
    regions: ['uk', 'eu'],
    definition:
      'A Certificate Signing Request (CSR) contains information used to request a digital certificate. A CSR is not a digital certificate itself.',
    externalLinks: [],
    seoTitle:
      'What is a CSR?',
    seoDescription:
      'Learn what a Certificate Signing Request is and where it is used.',
    relatedTerms: [
      'public-key-cryptography-standards',
      'mutual-transport-layer-security',
    ],
    relatedGuides: [],
    editorialReview: true,
  },

  {
    id: 'public-key-cryptography-standards',
    term: 'Public-Key Cryptography Standards',
    acronym: 'PKCS',
    aliases: [
      'pkcs',
      'public-key cryptography standards',
    ],
    category: 'security',
    regions: ['uk', 'eu'],
    definition:
      'Public-Key Cryptography Standards (PKCS) are specifications used in public-key cryptography. PKCS refers to a family of standards rather than a single format.',
    externalLinks: [
      {
        title: 'RFC 2986: PKCS #10',
        url:
          'https://www.rfc-editor.org/rfc/rfc2986',
      },
      {
        title: 'RFC 5208: PKCS #8',
        url:
          'https://www.rfc-editor.org/rfc/rfc5208',
      },
    ],
    seoTitle:
      'What is PKCS?',
    seoDescription:
      'Learn what PKCS is and where it is used.',
    relatedTerms: [
      'certificate-signing-request',
      'mutual-transport-layer-security',
    ],
    relatedGuides: [],
    editorialReview: true,
  },

  {
    id: 'mutual-transport-layer-security',
    term: 'Mutual Transport Layer Security',
    acronym: 'mTLS',
    aliases: [
      'mtls',
      'm tls',
      'mutual tls',
    ],
    category: 'security',
    regions: ['uk', 'eu'],
    definition:
      'Mutual Transport Layer Security (mTLS) authenticates both the client and server using digital certificates. It is used in applicable secure API connections.',
    externalLinks: [],
    seoTitle:
      'What is mTLS?',
    seoDescription:
      'Learn what mTLS is and how it is used in secure API connections.',
    relatedTerms: [
      'certificate-signing-request',
      'public-key-cryptography-standards',
      'api',
    ],
    relatedGuides: [],
    editorialReview: true,
  },

];

export default technicalReferenceTerms;
