import { Request, Response } from "express";
import User from "../../models/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


class AuthController {
    async login(req: Request, res : Response){
        
    
        const { email, password } = req.body;
        try {
          // Buscar al usuario en la base de datos
          const find = await User.findOne({ where: { email } });
      
          if (!find) {
            return res.status(404).json({ succes:false, message: 'Usuario no encontrado' });
          }
          
          const user = find.dataValues;
          
          
          // Verificar la contraseña
          const isPasswordValid = await bcrypt.compare(password, user.password);
      
          if (!isPasswordValid) {
            return res.status(401).json({success:false, message: 'Contraseña incorrecta' });
          } 
      
          // Crear y devolver el JWT
          const token = jwt.sign({ id: user.id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });
      
          res.json({ success:true,token });
        } catch (error) {
          console.error('Error al autenticar usuario:', error);
          res.status(500).json({success:false, message: 'Error al autenticar usuario' });
        }
    }
}

export default AuthController;