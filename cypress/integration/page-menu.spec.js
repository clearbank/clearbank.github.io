/// <reference types="Cypress" />

context("Page menu", () => {
  beforeEach(() => {
    cy.visit("/docs/payments")
  })

  describe("Contents and correct ordering", () => {
    it("menu has correct header", () => {
      cy.get('#pageMenu').contains('On this page')
    })

    it("contains FPS heading", () => {
      cy.get('#pageMenu').contains('Faster Payments')
    })

    it("contains initiate payment subheading", () => {
      cy.get('#pageMenu > ul > li:nth-child(1) ul  > li:nth-child(1)')
      .invoke('text').then((text) => {
            expect(text.replace(/\u00a0/g, ' ')).equal('Initiate an FPS payment');
        });
    })
  })

  it("contains bacs heading", () => {
      cy.get('#pageMenu').contains('Bacs Inbound Direct Credit')
    })
  })
})
