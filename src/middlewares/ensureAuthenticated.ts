import { Request, Response, NextFunction } from 'express';
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // Receber o TOKEN
    const authtoken = request.headers.authorization;

    // Validar se o TOKEN esta preenchido
    if (!authtoken) {
        return response.status(401).end();
    }

    const [, token] = authtoken.split(' ');
    // Validar se o TOKEN é válido
    try {
        const { sub } = verify(token, 'jh86765HGjhn') as IPayload;
        request.user_id = sub;

        return next();
    } catch (e) {
        return response.status(401).end();
    }

    // Recuperar informações do usuário



}
