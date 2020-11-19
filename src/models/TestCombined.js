const { Orders } = require("./OrdersModel");
const { Customer } = require("./CustomersModel");
const { OrderItems } = require("./OrderItemsModel");
const { Product } = require("./ProductsModel");
const { ProductTypeModel } = require("./ProductTypeModel");
// import all models that need relations

const AssociationModels = () => {
  // orders and customers
  Orders.belongsTo(Customer, {
    sourceKey: "c_id",
    foreignKey: "customer_fk",
  });
  Customer.hasMany(Orders, {
    foreignKey: "customer_fk",
  });

  // orders and order items
  OrderItems.belongsTo(Orders, {
    sourceKey: "o_id",
    foreignKey: "order_fk",
  });

  // products and product types
  return {
    Orders,
    Customer,
    OrderItems,
    Product,
    ProductTypeModel,
  };
};

module.exports = AssociationModels;
