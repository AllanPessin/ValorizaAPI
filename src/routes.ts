import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAdmin } from "./middlewares/ensureAdmin";

const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createCompliController = new CreateComplimentController()

router.post('/user', ensureAdmin, createUserController.handle)
router.post('/tags', createTagController.handle)
router.post('/session', authenticateUserController.handle)
router.post('/compliments', createCompliController.hanlde)

export { router };
