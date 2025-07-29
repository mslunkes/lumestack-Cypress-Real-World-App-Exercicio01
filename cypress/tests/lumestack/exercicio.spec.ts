
describe("cypress-realworld-app", () => {
    
    it('Create new Login', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-test="signup"]').click()
        cy.get('#firstName').type( 'Admin1')
        cy.get('#lastName').type( 'LastAdmin123')
        cy.get('#username').type('admin1')
        cy.get('#password').type('admin123')
        cy.get('#confirmPassword').type('admin123')
        cy.get('[data-test="signup-submit"]').click()
    })

    it('Create new account', () => {
        cy.visit('http://localhost:3000')
        cy.get('#username').type('admin1')
        cy.get('#password').type('admin123')
        cy.get('[data-test="signin-submit"]').click()
        // cy.get('.MuiButton-colorPrimary').click()
        // cy.get('#bankaccount-bankName-input').type('Nubank')
        // cy.get('#bankaccount-routingNumber-input').type(123456789)
        // cy.get('#bankaccount-accountNumber-input').type(102030405060)
        // cy.get('.BankAccountForm-submit').click()
        // cy.get('.MuiButton-textPrimary').contains('Done').click()
        cy.get('.MuiButton-colorInherit').click()

    })
    it('Pay money', () => {
        cy.visit('http://localhost:3000')
        cy.get('#username').type('admin1')
        cy.get('#password').type('admin123')
        cy.get('[data-test="signin-submit"]').click()
        cy.get('a.MuiButton-colorInherit').click()
        cy.get("[data-test='user-list-item-_XblMqbuoP']").click()
        cy.get('#amount').type("150")
        cy.get('#transaction-create-description-input').type('Milkshake')
        cy.get("[data-test='transaction-create-submit-payment']").click()
        cy.get('[data-test="alert-bar-success"]').contains('Transaction Submitted!')
    })
        it('Request money', () => {
        cy.visit('http://localhost:3000')
        cy.get('#username').type('admin1')
        cy.get('#password').type('admin123')
        cy.get('[data-test="signin-submit"]').click()
        cy.get('a.MuiButton-colorInherit').click()
        cy.get("[data-test='user-list-item-_XblMqbuoP']").click()
        cy.get('#amount').type("100")
        cy.get('#transaction-create-description-input').type('Car rent')
        cy.get("[data-test='transaction-create-submit-request']").click()
        cy.get('[data-test="alert-bar-success"]').contains('Transaction Submitted!')
    })



})