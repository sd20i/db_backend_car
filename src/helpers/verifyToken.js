const verifyIdToken = (admin, idToken) => {
  try {
    return admin
      .auth()
      .verifyIdToken(idToken)
      .then((verifiedToken) => {
        return verifiedToken;
      })
      .catch((error) => {
        return false;
      });
  } catch (tokenError) {
    return false;
  }
};

module.exports = verifyIdToken;
