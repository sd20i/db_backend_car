const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/Connection");

class Customer extends Model {}

Customer.init(
  {
    c_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    c_name: { type: DataTypes.STRING(40), allowNull: true },
    c_phone: { type: DataTypes.INTEGER(11), allowNull: true },
    c_email: { type: DataTypes.STRING(120), allowNull: false },
    c_number: { type: DataTypes.INTEGER(11), allowNull: true },
    c_floor: { type: DataTypes.INTEGER(11), allowNull: true },
    c_street: { type: DataTypes.STRING(70), allowNull: true },
    c_zip: { type: DataTypes.INTEGER(4), allowNull: true },
    c_city: { type: DataTypes.STRING(100), allowNull: true },
    c_country: { type: DataTypes.STRING(100), allowNull: true },
  },
  {
    tableName: "customers",
    sequelize,
    timestamps: false,
  }
);

module.exports = { Customer };
