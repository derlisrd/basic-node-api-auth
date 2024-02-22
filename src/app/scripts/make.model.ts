import fs from 'fs';
import path from 'path';

const modelName = process.argv[2];

if (!modelName) {
  console.error('Error: Debes proporcionar un nombre para el modelo.');
  process.exit(1);
}

const modelTemplate = `
import { Model,DataTypes } from 'sequelize';
import sequelize from '../../config/database';

class ${modelName} extends Model {
  public id!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

${modelName}.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      //more here
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
      },
    },
    {
      sequelize, // Instancia de Sequelize
      tableName: '${modelName.toLowerCase()}s', // Nombre de la tabla en la base de datos
    }
  );


export default ${modelName};
`;

const modelsDir = path.join(__dirname, '../models');
const modelFile = path.join(modelsDir, `${modelName.toLowerCase()}.model.ts`);

fs.writeFileSync(modelFile, modelTemplate);

console.log(`Modelo ${modelName} creado`);
