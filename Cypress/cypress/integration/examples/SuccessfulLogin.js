describe('Login Tests', function () {
    it('Successfull login', function () {
        cy.visit('https://www.prepbytes.com/login?redirect_uri=%2F')
        let email='chahattekwani71@gmail.com'
        cy.get('#root').find('input[name="email_input"]').type(email).should('have.value', email)
        cy.get('#root').find('input[name="password_input"]').type('Csst0226!')
        
        cy.get('#root').find('.SignIn__container--right-form--container-middle-form--button').click()
        Cypress.on('uncaught:exception', (err, runnable) => {
           
            return false
        })
    })
    
})