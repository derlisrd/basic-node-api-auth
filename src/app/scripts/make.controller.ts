import fs from 'fs';
import path from 'path';

const controllerName = process.argv[2];

if (!controllerName) {
  console.error('Error: Debes proporcionar un nombre para el controller.');
  process.exit(1);
}

const modelTemplate = `
class ${controllerName} {

}

export default ${controllerName};
`;

const modelsDir = path.join(__dirname, '../http/controllers');
const modelFile = path.join(modelsDir, `${controllerName}.ts`);

fs.writeFileSync(modelFile, modelTemplate);

console.log(`Controller ${controllerName} creado`);
