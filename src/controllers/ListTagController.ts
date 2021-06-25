import {Request, Response} from 'express';
import {ListTagsService} from '../services/ListTagsService';


class ListTagController {
    async handle(request: Request, response: Response) {
        const listTagSerivce = new ListTagsService();

        const tags = await listTagSerivce.execute();

        return response.json(tags);
    }
}

export { ListTagController}
