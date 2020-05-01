// Require mysql
var mysql = require("mysql");

// Set up our connection information
var connection = 
  process.env.JAWSDB_URL
  ? mysql.createConnection(process.env.JAWSDB_URL)
  : mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Diallo123_",
  database: "contacts"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
