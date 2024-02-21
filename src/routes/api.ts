import express from "express";
import publicroutes from './public'
import authroutes from './auth'
import jwtMiddleware from "../app/http/middleware/jsonwebtoken";



const routes = express()


routes.use('/',publicroutes)

routes.use('/in', jwtMiddleware, authroutes)

export default routes;
