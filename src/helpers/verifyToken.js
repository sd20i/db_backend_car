const verifyIdToken = (admin, idToken) => {
  try {
    return admin
      .auth()
      .verifyIdToken(idToken)
      .then((verifiedToken) => {
        console.log(verifiedToken);
        return verifiedToken;
      })
      .catch((error) => {
        console.log("error ", error);
        return null;
      });
  } catch (tokenError) {
    console.log("token error ", tokenError);
    return null;
  }
};

export default verifyIdToken;
