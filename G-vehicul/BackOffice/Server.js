const app = require("./app");
// getting values from the dotenv file
const dotenv = require("dotenv");
// mongodb configs
const databaseConnection = require("./configs/configs-database");

// ************************************************************************

//setting up config file
dotenv.config({ path: "BackOffice/configs/config.env" });

// Connecting to the database mongodb
databaseConnection();

// ************************************************************************

app.listen(process.env.PORT, () => {
  console.log(
    `the server s running on the port => ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
});
