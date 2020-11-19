const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/Connection");

class OrderItem extends Model {}

OrderItem.init(
  {
    oi_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    order_fk: { type: DataTypes.INTEGER(11), allowNull: false },
    product_fk: { type: DataTypes.INTEGER(11), allowNull: false },
  },
  {
    tableName: "orderItems",
    sequelize,
    timestamps: false,
  }
);



module.exports = { OrderItem };
