function UsersDAO(connection) {
  this._connection = connection;
}

UsersDAO.prototype.getUsers = function(callback) {
  this._connection.query("SELECT * FROM users", callback);
};

UsersDAO.prototype.registerUsers = function(user, callback) {
  this._connection.query("INSERT INTO users SET ?", user, callback);
};

module.exports = () => UsersDAO;
