import { Request, Response, NextFunction } from 'express';
import config from '../../../config/app';


const API_KEY = config.xapikey

const xApiKey = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.headers['x-api-key'];
  
    if (!apiKey || apiKey !== API_KEY) {
      return res.status(401).json({ success:false, message: 'API key inválida' });
    }
  
    next();
  };

export default xApiKey;