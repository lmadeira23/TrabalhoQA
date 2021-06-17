
Feature: Busca no Banco de Questões

    Background: Acessar Pagina
        Given que navego para a pagina de busca do banco de questoes
        And digito "Science: Computers" no campo de busca

    Scenario: Busca por questão inexistente
        When clico no botão de buscar
        Then visualizo uma mensagem de erro com o texto "No questions found."


    Scenario: Busca por questão com categoria existente
        When clico em "Category"
        And clico no botão de buscar
        Then a listagem deve conter "25" itens
        And o controle de paginacao deve aparecer