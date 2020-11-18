const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/Connection");
const { Products } = require("./ProductsModel");
class ProductTypeModel extends Model {}

ProductTypeModel.init(
  {
    pt_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    pt_name: { type: DataTypes.STRING(25), allowNull: false },
  },
  {
    tableName: "productType",
    sequelize,
    timestamps: false,
  }
);

ProductTypeModel.hasMany(Products, {
  sourceKey: "pt_id",
  foreignKey: "product_type_fk",
});

module.exports = { ProductTypeModel };
