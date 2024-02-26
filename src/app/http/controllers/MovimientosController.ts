import { Request, Response } from "express";
import Movimiento from "../../models/movimiento";
import moment from 'moment';
import { Op } from "sequelize";
import { AUTH } from "../../../config/helpers";


class MovimientosController {

    async index(req: Request, res: Response){
        try {            
            
            const desde = (req.query?.desde + ' 00:00:00') ||  moment().startOf('month').format('YYYY-MM-DD 00:00:00');
            const hasta = (req.query?.hasta + ' 23:59:59') || moment().format('YYYY-MM-DD HH:mm:ss');
            const {user_id} = await AUTH(req);
            
            const mov = await Movimiento.findAll({
                where:{
                    user_id,
                    created_at:{
                        [Op.between]:[desde,hasta]
                    }
                }
            })
            return res.json({
                success:true,
                results: mov
            })
        } catch (error) {
            return res.status(500).json({success:false,message:'Server error'})
        }
    }




    async store(req: Request, res: Response){
        try {            
            const { descripcion, tipo, valor, icon } = req.body;
            const {user_id} : any = await AUTH(req);
            const mov = await Movimiento.create({ user_id, descripcion, tipo, valor, icon });
            return res.json({
                success:true,
                results: mov
            })
        } catch (error) {
            return res.status(500).json({success:false,message:'Server error'})
        }
    }
    async update(req: Request, res: Response){
        try {            
            const { descripcion, tipo, valor, icon } = req.body;
            const {user_id} : any = await AUTH(req);

            const mov = await Movimiento.findOne({
                where: {
                    id: req.params.id,
                    user_id : user_id
                }
            })
            
            if(mov === null) return res.status(404).json({success: false,message: 'Movimiento no encontrado' });
              
          
              mov.descripcion = descripcion;
              mov.tipo = tipo;
              mov.valor = valor;
              mov.icon = icon;
          
              await mov.save();
            return res.json({
                success:true,
                results: mov
            })
        } catch (error) {
            return res.status(500).json({success:false,message:'Server error'})
        }
    }
    
    async destroy(req : Request, res : Response){
        try{
            const {user_id} : any = await AUTH(req);

            const mov = await Movimiento.destroy({
                where: {
                    id: req.params.id,
                    user_id : user_id
                }
            })
            if(mov === null) return res.status(404).json({success: false,message: 'Movimiento no encontrado' });
            return res.json({success:true,message:'Deleted'})
        } catch (error) {
            return res.status(500).json({success:false,message:'Server error'})
        }
    }
 

}

export default MovimientosController;
