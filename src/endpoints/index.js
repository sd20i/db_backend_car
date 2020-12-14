const RootEndpoint = require("./Root.Endpoint");
const ProductsEndpoints = require("./Products.Endpoints");
const OrdersEndpoints = require("./Orders.Endpoints");
const CustomersEndpoints = require("./Customers.Endpoints");
const ViewMoneyEndpoints = require("./ViewMoney.Endpoints");
const StoredProcedureOrdersEndpoint = require("./StoredProcedureOrders.Endpoint");

module.exports = {
  RootEndpoint,
  ProductsEndpoints,
  OrdersEndpoints,
  CustomersEndpoints,
  ViewMoneyEndpoints,
  StoredProcedureOrdersEndpoint
};
