const { sequelize } = require("../database/Connection");
const { createNewOrder, getAllOrders, createOrderItems } = require("../requests/Orders.Requests");

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

    const customer  = req.body.customer;
    const productsArray = req.body.products;

    const t = await sequelize.transaction();

    try {
      const newOrder = await createNewOrder(customer, t);
      const newOrderId = newOrder["o_id"];

      
      for(var i = 0; i < productsArray.length; i++){
        
         await createOrderItems(productsArray[i], newOrderId, t);
       
      }
     

      await t.commit();
      
      res.status(200).json({ msg: "order created" });
    } catch (error) {
      console.log(error);
      res.status(200).json({ msg: "Could not create order" });
      await t.rollback();
    }
  });
};

module.exports = OrdersEndpoints;
