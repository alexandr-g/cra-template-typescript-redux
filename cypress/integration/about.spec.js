/* eslint-disable no-undef */
describe('About page', () => {
  beforeEach(() => {
    cy.visit('/about')
  })

  it('should navigate to the page and go back via "Go back" button', () => {
    cy.get('h1').contains('About')
    cy.get('[cy-data="go-back-button"]').click()
    cy.get('h1').contains('Redux + TypeScript')
  })

  it('should navigate to the about page and back via header link', () => {
    cy.get('h1').contains('About')
    cy.get('[cy-data="home-nav-link"] > .active').click()
    cy.get('h1').contains('Redux + TypeScript')
  })
})
