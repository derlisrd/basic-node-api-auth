
import { Request, Response } from 'express';
import User from '../../models/user';
class UserController{

    me(req : Request, res : Response  ){

        return res.status(201).json({
            success:true,
            message:'me',
            results:{
            }
        })
    }


    async  getUserById(req: Request, res: Response) {
        try {
            //const {id}  = req.query;
          const user = await User.findByPk('1');
          if (!user) {
            throw new Error('Usuario no encontrado');
          }
          return res.status(201).json({
            success:true,
            message:'me',
            results: user
        })
        } catch (error) {
          console.error('Error al consultar el usuario:', error);
          throw error;
        }
      }



}

export default UserController;