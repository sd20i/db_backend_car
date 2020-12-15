const {
  createNewUser,
  updateCustomer,
} = require("../requests/Customers.Requests");
const addDataToFirestore = require("../firestore/firestoredb");

const verifyToken = require("../helpers/verifyToken");

const CustomersEndpoints = (app, admin, firebaseDb) => {
  // sign in user and get verified token back
  app.post("/signIn", async (req, res) => {
    const { idToken } = req.body;
    try {
      const verifiedToken = await verifyToken(admin, idToken);

      if (verifyToken) {
        const user = await createNewUser(verifiedToken);
        let data = user[0].dataValues;
        // insert user into firebase doc
        await addDataToFirestore("users", verifiedToken, firebaseDb);
        res.status(200).json({ msg: "user", data: data });
      } else {
        res.status(200).json({ msg: "no user", data: {} });
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "not working", data: {} });
    }
  });

  // update user info
  app.post("/updateuser", async (req, res) => {
    const { customer, idToken } = req.body;

    try {
      const verifiedToken = await verifyToken(admin, idToken);

      if (verifyToken !== false) {
        const data = await updateCustomer(customer);

        res.status(200).json({ msg: "user", data: data });
      } else {
        res.status(200).json({ msg: "no user", data: {} });
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({ msg: "not working", data: {} });
    }
  });
};

// create user

module.exports = CustomersEndpoints;
