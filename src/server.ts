import 'reflect-metadata';
import express, {NextFunction, Request, Response} from 'express';
import "express-async-errors";
import {router} from './routes'
import './database';
import cors from "cors";
// @types/express
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

// middleware tratamento de erros com 4 parametros
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({
                error: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
})

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
