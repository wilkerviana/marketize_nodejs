module.exports = app => {
  app.get("/myaccount", (req, res) => {
    app.app.controllers.users.user(app, req, res);
  });
};
