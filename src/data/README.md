# Glossary authoring guide

The glossary provides definitions for banking, payments, ClearBank-specific concepts, regulatory terminology and technical concepts referenced throughout the Developer Portal.

The glossary is intended to:

- Help readers understand specialist terminology.
- Provide a consistent definition for terms used across product areas.
- Improve discoverability through search.
- Support linking directly to glossary entries.

---

# What belongs in the glossary

✅ Include:

- Payment schemes
  - Bacs
  - Faster Payments
  - CHAPS
  - SEPA Credit Transfer
  - SEPA Instant Credit Transfer

- Banking concepts
  - Beneficiary
  - IBAN
  - BIC
  - SWIFT

- Regulatory and compliance terminology
  - FCA
  - FSCS
  - KYC
  - KYB

- Direct Debit terminology
  - DDI
  - DDIC
  - SUN
  - AUDDIS
  - ADDACS
  - ARUDD

- Technical concepts
  - API
  - Webhook
  - 2FA

- ClearBank-specific concepts
  - Operating Account
  - Hub Account
  - Safeguarded Account

---

# What does not belong in the glossary

❌ Product walkthroughs

❌ API endpoint descriptions

❌ Error-code reference material

❌ Release notes

❌ Internal team terminology

❌ Generic terms that are already widely understood

---

# Entry structure

Every entry should follow this structure:

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