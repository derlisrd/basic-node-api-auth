
import { Model,DataTypes } from 'sequelize';
import sequelize from '../../config/database';

class Movimiento extends Model {
  public id!: number;
  public user_id! : number;
  public descripcion! : string;
  public tipo!:number;
  public valor!: number;
  public icon!:string;
  
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Movimiento.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue:null
      },
      tipo: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 0 
      },
      valor: {
        type: DataTypes.DECIMAL(20, 2),
        allowNull: false
      },
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
      tableName: 'movimientos', // Nombre de la tabla en la base de datos
    }
  );


export default Movimiento;
