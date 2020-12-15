
const { newOrderStoredProcedure, newOrderItemStoredProcedure, getNewOrderId } = require("../requests/StoredProcedureOrders.Requests");

const StoredProcedureOrdersEndpoint = (app) => {
  app.post("/newOrderStoredProcedure", async (req, res) => {
    try {

      const { customer, products }  = req.body;

      await newOrderStoredProcedure(customer);

      const newOrderId = await getNewOrderId()

      console.log(newOrderId)

      await Promise.all(products.map( async (product) => {
        
      await newOrderItemStoredProcedure(product, newOrderId);
    }));

      res.status(200).json({ msg: "orders created"});
    } catch (error) {
      console.log("Endpoint error: "+error);
      res.status(200).json({ msg: "Could not create new Order" });
    }
  });

  
};

module.exports = StoredProcedureOrdersEndpoint;