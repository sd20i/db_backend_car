const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/Connection");

class ViewMoneyThisYear extends Model {}

ViewMoneyThisYear.init(
  {
    money_made_thisyear: { type: DataTypes.DOUBLE, allowNull: true, primaryKey: true }
    
  },
  {
    tableName: "v_money_thisyear",
    sequelize,
    timestamps: false,
  }
);

module.exports = { ViewMoneyThisYear };
