// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "orchard4227",
    database: "burgers_db"
  })
};

// Export connection for our ORM to use.
module.exports = connection;
