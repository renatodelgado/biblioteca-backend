# Biblioteca Backend

Backend desenvolvido para as disciplinas **Coding Mobile**
(Prof. Geraldo Júnior) e **Arquitetura e Desenvolvimento de Backend**
(Prof. Danilo Farias).

Este projeto implementa uma API REST para gerenciamento de livros
utilizando **Node.js**, **TypeScript**, **Express** e **TypeORM**, com
**PostgreSQL** hospedado no **Supabase**.

------------------------------------------------------------------------

## Tecnologias Utilizadas

-   **Linguagem:** TypeScript\
-   **Runtime:** Node.js\
-   **Servidor:** Express\
-   **ORM:** TypeORM\
-   **Banco de Dados:** PostgreSQL (Supabase)\
-   **Principais dependências:**
    -   `express`\
    -   `typeorm`\
    -   `pg`\
    -   `reflect-metadata`\
    -   `cors`\
-   **Ferramentas de desenvolvimento:**
    -   `tsx` (modo watch)\
    -   `typescript`\
    -   `ts-node-dev`

------------------------------------------------------------------------

## Estrutura do Projeto

    src/
    ├── controllers/      # Lógica dos endpoints (livro.controller.ts)
    ├── data-source.ts    # Configuração TypeORM + conexão
    ├── entities/         # Entidades do banco (Livro.ts)
    ├── repositories/     # Repositórios personalizados
    ├── routes/           # Rotas da API
    └── server.ts         # Ponto de entrada do servidor

Toda a aplicação está localizada dentro da pasta `src/`.

------------------------------------------------------------------------

## Configuração do Banco (Supabase)

A conexão é configurada via variáveis de ambiente. Para usar o Supabase, copie os dados de conexão do painel e preencha o arquivo `.env` conforme o `.env.example` incluído no GitHub.

### Variáveis de Ambiente

  Variável            Descrição
  ------------------- ---------------------------------------------
  `DB_HOST`           Host do banco (ex.: `db.xxxxx.supabase.co`)
  `DB_PORT`           Porta (padrão: `5432`)
  `DB_USER`           Usuário do banco
  `DB_PASSWORD`       Senha do banco
  `DB_NAME`           Nome do database
  `DB_SSL`            `true`/`false` para habilitar SSL
  `TYPEORM_SYNC`      Sincroniza entidades automaticamente
  `TYPEORM_LOGGING`   Ativa logs do TypeORM

------------------------------------------------------------------------

## ▶️ Executando o Projeto

### **Pré‑requisitos**

-   Node.js **\>= 18**
-   npm

### **Comandos principais**

``` bash
npm install
npm run dev
```

-   `npm install` → instala todas as dependências\
-   `npm run dev` → inicia o servidor em modo desenvolvimento com
    `tsx watch`

------------------------------------------------------------------------

## Rotas da API

As rotas ficam em `src/routes/` e implementam CRUD completo para a
entidade **Livro**.

Exemplo de rotas:

  Método   Rota            Descrição
  -------- --------------- -----------------------
  GET      `/livros`       Lista todos os livros
  GET      `/livros/:id`   Obtém um livro
  POST     `/livros`       Cadastra um livro
  PUT      `/livros/:id`   Atualiza um livro
  DELETE   `/livros/:id`   Remove um livro

------------------------------------------------------------------------

## Testando

Use ferramentas como:

-   Postman\
-   Insomnia\
-   Thunder Client (VSCode)\
-   `curl` no terminal

Servidor roda por padrão em:

    http://localhost:3333

------------------------------------------------------------------------

## Créditos

Trabalho desenvolvido por Renato Delgado, curso de Análise e Desenvolvimento de Sistemas (Faculdade Senac Pernambuco) para as unidades curriculares:

-   **Coding Mobile** --- Prof. Geraldo Júnior\
-   **Arquitetura e Desenvolvimento de Backend** --- Prof. Danilo Farias