"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const app_1 = __importDefault(require("./app"));
const sequelize = new sequelize_1.Sequelize(`mysql://${app_1.default.db_user}:${app_1.default.db_pass}@${app_1.default.db_host}:${app_1.default.db_port}/${app_1.default.db_name}`);
exports.default = sequelize;
