# language: pt
Funcionalidade: Testes da API do GitHub

  Cenário: Criação de repositório
    Dado que possuo autenticação na API do GitHub
    Quando eu criar um repositório
    Então o repositório deve ser criado com sucesso

  Cenário: Consulta de repositório
    Dado que existe um repositório criado
    Quando eu consultar o repositório
    Então devo receber os dados do repositório

  Cenário: Criação de issue
    Dado que existe um repositório criado
    Quando eu criar uma issue no repositório
    Então a issue deve ser criada com sucesso

  Cenário: Exclusão de repositório
    Dado que existe um repositório criado
    Quando eu excluir o repositório
    Então o repositório deve ser removido com sucesso