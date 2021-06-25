import {getCustomRepository} from 'typeorm';
import {TagsRepositories} from '../repositories/TagsRepositories';
import {classToPlain} from "class-transformer"

class ListTagsService {
    async execute() {
        const tagRepository = getCustomRepository(TagsRepositories);

        const tags = await tagRepository.find();
        // Possibilidade alternativa, caso nao utilize o "class-transformer"
        // tags = tags.map(tag => (
        //     {...tag, nameCustom: `#${tag.name}`}
        // ))
        return classToPlain(tags);
    }
}

export {ListTagsService}
