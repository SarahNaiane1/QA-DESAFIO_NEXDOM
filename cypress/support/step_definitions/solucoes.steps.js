
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import paginaInicial from "../../pages/paginaInicial.page"
import solucoesPage from "../../pages/solucoes.page"

Given("que o usuário está na página inicial", () => {
  paginaInicial.acessar();
});

When("ele clicar no menu soluções", () => {
  paginaInicial.clicarSolucoes();
});

Then("ele deve ser redirecionado para a página de soluções", () => {
  solucoesPage.validarPagina();
});
