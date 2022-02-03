/// <reference types="Cypress" />


context("Page menu", () => {
  beforeEach(() => {
    cy.visit("/docs/accounts")
  })

  describe("Contents and correct ordering", () => {

    it("Page has correct title", () => {
      cy.get('#pageTitle').should('have.text', 'Accounts')
    })

    it("Page has correct headings", () => {
      cy.get('[data-id="real-accounts"]').should('have.text', 'Real Accounts')
      cy.get('[data-id="virtual-accounts"]').should('have.text', 'Virtual Accounts')
    })

    describe("Endpoint block rendering", () => {
      it("Page has correct title", () => {
        cy.get('#get-all-accounts ').should('have.text', 'Get all accounts')
      })
    })
})
