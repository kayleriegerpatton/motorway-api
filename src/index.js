// external package imports
require("dotenv").config();
const express = require("express");

// internal imports
const sequelize = require("./config/connection");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// initialize server and database connection
const init = async () => {
  try {
    await sequelize.sync({ force: false });

    //   listen to port
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`[ERROR]: Failed to connect to database | ${error.message}`);
  }
};

init();
