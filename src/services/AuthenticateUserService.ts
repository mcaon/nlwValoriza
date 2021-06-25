import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRepositories';
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest) {
        const userRepositories = getCustomRepository(UserRepositories);

        // Verificar se email existe
        const user = await userRepositories.findOne({
            email
        })

        if (!user) {
            throw new Error("Email/Password incorrect");
        }

        // Verificar se senha esta correta
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        // Gerar TOKEN
        const token = sign({
            email: user.email
        }, "jh86765HGjhn", {
            subject: user.id,
            expiresIn: "1d"
        });

        return token;
    }
}

export { AuthenticateUserService }
