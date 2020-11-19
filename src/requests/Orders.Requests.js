const { Orders } = require("../models/OrdersModel");
const { OrderItem } = require("../models/OrderItemsModel");
const AssociationModels = require("../models/TestCombined");

const createNewOrder = async (customerId, t) => {
  return await Orders.create({

    customer_fk: customerId,
  },  { transaction : t });
};

const createOrderItems = async (productId, orderId, t) => {
  return await OrderItem.create({
    order_fk : orderId,
    product_fk : productId
    
  }, { transaction : t });
};

const getAllOrders = async () => {
  return await Orders.findAll({
    include: { model: AssociationModels().Customer },
  });
};



module.exports = { createNewOrder, getAllOrders, createOrderItems };
