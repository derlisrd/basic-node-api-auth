import { Request, Response } from "express";
import {Op} from 'sequelize'
import User from "../../models/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from "../../../config/app";





export class AuthController {
  

    async login(req: Request, res : Response){
      try {
          const { email, password } = req.body;
          const findUser = await User.findOne({ where: { [Op.or]: [
            { email : email },
            { username : email }
          ] } });
          if (!findUser) {
            return res.status(404).json({ succes:false, message: 'Usuario no encontrado' });
          }
          const user = findUser.dataValues;
          const isPasswordValid = await bcrypt.compare(password, user.password);
      
          if (!isPasswordValid) {
            return res.status(401).json({success:false, message: 'Contraseña incorrecta' });
          } 
      
          // Crear y devolver el JWT
          const token = jwt.sign({ id: user.id, email: user.email },`${config.jwtsecret}`, { expiresIn: '1h' });
      
          res.json({ success:true,token });
        } catch (error) {
          console.error('Error al autenticar usuario:', error);
          res.status(500).json({success:false, message: 'Error al autenticar usuario' });
        }
    }




    async register(req: Request, res: Response) {
      try {
        const { name, email, password } = req.body;
  
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          return res.status(400).json({ success: false, message: 'Email already registered' });
        }
  
        // Crear un nuevo usuario
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPassword });
  
        // Crear y devolver el JWT
        const token = jwt.sign({ id: newUser.id, email: newUser.email }, `${config.jwtsecret}`, { expiresIn: '1h' });
  
        res.json({ success: true, token });
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ success: false, message: 'Error al registrar usuario' });
      }
    }


}


