---
name: webhook-table-from-json-schema
description: Build webhook payload and nested object markdown tables from JSON Schema using the SEPA DD Collection Pending v1 and Completed v1 examples as the only precedent.
---

# Webhook Table From JSON Schema

## Scope

Use this skill to generate or update webhook documentation tables in MDX files.

Precedent is restricted to:
- `webhooks/sepa-dd-debit-payment-collection-pending-v1.mdx`
- `webhooks/sepa-dd-debit-payment-completed-v1.mdx`

Do not infer formatting rules from other webhook files.

## Inputs

1. Webhook metadata already present in the target MDX file (`title`, `version`, request body skeleton).
2. A JSON Schema for `Payload` and all nested objects.

## Output

1. A `#### Payload Fields` table.
2. A `##### <ObjectName>` sub-table for each nested object used by payload fields.
3. An example request body JSON block that matches the schema.
4. An example webhook response JSON block containing `Nonce`.

## Non-negotiable Formatting Rules

1. Keep heading levels exactly as:
- `#### Payload Fields`
- `##### <ObjectName>` for nested definitions

2. Use backticks for field names and inline enum literals.

3. Use `Yes` / `No` in `Required` columns.

4. Use `-` for unknown or non-applicable table cells.

5. Keep object references in descriptions as:
- `See the '<ObjectTableTitle>' table.`

6. Keep date format text as `YYYY-MM-DD` when schema format is `date`.

7. Keep table alignment row style with spaces and separators consistent with the examples.

## Table Shapes

### A) Payload Fields table (default shape)

Use this column order when documenting top-level payload fields:

| Field | Type | Format | Required | Min-Max length | Pattern | Description |

Rules:
- Include `Pattern` column for consistency with the new precedent.
- If no regex or enum-pattern guidance exists, set `Pattern` to `-`.
- For `type: object`, set `Format`, `Min-Max length`, and `Pattern` to `-`, then reference the object sub-table in `Description`.

### B) Nested object table (string-focused shape)

Use when object properties are mostly string/object identifiers:

| Field | Type | Required | Min-Max length | Pattern | Description |

### C) Nested object table (amount/constraint shape)

Use when schema expresses numeric validation for amounts:

| Field | Type | Required | Min-Max number | Pattern | Description |

Rules:
- Map JSON Schema `minimum`/`maximum` (and exclusive variants) into concise `Min-Max number` values using `min-max` format.
- Keep currency restrictions explicit (for example, `Must be \`EUR\``).

## JSON Schema to Markdown Mapping

For each property in schema order:

1. `Field`
- Use property name wrapped in backticks.

2. `Type`
- Use JSON Schema `type` directly (`string`, `number`, `integer`, `boolean`, `object`, `array`).
- If schema uses `number` for decimal values, render `decimal` where examples use financial amounts.

3. `Format`
- Use JSON Schema `format` when present (`uuid`, `date`, etc.), else `-`.

4. `Required`
- `Yes` if property name appears in parent `required` array.
- Otherwise `No`.

5. `Min-Max length`
- Map from `minLength` / `maxLength` for string fields as `min-max` (for example, `0-120`).
- Otherwise `-`.

6. `Min-Max value`
- Map from `minimum` / `maximum` (including exclusive variants) for numeric fields as `min-max`.
- Otherwise `-`.

7. `Pattern`
- Map from `pattern` exactly as regex in backticks.
- If `enum` exists and no regex pattern is provided, render enum values as backticked comma-separated literals in the `Pattern` cell.
- If neither exists, use `-`.

8. `Description`
- Start from schema `description`.
- For object fields, append `See the '<ObjectTableTitle>' table.`
- Keep wording concise and implementation-neutral.

## Nested Object Definition Rules

1. Create one sub-table per distinct object schema used by payload.

2. Reused object schema pattern:
- If one object schema is used by multiple payload fields, title with aliases in parentheses.
- Example style: `##### Party (Debtor and Creditor)`.

3. Optional-but-present behavior:
- If business behavior says a field is always serialized but may be empty, mark as `Yes*` and add footnote text immediately below table.

4. Footnotes:
- Use a single line footnote format like:
- `*- Always present in the payload, but value may be an empty string.`

## Example Block Rules

1. Request body example must include:
- `Type`
- `Version`
- `Payload` with representative valid values
- `Nonce`

2. Response example must include only:
- `Nonce`

3. Keep example value styles aligned with the two precedent files:
- UUID-like IDs for identifiers
- ISO date for `date`
- Realistic IBAN/BIC-like strings where applicable
- Numeric amount (not quoted) for decimals

## Quality Checklist

1. Every payload object field has a matching `#####` sub-table.
2. Required flags match schema `required` arrays.
3. Min-Max length/number ranges and regex constraints are transferred accurately.
4. Enum values are documented in `Pattern` column when no regex is provided.
5. All `See the '<ObjectTableTitle>' table.` references point to an existing sub-table section.
6. Request and response examples are syntactically valid JSON.