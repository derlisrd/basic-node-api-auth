import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import config from './app';
import { Request } from 'express';

const HASH = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

const AUTH = async(req : Request)=>{
  const token = req.headers.authorization?.split(' ')[1];
  const decode : any = jwt.verify(`${token}`,`${config.jwtsecret}`);  
  return {
    user_id: decode.id,
    email: decode.email
  }
}

export { HASH, AUTH }