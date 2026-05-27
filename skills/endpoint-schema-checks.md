# Endpoint Schema Build Checks

## Why this exists

Some endpoint docs renderers in this repo assume response examples can be generated from `content["application/json"].schema`.

If an endpoint only defines `application/problem+json` for error responses, the build can fail when code blocks are auto-generated.

## Known gotcha

- `requestBody` schema references (`$ref`) are resolved during endpoint aggregation, so they are usually not the issue.
- Missing `application/json` under response `content` is a common break point for generated code blocks.

## Checklist for new endpoint schemas

1. Keep `requestBody.content.application/json.schema` present for request payloads.
2. For error responses (for example `400`, `409`), include `content.application/json.schema`.
3. If you also want standards-based media types, you can include both:
   - `application/json`
   - `application/problem+json`
4. Run a local build after adding a schema and verify the endpoint page renders response code blocks.

## Example pattern for error responses

```json
"400": {
  "description": "Bad Request",
  "content": {
    "application/json": {
      "schema": {
        "$ref": "#/components/schemas/HttpValidationProblemDetails"
      }
    },
    "application/problem+json": {
      "schema": {
        "$ref": "#/components/schemas/HttpValidationProblemDetails"
      }
    }
  }
}
```
