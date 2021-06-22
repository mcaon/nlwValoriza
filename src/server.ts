import "reflect-metadata";
import express from "express";
import {router} from "./routes"
import "./database";

// @types/express
const app = express();

app.use(express.json());
app.use(router);

/**
*  GET    => Buscar uma informação
*  POST   => Inserir/Criar uma informação
*  PUT    => Alterar uma informação (ex. usuário já existente)
*  DELETE => Remover um dado
*  PATCH  => Alterar uma informação específica (ex. senha de usuario)
 **/

/**
 * Tipos de Parametros
 * Routes Params => http://localhost:3000/produtos/987897987
 * Query Params  => http://localhost:3000/produtos?name=teclado&description=mecanico (parametros não obrigatórios e não explícitos na rota mapeada
 * Body Params   => {
 *     "name": "teclado",
 *     "description": "mecanico"
 * } -> utilizando em POST, PUT
 * **/

app.listen(3000, () => {
    console.log('Server is running');
});
