import express from "express";
import api from './routes/api';
import cors from 'cors';

import xapikeyMiddleware from './app/http/middleware/xapikey';
import logMiddleware from './app/http/middleware/log';
import routevalidator from "./app/http/middleware/routevalidator";

const app = express();
//express json
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.set('trust proxy', true);

app.use(cors())

//middlewares
app.use(logMiddleware)
app.use(xapikeyMiddleware)

// routes
app.use('/api',api);
app.use(routevalidator);


export default app;