
const { newOrderStoredProcedure, newOrderItemStoredProcedure, getNewOrderId } = require("../requests/StoredProcedureOrders.Requests");

const StoredProcedureOrdersEndpoint = (app) => {
  app.post("/newOrderStoredProcedure", async (req, res) => {
    try {

      const { customer_fk, productsArray }  = req.body;

     //const newOrderId = await newOrderStoredProcedure(customer_fk);

     //console.log("New OrderId: "+newOrderId)

     const newOrderId = await getNewOrderId();
     console.log("New OrderId: "+newOrderId)
/*
      await Promise.all(productsArray.map( async (product) => {
        
        await newOrderItemStoredProcedure(product, newOrderId);
      }));
*/
      res.status(200).json({ msg: "orders created"});
    } catch (error) {
      console.log("Endpoint error: "+error);
      res.status(200).json({ msg: "Could not create new Order" });
    }
  });

  
};

module.exports = StoredProcedureOrdersEndpoint;