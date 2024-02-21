import { Router, Response, Request } from "express";
import jwtMiddleware from "../app/http/middleware/jsonwebtoken";
import UserController from "../app/http/controllers/UserController";
import AuthController from "../app/http/controllers/AuthController";

const routes = Router()

const User = new UserController()
const Auth = new AuthController()



routes.get('/me',jwtMiddleware,User.me)

routes.post('/auth/login', Auth.login)

export default routes;
