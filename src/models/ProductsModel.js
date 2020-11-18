const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/Connection");
const { ProductTypeModel } = require("./ProductTypeModel");
const { Manufacture } = require("./ManufacturersModel");

class Products extends Model {}

Products.init(
  {
    p_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    p_model_name: { type: DataTypes.STRING(25), allowNull: false },
    p_price: { type: DataTypes.FLOAT, allowNull: false },
    p_description: { type: DataTypes.TEXT, allowNull: false },
    product_type_fk: { type: DataTypes.INTEGER(11), allowNull: false },
    manufacturer_fk: { type: DataTypes.INTEGER(11), allowNull: false },
  },
  {
    tableName: "products",
    sequelize,
    timestamps: false,
  }
);

Products.hasOne(Manufacture, {
  sourceKey: "manufacturer_fk",
  foreignKey: "m_id",
});

const getProducts = async () => {
  return await Products.findAll({});
};

module.exports = { Products, getProducts };
