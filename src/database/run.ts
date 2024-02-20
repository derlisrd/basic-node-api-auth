
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

    const shouldSeed = process.argv.includes('--seed');    
    if (shouldSeed) {
      const seederPath = path.join(__dirname, 'seeders');
      const filesSeeders = fs.readdirSync(seederPath);
      for (const file of filesSeeders) {
        const seederFilePath = path.join(seederPath, file);
        const {up} = await import(seederFilePath);
        await up(database.getQueryInterface());
      }
      console.log('Seeder completado');
    }

    console.log('Todas las migraciones se han ejecutado correctamente');
  } catch (error) {
    console.error('Error al ejecutar las migraciones:', error);
  } finally {
    await database.close();
  }
}
runAllMigrations();