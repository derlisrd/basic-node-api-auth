import { Router, Response, Request } from "express";
import jwtMiddleware from "../app/http/middleware/jsonwebtoken";
import UserController from "../app/http/controllers/UserController";


const routes = Router()

const User = new UserController()



routes.get('/',(req : Request, res : Response)=>{
    return res.status(404).json({
        success:false,
        message:'Not found'
    })
})

routes.get('/me',jwtMiddleware,User.me)
routes.get('/user/1',User.getUserById)

export default routes;
