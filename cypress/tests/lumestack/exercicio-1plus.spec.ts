describe("cypress-realworld-app", () => {

    it.only('Create new account', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-test="signup"]').click()
        cy.get('#firstName').type( 'Admin1')
        cy.get('#lastName').type( 'LastAdmin123')
        cy.get('#username').type('admin1')
        cy.get('#password').type('admin123')
        cy.get('#confirmPassword').type('admin123')
        cy.get('[data-test="signup-submit"]').click()
        
        cy.visit('http://localhost:3000')
        cy.get('#username').type('admin1')
        cy.get('#password').type('admin123')
        cy.get('[data-test="signin-submit"]').click()
        cy.get('.MuiButton-colorPrimary').click()
        cy.get('#bankaccount-bankName-input').type('Nubank')
        cy.get('#bankaccount-routingNumber-input').type('123456789')
        cy.get('#bankaccount-accountNumber-input').type('102030405060')
        cy.get('.BankAccountForm-submit').click()
        cy.get('.MuiButton-textPrimary').contains('Done').click()
    })
})