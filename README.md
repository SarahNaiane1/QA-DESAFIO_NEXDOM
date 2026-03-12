
# Desafio Técnico QA - Nexdom

Projeto de automação de testes utilizando **Cypress + Cucumber (BDD)**.

## Tecnologias

- Cypress
- Cucumber (Gherkin)
- Page Object Model
- Testes de API com GitHub

## Instalação

Clone o projeto

git clone https://github.com/seuusuario/qa-desafio-nexdom

Entre na pasta

cd qa-desafio-nexdom

Instale dependências

npm install

## Configuração

Defina seu token do GitHub:

Linux / Mac

export CYPRESS_token=SEU_TOKEN

Windows

set CYPRESS_token=SEU_TOKEN

## Executar testes

Abrir interface:

npx cypress open

Executar em modo headless:

npx cypress run

## Cenários implementados

Frontend:
- Verificação da página inicial
- Navegação para página de soluções

API:
- Criação de repositório
- Consulta de repositório
- Criação de issue
- Exclusão de repositório
