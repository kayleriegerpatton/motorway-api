const { Router } = require("express");
const getAllVehicles = require("../../controllers/api/vehicles");

const router = Router();

// /api/vehicles endpoint

router.get("/", getAllVehicles);

module.exports = router;
