import fs from 'fs';
import path from 'path';

const modelName = process.argv[2];

if (!modelName) {
  console.error('Error: Debes proporcionar un nombre para el modelo.');
  process.exit(1);
}

const modelTemplate = `
import { DataTypes } from 'sequelize';
import sequelize from '../../config/database';

const ${modelName} = sequelize.define('${modelName.toLowerCase()}s', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
    // create more columns
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

  });

export default ${modelName};
`;

const modelsDir = path.join(__dirname, '../models');
const modelFile = path.join(modelsDir, `${modelName.toLowerCase()}.model.ts`);

fs.writeFileSync(modelFile, modelTemplate);

console.log(`Modelo ${modelName} creado`);
