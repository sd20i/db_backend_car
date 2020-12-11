const { Orders } = require("../models/OrdersModel");
const { OrderItem } = require("../models/OrderItemsModel");
const AssociationModels = require("../models/TestCombined");
const { sequelize } = require("../database/Connection");

const createNewOrder = async (customerId, t) => {
  return await Orders.create(
    {
      customer_fk: customerId,
    },
    { transaction: t }
  );
};

const createOrderItems = async (productId, orderId, t) => {
  return await OrderItem.create(
    {
      order_fk: orderId,
      product_fk: productId,
    },
    { transaction: t }
  );
};

const getAllOrders = async () => {
  return await Orders.findAll({
    include: { model: AssociationModels().Customer },
  });
};

const getOrderByCustomer = async (customerId) => {
  const order = await Orders.findOne({
    where: { customer_fk: customerId },
    include: [
      {
        model: AssociationModels().OrderItem,
        include: { model: AssociationModels().Products },
      },
    ],
    order: [["createdAt", "DESC"]],
  });
  if (order !== null) {
    return order;
  }
  return {};
};

module.exports = {
  createNewOrder,
  getAllOrders,
  createOrderItems,
  getOrderByCustomer,
};
