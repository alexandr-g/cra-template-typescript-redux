/* eslint-disable no-undef */
describe('counter', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should increment the counter', () => {
    cy.get('h4').contains('0')
    cy.get("[data-qa='increment-counter']").click()
    cy.get('h4').contains('1')
  })

  it('should decrement the counter', () => {
    cy.get('h4').contains('0')
    cy.get("[data-qa='decrement-counter']").click()
    cy.get('h4').contains('-1')
  })
})
