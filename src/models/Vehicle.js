const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Vehicle extends Model {}

const attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  make: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const options = {
  sequelize,
  timestamps: true,
  modelName: "vehicle",
};

// initialize Vehicle model
Vehicle.init(attributes, options);

module.exports = Vehicle;
