import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../../config/app';


const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({success:false, message: 'Token JWT no proporcionado' });
  }

  try {
    jwt.verify(token,`${config.jwtsecret}`);  
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Token JWT inválido' });
  }

};

export default jwtMiddleware;