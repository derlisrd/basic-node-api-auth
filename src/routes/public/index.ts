import { Router } from "express";
import {AuthController,loginValidationRules} from "../../app/http/controllers/AuthController";
import validate from "../../app/http/validator/validate";

const Auth = new AuthController()


const routes = Router()

routes.post('/login', loginValidationRules, validate, Auth.login);

export default routes;