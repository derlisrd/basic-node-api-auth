
import { QueryInterface } from 'sequelize';


const up = async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
        unique:true,
        defaultValue:null
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true,
        validate:{
          isEmail: true
        }
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field:'created_at',
        defaultValue: new Date().toISOString()
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
        field:'updated_at'
      }
    });
  }

  
const down = async (queryInterface: QueryInterface, Sequelize: any) => { await queryInterface.dropTable('users');}

export {up, down}
