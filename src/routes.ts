import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserReceiverController } from "./controllers/ListUserReceiveController";
import { ListUserController } from "./controllers/ListUsersController";
import { ListUserSenderController } from "./controllers/ListUserSenderController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createCompliController = new CreateComplimentController()
const listUserSendComplimentContoller = new ListUserSenderController()
const listUserReceiveComplimentContoller = new ListUserReceiverController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUserController()

router.post('/user', ensureAuthenticate, ensureAdmin, createUserController.handle)
router.get('/users', ensureAuthenticate, listUsersController.handle)
router.post('/tags', createTagController.handle)
router.post('/session', authenticateUserController.handle)
router.post('/compliments', ensureAuthenticate, createCompliController.hanlde)
router.get('/users/compliments/send', ensureAuthenticate, listUserSendComplimentContoller.handle) 
router.get('/users/compliments/receive', ensureAuthenticate, listUserReceiveComplimentContoller.handle)
router.get('/tags', ensureAuthenticate, listTagsController.handle)

export { router };