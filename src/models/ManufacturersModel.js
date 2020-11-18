const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../database/Connection");

class Manufacture extends Model {}

Manufacture.init(
  {
    m_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    m_name: { type: DataTypes.STRING(25), allowNull: false },
    m_country: { type: DataTypes.STRING(30), allowNull: false },
  },
  {
    tableName: "manufacturers",
    sequelize,
    timestamps: false,
  }
);

module.exports = { Manufacture };
