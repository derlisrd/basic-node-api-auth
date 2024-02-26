import { Router } from "express";
import UserController from "../../app/http/controllers/UserController";

import MovimientosController from "../../app/http/controllers/MovimientosController";
import movimientoValidate from "../../app/http/validator/movimiento.validate";
import validate from "../../app/http/validator/validate";


const user  = new UserController()
const mov = new MovimientosController()

const routes = Router()


routes.get('/me',user.me)

routes.get('/movimientos',mov.index)
routes.post('/movimiento',movimientoValidate,validate, mov.store)
routes.put('/movimiento/:id',movimientoValidate,validate, mov.update)
routes.delete('/movimiento/:id', mov.destroy)

export default routes