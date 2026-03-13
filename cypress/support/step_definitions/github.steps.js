import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import githubService from "../../services/github.service"

let repo;
let repoName;
const owner = "SarahNaiane1";

Given("que possuo autenticação na API do GitHub", () => {
  cy.fixture("repositorio").then((data) => {
    repo = data;
  });
});

When("eu criar um repositório", () => {

  repo.name = `repo-teste-${Date.now()}`

  githubService.criarRepositorio(repo)
    .its("status")
    .should("eq", 201)

});

Then("o repositório deve ser criado com sucesso", () => {
  cy.log("Repositório criado com sucesso");
});

Given("que existe um repositório criado", () => {

  repoName = `repo-teste-${Date.now()}`

  githubService.criarRepositorio({
    name: repoName,
    private: false
  }).its("status").should("eq", 201)

})

When("eu consultar o repositório", () => {

  githubService.consultarRepositorio(owner, repoName)
    .its("status")
    .should("eq", 200)

})

Then("devo receber os dados do repositório", () => {

  cy.log("Consulta realizada")

})

When("eu criar uma issue no repositório", () => {

  githubService.criarIssue(owner, repoName, {
    title: "Issue de teste",
    body: "Criada automaticamente pelo Cypress"
  })
  .its("status")
  .should("eq", 201)

})

Then("a issue deve ser criada com sucesso", () => {

  cy.log("Issue criada")

})

When("eu excluir o repositório", () => {

  githubService.deletarRepositorio(owner, repoName)
    .its("status")
    .should("eq", 204)

})

Then("o repositório deve ser removido com sucesso", () => {

  cy.log("Repositório deletado")

})