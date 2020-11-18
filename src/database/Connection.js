const { Sequelize } = require("sequelize");

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const dialect = process.env.DB_DIALECT;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: dialect,
  port: port,
  logging: false,
});

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    return console.log(`Connected to database ${database}`);
  } catch (error) {
    return console.log(`could not connect to database ${database}`);
  }
};

module.exports = {
  dbConnect,
  sequelize,
};
