import 'cypress-axe'

describe('Web Accessibility Tests', () => {

  it('should load the demo page', () => {
    cy.visit('http://127.0.0.1:4173')
    cy.get('body').should('be.visible')
  })

  it('should check basic accessibility', () => {
    cy.visit('http://127.0.0.1:4173')

    cy.injectAxe()

    cy.checkA11y(null, {
      includedImpacts: ['critical', 'serious', 'moderate', 'minor']
    }, (violations) => {
      cy.log(`Found ${violations.length} accessibility violations`)

      violations.forEach((violation) => {
        cy.log(
          `${violation.id}: ${violation.help}`
        )
      })
    }, true)
  })
})
