const Sequelize = require("sequelize");
const DB = require("../config/database");
const Usuario = DB.define(
  "usuarios",
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El nombre no puede estar vacío.",
        },
      }
    },
    usuario: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "El usuario no puede estar vacío.",
        },
      },
      unique: {
        args: true,
        msg: "Este usuario ya existe.",
      },
    },
    clave: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "La clave es necesaria.",
        },
      },
    },
  },
);

module.exports = Usuario;
