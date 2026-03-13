
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
  consultarRepositorio(owner, repo) {
    return cy.request({
      method: "GET",
      url: `https://api.github.com/repos/${owner}/${repo}`,
      headers: {
        Authorization: `Bearer ${Cypress.env("token")}`
      }
    })
  }

  criarIssue(owner, repo, issue) {
    return cy.request({
      method: "POST",
      url: `https://api.github.com/repos/${owner}/${repo}/issues`,
      headers: {
        Authorization: `Bearer ${Cypress.env("token")}`
      },
      body: issue
    })
  }

  deletarRepositorio(owner, repo) {
    return cy.request({
      method: "DELETE",
      url: `https://api.github.com/repos/${owner}/${repo}`,
      headers: {
        Authorization: `Bearer ${Cypress.env("token")}`
      }
    })
  }

}



export default new GithubService();
