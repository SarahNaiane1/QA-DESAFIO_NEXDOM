
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import githubService from "../../services/github.service"
let repo;

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
