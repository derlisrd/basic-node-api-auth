
import sequelize from '../../config/database';
import { Model, DataTypes } from 'sequelize';


class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      // Ocultar la columna password en la salida JSON
      get() {
        return () => this.getDataValue('password');
      }
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
    tableName: 'users', // Nombre de la tabla en la base de datos
  }
);

export default User;


/* 

const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
    username: {
      type: DataTypes.STRING,
      allowNull: true,
      unique:true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      // Ocultar la columna password en la salida JSON
      get() {
        return () => this.getDataValue('password');
      }
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

  });

export default User; */