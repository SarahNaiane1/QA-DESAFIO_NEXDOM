# Desafio Técnico QA - Nexdom

Projeto de automação de testes utilizando **Cypress + Cucumber (BDD)**.

---

# Tecnologias

* Cypress
* Cucumber (Gherkin)
* Page Object Model
* Testes de API com GitHub

---

# Instalação

Clone o projeto:

```id="1qojvt"
git clone https://github.com/seuusuario/qa-desafio-nexdom
```

Entre na pasta do projeto:

```id="2o9a0p"
cd qa-desafio-nexdom
```

Instale as dependências:

```id="5v5i8m"
npm install
```

---

# Configuração

Para executar os testes da **API do GitHub**, é necessário configurar um **Personal Access Token**.

## 1. Criar um token no GitHub

Acesse:
https://github.com/settings/tokens

Gere um **Personal Access Token (Classic)** com as permissões:

* `repo`
* `delete_repo`

---

## 2. Criar arquivo de configuração do token

Na **raiz do projeto**, crie o arquivo:

```id="0u8rln"
cypress.env.json
```

Adicione o seguinte conteúdo:

```json id="3iwk4a"
{
  "token": "SEU_PERSONAL_ACCESS_TOKEN"
}
```

Substitua `SEU_PERSONAL_ACCESS_TOKEN` pelo token gerado no GitHub.

**Importante:**
Esse arquivo **não deve ser enviado para o repositório**, pois contém credenciais.

---

# Executar testes

Abrir interface do Cypress:

```id="ruanp0"
npx cypress open
```

Executar em modo headless:

```id="4qtrrt"
npx cypress run
```

---

# Cenários implementados

## Frontend

* Verificação da página inicial
* Navegação para página de soluções

## API

* Criação de repositório
* Consulta de repositório
* Criação de issue
* Exclusão de repositório
