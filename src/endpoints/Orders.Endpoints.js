const { sequelize } = require("../database/Connection");
const {
  createNewOrder,
  getAllOrders,
  createOrderItems,
  getOrderByCustomer,
} = require("../requests/Orders.Requests");

const OrdersEndpoints = (app) => {
  // get all orders
  app.post("/getAllOrders", async (req, res) => {
    try {
      const data = await getAllOrders();
      res.status(200).json({ msg: "", data: data });
    } catch (error) {
      console.log(error);
      res.status(200).json({ msg: "Could not fetch orders", data: [] });
    }
  });

  // create new order
  app.post("/createNewOrder", async (req, res) => {
    const { customerId, productsArray } = req.body;

    console.log(customerId);
    console.log(productsArray);
    const t = await sequelize.transaction();

    try {
      const newOrder = await createNewOrder(customerId, t);
      const newOrderId = newOrder["o_id"];

      await Promise.all(
        productsArray.map(async (product) => {
          await createOrderItems(product, newOrderId, t);
        })
      );

      await t.commit();

      res.status(200).json({ msg: "order created" });
    } catch (error) {
      console.log(error);
      res.status(200).json({ msg: "Could not create order" });
      await t.rollback();
    }
  });

  // get orders by customer
  app.post("/getOrderByCustomer", async (req, res) => {
    const { customerId, idToken } = req.body;

    try {
      const data = await getOrderByCustomer(customerId);
      res.status(200).json({ msg: "order", data: data });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Order error", data: {} });
    }
  });
};

module.exports = OrdersEndpoints;
