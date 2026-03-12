
import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";
import paginaInicial from "../../pages/paginaInicial.page"

Given("que o usuário acessa a página inicial", () => {
  paginaInicial.acessar();
});

Then("o logotipo deve estar visível", () => {
  paginaInicial.validarLogo();
});

Then("o menu principal deve estar visível", () => {
  paginaInicial.validarMenu();
});
