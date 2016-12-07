var express = require("express");
var mongoose= require("mongoose");
var dbConfig= require("./config/database");
var app = express();

mongoose.connect(dbConfig.url);

require("./routes/book")(app);

app.listen(1234)
console.log("listen on port 1234")