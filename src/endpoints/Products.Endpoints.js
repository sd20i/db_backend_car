const { getProductsByType } = require("../requests/Products.Requests");

const ProductsEndpoints = (app) => {
  // get all products by product type
  app.get("/getProductsByProductType", async (req, res) => {
    try {
      const data = await getProductsByType();
      res.status(200).json({ msg: "", data: data });
    } catch (error) {
      res.status(200).json({ msg: "Could not fetch data", data: [] });
    }
  });
};

module.exports = ProductsEndpoints;
