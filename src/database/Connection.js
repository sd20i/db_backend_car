const { Sequelize } = require("sequelize");
const mysql = require('mysql2');

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const dialect = process.env.DB_DIALECT;
const port = process.env.DB_PORT;

const config = {
  host    : process.env.DB_HOST,
  user    : process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port : process.env.DB_PORT

}

const mysqlConnect = mysql.createConnection(config);
mysqlConnect.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database carBuilder through mysql!");
});


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
  mysqlConnect
};
