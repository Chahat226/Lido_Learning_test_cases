// The first thing I would do is to remove the hard-coded password value from the test files. Right now we have the password in each spec file source code as a string cy.type('secret'), and instead I will pass it as an environment variable.

describe('Login Tests', function () {

    it('logs in using env variables', () => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
      
        // it is ok for the username to be visible in the Command Log
        expect(username, 'username was set').to.be.a('string').and.not.be.empty
        // but the password value should not be shown
        if (typeof password !== 'string' || !password) {
          throw new Error('Missing password value, set using CYPRESS_password=...')
        }
      
        cy.visit('/login')
        cy.get('[name=username]')
          .type(username)
          .should('have.value', username)
        cy.get('[name=password]')
          .type(password, { log: false })
          .should(el$ => {
            if (el$.val() !== password) {
              throw new Error('Different value of typed password')
            }
          })
        cy.get('[type=Submit]').click()
      
        cy.contains('a', 'profile')
          .should('be.visible')
          .click()
        cy.url().should('match', /profile$/)
        cy.contains('Email: jack@example.com')
      })
})