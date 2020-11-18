const { getUserById } = require("../requests/Customers.Requests");

const CustomersEndpoints = (app) => {
  app.post("/getUserById", async (req, res) => {
    const { userId } = req.body;
    try {
      let data = await getUserById(userId);
      res.status(200).json({ msg: "user data", data: data });
    } catch (error) {
      console.log(error);
      res.status(400).json({ msg: "could not fetch user", data: {} });
    }
  });
};

module.exports = CustomersEndpoints;
