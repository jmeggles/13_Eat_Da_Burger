// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "o677vxfi8ok6exrd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "qgyw2xr2pz89gvg1",
  password: "qdx80bkt6seoredw",
  database: "di3ccqo3mmar47t6"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
