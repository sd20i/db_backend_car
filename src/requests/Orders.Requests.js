const { Orders } = require("../models/OrdersModel");
const AssociationModels = require("../models/TestCombined");

const createNewOrder = async (order) => {
  return await Orders.create({
    customer_fk: order.customer_fk,
  });
  return null;
};

const getAllOrders = async () => {
  return await Orders.findAll({
    include: { model: AssociationModels().Customer },
  });
};

module.exports = { createNewOrder, getAllOrders };
