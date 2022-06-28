/// <reference types="Cypress" />


context("Sidebar", () => {
  beforeEach(() => {
    cy.visit("/docs/introduction")
  })

  describe("Contents and correct ordering", () => {
    it("contains introduction section", () => {
      cy.get('#navigation').contains('Introduction')
      cy.get('#navigation ul > li:nth-child(1) ul')
        .children()
        .should('contain', 'Overview')
        .and('contain', 'What you need to get started')
        .and('contain', 'Creating your authentication profile')
        .and('contain', 'Creating your Digital Signature')
    })

    it("contains versioning section", () => {
      cy.get('#navigation').contains('Versioning')
    })

    it("contains getting started section", () => {
      cy.get('#navigation').contains('Getting started')
      cy.get('#navigation ul li:nth-child(3)')
        .children()
        .should('contain', 'Overview')
        .and('contain', 'Common parameters')
        .and('contain', 'Authenticate your API calls')
        .and('contain', 'Test Endpoints')
    })

    it("contains api requests section", () => {
      cy.get('#navigation').contains('API Requests')
      cy.get('#navigation ul li:nth-child(4)')
        .children()
        .should('contain', 'Overview')
        .and('contain', 'Query Parameters')
        .and('contain', 'HTTP Status Codes')
        .and('contain', 'HAL Links')
    })

    it("contains accounts section", () => {
      cy.get('#navigation').contains('Accounts')
      cy.get('#navigation ul li:nth-child(5)')
        .children()
        .should('contain', 'Real Accounts')
        .and('contain', 'Virtual Accounts')
    })

    it("contains multicurrency accounts section", () => {
      cy.get('#navigation').contains('Multicurrency Accounts')
      cy.get('#navigation ul li:nth-child(6)')
        .children()
        .should('contain', 'Real Accounts')
    })

    it("contains multicurrency transactions section", () => {
      cy.get('#navigation').contains('Multicurrency Statements')
      cy.get('#navigation ul li:nth-child(7)')
        .children()
        .should('contain', 'Overview')
    })

    it("contains multicurrency statements section", () => {
      cy.get('#navigation').contains('Multicurrency Statements')
      cy.get('#navigation ul li:nth-child(8)')
        .children()
        .should('contain', 'Overview')
    })

    it("contains FSCS section", () => {
      cy.get('#navigation').contains('FSCS-protected Deposits')
      cy.get('#navigation ul li:nth-child(9)')
        .children()
        .should('contain', 'Overview')
    })

    it("contains confirmation of payee", () => {
      cy.get('#navigation').contains('Confirmation of Payee (CoP')
      cy.get('#navigation ul li:nth-child(10)')
        .children()
        .should('contain', 'Overview')
        .and('contain', 'CoP Receive and Respond (Inbound)')
    })

    it("contains payments section", () => {
      cy.get('#navigation').contains('Payments')
      cy.get('#navigation ul li:nth-child(11)')
        .children()
        .should('contain', 'Faster Payments')
        .and('contain', 'CHAPS')
        .and('contain', 'Bacs Inbound Direct Credit')
    })

    it("contains Bacs section", () => {
      cy.get('#navigation').contains('Bacs Direct Debits')
      cy.get('#navigation ul li:nth-child(12)')
        .children()
        .should('contain', 'Managing Direct Debit Instructions')
        .and('contain', 'Returning Payments')
    })

    it("contains payment information section", () => {
      cy.get('#navigation').contains('Payment Information')
      cy.get('#navigation ul li:nth-child(13)')
        .children()
        .should('contain', 'Payment Data')
        .and('contain', 'Direct Debit Payment Data')
    })

    it("contains International Payments section", () => {
      cy.get('#navigation').contains('International Payments')
      cy.get('#navigation ul li:nth-child(14)')
        .children()
        .should('contain', 'High Value International Payments')
        .and('contain', 'Internal Transfers')
    })

    it("contains FX Trade section", () => {
      cy.get('#navigation').contains('FX Trade')
      cy.get('#navigation ul li:nth-child(15)')
        .children()
        .should('contain', 'Overview')
    })

    it("contains webhooks section", () => {
      cy.get('#navigation').contains('Webhooks')
      cy.get('#navigation ul li:nth-child(16)')
        .children()
        .should('contain', 'Overview')
        .and('contain', 'Responding to a webhook')
        .and('contain', 'Setting up and testing webhook listener URLs')
        .and('contain', 'Accounts')
        .and('contain', 'Multicurrency Accounts')
        .and('contain', 'Multicurrency Statements')
        .and('contain', 'High Value International Payments')
        .and('contain', 'Virtual Accounts')
        .and('contain', 'FX Trade')
        .and('contain', 'Payments')
    })

    it("contains Frequently Asked Questions section", () => {
      cy.get('#navigation').contains('Frequently Asked Questions')
      cy.get('#navigation ul li:nth-child(17)')
        .children()
        .should('contain', 'Overview')
        .and('contain', 'Multicurrency Accounts')
        .and('contain', 'Multicurrency Payments')
        .and('contain', 'Multicurrency Statements')
    })
  })
})

