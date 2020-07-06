const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);
const shortid = require("shortid");

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.set("view engine", "pug");
app.set("views", "./views");

db.defaults({ books: [], users: [] }).write();

app.get("/", function(req, res) {
  res.render("index");
});

// Books
app.get("/books", function(req, res) {
  res.render("books/index", {
    books: db.get("books").value()
  });
});

app.get("/books/info/:id", function(req, res) {
  var id = req.params.id;
	var bookInfo = db.get('books').find({id: id}).value();

	res.render('books/info', {
		books: bookInfo
	});
});
app.get("/books/info/:id", function(req, res) {
  var id = req.params.id;
	var bookInfo = db.get('books').find({id: id}).value();

	res.render('books/info', {
		books: bookInfo
	});
});

app.post("/books/add", function(req, res) {
  req.body.id = shortid.generate();
  db.get("books").push(req.body).write();
  res.redirect('/books');
});

app.post("/books/set", function(req, res) {
  db.get('books')
    .find({ id: req.body.id })
    .assign({ title: req.body.title})
    .write()
  res.redirect("/books/info/" + req.body.id);
})

app.post("/books/remove", function(req, res) {
  db.get('books')
  .remove({ id: req.body.id })
  .write()
  res.redirect("/books");
})

// Users

app.get("/users", function(req, res) {
  res.render("users/index", {
    users: db.get("users").value()
  });
});

app.get("/users/info/:id", function(req, res) {
  var id = req.params.id;
	var userInfo = db.get('users').find({id: id}).value();

	res.render('users/info', {
		users: userInfo
	});
});

app.post("/users/add", function(req, res) {
  req.body.id = shortid.generate();
  db.get("users").push(req.body).write();
  res.redirect('/users');
});

app.post("/users/set", function(req, res) {
  db.get('users')
    .find({ id: req.body.id })
    .assign({ name: req.body.name})
    .write()
  res.redirect("/users/info/" + req.body.id);
})

app.post("/users/remove", function(req, res) {
  db.get('users')
  .remove({ id: req.body.id })
  .write()
  res.redirect("/users");
})

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
