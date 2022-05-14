// import Vehicle model
const Vehicle = require("../../models/Vehicle");

const getAllVehicles = async (req, res) => {
  try {
    const allVehicles = await Vehicle.findAll();

    return res.json({ success: true, allVehicles });
  } catch (error) {
    console.log(`[ERROR]: ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to send response." });
  }
};

module.exports = getAllVehicles;
