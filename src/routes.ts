import { Router } from 'express';
import {CreateUserController} from './controllers/CreateUserController';
import {CreateTagController} from './controllers/CreateTagController';
import {ensureAdmin} from './middlewares/ensureAdmin';
import {AuthenticateUserController} from './controllers/AuthenticateUserController';
import {CreateComplimentController} from './controllers/CreateComplimentController';
import {ensureAuthenticated} from './middlewares/ensureAuthenticated';
import {ListUserSentComplimentsController} from './controllers/ListUserSentComplimentsController';
import {ListUserReceivedComplimentsController} from './controllers/ListUserReceivedComplimentsController';
import {ListTagController} from './controllers/ListTagController';
import {ListUserController} from './controllers/ListUserController';

const router = Router();

const createUserControler = new CreateUserController();
const createTagControler = new CreateTagController();
const createComplimentControler = new CreateComplimentController();
const authenticateUserControler = new AuthenticateUserController();

const listUserSentComplimentsController = new ListUserSentComplimentsController();
const listUserReceivedComplimentsController = new ListUserReceivedComplimentsController();
const listTagsController = new ListTagController();
const listUsersController = new ListUserController();

router.post('/users', createUserControler.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagControler.handle);
router.post('/login', authenticateUserControler.handle);
router.post('/compliment', ensureAuthenticated, createComplimentControler.handle);

router.get('/users/compliments/sent', ensureAuthenticated, listUserSentComplimentsController.handle);
router.get('/users/compliments/received', ensureAuthenticated, listUserReceivedComplimentsController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle);
router.get('/users', ensureAuthenticated, ensureAdmin, listUsersController.handle);

export { router }
