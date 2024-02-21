import { QueryInterface } from 'sequelize';
import { HASH } from '../../config/helpers';

async function up(queryInterface: QueryInterface) {
  await queryInterface.bulkInsert('users', [{
    email: 'derlis@derlis.com',
    name: 'Doe',
    password: await HASH('12345')
  }], {});
}

 export { up };