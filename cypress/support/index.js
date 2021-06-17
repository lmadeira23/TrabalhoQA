import './commands'

Cypress.on('uncaught:exception', () => { return false })

Cypress.Server.defaults({
    ignore: (xhr) => { return true; }
})

afterEach(() => cy.screenshot())