import { Request, Response, NextFunction } from 'express';

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  var ip = req.socket.localAddress;
  console.log(`${new Date().toISOString()} - ${req.method} - ${req.originalUrl} - ${ip} ${req.socket.remoteAddress}`);
  next();
};

export default logMiddleware;