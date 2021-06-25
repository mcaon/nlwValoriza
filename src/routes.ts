import { Router } from 'express';
import {CreateUserController} from './controllers/CreateUserController';
import {CreateTagController} from './controllers/CreateTagController';
import {ensureAdmin} from './middlewares/ensureAdmin';
import {AuthenticateUserController} from './controllers/AuthenticateUserController';
import {CreateComplimentController} from './controllers/CreateComplimentController';

const router = Router();

const createUserControler = new CreateUserController();
const createTagControler = new CreateTagController();
const createComplimentControler = new CreateComplimentController();
const authenticateUserControler = new AuthenticateUserController();

router.post('/users', createUserControler.handle);
router.post('/tags', ensureAdmin, createTagControler.handle);
router.post('/login', authenticateUserControler.handle);
router.post('/compliment', createComplimentControler.handle);

export { router }
