import { QueryInterface } from 'sequelize';
import { HASH } from '../../config/helpers';

async function up(queryInterface: QueryInterface) {
  await queryInterface.bulkInsert('users', [{
    email: 'demo@demo.com',
    name: 'Demo doe',
    username:'demo',
    password: await HASH('demo12345')
  }], {});
}

 export { up };