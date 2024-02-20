
import database from "../config/database";
import path from 'path';
import fs from 'fs';
import { Sequelize } from 'sequelize';

async function runAllMigrations() {
  try {
    const migrationsPath = path.join(__dirname,'migrations');
    const files = fs.readdirSync(migrationsPath);

    for (const file of files) {
        const migrationFilePath = path.join(migrationsPath, file);
        const {up} = await import(migrationFilePath);
        await up(database.getQueryInterface(), Sequelize);
    }

    console.log('Todas las migraciones se han ejecutado correctamente');
  } catch (error) {
    console.error('Error al ejecutar las migraciones:', error);
  } finally {
    await database.close();
  }
}
runAllMigrations();