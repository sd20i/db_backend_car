const { getProductsByType } = require("../requests/Products.Requests");

const ProductsEndpoints = (app) => {
  // get all products by product type
  app.post("/getProductsByProductType", async (req, res) => {
    try {
      const data = await getProductsByType();
      res.status(200).json({ msg: "", data: data });
    } catch (error) {
      console.log(error);
      res.status(200).json({ msg: "Could not fetch data", data: [] });
    }
  });
};

module.exports = ProductsEndpoints;
