const { createNewOrder, getAllOrders } = require("../requests/Orders.Requests");

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

  // get all orders
  app.post("/createNewOrder", async (req, res) => {
    const { order } = req.body;

    try {
      const data = await createNewOrder(order);
      res.status(200).json({ msg: "order created" });
    } catch (error) {
      console.log(error);
      res.status(200).json({ msg: "Could not create order" });
    }
  });
};

module.exports = OrdersEndpoints;
