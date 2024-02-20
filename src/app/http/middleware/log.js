"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logMiddleware = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} - ${req.originalUrl} - ${req.ip}`);
    next();
};
exports.default = logMiddleware;
