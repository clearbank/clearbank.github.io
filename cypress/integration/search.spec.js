/// <reference types="Cypress" />

const openSearchWithKeyboard = () => {
  cy.get('[data-cy="search-trigger"]').should("be.visible")

  const pressCtrlK = () => {
    cy.window().then((window) => {
      window.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "k",
          ctrlKey: true,
          bubbles: true,
        })
      )
    })
  }

  pressCtrlK()

  cy.get("body").then(($body) => {
    if ($body.find('[data-cy="search-overlay"]').length === 0) {
      cy.wait(500)
      pressCtrlK()
    }
  })

  cy.get('[data-cy="search-overlay"]').should("exist")
}

context("Search", () => {
  beforeEach(() => {
    cy.on("uncaught:exception", (error) => {
      if (error.message && error.message.includes("Script error")) {
        return false
      }
    })
  })

  it("opens with Ctrl+K and navigates to a UK result", () => {
    cy.visit("/uk")

    cy.get('[data-cy="search-overlay"]').should("not.exist")

    openSearchWithKeyboard()

    cy.get('[data-cy="search-input"]')
      .should("be.focused")
      .type("bacs")

    cy.get('[data-cy="search-result-item"]')
      .its("length")
      .should("be.gt", 0)

    cy.get('[data-cy="search-result-item"]').first().click()

    cy.location("pathname").should("include", "/uk/")
  })

  it("closes with Escape", () => {
    cy.visit("/uk")

    openSearchWithKeyboard()

    cy.get('[data-cy="search-input"]').type("{esc}")

    cy.get('[data-cy="search-overlay"]').should("not.exist")
  })

  it("keeps results scoped to the current EU region", () => {
    cy.visit("/eu")

    openSearchWithKeyboard()

    cy.get('[data-cy="search-input"]').type("sepa")

    cy.get('[data-cy="search-result-item"]')
      .its("length")
      .should("be.gt", 0)

    cy.get('[data-cy="search-result-item"]').first().click()

    cy.location("pathname").should("match", /^\/eu(\/|$)/)
  })
})