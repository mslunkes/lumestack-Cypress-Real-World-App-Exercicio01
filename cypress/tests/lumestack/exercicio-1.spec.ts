//Caso de Teste: Login com sucesso.
//Descrição: Verifique se é possível fazer login com um usuário válido, inserindo as informações corretas. Caso de Teste: Tentar fazer login com credenciais inválidas.
//Descrição: Garanta que o sistema exiba uma mensagem de erro ao tentar fazer login com credenciais inválidas (email ou senha incorretos).

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

    it('Login unsuccessful', () => {
        cy.visit('http://localhost:3000')
        cy.get('#username').type('admin')
        cy.get('#password').type('admin123')
        cy.get('[data-test="signin-submit"]').click()
        cy.get('.MuiAlert-message').contains('Username or password is invalid')
    })

    it('Login successful', () => {
        cy.visit('http://localhost:3000')
        cy.get('#username').type('admin1')
        cy.get('#password').type('admin123')
        cy.get('[data-test="signin-submit"]').click()
        cy.get('[data-test="sidenav-home"]').contains('Home')
    })

    it('Create new Login incomplete', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-test="signup"]').click()
        cy.get('#firstName').type( 'Admin2')
        cy.get('#username').type('admin2')
        cy.get('#password').type('admin123')
        cy.get('#confirmPassword').type('admin123')
        cy.get('button').should('exist')
        cy.get('#lastName').should('have.value', '')
    })
})