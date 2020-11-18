const AssociationModels = require("../models/TestCombined");
const { Customer } = require("../models/CustomersModel");

const getUserById = async (userId) => {
  return await Customer.findByPk(userId, {
    include: { model: AssociationModels().Orders },
  });

  return {};
};

module.exports = { getUserById };
