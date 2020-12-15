const { sequelize } = require("../database/Connection");
const {  getMoneyThisYear } = require("../requests/ViewMoney.Requests");

const ViewMoneyEndpoints = (app) => {
  app.get("/getMoneyThisYear", async (req, res) => {
    try {
        
      const data = await getMoneyThisYear();
      res.status(200).json({ msg: "", data: data });
    } catch (error) {
      console.log(error);
      res.status(200).json({ msg: "Could not fetch views", data: [] });
    }
  });

  
};

module.exports = ViewMoneyEndpoints;
