import path from "path";
import fs from 'fs'
import sequelize from "../../config/database";

async function runMigrations() {
  try {
    const migrationsPath = path.join(__dirname, 'src', 'database', 'migrations');
    const files = fs.readdirSync(migrationsPath);

    for (const file of files) {
      const filePath = path.join(migrationsPath, file);
      const migration = require(filePath);
      await migration.up(sequelize.getQueryInterface(), sequelize.constructor);
    }

    console.log('Migraciones completadas');
  } catch (error) {
    console.error('Error al ejecutar las migraciones:', error);
  } finally {
    sequelize.close();
  }
}

runMigrations();