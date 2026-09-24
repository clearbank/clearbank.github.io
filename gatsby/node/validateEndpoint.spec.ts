/**
 * @jest-environment node
 */
import fs from 'fs'
import path from 'path'
import SwaggerParser from 'swagger-parser'

import { findEndpointIssues } from './validateEndpoint'

const endpointsDir = path.resolve(__dirname, '../../data/endpoints')
const files = fs.readdirSync(endpointsDir).filter(file => file.endsWith('.json'))

describe('data/endpoints contract', () => {
  test.each(files)('%s dereferences and is renderable by endpoint-block', async file => {
    const spec = await SwaggerParser.dereference(require(path.join(endpointsDir, file)))

    expect(findEndpointIssues(file, spec)).toEqual([])
  })
})

describe('findEndpointIssues', () => {
  const baseSpec = (responses: object, requestBody?: object) => ({
    info: { version: '1.0test' },
    paths: { '/thing': { post: { requestBody, responses } } }
  })

  test('passes when request and responses use application/json', () => {
    const json = { content: { 'application/json': { schema: { type: 'object' } } } }

    expect(findEndpointIssues('ok.json', baseSpec({ 200: json, 503: { description: 'No body' } }, json))).toEqual([])
  })

  test('flags a response whose content lacks application/json', () => {
    const spec = baseSpec({
      500: { content: { 'application/problem+json': { schema: { type: 'object' } } } }
    })

    expect(findEndpointIssues('bad.json', spec)).toEqual([
      'bad.json: paths["/thing"].post.responses["500"].content must include "application/json" with a "schema" (found [application/problem+json])'
    ])
  })

  test('flags a requestBody without an application/json schema', () => {
    const spec = baseSpec({}, { content: { 'text/plain': {} } })

    expect(findEndpointIssues('bad.json', spec)).toEqual([
      'bad.json: paths["/thing"].post.requestBody.content must include "application/json" with a "schema" (found [text/plain])'
    ])
  })

  test('flags a missing info.version', () => {
    expect(findEndpointIssues('bad.json', { paths: {} })).toEqual([
      'bad.json: missing "info.version" (used as the key MDX pages reference the spec by)'
    ])
  })
})
