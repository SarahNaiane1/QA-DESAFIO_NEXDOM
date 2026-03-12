
class SolucoesPage {

  validarPagina() {
  cy.contains("Soluções").should("be.visible")
  }

}

export default new SolucoesPage();
