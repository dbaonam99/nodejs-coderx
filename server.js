const express = require("express");
var bodyParser = require("body-parser");

var bookRoutes = require('./routes/book');
var userRoutes = require('./routes/user');
var transRoutes = require('./routes/transaction');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function(req, res) {
  res.render("index");
});

app.use("/books", bookRoutes);
app.use("/users", userRoutes);
app.use("/transaction", transRoutes);

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
