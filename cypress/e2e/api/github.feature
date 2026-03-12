
# language: pt
Funcionalidade: Testes da API do GitHub

Cenário: Fluxo de criação e exclusão de repositório
  Dado que possuo autenticação na API do GitHub
  Quando eu criar um repositório
  Então o repositório deve ser criado com sucesso
