import { elements } from './elements'

Cypress.Commands.add('visitarPaginaPrincipal', () => {
    cy.visit('/')
})

Cypress.Commands.add('realizarBuscar', (valor) => {
    cy.get(elements.buttonAccessSearch).should('be.visible').click()
    cy.get(elements.txtSearch).should('be.visible').type(valor)
})

Cypress.Commands.add('clicarBotaoPesquisar', () => {
    cy.get(elements.buttonSearch).should('be.visible').click()
})

Cypress.Commands.add('verificaMensagemNotFound', (message) => {
    cy.get(elements.alertDanger).should('be.visible').and('have.text', message)
})

Cypress.Commands.add('selecionarTipoBusca', (tipo) => {
    cy.get(elements.selectTipo).should('be.visible').select(tipo)
})

Cypress.Commands.add('verificarQuantidadeItensTabela', (quantidade) => {
    cy.get(elements.tabelaListagem).should('be.visible').and('have.length', quantidade)
})

Cypress.Commands.add('verificarControlePaginacao', () => {
    cy.get(elements.componentePaginacao).should('be.visible')
})