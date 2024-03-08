
import { QueryInterface } from 'sequelize';


const up = async (queryInterface: QueryInterface, Sequelize: any) => {
    await queryInterface.createTable('movimientos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
      },
      categoria_id:{
        type: Sequelize.INTEGER,
        allowNull:true,
        defaultValue:null
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      icon: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue:null
      },
      tipo: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0 
      },
      valor: {
        type: Sequelize.DECIMAL(20, 2),
        allowNull: false
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

  
const down = async (queryInterface: QueryInterface, Sequelize: any) => { await queryInterface.dropTable('movimientos');}

export {up, down}
