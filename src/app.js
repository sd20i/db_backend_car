const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("firebase-admin");
const { dbConnect } = require("./database/Connection");
const {
  RootEndpoint,
  ProductsEndpoints,
  OrdersEndpoints,
  CustomersEndpoints,
  ViewMoneyEndpoints,
  StoredProcedureOrdersEndpoint,
  DeleteProductEndpoint
} = require("./endpoints");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.options("*", cors());

// firebase admin
const googleKey =
  process.env.GOOGLE_APPLICATION_CREDENTIALS ||
  `./carbuilderServiceAccount.json`;

admin.initializeApp({
  credential: admin.credential.cert(googleKey),
});
const firebaseDb = admin.firestore();

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`\x1b[36m%s\x1b[0m`, `Server is up on ${PORT}`);
  console.log(`\x1b[36m%s\x1b[0m`, `---------------------------------------`);
});

// endpoints access

//we have a database connection with sequelize, do we need another server to connect to mysql without sequelize??
RootEndpoint(app);
ProductsEndpoints(app);
OrdersEndpoints(app);
CustomersEndpoints(app, admin, firebaseDb);
ViewMoneyEndpoints(app);
StoredProcedureOrdersEndpoint(app);
DeleteProductEndpoint(app);
