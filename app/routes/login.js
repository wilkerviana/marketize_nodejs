module.exports = app => {
  app.get("/user/login", (req, res) => {
    res.render("users/login");
  });
};
