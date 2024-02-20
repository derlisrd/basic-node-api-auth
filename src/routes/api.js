"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("../app/http/middleware/jsonwebtoken"));
const UserController_1 = __importDefault(require("../app/http/controllers/UserController"));
const routes = (0, express_1.Router)();
const User = new UserController_1.default();
routes.get('/', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'Not found'
    });
});
routes.get('/me', jsonwebtoken_1.default, User.me);
routes.get('/user/1', User.getUserById);
exports.default = routes;
