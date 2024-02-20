"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../../models/user"));
class UserController {
    me(req, res) {
        return res.status(201).json({
            success: true,
            message: 'me',
            results: {}
        });
    }
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //const {id}  = req.query;
                const user = yield user_1.default.findByPk('1');
                if (!user) {
                    throw new Error('Usuario no encontrado');
                }
                return res.status(201).json({
                    success: true,
                    message: 'me',
                    results: user
                });
            }
            catch (error) {
                console.error('Error al consultar el usuario:', error);
                throw error;
            }
        });
    }
}
exports.default = UserController;
