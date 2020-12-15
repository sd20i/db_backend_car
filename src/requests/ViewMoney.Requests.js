const { ViewMoneyThisYear } = require("../models/ViewMoneyThisYearModel");


const getMoneyThisYear = async () => {
   
  return await ViewMoneyThisYear.findAll();
};





module.exports = { getMoneyThisYear };
