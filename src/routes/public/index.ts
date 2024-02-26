import { Router } from "express";
import {AuthController} from "../../app/http/controllers/AuthController";
import validate from "../../app/http/validator/validate";
import loginValidate from "../../app/http/validator/login.validate";
import registerValidate from "../../app/http/validator/register.validate";

const Auth = new AuthController()


const routes = Router()

routes.post('/login', loginValidate, validate, Auth.login);
routes.post('/register', registerValidate, validate, Auth.register);

export default routes;