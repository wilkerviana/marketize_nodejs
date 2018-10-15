module.exports = app => {
  app.get("/users/login", (req, res) => {
    app.app.controllers.users.user(app, req, res);
  });

  app.get("/users/register", (req, res) => {
    res.render("users/register");
  });

  app.post("/users", (req, res) => {
    app.app.controllers.users.register_user(app, req, res);
  });
};
