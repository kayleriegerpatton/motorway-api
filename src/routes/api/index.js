const { Router } = require("express");

const vehicleRoutes = require("./vehicle-routes");

const router = Router();

router.use("/vehicles", vehicleRoutes);

module.exports = router;
