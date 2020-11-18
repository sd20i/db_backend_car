const RootEndpoint = (app) => {
  app.get("/", (req, res) => {
    res.status(200).send("Root endpoint");
  });
};

module.exports = RootEndpoint;
