
class PaginaInicial {

  acessar() {
    cy.visit("/");
  }

  validarLogo() {
    cy.get("img").should("be.visible");
  }

  validarMenu() {
    cy.get("nav").should("be.visible");
  }

  clicarSolucoes() {
    cy.contains("Soluções")
      .should("be.visible")
      .click({ force: true })
  }

}

export default new PaginaInicial();
