var express  = require("express");
var app = express();

app.use(express.static(__dirname + "/build"));

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Server is running at: " + process.env.IP + ":" + process.env.PORT);
});
