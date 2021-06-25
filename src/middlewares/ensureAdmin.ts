import { Request, Response, NextFunction } from 'express';
import {getCustomRepository} from 'typeorm';
import {UserRepositories} from '../repositories/UserRepositories';


export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
    const { user_id } = request;
    // Verificar se usuario admin com token JWT etc
    const userRepository = getCustomRepository(UserRepositories);

    const { admin } = await userRepository.findOne(user_id);

    if (admin) {
        return next();
    }

    return response.status(401).json({
        error: "Unauthorized"
    })

}
