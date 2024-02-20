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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const database_1 = __importDefault(require("../../config/database"));
function runMigrations() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const migrationsPath = path_1.default.join(__dirname, 'src', 'database', 'migrations');
            const files = fs_1.default.readdirSync(migrationsPath);
            for (const file of files) {
                const filePath = path_1.default.join(migrationsPath, file);
                const migration = require(filePath);
                yield migration.up(database_1.default.getQueryInterface(), database_1.default.constructor);
            }
            console.log('Migraciones completadas');
        }
        catch (error) {
            console.error('Error al ejecutar las migraciones:', error);
        }
        finally {
            database_1.default.close();
        }
    });
}
runMigrations();
