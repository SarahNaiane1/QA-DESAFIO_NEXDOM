
class GithubService {

  criarRepositorio(dados) {
    return cy.request({
      method: "POST",
      url: "https://api.github.com/user/repos",
      headers: {
        Authorization: `Bearer ${Cypress.env("token")}`
      },
      body: dados
    });
  }

}

export default new GithubService();
