// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/all", function(req, res) {
    connection.query("SELECT * FROM contact", function(err, result) {
      if (err) {
        throw err
      } else {
        res.json(result);
      }
      
    })
  })

  app.post("/api/new", function(req, res) {
    console.log(req.body);
    connection.query("INSERT INTO contact (name, email, message, created_at) VALUES (?,?,?,?)", [req.body.name, req.body.email, req.body.message, req.body.created_at], function(err, result) {
      if (err) {
        throw err
      } else {
        console.log(req.body);
        res.end();
      }
    })
  })


};
