const mysql = require("mysql");

function connectionMySQL() {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "marketize"
  });
}
module.exports = () => {
  return connectionMySQL;
};
