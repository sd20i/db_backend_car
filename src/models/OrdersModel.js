const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/Connection");

class Orders extends Model {}

Orders.init(
  {
    o_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    o_tracking_number: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    customer_fk: { type: DataTypes.INTEGER(11), allowNull: false },
  },
  {
    tableName: "orders",
    sequelize,
    updatedAt: false,
  }
);

module.exports = { Orders };
