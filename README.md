# NLW Valoriza - NLW - Trilha NodeJS
### Dev: Marcello Caon
### Instrutora: Dani


## Aula 01
### Comandos Importantes utilizados

// dentro do diretório

yarn init -y

yarn add typescript -D // add typescript em desenvolvimento

yarn tsc --init // inicializa typescript no projeto

yarn add express

yarn add @types/express -D

yarn add ts-node-dev -D

// No package.json colocar o script

"scripts": {
"dev": "ts-node-dev src/server.ts"
}

## Aula 02

#### Utilizando TypeORM como ORM e SQLite como banco

#### typeorm.io

yarn add typeorm reflect-metadata sqlite3

// Criando migrations

yarn typeorm migration:create -n CreatUsers

yarn typeorm migration:run

yarn typeorm migration:revert // remove a ultima migration

yarn typeorm entity:create -n User

yarn add uuid

yarn add @types/uuid


## Aula 03

yarn add express-async-errors

yarn typeorm migration:create -n CreateTags

yarn typeorm migration:run

// site => developer.mozilla.org para verificar os status (ex: 400, 401, 500....)


## Aula 04

yarn add jsonwebtoken

yarn add @types/jsonwebtoken -D

yarn typeorm migration:create -n AlterUserAddPassword

yarn typeorm migration:run

yarn add bcryptjs

yarn add @types/bcryptjs -D

Procurar => md5 generator para criar uma chave hash para o TOKEN

yarn typeorm migration:create -n CreateCompliments

# Regras

- Cadastro de Usuário
  
    [x] Não é permitido cadastrar mais de um usuário com mesmo e-mail
    
    [x] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAGS

    [x] Não é permitido cadastrar mais de uma tag com o mesmo nome

    [x] Não é permitido cadastrar tag sem nome

    [x] Não é permitido o cadastro por usuários que não sejam admin

- Cadastro de elogios

    [ ] Não é permitido um usuário cadastrar um elogio para sí
  
    [ ] Não é permitido cadastrar elogios para usuários inválidos

    [ ] O usuário precisa estar autenticado na aplicação
