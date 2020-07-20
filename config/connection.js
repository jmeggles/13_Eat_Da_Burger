// Set up MySQL connection.
var mysql = require("mysql");

// make connection with JAWS db
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}  else {

  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burgers_db"
  });
}

// make connection with database
connection.connect();

// Export connection for our ORM to use.
module.exports = connection;
