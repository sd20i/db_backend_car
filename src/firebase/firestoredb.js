const admin = require("firebase-admin");
const serviceAccount = require("../../carbuilderServiceAccount.json");

const addDataToFirestore = async (collection, doc, data, db) => {
  const docRef = db.collection(collection).doc(data.name);

  return await docRef.set({
    data,
  });

  return true;
};

module.exports = addDataToFirestore;
