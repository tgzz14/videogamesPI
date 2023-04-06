const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: 'https://cl.buscafs.com/www.levelup.com/public/uploads/images/723642/723642_1280x960.jpg'
    },
    released: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is:/^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/,
        isAfter: "1952-01-01", 
      }
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        max: 5,
      }
    },
    createdByDB: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  },{
    timestamps: false
  });
};
