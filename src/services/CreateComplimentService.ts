import { getCustomRepository } from "typeorm";
import { UserRepositories } from '../repositories/UserRepositories';
import { hash } from "bcryptjs";
import {ComplimentsRepositories} from '../repositories/ComplimentsRepositories';

interface IComplimentRequest {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}

class CreateComplimentService {

    async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest) {
        const complimentsRepository = getCustomRepository(ComplimentsRepositories);
        const usersRepository = getCustomRepository(UserRepositories);

        if (user_sender === user_receiver) {
            throw new Error('Incorrect User Receiver');
        }

        const userReceiverExists = usersRepository.findOne(user_receiver);

        if (!userReceiverExists) {
            throw new Error("User Receiver does not exists!");
        }

        const compliment = complimentsRepository.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentsRepository.save(compliment);

        return compliment;
    }
}

export { CreateComplimentService }
