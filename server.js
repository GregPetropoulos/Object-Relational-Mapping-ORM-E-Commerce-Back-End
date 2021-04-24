const express = require("express");
const routes = require("./routes");
// import sequelize connection
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("ecommerce_db", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

const databaseConnectionTest = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

databaseConnectionTest();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
