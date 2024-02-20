import { QueryInterface } from 'sequelize';

async function up(queryInterface: QueryInterface) {
  await queryInterface.bulkInsert('users', [{
    email: 'derlis@derlis.com',
    name: 'Doe',
    password:'12345',
    created_at: new Date(),
    updated_at: new Date()
  }], {});
}

 export { up };