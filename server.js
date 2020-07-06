const express = require("express");
var bodyParser = require("body-parser");

var bookRoutes = require('./routes/book');
var userRoutes = require('./routes/user');

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

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
