
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../../config/app';

class UserController{

    me(req : Request, res : Response  ){
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
          return res.status(401).json({success:false, message: 'Unauthorized' });
      }
      const token = authHeader.slice(7);
  
      try {
          const decodedToken = jwt.verify(token,`${config.jwtsecret}`);
          res.json({success:true,results:decodedToken});
      } catch (error) {
          res.status(401).json({success:false, message: 'Invalid token' });
      }
    }

    



}

export default UserController;