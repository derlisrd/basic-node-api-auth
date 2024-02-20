"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const xapikey_1 = __importDefault(require("./app/http/middleware/xapikey"));
const log_1 = __importDefault(require("./app/http/middleware/log"));
const app = (0, express_1.default)();
app.use(log_1.default);
app.use(xapikey_1.default);
app.use('/api', api_1.default);
exports.default = app;
