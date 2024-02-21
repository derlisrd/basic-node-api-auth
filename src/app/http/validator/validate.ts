import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

const validate = (req: Request, res: Response, next: any) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    return res.status(422).json({ errors: errors.array() });
};

export default validate;