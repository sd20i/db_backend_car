const { Orders } = require("./OrdersModel");
const { Customer } = require("./CustomersModel");
const { OrderItems } = require("./OrderItemsModel");
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

  return {
    Orders,
    Customer,
    OrderItems,
  };
};

module.exports = AssociationModels;
