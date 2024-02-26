import { body } from "express-validator";

const registerValidate = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    body('passwordConfirmation').custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords and passwordConfirmation do not match');
      }
      return true;
    }),
]
export default registerValidate