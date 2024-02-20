import { DataTypes } from 'sequelize';
import sequelize from '../../config/database';




const User = sequelize.define('users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
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

export default User;