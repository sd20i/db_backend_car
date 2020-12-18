
const { deleteProduct } = require("../requests/DeleteProduct.Requests");

const DeleteProductEndpoint = (app) => {
  app.post("/deleteProduct", async (req, res) => {
    try {

     const { productId } = req.body;

     const boolDelete = await deleteProduct(productId);

     console.log(boolDelete)
     
     if(boolDelete){
        res.status(200).json({ msg: "product deleted!"});
     }else{
        res.status(200).json({ msg: "product not deleted, it has been purchased by a customer!"});
     }

      
    } catch (error) {
      console.log("Endpoint error: "+error);
      res.status(200).json({ msg: "Error trying to delete product" });
    }
  });

  
};

module.exports = DeleteProductEndpoint;