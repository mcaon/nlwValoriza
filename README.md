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
