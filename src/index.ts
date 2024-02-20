import express from "express";
import api from './routes/api';
import xapikeyMiddleware from './app/http/middleware/xapikey';
import logMiddleware from './app/http/middleware/log';


const app = express();

app.use(logMiddleware)
app.use(xapikeyMiddleware)

app.use('/api',api);

export default app;