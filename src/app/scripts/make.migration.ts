import fs from 'fs';
import path from 'path';
const migrationName = process.argv[2];

if (!migrationName) {
  console.error('Error: Debes proporcionar un nombre para el migration.');
  process.exit(1);
}

const migrationTemplate = `
import { QueryInterface } from 'sequelize';


const up = async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable('${migrationName}', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field:'created_at'
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field:'updated_at'
      }
    });
  }

  
const down = async (queryInterface: QueryInterface, Sequelize: any) => { await queryInterface.dropTable('${migrationName}');}

export {up, down}
`;
const modelsDir = path.join(__dirname, '../../database/migrations/');
const datetime = new Date().getTime()
const modelFile = path.join(modelsDir, `${datetime}_${migrationName.toLowerCase()}.ts`);

fs.writeFileSync(modelFile, migrationTemplate);

console.log(`Migration ${migrationName} creado`);