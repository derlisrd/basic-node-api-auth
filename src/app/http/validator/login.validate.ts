import { body } from "express-validator";

const loginValidate = [
    body('email').notEmpty().withMessage('Email is required'),
    body('password').isLength({ min: 4 }).withMessage('Password must be at least 6 characters'),
  ]
export default loginValidate