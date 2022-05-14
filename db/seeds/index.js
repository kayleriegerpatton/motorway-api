const vehicleData = require("./vehicles");
const Vehicle = require("../../src/models/Vehicle");

const sequelize = require("../../src/config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n Database synced. \n");

  await Vehicle.bulkCreate(vehicleData);
  console.log("\n Vehicles seeded. \n");

  process.exit(0);
};

seedAll();
