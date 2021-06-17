import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"


Given("que navego para a pagina de busca do banco de questoes", () => {
    cy.visitarPaginaPrincipal()
});

When(/^digito "([^"]*)" no campo de busca$/, (value) => {
    cy.realizarBuscar(value)
});

When("clico no botão de buscar", () => {
    cy.clicarBotaoPesquisar()
});

When(/^clico em "([^"]*)"$/, (tipo) => {
    cy.selecionarTipoBusca(tipo)
});

Then(/^visualizo uma mensagem de erro com o texto "([^"]*)"$/, (message) => {
    cy.verificaMensagemNotFound(message)
});

Then(/^a listagem deve conter "([^"]*)" itens$/, (quantidade) => {
    cy.verificarQuantidadeItensTabela(quantidade)
});

Then(/^o controle de paginacao deve aparecer$/, () => {
    cy.verificarControlePaginacao()
});