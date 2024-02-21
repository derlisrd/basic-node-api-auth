import { Router } from "express";
import UserController from "../../app/http/controllers/UserController";


const user  = new UserController()
const routes = Router()


routes.get('/me',user.me)

export default routes