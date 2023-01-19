describe('go to protected route', () => {
  Cypress.Cookies.debug(true)
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get('#button').click()
    cy.url().should('include', 'protected')
  })
})