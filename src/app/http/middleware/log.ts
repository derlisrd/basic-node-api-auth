import { Request, Response, NextFunction } from 'express';

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {

  console.log(`${new Date().toISOString()} - ${req.method} - ${req.originalUrl} - ${req.ip}`);
  next();
};

export default logMiddleware;