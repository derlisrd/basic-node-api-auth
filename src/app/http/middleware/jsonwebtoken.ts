import { Request, Response, NextFunction } from 'express';
import jwt, { Secret } from 'jsonwebtoken';
import config from '../../../config/app';

const JWT_SECRET : Secret = config.jwtsecret || ''; 

const jwtMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({success:false, message: 'Token JWT no proporcionado' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({success:false, message: 'Token JWT inválido' });
    }

    next();
  });
};

export default jwtMiddleware;