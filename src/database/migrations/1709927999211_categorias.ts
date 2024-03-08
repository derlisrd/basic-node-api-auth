
import { QueryInterface } from 'sequelize';


const up = async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable('categorias', {
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

  
const down = async (queryInterface: QueryInterface, Sequelize: any) => { await queryInterface.dropTable('categorias');}

export {up, down}
