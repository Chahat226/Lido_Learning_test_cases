
describe('Login Tests', function () {
    it('Successfull login', function () {
        cy.visit('https://www.prepbytes.com/auth/forgotPassword')
        let email='chahattekwani71@gmail.com'
        cy.get('#root').find('.forgot-component-input-field').type(email).should('have.value', email)
        cy.get('#root').find('.forgot-component-send-button').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
           
            return false
        })
        
    })
    
})

