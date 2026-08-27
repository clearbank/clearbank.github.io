const glossaryTerms = [
  {
    id: 'two-factor-authentication',
    term: 'Two-Factor Authentication',
    acronym: '2FA',
    aliases: [
      '2fa',
      'two factor authentication',
      'two step authentication',
      'two step verification',
    ],
    regions: ['uk', 'eu'],
    category: 'security',
    definition:
      'Two-Factor Authentication (2FA) is a security method that requires two forms of verification before access is granted.',
    seoTitle:
      'What is Two-Factor Authentication (2FA)?',
    seoDescription:
      'Learn what Two-Factor Authentication means and how it adds another verification step when accessing an account or service.',
    relatedTerms: [
      'application-programming-interface',
    ],
  },

  {
    id: 'addacs',
    term:
      'Automated Direct Debit Amendment and Cancellation Service',
    acronym: 'ADDACS',
    aliases: [
      'addacs',
      'direct debit amendment',
      'direct debit cancellation',
      'amended direct debit instruction',
      'cancelled direct debit instruction',
    ],
    regions: ['uk'],
    category: 'direct-debits',
    definition:
      'The Automated Direct Debit Amendment and Cancellation Service (ADDACS) is used to notify a service user when a Direct Debit Instruction has been amended or cancelled.',
    seoTitle:
      'What is the Automated Direct Debit Amendment and Cancellation Service (ADDACS)?',
    seoDescription:
      'Learn what ADDACS means and how it is used to report amendments and cancellations relating to Direct Debit Instructions.',
    relatedTerms: [
      'direct-debit',
      'direct-debit-instruction',
      'service-user',
      'service-user-number',
      'auddis',
    ],
  },

  {
    id: 'application-programming-interface',
    term: 'Application Programming Interface',
    acronym: 'API',
    aliases: [
      'api',
      'banking api',
      'payment api',
      'clearbank api',
    ],
    regions: ['uk', 'eu'],
    category: 'technical',
    definition:
      'An Application Programming Interface (API) enables software applications to communicate with one another using defined requests and responses.',
    seoTitle:
      'What is an Application Programming Interface (API)?',
    seoDescription:
      'Learn what an Application Programming Interface is and how APIs enable applications and services to exchange information.',
    relatedTerms: [
      'webhook',
    ],
  },

  {
    id: 'arucs',
    term: 'Automated Return of Unapplied Credits Service',
    acronym: 'ARUCS',
    aliases: [
      'arucs',
      'unapplied credit',
      'returned credit',
      'credit return',
    ],
    regions: ['uk'],
    category: 'payments',
    definition:
      'The Automated Return of Unapplied Credits Service (ARUCS) is used to report credits that could not be applied to the intended account.',
    seoTitle:
      'What is the Automated Return of Unapplied Credits Service (ARUCS)?',
    seoDescription:
      'Learn what ARUCS means and how it is used when a credit cannot be applied to its intended account.',
    relatedTerms: [
      'beneficiary',
      'bacs',
    ],
  },

  {
    id: 'arudd',
    term: 'Automated Return of Unpaid Direct Debits Service',
    acronym: 'ARUDD',
    aliases: [
      'arudd',
      'unpaid direct debit',
      'returned direct debit',
      'direct debit return',
    ],
    regions: ['uk'],
    category: 'direct-debits',
    definition:
      'The Automated Return of Unpaid Direct Debits Service (ARUDD) is used to report Direct Debit collections that could not be paid.',
    seoTitle:
      'What is the Automated Return of Unpaid Direct Debits Service (ARUDD)?',
    seoDescription:
      'Learn what ARUDD means and how it is used to report unpaid Direct Debit collections.',
    relatedTerms: [
      'direct-debit',
      'direct-debit-instruction',
      'direct-debit-indemnity-claim',
      'service-user',
      'service-user-number',
    ],
  },

  {
    id: 'auddis',
    term: 'Automated Direct Debit Instruction Service',
    acronym: 'AUDDIS',
    aliases: [
      'auddis',
      'automated ddi service',
      'electronic direct debit instruction',
      'electronic direct debit mandate',
    ],
    regions: ['uk'],
    category: 'direct-debits',
    definition:
      'The Automated Direct Debit Instruction Service (AUDDIS) is a Bacs service that replaces the submission of a paper Direct Debit Instruction with an electronic message. The original instruction, or an image of it, must be retained in case its authority is challenged.',
    seoTitle:
      'What is the Automated Direct Debit Instruction Service (AUDDIS)?',
    seoDescription:
      'Learn what AUDDIS means and how it supports the electronic submission of Direct Debit Instructions through Bacs.',
    relatedTerms: [
      'bacs',
      'direct-debit',
      'direct-debit-instruction',
      'service-user',
      'service-user-number',
      'addacs',
    ],
  },

  {
    id: 'bacs',
    term: 'Bacs',
    acronym: '',
    aliases: [
      "Bankers' Automated Clearing System",
      'Bacs Payment Schemes Limited',
      'Bacs payment',
      'Bacs payments',
      'Bacs transfer',
      'BACS',
    ],
    regions: ['uk'],
    category: 'payments',
    definition:
      'Bacs is a UK payment system used to process Direct Debits and Direct Credits between bank accounts. Bacs payments normally operate on a three-working-day cycle, excluding weekends and bank holidays.',
    paymentCycle: [
      {
        title: 'Day 1 (input)',
        description:
          'Payment instructions are submitted to Bacs before the applicable cut-off time.',
      },
      {
        title: 'Day 2 (processing)',
        description:
          'Bacs processes the instructions and sends them to the destination bank.',
      },
      {
        title: 'Day 3 (entry)',
        description:
          'The payments are applied to the relevant accounts and settlement takes place.',
      },
    ],
    paymentTypes: [
      'Direct Debit',
      'Direct Credit',
    ],
    seoTitle: 'What is Bacs?',
    seoDescription:
      'Learn what Bacs is, how its three-working-day payment cycle operates, and how Direct Debits and Direct Credits are processed.',
    relatedTerms: [
      'direct-debit',
      'direct-debit-instruction',
      'service-user-number',
      'auddis',
      'faster-payments',
      'chaps',
    ],
  },

  {
    id: 'bacs-suspense-account',
    term: 'Bacs Suspense Account',
    acronym: '',
    aliases: [
      'bacs suspense',
      'suspense account',
      'returned payment account',
    ],
    regions: ['uk'],
    category: 'accounts',
    definition:
      'A Bacs Suspense Account is an account used by ClearBank to record movements of funds associated with returned Bacs payments. Funds do not need to be deposited into the account solely because it has a negative balance.',
    seoTitle: 'What is a Bacs Suspense Account?',
    seoDescription:
      'Learn what a Bacs Suspense Account is and how ClearBank uses it to record fund movements associated with returned Bacs payments.',
    relatedTerms: [
      'bacs',
      'operating-account',
    ],
  },

  {
    id: 'bank-identifier-code',
    term: 'Bank Identifier Code',
    acronym: 'BIC',
    aliases: [
      'bic',
      'bic code',
      'swift code',
      'bank swift code',
    ],
    regions: ['uk', 'eu'],
    category: 'banking',
    definition:
      'A Bank Identifier Code (BIC) identifies a bank or financial institution when payment information is exchanged between institutions.',
    seoTitle:
      'What is a Bank Identifier Code (BIC)?',
    seoDescription:
      'Learn what a Bank Identifier Code is and how it identifies banks and financial institutions when payment information is exchanged.',
    relatedTerms: [
      'international-bank-account-number',
      'swift',
      'beneficiary',
      'sepa-credit-transfer',
    ],
  },

  {
    id: 'banking-as-a-service',
    term: 'Banking as a Service',
    acronym: 'BaaS',
    aliases: [
      'baas',
      'embedded banking',
      'embedded finance',
    ],
    regions: ['uk', 'eu'],
    category: 'banking',
    definition:
      'Banking as a Service (BaaS) is a model through which banking capabilities are made available to other businesses for incorporation into their own products or services.',
    seoTitle:
      'What is Banking as a Service (BaaS)?',
    seoDescription:
      'Learn what Banking as a Service means and how businesses can incorporate banking capabilities into their products and services.',
    relatedTerms: [
      'application-programming-interface',
      'payment-service-provider',
    ],
  },

  {
    id: 'beneficiary',
    term: 'Beneficiary',
    acronym: '',
    aliases: [
      'payee',
      'recipient',
      'payment recipient',
      'intended recipient',
      'beneficiary account',
    ],
    regions: ['uk', 'eu'],
    category: 'payments',
    definition:
      'A beneficiary is the individual or organisation intended to receive a payment.',
    seoTitle:
      'What is a Beneficiary in Banking?',
    seoDescription:
      'Learn what a beneficiary is in banking and payments, and how the term describes the intended recipient of funds.',
    relatedTerms: [
      'confirmation-of-payee',
      'international-bank-account-number',
      'bank-identifier-code',
      'faster-payments',
      'sepa-credit-transfer',
    ],
  },

  {
    id: 'cass-7',
    term: 'CASS 7',
    acronym: '',
    aliases: [
      'client assets sourcebook',
      'client money rules',
      'fca client money rules',
    ],
    regions: ['uk'],
    category: 'compliance',
    definition:
      'CASS 7 is the section of the FCA Client Assets Sourcebook that contains rules relating to the holding and control of client money.',
    seoTitle: 'What is CASS 7?',
    seoDescription:
      'Learn what CASS 7 is and how the FCA Client Assets Sourcebook addresses the holding and control of client money.',
    relatedTerms: [
      'financial-conduct-authority',
      'safeguarded-account',
    ],
  },

  {
    id: 'chaps',
    term: 'CHAPS',
    acronym: '',
    aliases: [
      'Clearing House Automated Payment System',
      'chaps payment',
      'high-value payment',
      'same-day sterling payment',
    ],
    regions: ['uk'],
    category: 'payments',
    definition:
      'CHAPS is the United Kingdom payment system used for high-value and time-critical sterling payments. CHAPS payments are processed and settled on the same business day.',
    seoTitle: 'What is CHAPS?',
    seoDescription:
      'Learn what CHAPS is and how the UK payment system supports high-value and time-critical same-day sterling payments.',
    relatedTerms: [
      'bacs',
      'faster-payments',
      'beneficiary',
      'pound-sterling',
    ],
  },

  {
    id: 'cheque',
    term: 'Cheque',
    acronym: '',
    aliases: [
      'cheques',
      'check',
      'paper cheque',
    ],
    regions: ['uk'],
    category: 'payments',
    definition:
      'A cheque is a signed written instruction directing a bank to pay a specified amount from an account to a named recipient.',
    seoTitle: 'What is a Cheque?',
    seoDescription:
      'Learn what a cheque is and how the signed written instruction directs a bank to pay funds to a named recipient.',
    relatedTerms: [
      'beneficiary',
    ],
  },

  {
    id: 'confirmation-of-payee',
    term: 'Confirmation of Payee',
    acronym: 'CoP',
    aliases: [
      'cop',
      'name checking',
      'account name check',
      'payee verification',
      'beneficiary name check',
    ],
    regions: ['uk'],
    category: 'payments',
    definition:
      'Confirmation of Payee (CoP) is a name-checking service that helps confirm whether account details belong to the intended recipient before a payment is made.',
    seoTitle:
      'What is Confirmation of Payee (CoP)?',
    seoDescription:
      'Learn what Confirmation of Payee is and how name checking helps identify potentially incorrect recipient details before a payment is made.',
    relatedTerms: [
      'beneficiary',
      'credit-payment-recovery',
      'faster-payment-identifier',
      'faster-payments',
    ],
  },

  {
    id: 'credit-payment-recovery',
    term: 'Credit Payment Recovery',
    acronym: 'CPR',
    aliases: [
      'cpr',
      'recover a payment',
      'payment recovery',
      'faster payment recovery',
    ],
    regions: ['uk'],
    category: 'payments',
    definition:
      'Credit Payment Recovery (CPR) is a process used to request the recovery of funds sent through a credit payment.',
    seoTitle:
      'What is Credit Payment Recovery (CPR)?',
    seoDescription:
      'Learn what Credit Payment Recovery means and how it is used to request recovery of funds sent through a credit payment.',
    relatedTerms: [
      'confirmation-of-payee',
      'faster-payment-identifier',
      'beneficiary',
      'faster-payments',
    ],
  },

  {
    id: 'cross-border-payment',
    term: 'Cross-Border Payment',
    acronym: '',
    aliases: [
      'cross border payment',
      'international payment',
      'overseas payment',
    ],
    regions: ['uk', 'eu'],
    category: 'payments',
    definition:
      'A cross-border payment is a financial transaction in which the payer and recipient are located in different countries.',
    seoTitle:
      'What is a Cross-Border Payment?',
    seoDescription:
      'Learn what a cross-border payment is and how it differs from a domestic payment.',
    relatedTerms: [
      'beneficiary',
      'foreign-exchange',
      'swift',
      'bank-identifier-code',
      'international-bank-account-number',
    ],
  },

  {
    id: 'direct-debit',
    term: 'Direct Debit',
    acronym: '',
    aliases: [
      'direct debit payment',
      'direct debit collection',
      'automated collection',
    ],
    regions: ['uk', 'eu'],
    category: 'direct-debits',
    definition:
      'A Direct Debit is an automated payment method through which an organisation collects payments from a payer’s account under the authority of an applicable instruction or mandate.',
    seoTitle: 'What is a Direct Debit?',
    seoDescription:
      'Learn what a Direct Debit is and how an organisation can collect payments under the authority of a payer.',
    relatedTerms: [
      'direct-debit-instruction',
      'direct-debit-indemnity-claim',
      'auddis',
      'addacs',
      'arudd',
      'bacs',
    ],
  },

  {
    id: 'direct-debit-indemnity-claim',
    term: 'Direct Debit Indemnity Claim',
    acronym: 'DDIC',
    aliases: [
      'ddic',
      'direct debit claim',
      'direct debit guarantee claim',
      'direct debit indemnity',
    ],
    regions: ['uk'],
    category: 'direct-debits',
    definition:
      'A Direct Debit Indemnity Claim (DDIC) is a claim submitted in relation to a Direct Debit collected from a payer.',
    seoTitle:
      'What is a Direct Debit Indemnity Claim (DDIC)?',
    seoDescription:
      'Learn what a Direct Debit Indemnity Claim is and how it relates to a Direct Debit collected from a payer.',
    relatedTerms: [
      'direct-debit',
      'direct-debit-instruction',
      'arudd',
      'service-user',
      'service-user-number',
    ],
  },

  {
    id: 'direct-debit-instruction',
    term: 'Direct Debit Instruction',
    acronym: 'DDI',
    aliases: [
      'ddi',
      'direct debit mandate',
      'direct debit authority',
    ],
    regions: ['uk'],
    category: 'direct-debits',
    definition:
      'A Direct Debit Instruction (DDI) is the authority provided by a payer that enables an organisation to collect payments from the payer’s account by Direct Debit.',
    seoTitle:
      'What is a Direct Debit Instruction (DDI)?',
    seoDescription:
      'Learn what a Direct Debit Instruction is and how it gives an organisation authority to collect payments by Direct Debit.',
    relatedTerms: [
      'direct-debit',
      'auddis',
      'addacs',
      'arudd',
      'direct-debit-indemnity-claim',
      'service-user-number',
    ],
  },

  {
    id: 'extended-industry-sort-code-directory',
    term: 'Extended Industry Sort Code Directory',
    acronym: 'EISCD',
    aliases: [
      'eiscd',
      'sort code directory',
      'bank sort code directory',
    ],
    regions: ['uk'],
    category: 'banking',
    definition:
      'The Extended Industry Sort Code Directory (EISCD) contains information associated with UK sort codes and the financial institutions to which they belong.',
    seoTitle:
      'What is the Extended Industry Sort Code Directory (EISCD)?',
    seoDescription:
      'Learn what the EISCD is and how it provides information about UK sort codes and financial institutions.',
    relatedTerms: [
      'bank-identifier-code',
    ],
  },

  {
    id: 'faster-payment-identifier',
    term: 'Faster Payment Identifier',
    acronym: 'FPID',
    aliases: [
      'fpid',
      'faster payment identification number',
      'faster payment reference',
      '18-digit faster payment reference',
    ],
    regions: ['uk'],
    category: 'payments',
    definition:
      'A Faster Payment Identifier (FPID) is an 18-digit reference generated when a Faster Payment is sent. It can be used in a Credit Payment Recovery case to help the beneficiary bank locate the funds.',
    seoTitle:
      'What is a Faster Payment Identifier (FPID)?',
    seoDescription:
      'Learn what a Faster Payment Identifier is and why the 18-digit reference may be required during Credit Payment Recovery.',
    relatedTerms: [
      'faster-payments',
      'credit-payment-recovery',
      'beneficiary',
      'confirmation-of-payee',
    ],
  },

  {
    id: 'faster-payments',
    term: 'Faster Payments',
    acronym: 'FPS',
    aliases: [
      'faster payment',
      'faster payments service',
      'faster payment system',
      'fps',
      'instant UK payment',
      'near real-time payment',
    ],
    regions: ['uk'],
    category: 'payments',
    definition:
      'Faster Payments is a UK payment system that enables participating banks and payment service providers to send and receive sterling payments in near real time.',
    seoTitle:
      'What are Faster Payments (FPS)?',
    seoDescription:
      'Learn what Faster Payments are and how FPS supports near real-time sterling payments between participating UK accounts.',
    relatedTerms: [
      'faster-payment-identifier',
      'confirmation-of-payee',
      'credit-payment-recovery',
      'bacs',
      'chaps',
    ],
  },

  {
    id: 'financial-conduct-authority',
    term: 'Financial Conduct Authority',
    acronym: 'FCA',
    aliases: [
      'fca',
      'uk financial regulator',
      'financial services regulator',
    ],
    regions: ['uk'],
    category: 'compliance',
    definition:
      'The Financial Conduct Authority (FCA) regulates financial services firms and financial markets in the United Kingdom.',
    seoTitle:
      'What is the Financial Conduct Authority (FCA)?',
    seoDescription:
      'Learn what the Financial Conduct Authority is and its role in regulating UK financial services firms and markets.',
    relatedTerms: [
      'cass-7',
      'financial-services-compensation-scheme',
      'know-your-customer',
      'know-your-business',
    ],
  },

  {
    id: 'financial-services-compensation-scheme',
    term: 'Financial Services Compensation Scheme',
    acronym: 'FSCS',
    aliases: [
      'fscs',
      'deposit protection',
      'uk deposit protection',
      'compensation scheme',
    ],
    regions: ['uk'],
    category: 'compliance',
    definition:
      'The Financial Services Compensation Scheme (FSCS) is the United Kingdom’s statutory compensation scheme for eligible customers of authorised financial services firms.',
    seoTitle:
      'What is the Financial Services Compensation Scheme (FSCS)?',
    seoDescription:
      'Learn what the FSCS is and its role as the UK statutory compensation scheme for eligible customers.',
    relatedTerms: [
      'financial-conduct-authority',
      'cass-7',
    ],
  },

  {
    id: 'foreign-exchange',
    term: 'Foreign Exchange',
    acronym: 'FX',
    aliases: [
      'fx',
      'currency exchange',
      'currency conversion',
      'foreign currency exchange',
    ],
    regions: ['uk', 'eu'],
    category: 'foreign-exchange',
    definition:
      'Foreign Exchange (FX) is the conversion of one currency into another.',
    seoTitle:
      'What is Foreign Exchange (FX)?',
    seoDescription:
      'Learn what Foreign Exchange means and how it relates to converting one currency into another.',
    relatedTerms: [
      'fx-trade',
      'request-for-quote',
      'multicurrency',
      'pound-sterling',
      'swift',
    ],
  },

  {
    id: 'fx-trade',
    term: 'FX Trade',
    acronym: '',
    aliases: [
      'foreign exchange trade',
      'currency trade',
      'currency conversion trade',
      'fx transaction',
    ],
    regions: ['uk', 'eu'],
    category: 'foreign-exchange',
    definition:
      'An FX trade is a transaction in which an agreed amount of one currency is exchanged for an agreed amount of another currency at an agreed exchange rate.',
    seoTitle: 'What is an FX Trade?',
    seoDescription:
      'Learn what an FX trade is and how one currency is exchanged for another at an agreed exchange rate.',
    relatedTerms: [
      'foreign-exchange',
      'request-for-quote',
      'multicurrency',
    ],
  },

  {
    id: 'general-segregation-account',
    term: 'General Segregation Account',
    acronym: '',
    aliases: [
      'segregation account',
      'general segregated account',
      'segregated funds account',
    ],
    regions: ['uk'],
    category: 'accounts',
    definition:
      'A General Segregation Account is a ClearBank account type used to keep applicable funds separate from other balances.',
    seoTitle:
      'What is a General Segregation Account?',
    seoDescription:
      'Learn how the term General Segregation Account is used in ClearBank documentation.',
    relatedTerms: [
      'operating-account',
      'institution-account',
      'safeguarded-account',
    ],
    editorialReview: true,
  },

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
      'real-account',
      'virtual-account',
      'institution-account',
    ],
    editorialReview: true,
  },

  {
    id: 'institution-account',
    term: 'Institution Account',
    acronym: '',
    aliases: [
      'financial institution account',
      'fi account',
      'institutional account',
    ],
    regions: ['uk'],
    category: 'accounts',
    definition:
      'An Institution Account is a ClearBank account associated with a financial institution and used within an applicable ClearBank account structure.',
    seoTitle:
      'What is an Institution Account?',
    seoDescription:
      'Learn how the term Institution Account is used in ClearBank documentation.',
    relatedTerms: [
      'operating-account',
      'general-segregation-account',
      'mandated-minimum-balance-account',
    ],
    editorialReview: true,
  },

  {
    id: 'international-bank-account-number',
    term: 'International Bank Account Number',
    acronym: 'IBAN',
    aliases: [
      'iban',
      'iban number',
      'international account number',
    ],
    regions: ['uk', 'eu'],
    category: 'banking',
    definition:
      'An International Bank Account Number (IBAN) is a standardised identifier used to represent a bank account when processing applicable payments.',
    seoTitle:
      'What is an International Bank Account Number (IBAN)?',
    seoDescription:
      'Learn what an IBAN is and how the standardised identifier represents a bank account for applicable payments.',
    relatedTerms: [
      'bank-identifier-code',
      'swift',
      'beneficiary',
      'sepa-credit-transfer',
      'sepa-instant-credit-transfer',
    ],
  },

  {
    id: 'intraday-liquidity-pool',
    term: 'Intraday Liquidity Pool',
    acronym: '',
    aliases: [
      'intra-day liquidity pool',
      'intraday liquidity',
      'liquidity pool',
      'daytime liquidity',
    ],
    regions: ['uk'],
    category: 'liquidity',
    definition:
      'An Intraday Liquidity Pool is a pool of funds available to support payment activity during a working day.',
    seoTitle:
      'What is an Intraday Liquidity Pool?',
    seoDescription:
      'Learn what an Intraday Liquidity Pool is and how it supports payment activity during a working day.',
    relatedTerms: [
      'mandated-intraday-liquidity-balance',
      'mandated-minimum-balance-account',
      'operating-account',
    ],
    editorialReview: true,
  },

  {
    id: 'know-your-business',
    term: 'Know Your Business',
    acronym: 'KYB',
    aliases: [
      'kyb',
      'business verification',
      'business due diligence',
      'company verification',
      'corporate due diligence',
    ],
    regions: ['uk', 'eu'],
    category: 'compliance',
    definition:
      'Know Your Business (KYB) refers to checks used to verify a business, understand its ownership and control structure, and assess relevant financial-crime risk.',
    seoTitle:
      'What is Know Your Business (KYB)?',
    seoDescription:
      'Learn what Know Your Business means and how KYB checks help verify a business and its ownership structure.',
    relatedTerms: [
      'know-your-customer',
      'financial-conduct-authority',
    ],
  },

  {
    id: 'know-your-customer',
    term: 'Know Your Customer',
    acronym: 'KYC',
    aliases: [
      'kyc',
      'customer verification',
      'identity verification',
      'customer due diligence',
    ],
    regions: ['uk', 'eu'],
    category: 'compliance',
    definition:
      'Know Your Customer (KYC) refers to checks used to verify a customer’s identity and assess relevant financial-crime risk before and during a business relationship.',
    seoTitle:
      'What is Know Your Customer (KYC)?',
    seoDescription:
      'Learn what Know Your Customer means and how KYC checks help verify a customer’s identity and assess risk.',
    relatedTerms: [
      'know-your-business',
      'financial-conduct-authority',
      'two-factor-authentication',
    ],
  },

  {
    id: 'mandated-intraday-liquidity-balance',
    term: 'Mandated Intraday Liquidity Balance',
    acronym: '',
    aliases: [
      'intraday liquidity balance',
      'intraday liquidity minimum',
      'mandated liquidity balance',
    ],
    regions: ['uk'],
    category: 'liquidity',
    definition:
      'The Mandated Intraday Liquidity Balance is the agreed minimum level to which a financial institution must return its Intraday Liquidity Pool by the applicable time on each working day.',
    seoTitle:
      'What is a Mandated Intraday Liquidity Balance?',
    seoDescription:
      'Learn what a Mandated Intraday Liquidity Balance is and how it relates to the agreed minimum level of an Intraday Liquidity Pool.',
    relatedTerms: [
      'intraday-liquidity-pool',
      'mandated-minimum-balance-account',
      'operating-account',
    ],
  },

  {
    id: 'mandated-minimum-balance-account',
    term: 'Mandated Minimum Balance Account',
    acronym: 'MMB Account',
    aliases: [
      'mandated minimum balance',
      'mmb',
      'mmb account',
      'minimum balance account',
      'minimum required balance',
      'mandated balance',
    ],
    regions: ['uk'],
    category: 'liquidity',
    definition:
      'A Mandated Minimum Balance Account holds a pre-agreed amount that a financial institution is required to maintain. The applicable amount depends on the financial institution’s transaction profile and applicable agreement.',
    seoTitle:
      'What is a Mandated Minimum Balance Account?',
    seoDescription:
      'Learn what a Mandated Minimum Balance Account is and why a financial institution may be required to maintain a pre-agreed balance.',
    relatedTerms: [
      'intraday-liquidity-pool',
      'mandated-intraday-liquidity-balance',
      'operating-account',
      'institution-account',
    ],
    editorialReview: true,
  },

  {
    id: 'multicurrency',
    term: 'Multicurrency',
    acronym: 'MCCY',
    aliases: [
      'multi-currency',
      'mccy',
      'multiple currencies',
      'multicurrency account',
      'multi-currency account',
    ],
    regions: ['uk', 'eu'],
    category: 'foreign-exchange',
    definition:
      'Multicurrency describes an account, product or service that supports more than one currency.',
    seoTitle:
      'What does Multicurrency mean?',
    seoDescription:
      'Learn what multicurrency means and how the term applies to accounts, products and services that support more than one currency.',
    relatedTerms: [
      'foreign-exchange',
      'fx-trade',
      'request-for-quote',
      'pound-sterling',
    ],
  },

  {
    id: 'operating-account',
    term: 'Operating Account',
    acronym: '',
    aliases: [
      'operational account',
      'financial institution operating account',
      'own funds account',
      'master account',
    ],
    regions: ['uk'],
    category: 'accounts',
    definition:
      'An Operating Account holds a financial institution’s own money and funds, as defined in the applicable ClearBank agreement.',
    seoTitle:
      'What is an Operating Account?',
    seoDescription:
      'Learn what an Operating Account is and how it is used to hold a financial institution’s own money and funds.',
    relatedTerms: [
      'bacs-suspense-account',
      'general-segregation-account',
      'institution-account',
      'mandated-minimum-balance-account',
      'intraday-liquidity-pool',
    ],
  },

  {
    id: 'payment-service-provider',
    term: 'Payment Service Provider',
    acronym: 'PSP',
    aliases: [
      'psp',
      'payment provider',
      'payments provider',
    ],
    regions: ['uk', 'eu'],
    category: 'payments',
    definition:
      'A Payment Service Provider (PSP) is an organisation that provides services supporting the acceptance, processing or transfer of payments.',
    seoTitle:
      'What is a Payment Service Provider (PSP)?',
    seoDescription:
      'Learn what a Payment Service Provider is and how PSPs support the acceptance, processing or transfer of payments.',
    relatedTerms: [
      'banking-as-a-service',
      'beneficiary',
      'application-programming-interface',
    ],
  },

  {
    id: 'pound-sterling',
    term: 'Pound Sterling',
    acronym: 'GBP',
    aliases: [
      'gbp',
      'great british pound',
      'british pound',
      'sterling',
      'pounds',
    ],
    regions: ['uk', 'eu'],
    category: 'currencies',
    definition:
      'Pound sterling is the currency of the United Kingdom. Its ISO currency code is GBP.',
    seoTitle: 'What is GBP?',
    seoDescription:
      'Learn what GBP means and how the ISO currency code identifies pound sterling.',
    relatedTerms: [
      'foreign-exchange',
      'fx-trade',
      'multicurrency',
      'chaps',
      'faster-payments',
    ],
  },

  {
    id: 'real-account',
    term: 'Real Account',
    acronym: '',
    aliases: [
      'physical account',
      'underlying account',
    ],
    regions: ['uk'],
    category: 'accounts',
    definition:
      'A Real Account is an account represented and maintained as an individual underlying bank account, rather than as a virtual account within another account structure.',
    seoTitle:
      'What is a Real Account?',
    seoDescription:
      'Learn how the term Real Account is used in ClearBank account structures.',
    relatedTerms: [
      'virtual-account',
      'hub-account',
      'institution-account',
    ],
    editorialReview: true,
  },

  {
    id: 'request-for-quote',
    term: 'Request for Quote',
    acronym: 'RFQ',
    aliases: [
      'rfq',
      'request a quote',
      'fx quote',
      'foreign exchange quote',
      'exchange-rate quote',
      'live exchange rate',
    ],
    regions: ['uk', 'eu'],
    category: 'foreign-exchange',
    definition:
      'A Request for Quote (RFQ) is a request for an exchange-rate quote for a proposed FX trade before the trade is accepted.',
    seoTitle:
      'What is a Request for Quote (RFQ)?',
    seoDescription:
      'Learn what a Request for Quote is and how an RFQ is used to obtain an exchange-rate quote before accepting an FX trade.',
    relatedTerms: [
      'foreign-exchange',
      'fx-trade',
      'multicurrency',
    ],
  },

  {
    id: 'safeguarded-account',
    term: 'Safeguarded Account',
    acronym: '',
    aliases: [
      'safeguarding account',
      'safeguarded funds',
      'client funds account',
      'customer funds account',
    ],
    regions: ['uk', 'eu'],
    category: 'accounts',
    definition:
      'A Safeguarded Account is used to hold applicable customer funds separately in support of safeguarding requirements.',
    seoTitle:
      'What is a Safeguarded Account?',
    seoDescription:
      'Learn what a Safeguarded Account is and how it is used to keep applicable customer funds separate.',
    relatedTerms: [
      'general-segregation-account',
      'operating-account',
      'cass-7',
    ],
    editorialReview: true,
  },

  {
    id: 'sepa-credit-transfer',
    term: 'SEPA Credit Transfer',
    acronym: 'SCT',
    aliases: [
      'sct',
      'sepa payment',
      'sepa transfer',
      'euro credit transfer',
      'single euro payments area credit transfer',
    ],
    regions: ['uk', 'eu'],
    category: 'payments',
    definition:
      'A SEPA Credit Transfer (SCT) is a payment scheme used to make euro credit transfers between eligible accounts within the Single Euro Payments Area.',
    seoTitle:
      'What is a SEPA Credit Transfer (SCT)?',
    seoDescription:
      'Learn what a SEPA Credit Transfer is and how SCT payments support euro transfers within the Single Euro Payments Area.',
    relatedTerms: [
      'sepa-instant-credit-transfer',
      'international-bank-account-number',
      'bank-identifier-code',
      'beneficiary',
      'payment-service-provider',
    ],
  },

  {
    id: 'sepa-instant-credit-transfer',
    term: 'SEPA Instant Credit Transfer',
    acronym: 'SCT Inst',
    aliases: [
      'sct inst',
      'sepa instant',
      'instant sepa payment',
      'instant euro payment',
      'sepa instant payment',
    ],
    regions: ['eu'],
    category: 'payments',
    definition:
      'A SEPA Instant Credit Transfer (SCT Inst) is a pan-European credit transfer through which funds are made available to the recipient within seconds, subject to the applicable scheme requirements.',
    seoTitle:
      'What is a SEPA Instant Credit Transfer (SCT Inst)?',
    seoDescription:
      'Learn what a SEPA Instant Credit Transfer is and how the scheme supports euro payments completed within seconds.',
    relatedTerms: [
      'sepa-credit-transfer',
      'international-bank-account-number',
      'bank-identifier-code',
      'beneficiary',
      'payment-service-provider',
    ],
  },

  {
    id: 'service-user',
    term: 'Service User',
    acronym: 'SU',
    aliases: [
      'su',
      'bacs service user',
    ],
    regions: ['uk'],
    category: 'direct-debits',
    definition:
      'A Service User is an organisation authorised to submit applicable payment instructions using a Service User Number.',
    seoTitle:
      'What is a Bacs Service User?',
    seoDescription:
      'Learn what a Service User is and how an authorised organisation uses a Service User Number when submitting payment instructions.',
    relatedTerms: [
      'service-user-number',
      'bacs',
      'auddis',
      'addacs',
      'arudd',
    ],
  },

  {
    id: 'service-user-number',
    term: 'Service User Number',
    acronym: 'SUN',
    aliases: [
      'sun',
      'bacs sun',
      'six-digit service user number',
      'direct debit service user number',
    ],
    regions: ['uk'],
    category: 'direct-debits',
    definition:
      'A Service User Number (SUN) is a unique six-digit number allocated to a service user to identify its payment instructions. A service user can hold multiple SUNs, and ClearBank recommends using a separate SUN for each product.',
    seoTitle:
      'What is a Service User Number (SUN)?',
    seoDescription:
      'Learn what a Service User Number is, how the six-digit identifier is used for Bacs payment instructions, and why an organisation may hold more than one.',
    relatedTerms: [
      'service-user',
      'bacs',
      'auddis',
      'addacs',
      'arudd',
      'direct-debit-instruction',
    ],
  },

  {
    id: 'swift',
    term: 'SWIFT',
    acronym: '',
    aliases: [
      'Society for Worldwide Interbank Financial Telecommunication',
      'swift network',
      'swift payment',
      'swift payments',
      'swift message',
      'international payment messaging',
    ],
    regions: ['uk', 'eu'],
    category: 'payments',
    definition:
      'SWIFT is a financial messaging network through which financial institutions exchange payment and other financial information.',
    seoTitle:
      'What is SWIFT in Banking?',
    seoDescription:
      'Learn what SWIFT means in banking and how financial institutions use the network to exchange financial messages.',
    relatedTerms: [
      'bank-identifier-code',
      'international-bank-account-number',
      'foreign-exchange',
      'cross-border-payment',
      'standard-settlement-instructions',
    ],
  },

  {
    id: 'standard-settlement-instructions',
    term: 'Standard Settlement Instructions',
    acronym: 'SSI',
    aliases: [
      'ssi',
      'settlement instructions',
      'standing settlement instructions',
    ],
    regions: ['uk', 'eu'],
    category: 'payments',
    definition:
      'Standard Settlement Instructions (SSI) contain the details used to determine how and where applicable financial transactions are settled.',
    seoTitle:
      'What are Standard Settlement Instructions (SSI)?',
    seoDescription:
      'Learn what Standard Settlement Instructions are and how they define where and how applicable financial transactions are settled.',
    relatedTerms: [
      'bank-identifier-code',
      'international-bank-account-number',
      'swift',
      'cross-border-payment',
    ],
  },

  {
    id: 't2',
    term: 'T2',
    acronym: '',
    aliases: [
      'target2',
      'target services',
      't2 service',
      't2 system',
      'euro rtgs',
      'euro real-time gross settlement',
    ],
    regions: ['eu'],
    category: 'payments',
    definition:
      'T2 is the Eurosystem service used to settle eligible euro payments in central-bank money.',
    seoTitle: 'What is T2?',
    seoDescription:
      'Learn what T2 is and how the Eurosystem service supports settlement of eligible euro payments in central-bank money.',
    relatedTerms: [
      'sepa-credit-transfer',
      'sepa-instant-credit-transfer',
      'payment-service-provider',
    ],
    editorialReview: true,
  },

  {
    id: 'virtual-account',
    term: 'Virtual Account',
    acronym: '',
    aliases: [
      'virtual iban',
      'virtual account number',
      'virtual bank account',
    ],
    regions: ['uk', 'eu'],
    category: 'accounts',
    definition:
      'A Virtual Account is an account identifier used to route or reconcile applicable payments within an underlying account structure.',
    seoTitle:
      'What is a Virtual Account?',
    seoDescription:
      'Learn what a Virtual Account is and how a virtual account identifier can support payment routing and reconciliation.',
    relatedTerms: [
      'real-account',
      'hub-account',
      'international-bank-account-number',
    ],
    editorialReview: true,
  },

  {
    id: 'webhook',
    term: 'Webhook',
    acronym: '',
    aliases: [
      'web hook',
      'event notification',
      'callback',
      'http callback',
      'payment notification',
      'account notification',
    ],
    regions: ['uk', 'eu'],
    category: 'technical',
    definition:
      'A webhook is an automated message sent by ClearBank to a configured URL when an event occurs. Webhook events can notify a client that, for example, an account has been created or a payment has failed, enabling the client to take or automate a subsequent action.',
    seoTitle: 'What is a Webhook?',
    seoDescription:
      'Learn what a webhook is and how ClearBank sends automated event notifications to a client-configured URL.',
    relatedTerms: [
      'application-programming-interface',
    ],
  },
];

export default glossaryTerms;