import { body } from 'express-validator';

const movimientoValidate = [
    body('descripcion').isString().notEmpty().withMessage('Descripcion'),
    body('tipo').isNumeric().notEmpty().withMessage('tipo es required'),
    body('valor').isNumeric().notEmpty().withMessage('valor es required')
  ]

export default movimientoValidate