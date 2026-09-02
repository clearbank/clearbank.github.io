const glossaryTerms = [
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
      'The Automated Direct Debit Amendment and Cancellation Service (ADDACS) is a Bacs service used to notify a service user when a Direct Debit Instruction has been amended or cancelled.',
    seoTitle:
      'What is the Automated Direct Debit Amendment and Cancellation Service (ADDACS)?',
    seoDescription:
      'Learn what ADDACS means and how it reports amendments and cancellations relating to Direct Debit Instructions.',
    relatedTerms: [
      'auddis',
      'bacs',
      'direct-debit',
      'direct-debit-instruction',
      'service-user',
      'service-user-number',
    ],
  },

  {
    id: 'app-scam',
    term: 'Authorised Push Payment Scam',
    acronym: 'APP scam',
    aliases: [
      'app fraud',
      'authorised push payment fraud',
      'authorized push payment scam',
      'payment scam',
    ],
    regions: ['uk', 'eu'],
    category: 'compliance',
    definition:
      `An Authorised Push Payment Scam (APP Scam) is a type of fraud where an individual or business is tricked into authorising the transfer of funds to a criminal's account.`,
    seoTitle:
      'What is an Authorised Push Payment Scam?',
    seoDescription:
      'Learn what an Authorised Push Payment scam is and how a payer can be deceived into authorising a fraudulent payment.',
    relatedTerms: [
      'beneficiary',
      'confirmation-of-payee',
      'credit-payment-recovery',
      'faster-payments',
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
      'The Automated Return of Unapplied Credits Service (ARUCS) is a Bacs payment scheme process that automatically returns a Direct Credit payment to the bank account of the organisation that sent the payment if the Direct Credit could not be applied to the intended destination account.',
    seoTitle:
      'What is the Automated Return of Unapplied Credits Service (ARUCS)?',
    seoDescription:
      'Learn what ARUCS means and how it is used when a credit cannot be applied to its intended account.',
    relatedTerms: [
      'bacs',
      'bacs-direct-credit',
      'beneficiary',
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
      'The Automated Return of Unpaid Direct Debits Service (ARUDD) is a Bacs service used by banks to return Direct Debit collections that could not be paid.',
    seoTitle:
      'What is the Automated Return of Unpaid Direct Debits Service (ARUDD)?',
    seoDescription:
      'Learn what ARUDD means and how it reports unpaid Direct Debit collections.',
    relatedTerms: [
      'bacs',
      'direct-debit',
      'direct-debit-indemnity-claim',
      'direct-debit-instruction',
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
      'The Automated Direct Debit Instruction Service (AUDDIS) is a Bacs service that enables the electronic creation and submission of Direct Debit Instructions instead of sending paper instructions to the paying bank.',
      'The Automated Direct Debit Instruction Service (AUDDIS) is a Bacs service that enables the electronic creation and submission of Direct Debit Instructions instead of sending paper instructions to the paying bank.',
    seoTitle:
      'What is the Automated Direct Debit Instruction Service (AUDDIS)?',
    seoDescription:
      'Learn what AUDDIS means and how it supports electronic Direct Debit Instructions through Bacs.',
    relatedTerms: [
      'addacs',
      'bacs',
      'direct-debit',
      'direct-debit-instruction',
      'service-user',
      'service-user-number',
    ],
  },

  {
    id: 'bacs-direct-credit',
    term: 'Bacs Direct Credit',
    acronym: '',
    aliases: [
      'direct credit',
      'bacs credit',
      'bacs credit payment',
    ],
    regions: ['uk'],
    category: 'payments',
    definition:
      'Bacs Direct Credit is a secure Bacs payment scheme used to credit funds to a recipient account. It is commonly used for payments such as salaries, pensions, expenses and supplier payments.',
      'Bacs Direct Credit is a secure Bacs payment scheme used to credit funds to a recipient account. It is commonly used for payments such as salaries, pensions, expenses and supplier payments.',
    seoTitle: 'What is a Bacs Direct Credit?',
    seoDescription:
      'Learn what a Bacs Direct Credit is and how it is used to send payments such as salaries and supplier payments.',
    relatedTerms: [
      'arucs',
      'bacs',
      'beneficiary',
      'direct-debit',
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
      `A Bacs Suspense Account is a specialised temporary holding account used by ClearBank to process and settle Bacs payments that cannot be automatically matched to a client's account.`,
      `A Bacs Suspense Account is a specialised temporary holding account used by ClearBank to process and settle Bacs payments that cannot be automatically matched to a client's account.`,
    seoTitle: 'What is a Bacs Suspense Account?',
    seoDescription:
      'Learn what a Bacs Suspense Account is and how it records fund movements associated with returned Bacs payments.',
    relatedTerms: [
      'bacs',
      'operating-account',
    ],
  },

  {
    id: 'business-identifier-code',
    term: 'Business Identifier Code',
    id: 'business-identifier-code',
    term: 'Business Identifier Code',
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
      'A Business Identifier Code (BIC), formerly known as a Bank Identifier Code, is an internationally recognised standardised code used to identify financial and non-financial institutions. BICs are used in payment messages and international transactions to route funds and identify the parties involved. Also commonly referred to as a SWIFT code.',
      'A Business Identifier Code (BIC), formerly known as a Bank Identifier Code, is an internationally recognised standardised code used to identify financial and non-financial institutions. BICs are used in payment messages and international transactions to route funds and identify the parties involved. Also commonly referred to as a SWIFT code.',
    seoTitle:
      'What is a Business or Bank Identifier Code (BIC)?',
      'What is a Business or Bank Identifier Code (BIC)?',
    seoDescription:
      'Learn what a Business Identifier Code is and how it identifies banks and financial institutions.',
      'Learn what a Business Identifier Code is and how it identifies banks and financial institutions.',
    relatedTerms: [
      'beneficiary',
      'international-bank-account-number',
      'sepa-credit-transfer',
      'swift',
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
      `Banking as a Service (BaaS) is a model in which a licensed bank and payment service provider (PSP) provides banking infrastructure, enabling businesses without a banking licence to embed accounts, payments and other financial services within their own products and platforms. For example, ClearBank provides access to accounts, payment schemes and banking infrastructure through APIs, allowing clients to offer financial services to their customers.`,
    seoTitle:
      'What is Banking as a Service (BaaS)?',
    seoDescription:
      'Learn what Banking as a Service means and how businesses can incorporate banking capabilities into their products.',
    relatedTerms: [
      'hub-account',
      'institution-account',
      'payment-service-provider',
      'virtual-account',
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
      'Learn what a beneficiary is in banking and how the term describes the intended recipient of funds.',
    relatedTerms: [
      'confirmation-of-payee',
      'creditor',
      'international-bank-account-number',
    ],
  },

  {
  id: 'chaps',
  term: 'Clearing House Automated Payment System',
  acronym: 'CHAPS',
  aliases: [
    'chaps',
    'chaps payment',
    'chaps transfer',
    'high-value payment',
    'same-day payment',
    'same-day sterling payment',
  ],
  regions: ['uk'],
  category: 'payments',
  definition:
    'The Clearing House Automated Payment System (CHAPS) is the United Kingdom’s high-value payment system for time-critical sterling payments. CHAPS payments are processed and settled on the same business day.',
  seoTitle: 'What is CHAPS?',
  seoDescription:
    'Learn what CHAPS is and how the UK payment system supports high-value, time-critical same-day sterling payments.',
  relatedTerms: [
    'bacs',
    'faster-payments',
    'swift',
    'beneficiary',
    't2',
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
      'Learn what a cheque is and how the written instruction directs a bank to pay funds to a named recipient.',
    relatedTerms: [
      'beneficiary',
    ],
  },

  {
    id: 'clearing',
    term: 'Clearing',
    acronym: '',
    aliases: [
      'payment clearing',
      'clearing process',
      'clearing system',
    ],
    regions: ['uk', 'eu'],
    category: 'payments',
    definition:
      'Clearing is the process of exchanging, validating and, where applicable, calculating the obligations arising from payment instructions before settlement. Clearing determines what participants owe, while settlement transfers the corresponding funds. Clearing is a fundamental component of payment systems and financial market infrastructure.',
      'Clearing is the process of exchanging, validating and, where applicable, calculating the obligations arising from payment instructions before settlement. Clearing determines what participants owe, while settlement transfers the corresponding funds. Clearing is a fundamental component of payment systems and financial market infrastructure.',
    seoTitle: 'What is Payment Clearing?',
    seoDescription:
      'Learn what payment clearing is and how it differs from the settlement of funds.',
    relatedTerms: [
      'bacs',
      'chaps',
      'sepa-credit-transfer',
      'settlement',
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
      'Confirmation of Payee (CoP) is a name-checking service that confirms whether the details entered by a payer correspond to the intended recipient before a payment is made, ensuring payments are sent to the intended recipient.',
      'Confirmation of Payee (CoP) is a name-checking service that confirms whether the details entered by a payer correspond to the intended recipient before a payment is made, ensuring payments are sent to the intended recipient.',
    seoTitle:
      'What is Confirmation of Payee (CoP)?',
    seoDescription:
      'Learn what Confirmation of Payee is and how name checking helps identify potentially incorrect recipient details.',
    relatedTerms: [
      'app-scam',
      'beneficiary',
      'credit-payment-recovery',
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
      'Credit Payment Recovery (CPR) is a process used to request the recovery of funds sent through an eligible credit payment.',
    seoTitle:
      'What is Credit Payment Recovery (CPR)?',
    seoDescription:
      'Learn what Credit Payment Recovery means and how it is used to request recovery of funds.',
    relatedTerms: [
      'beneficiary',
      'confirmation-of-payee',
      'faster-payment-identifier',
      'faster-payments',
    ],
  },

  {
    id: 'creditor',
    term: 'Creditor',
    acronym: '',
    aliases: [
      'party receiving payment'
    ],
    regions: ['uk', 'eu'],
    category: 'payments',
    definition:
      'A creditor is a person, business, or organisation that receives funds in a payment transaction or Direct Debit collection.',
    seoTitle:
      'What is a Creditor in Payments?',
    seoDescription:
      'Learn what a creditor is and how the term identifies the party receiving a payment.',
    relatedTerms: [
      'beneficiary',
      'debtor',
      'direct-debit',
      'sepa-credit-transfer',
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
      'international-bank-account-number',
      'swift',
    ],
  },

  {
    id: 'debtor',
    term: 'Debtor',
    acronym: '',
    aliases: [
      'payer',
      'payment originator',
      'party making payment',
    ],
    regions: ['uk', 'eu'],
    category: 'payments',
    definition:
      'A debtor is a person, business or organisation that makes a payment or owes money to a creditor.',
      'A debtor is a person, business or organisation that makes a payment or owes money to a creditor.',
    seoTitle:
      'What is a Debtor in Payments?',
    seoDescription:
      'Learn what a debtor is and how the term identifies the party making a payment.',
    relatedTerms: [
      'creditor',
      'direct-debit',
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
      `A Direct Debit is an automated payment method that allows an organisation to collect funds from a payer's account under the authority of a valid Direct Debit Instruction (DDI) or mandate.`,
      `A Direct Debit is an automated payment method that allows an organisation to collect funds from a payer's account under the authority of a valid Direct Debit Instruction (DDI) or mandate.`,
    seoTitle: 'What is a Direct Debit?',
    seoDescription:
      'Learn what a Direct Debit is and how an organisation can collect payments under a payer’s authority.',
    relatedTerms: [
      'addacs',
      'arudd',
      'auddis',
      'bacs',
      'direct-debit-indemnity-claim',
      'direct-debit-instruction',
      'direct-debit-mandate',
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
      'A Direct Debit Indemnity Claim (DDIC) is a claim made under the Direct Debit Guarantee when a payer has been refunded for a Direct Debit collected in error. A DDIC enables the paying payment service provider (PSP) to recover funds from the Service User responsible for the collection.',
      'A Direct Debit Indemnity Claim (DDIC) is a claim made under the Direct Debit Guarantee when a payer has been refunded for a Direct Debit collected in error. A DDIC enables the paying payment service provider (PSP) to recover funds from the Service User responsible for the collection.',
    seoTitle:
      'What is a Direct Debit Indemnity Claim (DDIC)?',
    seoDescription:
      'Learn what a Direct Debit Indemnity Claim is and how it relates to a collected Direct Debit.',
    relatedTerms: [
      'arudd',
      'direct-debit',
      'direct-debit-instruction',
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
      'direct debit authority',
      'uk direct debit mandate',
    ],
    regions: ['uk'],
    category: 'direct-debits',
    definition:
      'A Direct Debit Instruction (DDI) is the authorisation provided by a payer that permits an organisation to collect payments from the payer’s account by Direct Debit.',
      'A Direct Debit Instruction (DDI) is the authorisation provided by a payer that permits an organisation to collect payments from the payer’s account by Direct Debit.',
    seoTitle:
      'What is a Direct Debit Instruction (DDI)?',
    seoDescription:
      'Learn what a Direct Debit Instruction is and how it gives an organisation authority to collect payments.',
    relatedTerms: [
      'addacs',
      'arudd',
      'auddis',
      'direct-debit',
      'direct-debit-indemnity-claim',
      'service-user-number',
    ],
  },

  {
    id: 'direct-debit-mandate',
    term: 'Direct Debit Mandate',
    acronym: '',
    aliases: [
      'mandate',
      'direct debit authorisation',
      'direct debit authorization',
      'sepa direct debit mandate',
    ],
    regions: ['eu'],
    category: 'direct-debits',
    definition:
      'A Direct Debit Mandate is the authorisation provided by a payer that allows a creditor to collect payments from the payer’s account by Direct Debit. A Direct Debit Mandate provides the legal basis for collections under the applicable Direct Debit scheme.',
      'A Direct Debit Mandate is the authorisation provided by a payer that allows a creditor to collect payments from the payer’s account by Direct Debit. A Direct Debit Mandate provides the legal basis for collections under the applicable Direct Debit scheme.',
    seoTitle:
      'What is a Direct Debit Mandate?',
    seoDescription:
      'Learn what a Direct Debit Mandate is and how it allows a creditor to collect payments from a payer’s account.',
    relatedTerms: [
      'creditor',
      'debtor',
      'direct-debit',
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
      'faster payment identifier',
      'faster payment indicator'
      'faster payment identifier',
      'faster payment indicator'
    ],
    regions: ['uk'],
    category: 'payments',
    definition:
      'A Faster Payment Identifier (FPID) is a unique reference number generated when a Faster Payment is processed. It appears on bank statements to help identify and track individual transactions.',
      'A Faster Payment Identifier (FPID) is a unique reference number generated when a Faster Payment is processed. It appears on bank statements to help identify and track individual transactions.',
    seoTitle:
      'What is a Faster Payment Identifier (FPID)?',
    seoDescription:
      'Learn what a Faster Payment Identifier is and why the reference may be required during Credit Payment Recovery.',
    relatedTerms: [
      'beneficiary',
      'confirmation-of-payee',
      'credit-payment-recovery',
      'faster-payments',
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
      'Faster Payments is a UK payment system that enables participating banks and payment service providers to send and receive sterling payments in near real-time.',
      'Faster Payments is a UK payment system that enables participating banks and payment service providers to send and receive sterling payments in near real-time.',
    seoTitle:
      'What are Faster Payments (FPS)?',
    seoDescription:
      'Learn what Faster Payments are and how FPS supports near real-time sterling payments between participating UK accounts.',
    relatedTerms: [
      'bacs',
      'chaps',
      'confirmation-of-payee',
      'credit-payment-recovery',
      'faster-payment-identifier',
      'pound-sterling',
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
      'The Financial Conduct Authority (FCA) regulates financial services firms and financial markets in the United Kingdom. It works to protect consumers, maintain market integrity, and promote effective competition between financial service providers.',
      'The Financial Conduct Authority (FCA) regulates financial services firms and financial markets in the United Kingdom. It works to protect consumers, maintain market integrity, and promote effective competition between financial service providers.',
    seoTitle:
      'What is the Financial Conduct Authority (FCA)?',
    seoDescription:
      'Learn what the Financial Conduct Authority is and its role in regulating UK financial services firms and markets.',
    relatedTerms: [
      'cass-7',
      'financial-services-compensation-scheme',
      'know-your-business',
      'know-your-customer',
      'prudential-regulation-authority',
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
      'The Financial Services Compensation Scheme (FSCS) is the United Kingdom’s statutory compensation scheme for customers of authorised financial services that fail. Eligible deposits are protected up to £120,000 per person, per authorised firm.',
      'The Financial Services Compensation Scheme (FSCS) is the United Kingdom’s statutory compensation scheme for customers of authorised financial services that fail. Eligible deposits are protected up to £120,000 per person, per authorised firm.',
    seoTitle:
      'What is the Financial Services Compensation Scheme (FSCS)?',
    seoDescription:
      'Learn what the FSCS is and its role as the UK statutory compensation scheme for eligible customers.',
    relatedTerms: [
      'financial-conduct-authority',
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
      'forex'
      'forex'
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
      'cross-border-payment',
      'fx-trade',
      'multicurrency',
      'pound-sterling',
      'request-for-quote',
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
      'forex trading'
      'forex trading'
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
      'multicurrency',
      'request-for-quote',
    ],
  },

{
  id: 'embedded-banking',
  term: 'Embedded Banking',
  aliases: [
    'Banking Embedded in Products',
    'Embedded Financial Services',
  ],
  regions: ['uk'],
  category: 'accounts',
  definition:
    `Embedded Banking is the integration of banking services directly into a non-bank product, platform or customer journey. It enables organisations to offer services such as accounts, payments and other financial products without becoming a bank themselves. Embedded Banking is typically delivered through Banking as a Service (BaaS) providers, which supply the regulated banking infrastructure, technology and banking licence required to provide these services.`,
  seoTitle:
    'What is Embedded Banking? | Definition and Examples',
  seoDescription:
    `Learn what Embedded Banking is, how it works, and how businesses use Banking as a Service (BaaS) to offer accounts, payments and other banking services within their own products.`,
  relatedTerms: [
    'banking-as-a-service',
    'payment-initiation',
  ],
  editorialReview: true,
},

  {
    id: 'general-segregated-account',
    term: 'General Segregated Account',
    acronym: 'GSA',
    aliases: [
      'segregation account',
      'general segregated account',
      'segregated funds account',
      'gsa',
      'segregated pooled account'
    ],
    regions: ['uk','eu'],
    category: 'accounts',
    definition:
      `A General Segregated Account (GSA) is a ClearBank account type that holds funds for one or more customers separately from an institution's operational funds. Also known as a Segregated Pooled account.`,
    seoTitle:
      'What is a General Segregated Account?',
    seoDescription:
      `Learn what a general segregated account (GSA) is and how it separates customer funds from an institution's operational funds.`,
    relatedTerms: [
      'operating-account',
      'safeguarded-account',
      'segregation',
    ],
    editorialReview: true,
  },

 {
    id: 'segregated-pooled-account',
    term: 'Segregated Pooled Account',
    aliases: [
      'segregation account',
      'general segregated account',
      'segregated funds account',
      'gsa',
      'general segregated account'
    ],
    regions: ['uk'],
    category: 'accounts',
    definition:
      `A Segregated Pooled Account is another name for a General Segregated Account, a pooled ClearBank account type that holds funds for one or more customers separately from an institution's operational funds.`,
    seoTitle:
      'What is a Segregated Pooled Account?',
    seoDescription:
      `Learn what a segregated pooled account is and how it separates customer funds from an institution's operational funds.`,
    relatedTerms: [
      'operating-account',
      'safeguarded-account',
      'segregation',
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
      'A Hub Account is an FSCS-protected bank account held with ClearBank that enables payments to and from a defined set of associated accounts within an embedded-banking solution.',
      'A Hub Account is an FSCS-protected bank account held with ClearBank that enables payments to and from a defined set of associated accounts within an embedded-banking solution.',
    seoTitle: 'What is a Hub Account?',
    seoDescription:
      'Learn how the term Hub Account is used in ClearBank embedded-banking documentation.',
    relatedTerms: [
      'banking-as-a-service',
      'institution-account',
      'real-account',
      'virtual-account',
      'embedded-banking'
      'embedded-banking'
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
      'An Institution Account is a digital representation of a financial institution with ClearBank and acts as a superset of all its financial accounts. It is not a financial account itself.',
    seoTitle:
      'What is an Institution Account?',
    seoDescription:
      `Learn what an Institution Account is and  how it provides access to an institution's financial accounts with ClearBank.`,
    relatedTerms: [
      'hub-account',
      'mandated-minimum-balance-account',
      'operating-account',
      'virtual-account',
      'institution-master-account'
    ],
    editorialReview: true,
  },

  {
    id: 'institution-master-account',
    term: 'Institution Master Account',
    acronym: '',
    aliases: [
      'financial institution account',
      'fi account',
      'institutional account',
    ],
    regions: ['eu','uk'],
    category: 'accounts',
    definition:
      `An Institution Master Account is a representation of a financial institution's account structure with ClearBank and acts as a superset of all its financial accounts. It is not a financial account itself.`,
    seoTitle:
      'What is an Institution Master Account?',
    seoDescription:
      `Learn what an Institution Master Account is and how it provides access to an institution's financial accounts with ClearBank.`,
    relatedTerms: [
      'hub-account',
      'mandated-minimum-balance-account',
      'operating-account',
      'virtual-account',
      'institution-account'
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
      'An International Bank Account Number (IBAN) is a globally standardised identifier, consisting of up to 34 alphanumeric characters, used to identify a bank account when processing applicable payments.',
    seoTitle:
      'What is an International Bank Account Number (IBAN)?',
    seoDescription:
      'Learn what an IBAN is and how the standardised identifier represents a bank account for applicable payments.',
    relatedTerms: [
      'beneficiary',
      'sepa-credit-transfer',
      'sepa-instant-credit-transfer',
      'swift',
      'virtual-account',
      'virtual-international-bank-account-number',
      'cross-border-payment'
    ],
  },

    {
    id: 'virtual-international-bank-account-number',
    term: 'Virtual International Bank Account Number',
    acronym: 'vIBAN',
    aliases: [
      'viban',
      'viban number',
      'virtual international account number',
    ],
    regions: ['uk', 'eu'],
    category: 'banking',
    definition:
      'A Virtual International Bank Account Number (vIBAN) is a virtual account identifier that routes payments to a designated underlying bank account through the IBAN infrastructure. To the sender, a vIBAN functions in the same way as a standard IBAN, while allowing incoming payments to be distinguished and managed separately from other transactions received into the underlying account.',
    seoTitle:
      'What is a virtual International Bank Account Number (IBAN)?',
    seoDescription:
      'Learn what a vIBAN is and how the standardised identifier represents a bank account for applicable payments.',
    relatedTerms: [
      'beneficiary',
      'sepa-credit-transfer',
      'sepa-instant-credit-transfer',
      'swift',
      'cross-border-payment',
      'IBAN',
    ],
  },

  {
    id: 'intraday-liquidity-pool',
    term: 'Intra-day Liquidity Pool',
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
      'An Intra-day Liquidity Pool is a centralised pool of funds made available to support payment activity in real-time during a working day.',
    seoTitle:
      'What is an Intraday Liquidity Pool?',
    seoDescription:
      'Learn what an Intraday Liquidity Pool is and how it supports payment activity during a working day.',
    relatedTerms: [
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
      'Know Your Business (KYB) is the process of verifying a business and assessing its ownership, activities, customer base, payment flows and business model. KYB helps organisations comply with anti-money laundering (AML) and other financial crime regulations.',
    seoTitle:
      'What is Know Your Business (KYB)?',
    seoDescription:
      'Learn what Know Your Business means and how KYB checks help verify a business and its ownership structure.',
    relatedTerms: [
      'know-your-customer',
      'legal-entity',
      'ultimate-beneficial-owner',
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
      'ultimate-beneficial-owner',
    ],
  },

  {
    id: 'legal-entity',
    term: 'Legal Entity',
    acronym: '',
    aliases: [
      'business entity',
      'incorporated entity',
      'organisation',
      'organization',
    ],
    regions: ['uk'],
    category: 'compliance',
    definition:
      'A legal entity is a registered business, organisation or other body that has a legally recognised identity separate from the individuals connected with it.',
    seoTitle: 'What is a Legal Entity?',
    seoDescription:
      'Learn what a legal entity is and why organisations are identified separately from the individuals connected with them.',
    relatedTerms: [
      'know-your-business',
      'legal-entity-identifier',
      'ultimate-beneficial-owner',
    ],
  },

  {
    id: 'legal-entity-identifier',
    term: 'Legal Entity Identifier',
    acronym: 'LEI',
    aliases: [
      'lei',
      'legal entity code',
      'gleif identifier',
    ],
    regions: ['uk'],
    category: 'compliance',
    definition:
      'A Legal Entity Identifier (LEI) is a standardised 20-character alphanumeric code, based on the ISO 17442 standard, used to uniquely identify a legal entity participating in applicable financial transactions. LEIs help improve transparency in financial markets by enabling organisations, regulators and counterparties to identify legal entities and their associated reference data.',
    seoTitle:
      'What is a Legal Entity Identifier (LEI)?',
    seoDescription:
      'Learn what a Legal Entity Identifier is and how an LEI identifies a legal entity in financial transactions.',
    relatedTerms: [
      'know-your-business',
      'legal-entity',
      'ultimate-beneficial-owner',
    ],
  },

  {
    id: 'mandated-minimum-balance-account',
    term: 'Mandated Minimum Balance Account',
    acronym: '',
    aliases: [
      'mandated minimum balance',
      'mmb',
      'mmb account',
      'minimum balance account',
      'minimum required balance',
      'mandated balance',
    ],
    regions: ['uk', 'eu'],
    category: 'liquidity',
    definition:
      `A Mandated Minimum Balance Account is an account that holds an institution's pre-agreed mandated minimum balance. Funds held in the account are subject to the terms of the institution's contract with ClearBank.`,
    seoTitle:
      'What is a Mandated Minimum Balance Account?',
    seoDescription:
      'Learn what a Mandated Minimum Balance Account is and why a financial institution may be required to maintain a balance.',
    relatedTerms: [
      'institution-account',
      'intraday-liquidity-pool',
      'operating-account',
      'Settlement',
      'intraday-liquidity',
      'reserve-account',
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
      'Multicurrency refers to the ability to hold, receive and send funds in more than one currency, such as pounds sterling (GBP), euros (EUR) or US dollars (USD). Multicurrency products and services support activity across multiple currencies without requiring a separate banking relationship for each currency.',
    seoTitle:
      'What does Multicurrency mean?',
    seoDescription:
      'Learn what multicurrency means and how it applies to accounts, products and services that support more than one currency.',
    relatedTerms: [
      'foreign-exchange',
      'fx-trade',
      'pound-sterling',
      'request-for-quote',
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
      'your funds',
      'primary operating account'
    ],
    regions: ['uk', 'eu'],
    category: 'accounts',
    definition:
      `An Operating Account is an account that holds a financial institution's own funds, as defined in the applicable ClearBank agreement. This can include fees, interest and other funds that belong to the institution rather than its customers.`,
    seoTitle:
      'What is an Operating Account?',
    seoDescription:
      'Learn what an Operating Account is and how it is used to hold a financial institution’s own funds.',
    relatedTerms: [
      'bacs-suspense-account',
      'general-segregated-account',
      'institution-account',
      'intraday-liquidity-pool',
      'mandated-minimum-balance-account',
    ],
  },

{
  id: 'segregated-account',
  term: 'Segregated Account',
  aliases: [
    'Customer Segregated Account',
  ],
  regions: ['uk'],
  category: 'accounts',
  definition:
    `A Segregated Account holds customer funds separately from a financial institution's own operational funds. It must not be used to hold the institution's own funds. A financial institution can use Segregated Accounts when it is not subject to Safeguarding or Client Money rules but still wants to keep its customers' funds separate from its operational funds.`,
  seoTitle:
    'What is a Segregated Account?',
  seoDescription:
    `Learn what a Segregated Account is and how it keeps customer funds separate from a financial institution's operational funds.`,
  relatedTerms: [
    'general-segregated-account',
    'designated-segregated-account',
    'safeguarded-account',
    'client-money-account',
    'operating-account',
  ],
  editorialReview: true,
},

{
  id: 'designated-segregated-account',
  term: 'Designated Segregated Account',
  aliases: [
    'Segregated Designated Account',
    'Designated Segregation',
  ],
  regions: ['uk', 'eu'],
  category: 'accounts',
  definition:
    `A Designated Segregated Account holds funds belonging to a single customer separately from a financial institution's operational funds and the funds of its other customers.`,
  seoTitle:
    'What is a Designated Segregated Account?',
  seoDescription:
    `Learn how a Designated Segregated Account holds funds for a single customer separately from other customer and institutional funds.`,
  relatedTerms: [
    'segregated-account',
    'general-segregated-account',
    'designated-safeguarded-account',
    'designated-client-account',
  ],
  editorialReview: true,
},
{
  id: 'safeguarded-account',
  term: 'Safeguarded Account',
  aliases: [
    'Safeguarding Account',
  ],
  regions: ['uk'],
  category: 'accounts',
  definition:
    `A Safeguarded Account is a type of Segregated Account used to hold customer funds separately from a financial institution's own funds in accordance with applicable regulatory requirements. It must not be used to hold the institution's own funds. Safeguarded Accounts can be structured as General Safeguarded or Designated Safeguarded accounts.`,
  seoTitle:
    'What is a Safeguarded Account?',
  seoDescription:
    `Learn what a Safeguarded Account is and how it keeps customer funds separate from a financial institution's own funds under applicable safeguarding requirements.`,
  relatedTerms: [
    'segregated-account',
    'general-safeguarded-account',
    'designated-safeguarded-account',
    'client-assets-sourcebook',
    'operating-account',
  ],
  editorialReview: true,
},
{
  id: 'general-safeguarded-account',
  term: 'General Safeguarded Account',
  aliases: [
    'Safeguarded Pooled Account',
    'General Safeguarded',
  ],
  regions: ['uk'],
  category: 'accounts',
  definition:
    `A General Safeguarded Account is a pooled Safeguarded Account that holds funds belonging to one or more customers separately from a financial institution's own funds. Virtual accounts can be created under this account type to help identify and manage funds associated with individual customers.`,
  seoTitle:
    'What is a General Safeguarded Account?',
  seoDescription:
    `Learn how a General Safeguarded Account holds pooled customer funds in accordance with applicable safeguarding requirements.`,
  relatedTerms: [
    'safeguarded-account',
    'designated-safeguarded-account',
    'general-segregated-account',
    'pooled-account',
    'virtual-account',
  ],
  editorialReview: true,
},
{
  id: 'designated-safeguarded-account',
  term: 'Designated Safeguarded Account',
  aliases: [
    'Safeguarded Designated Account',
    'Designated Safeguarded',
  ],
  regions: ['uk'],
  category: 'accounts',
  definition:
    `A Designated Safeguarded Account is a Safeguarded Account that holds funds belonging to a single customer separately from a financial institution's own funds and the funds of its other customers.`,
  seoTitle:
    'What is a Designated Safeguarded Account?',
  seoDescription:
    `Learn how a Designated Safeguarded Account holds safeguarded funds belonging to a single customer separately from other funds.`,
  relatedTerms: [
    'safeguarded-account',
    'general-safeguarded-account',
    'designated-segregated-account',
    'designated-client-account',
  ],
  editorialReview: true,
},

  {
  id: 'client-money-account',
  term: 'Client Money Account',
  aliases: [
    'Client Account',
  ],
  regions: ['uk'],
  category: 'accounts',
  definition:
    `A Client Money Account is an account used to receive and hold money for or on behalf of customers in accordance with the FCA's Client Money rules. It separates client money from a financial institution's own funds. Client Money Accounts can be structured as General Client or Designated Client accounts.`,
  seoTitle:
    'What is a Client Money Account?',
  seoDescription:
    `Learn what a Client Money Account is and how it separates money held for customers from a financial institution's own funds under the CASS rules.`,
  relatedTerms: [
    'client-assets-sourcebook',
    'general-client-account',
    'designated-client-account',
    'operating-account',
  ],
  editorialReview: true,
},
{
  id: 'general-client-account',
  term: 'General Client Account',
  aliases: [
    'Client Money Pooled Account',
  ],
  regions: ['uk'],
  category: 'accounts',
  definition:
    `A General Client Account is a pooled Client Money Account that holds funds belonging to one or more named clients. Virtual accounts can be created under this account type to help identify and manage the funds associated with individual clients.`,
  seoTitle:
    'What is a General Client Account?',
  seoDescription:
    `Learn what a General Client Account is and how it holds funds for one or more named customers within a pooled Client Money Account.`,
  relatedTerms: [
    'client-money-account',
    'designated-client-account',
    'pooled-account',
    'virtual-account',
  ],
  editorialReview: true,
},
{
  id: 'designated-client-account',
  term: 'Designated Client Account',
  aliases: [
    'Client Money Designated Account',
  ],
  regions: ['uk'],
  category: 'accounts',
  definition:
  `A Designated Client Account is a type of Client Money Account used to receive and hold money for or on behalf of a single client in accordance with the FCA's Client Money rules. It separates the client's money from a financial institution's own funds.`,
  seoTitle:
    'What is a Designated Client Account?',
  seoDescription:
    `Learn what a Designated Client Account is and how it holds funds belonging to a single named customer separately from other customer funds.`,
  relatedTerms: [
    'client-money-account',
    'general-client-account',
    'designated-segregated-account',
    'client-assets-sourcebook',
  ],
  editorialReview: true,
},

{
  id: 'repair-suspense-account',
  term: 'Repair Suspense Account',
  aliases: [
    'Repair Suspense',
  ],
  regions: ['eu'],
  category: 'accounts',
  definition:
    `A Repair Suspense Account is a ClearBank account used to apply funds relating to an institution that cannot be applied to the intended creditor account. Funds held in this account should be redirected to the correct account or returned.`,
  seoTitle:
    'What is a Repair Suspense Account?',
  seoDescription:
    `Learn what a Repair Suspense Account is and what happens when funds cannot be applied to the intended creditor account.`,
  relatedTerms: [
    'suspense-account',
    'bacs-suspense-account',
    'creditor',
  ],
  editorialReview: true,
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
      'sepa-credit-transfer',
    ],
  },

  {
    id: 'prudential-regulation-authority',
    term: 'Prudential Regulation Authority',
    acronym: 'PRA',
    aliases: [
      'pra',
      'prudential regulator',
      'banking regulator',
    ],
    regions: ['uk'],
    category: 'compliance',
    definition:
      'The Prudential Regulation Authority (PRA) is responsible for the prudential regulation and supervision of applicable banks, building societies, credit unions, insurers and major investment firms in the United Kingdom. The PRA promotes the safety and soundness of regulated firms and seeks to reduce risks that could affect customers, financial markets and the wider economy.',
    seoTitle:
      'What is the Prudential Regulation Authority (PRA)?',
    seoDescription:
      'Learn what the Prudential Regulation Authority is and its role in the prudential supervision of applicable UK firms.',
    relatedTerms: [
      'financial-conduct-authority',
    ],
  },

  {
    id: 'real-account',
    term: 'Real Account',
    acronym: '',
    aliases: [
      'physical account',
      'underlying account',
      'real bank account',
    ],
    regions: ['uk'],
    category: 'accounts',
    definition:
      'A Real Account is an underlying bank account that can hold funds and process transactions. Unlike a Virtual Account, a Real Account holds the actual balance and transaction record associated with the account.',
    seoTitle: 'What is a Real Account?',
    seoDescription:
      'Learn how the term Real Account is used in ClearBank account structures.',
    relatedTerms: [
      'hub-account',
      'institution-account',
      'virtual-account',
    ],
    editorialReview: true,
  },

  {
    id: 'real-time-gross-settlement',
    term: 'Real-Time Gross Settlement',
    acronym: 'RTGS',
    aliases: [
      'rtgs',
      'gross settlement',
      'real-time settlement',
      'high-value settlement',
    ],
    regions: ['uk', 'eu'],
    category: 'payments',
    definition:
      'Real-Time Gross Settlement (RTGS) is a settlement method in which eligible payment obligations are settled individually and in real time, rather than being grouped and settled in batches. RTGS systems are commonly used for high-value and time-critical payments.',
    seoTitle:
      'What is Real-Time Gross Settlement (RTGS)?',
    seoDescription:
      'Learn what Real-Time Gross Settlement means and how eligible payment obligations are settled individually.',
    relatedTerms: [
      'chaps',
      'settlement',
      't2',
    ],
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
    regions: ['uk'],
    category: 'foreign-exchange',
    definition:
      'A Request for Quote (RFQ) is a request for an exchange rate for a proposed foreign exchange (FX) transaction before the trade is accepted.',
    seoTitle:
      'What is a Request for Quote (RFQ)?',
    seoDescription:
      'Learn what a Request for Quote is and how an RFQ is used before accepting an FX trade.',
    relatedTerms: [
      'foreign-exchange',
      'fx-trade',
      'multicurrency',
    ],
  },

  {
    id: 'segregation',
    term: 'Segregation',
    acronym: '',
    aliases: [
      'fund segregation',
      'client money segregation',
      'segregated funds',
    ],
    regions: ['uk', 'eu'],
    category: 'compliance',
    definition:
      `Segregation is the practice of keeping specified funds separate from other funds, such as separating client funds from a financial institution's own operating funds.`,
    seoTitle:
      'What is Fund Segregation?',
    seoDescription:
      'Learn what fund segregation means and why specified funds may be kept separate from a firm’s operating money.',
    relatedTerms: [
      'cass-7',
      'general-segregated-account',
      'safeguarded-account',
    ],
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
    regions: ['eu', 'uk'],
    category: 'payments',
    definition:
      'A SEPA Credit Transfer (SCT) is a payment scheme that enables euro credit transfers between eligible accounts within the Single Euro Payments Area (SEPA).',
    seoTitle:
      'What is a SEPA Credit Transfer (SCT)?',
    seoDescription:
      'Learn what a SEPA Credit Transfer is and how SCT payments support euro transfers within SEPA.',
    relatedTerms: [
      'beneficiary',
      'international-bank-account-number',
      'sepa-instant-credit-transfer',
      't2',
    ],
  },

  {
    id: 'sepa-credit-transfer-uk',
    term: 'SEPA Credit Transfer UK',
    acronym: 'SCT',
    aliases: [
      'sct',
      'sepa payment',
      'sepa transfer',
      'euro credit transfer',
      'single euro payments area credit transfer',
    ],
    regions: ['uk'],
    category: 'payments',
    definition:
      'The SEPA Credit Transfer UK (SCT UK) service is a payment scheme that enables euro credit transfers between eligible accounts with any participant bank within the Single Euro Payments Area (SEPA) through the SEPA Credit Transfer scheme. Only euro can be sent inside the SEPA zone using SCT UK.',
    seoTitle:
      'What is a SEPA Credit Transfer UK (SCT)?',
    seoDescription:
      'Learn what a SEPA Credit Transfer is and how SCT payments support euro transfers within SEPA.',
    relatedTerms: [
      'beneficiary',
      'international-bank-account-number',
      'sepa-instant-credit-transfer',
      't2',
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
      'A SEPA Instant Credit Transfer (SCT Inst) is a payment scheme that enables euro credit transfers between eligible accounts within seconds, subject to the applicable scheme requirements.',
    seoTitle:
      'What is a SEPA Instant Credit Transfer (SCT Inst)?',
    seoDescription:
      'Learn what a SEPA Instant Credit Transfer is and how the scheme supports euro payments completed within seconds.',
    relatedTerms: [
      'beneficiary',
      'international-bank-account-number',
      'sepa-credit-transfer',
      't2',
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
      'A Service User is an organisation authorised to submit Bacs payment instructions using a Service User Number (SUN).',
    seoTitle:
      'What is a Bacs Service User?',
    seoDescription:
      'Learn what a Service User is and how an authorised organisation uses a Service User Number.',
    relatedTerms: [
      'addacs',
      'arudd',
      'auddis',
      'bacs',
      'service-user-number',
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
      'A Service User Number (SUN) is a unique six-digit code assigned to a Service User to identify its Bacs payment instructions. A Service User can hold multiple SUNs.',
    seoTitle:
      'What is a Service User Number (SUN)?',
    seoDescription:
      'Learn what a Service User Number is and how the six-digit identifier is used for Bacs payment instructions.',
    relatedTerms: [
      'addacs',
      'arudd',
      'auddis',
      'bacs',
      'direct-debit-instruction',
      'service-user',
    ],
  },

  {
    id: 'settlement',
    term: 'Settlement',
    acronym: '',
    aliases: [
      'fund settlement',
      'payment settlement',
      'settlement process',
    ],
    regions: ['uk', 'eu'],
    category: 'payments',
    definition:
      'Settlement is the process by which funds are transferred between parties to complete a payment transaction. It takes place after, or as part of, the applicable clearing process.',
    seoTitle:
      'What is Payment Settlement?',
    seoDescription:
      'Learn what payment settlement is and how funds are transferred to discharge payment obligations.',
    relatedTerms: [
      'clearing',
      'real-time-gross-settlement'
    ],
  },

{
  id: 'swift',
  term: 'Society for Worldwide Interbank Financial Telecommunication',
  acronym: 'SWIFT',
  aliases: [
    'swift',
    'swift network',
    'swift payment',
    'swift payments',
    'swift message',
    'international payment messaging',
    'financial messaging network',
  ],
  regions: ['uk', 'eu'],
  category: 'payments',
  definition:
    'The Society for Worldwide Interbank Financial Telecommunication (SWIFT) provides a global financial messaging network used by financial institutions to exchange payment instructions and related information. SWIFT transmits messages rather than moving funds itself.',
  seoTitle: 'What is SWIFT in Banking?',
  seoDescription:
    'Learn what SWIFT is and how financial institutions use the SWIFT network to exchange payment instructions and financial messages.',
  relatedTerms: [
    'international-bank-account-number',
    'cross-border-payment',
    'foreign-exchange',
    'chaps',
  ],
},

  {
    id: 't2',
    term: 'T2',
    acronym: '',
    aliases: [
      'TARGET2',
      'TARGET Services',
      't2 service',
      't2 system',
      'euro rtgs',
      'euro real-time gross settlement',
    ],
    regions: ['eu'],
    category: 'payments',
    definition:
      `T2, formerly TARGET2, is the European Central Bank's real-time gross settlement (RTGS) system used to settle eligible euro transactions across the euro area.`,
    seoTitle: 'What is T2?',
    seoDescription:
      'Learn what T2 is and how the Eurosystem service supports settlement of eligible euro payments.',
    relatedTerms: [
      'real-time-gross-settlement',
      'sepa-credit-transfer',
      'sepa-instant-credit-transfer',
      'settlement',
    ],
    editorialReview: true,
  },

  {
    id: 'ultimate-beneficial-owner',
    term: 'Ultimate Beneficial Owner',
    acronym: 'UBO',
    aliases: [
      'ubo',
      'beneficial owner',
      'true owner',
      'ultimate owner',
    ],
    regions: ['uk', 'eu'],
    category: 'compliance',
    definition:
      'An Ultimate Beneficial Owner (UBO) is an individual who ultimately owns or controls a legal entity, either directly or indirectly through one or more other entities.',
    seoTitle:
      'What is an Ultimate Beneficial Owner (UBO)?',
    seoDescription:
      'Learn what an Ultimate Beneficial Owner is and how an individual may ultimately own or control a legal entity.',
    relatedTerms: [
      'know-your-business',
      'know-your-customer',
      'legal-entity',
      'legal-entity-identifier',
    ],
  },

  {
    id: 'virtual-account',
    term: 'Virtual Account',
    acronym: '',
    aliases: [
      'virtual account number',
      'virtual bank account',
    ],
    regions: ['uk', 'eu'],
    category: 'accounts',
    definition:
      'A Virtual Account is a digital account used to identify customers and distinguish funds within an underlying Real Account. Funds associated with a Virtual Account are held in an underlying Real Account rather than in the Virtual Account itself.',
    seoTitle:
      'What is a Virtual Account?',
    seoDescription:
      'Learn what a Virtual Account is and how a virtual account identifier can support payment routing and reconciliation.',
    relatedTerms: [
      'hub-account',
      'institution-account',
      'international-bank-account-number',
      'real-account',
    ],
    editorialReview: true,
  },

{
  id: 'bacs',
  term: `Bankers' Automated Clearing Services`,
  acronym: 'Bacs',
  aliases: [
    'bacs',
    'bacs payment',
    'bacs payments',
    'bacs transfer',
    'bacs direct credit',
    'bacs direct debit',
    'bankers automated clearing services',
    'bankers automated clearing system',
  ],
  regions: ['uk'],
  category: 'payments',
  definition:
    'Bankers’ Automated Clearing Services (Bacs) is a UK payment system used to process Direct Debit and Direct Credit transactions between bank accounts. Bacs processes payments in batches and typically operates on a three-working-day cycle.',
  paymentCycle: [
    {
      title: 'Day 1 (Input)',
      description:
        'Payment instructions are submitted to Bacs before the applicable cut-off time.',
    },
    {
      title: 'Day 2 (Processing)',
      description:
        'Bacs processes the instructions and distributes them to participating institutions.',
    },
    {
      title: 'Day 3 (Entry)',
      description:
        'Payments are applied to the relevant accounts and settlement takes place.',
    },
  ],
  paymentTypes: [
    'Direct Debit',
    'Direct Credit',
  ],
  seoTitle: 'What is Bacs?',
  seoDescription:
    'Learn what Bacs is, how the three-working-day payment cycle works, and how Direct Debit and Direct Credit payments are processed.',
  relatedTerms: [
    'direct-debit',
    'direct-debit-instruction',
    'service-user',
    'service-user-number',
    'auddis',
    'addacs',
    'arudd',
    'chaps',
    'faster-payments',
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
    'CASS 7 is the section of the FCA Client Assets Sourcebook that contains rules relating to the holding, protection and control of client money.',
  seoTitle: 'What is CASS 7?',
  seoDescription:
    'Learn what CASS 7 is and how the FCA Client Assets Sourcebook governs the holding and protection of client money.',
  relatedTerms: [
    'financial-conduct-authority',
    'safeguarded-account',
    'segregation',
  ],
},

{
  id: 'single-euro-payments-area',
  term: 'Single Euro Payments Area',
  acronym: 'SEPA',
  aliases: [
    'sepa',
    'sepa zone',
    'sepa area',
  ],
  regions: ['uk', 'eu'],
  category: 'payments',
  definition:
    'The Single Euro Payments Area (SEPA) is a Europe-wide payment framework that enables euro payments across participating countries using common payment standards and schemes. SEPA includes 41 participating countries, including all EU member states and the United Kingdom.',

  seoTitle:
    'What is the Single Euro Payments Area (SEPA)?',

  seoDescription:
    'Learn what SEPA is, which countries participate and how it enables euro payments using common payment standards and schemes.',

  relatedTerms: [
    'sepa-credit-transfer',
    'sepa-instant-credit-transfer',
    'international-bank-account-number',
    'business-identifier-code',
  ],

  editorialReview: true,
},

];

export default glossaryTerms;

