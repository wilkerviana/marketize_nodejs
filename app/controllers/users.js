module.exports.user = (app, req, res) => {
  const connection = app.config.dbConnection();
  const usersModel = new app.app.models.UsersDAO(connection);

  usersModel.getUsers(function(err, users) {
    const user = users.pop();
    res.render("users/myaccount", { user });
  });
  connection.end();
};

module.exports.register_user = (app, req, res) => {
  const connection = app.config.dbConnection();
  const usersModel = new app.app.models.UsersDAO(connection);
  const user = req.body;

  usersModel.registerUsers(user, (err, users) => {
    res.redirect("/myaccount");
  });
  connection.end();
};
