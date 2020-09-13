// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.

// Set up MySQL connection.
const mysql = require("mysql");

// Create connection
let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "asdf@123",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  
    if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use.
module.exports = connection;