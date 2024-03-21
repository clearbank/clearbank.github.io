import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Component from './endpoint-block-content'

import * as Types from './endpoint-block-content.types'

let component: ReturnType<typeof render> = null
let fragment: DocumentFragment = null
let root: HTMLElement = null

const allProperties: any = {
  "status": {
    "description": "The status of the account.",
    "enum": ["NotProvided", "Enabled", "Closed", "Suspended"],
    "type": "string"
  },
  "statusReason": {
    "description": "The account status reason",
    "enum": ["NotProvided", "AccountHolderBankrupt", "AccountHolderDeceased", "AccountSwitched", "CompanyNoLongerTrading", "DissatisfiedCustomer", "DuplicateSoleTraderAccount", "FinancialCrime", "FraudFirstParty", "FraudThirdParty", "Other"],
    "type": "string"
  },
  "sourceAccount": {
    "oneOf": [
      {
        "type": "string"
      },
      {
        "type": "object",
        "required": ["iban"],
        "properties": {
          "iban": {
            "type": "string",
            "minLength": 1,
            "pattern": "[A-Z]{2,2}[0-9]{2,2}[a-zA-Z0-9]{1,30}",
          }
        },
        "additionalProperties": false
      },
      {
        "type": "object",
        "required": ["schemeName", "identification"],
        "properties": {
          "schemeName": {
            "type": "string",
            "enum": ["BBan", "Other"],
            "example": "Other"
          },
          "proprietary": {
            "type": "string",
            "enum": ["SortcodeAccountNumber"],
          },
          "identification": {
            "type": "string",
            "minLength": 1,
            "example": "01020301234567"
          }
        },
        "additionalProperties": false
      }
    ]
  }
}

const defaultProps: Types.EndpointBlockContentProps = {
  allProperties,
  requiredPropertyKeys: ['status']
}

beforeEach(() => {
  component = render(<Component {...defaultProps} children='children' />)

  fragment = component.asFragment()
  root = component.container.firstChild
})

afterEach(() => {
  fragment = null
  root = null
})

describe('Component', () => {
  test('matches snapshot with enum array and status as a required field', () => {
    expect(root).toMatchSnapshot()
  })
})
