const { OrderItem } = require("./OrderItemsModel");
const { Orders } = require("./OrdersModel");
const { Customer } = require("./CustomersModel");
const { Products } = require("./ProductsModel");
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
  OrderItem.belongsTo(Orders, {
    sourceKey: "o_id",
    foreignKey: "order_fk",
  });

  Orders.hasMany(OrderItem, {
    foreignKey: "order_fk",
  });

  OrderItem.hasOne(Products, {
    sourceKey: "product_fk",
    foreignKey: "p_id",
  });

  return {
    OrderItem,
    Orders,
    Customer,
    Products,
    ProductTypeModel,
  };
};

module.exports = AssociationModels;
