const { ProductTypeModel } = require("../models/ProductTypeModel");
const { Products } = require("../models/ProductsModel");
const { Manufacture } = require("../models/ManufacturersModel");

const getProductsByType = async () => {
  return await ProductTypeModel.findAll({
    include: { model: Products, include: { model: Manufacture } },
    order: [["pt_id", "ASC"]],
  });
};

module.exports = { getProductsByType };
