# Reference content authoring guide

The Developer Portal contains two reference libraries:

| Library | Purpose | Source file |
|----------|----------|----------|
| Glossary | Banking, payments, regulatory and ClearBank concepts | `src/data/glossary.js` |
| Technical Reference | API fields, identifiers, webhooks, message standards and technical concepts | `src/data/technical-reference.js` |

---

# Which library should I use?

### Add it to the Glossary if the question is:

> What is this banking, payments, regulatory or ClearBank concept?

Examples:

- Faster Payments
- Bacs
- CHAPS
- Beneficiary
- KYC
- CASS 7
- Operating Account

### Add it to the Technical Reference if the question is:

> What does this field, identifier, webhook field or technical concept mean?

Examples:

- PaymentId
- AccountId
- EndToEndId
- UETR
- X-Request-Id
- Nonce
- ISO 20022
- pacs.008

### Add it to a documentation page if the question is:

> How do I do something?

Examples:

- How do I send a payment?
- How do I verify webhook signatures?
- How do I create a CSR?
- How do I process a pacs.008 message?

---

# Creating a new Glossary entry

Template:

```js
{
  id: '',
  term: '',
  acronym: '',
  aliases: [],
  category: '',
  regions: ['uk'],
  definition: '',
  seoTitle: '',
  seoDescription: '',
  relatedTerms: [],
}
```

Example:

```js
{
  id: 'beneficiary',
  term: 'Beneficiary',
  acronym: '',
  aliases: [
    'payee',
    'recipient',
  ],
  category: 'payments',
  regions: ['uk', 'eu'],
  definition:
    'A beneficiary is the intended recipient of funds in a payment transaction.',
  seoTitle:
    'What is a beneficiary?',
  seoDescription:
    'Learn what a beneficiary is in banking and payments.',
  relatedTerms: [
    'creditor',
    'debtor',
  ],
}
```

---

# Creating a new Technical Reference entry

Template:

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

  externalLinks: [],

  seoTitle: '',

  seoDescription: '',

  relatedTerms: [],

  editorialReview: false,
}
```

Example:

```js
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
    'A PaymentId identifies a payment.',

  usedIn: [
    'Payment API operations',
    'Payment responses',
    'Payment webhooks',
    'Support investigations',
  ],

  notes: [
    'Do not substitute a TransactionId, scheme identifier or user-supplied payment reference.',
  ],

  externalLinks: [],

  seoTitle:
    'What is a PaymentId?',

  seoDescription:
    'Learn what a PaymentId identifies and where it is used.',

  relatedTerms: [
    'transaction-id',
    'original-transaction-id',
    'end-to-end-identifier',
  ],

  editorialReview: false,
}
```

---

## Authoring guidance

When writing a Technical Reference entry:

- Use **plain English**.
- Keep the **definition** focused on what the term is.
- Use **notes** for caveats, comparisons and important distinctions.
- Put the exact API field name in **acronym**.
- Add common search terms and alternate spellings to **aliases**.
- Add only IDs that already exist to **relatedTerms**.
- Use **externalLinks** only for authoritative sources.
- Set **editorialReview: true** if the definition requires SME approval.

Do not:

- Add HTML, JSX or Markdown to data files.
- Add implementation guidance that belongs in product documentation.
- Make assumptions about uniqueness, scope, lifecycle or expiry unless explicitly documented.

---

# Before submitting

- [ ] Entry appears under the correct letter
- [ ] Search finds the term
- [ ] Search finds the aliases
- [ ] Related terms are valid
- [ ] No duplicate IDs
- [ ] UK/EU regions are correct
- [ ] Page builds successfully