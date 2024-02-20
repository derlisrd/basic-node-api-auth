"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = {
    port: process.env.PORT,
    xapikey: process.env.X_API_KEY,
    jwtsecret: process.env.JWT_SECRET,
    db_user: process.env.DATABASE_USER,
    db_name: process.env.DATABASE_NAME,
    db_host: process.env.DATABASE_HOST,
    db_pass: process.env.DATABASE_PASSWORD,
    db_port: process.env.DATABASE_PORT
};
exports.default = app;
