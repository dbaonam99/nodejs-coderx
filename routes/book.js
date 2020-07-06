const express = require("express");
const router = express.Router();
const shortid = require("shortid");

var db = require("../db.js");

router.get("/", function(req, res) {
  res.render("books/index", {
    books: db.get("books").value()
  });
});

router.get("/info/:id", function(req, res) {
  var id = req.params.id;
	var bookInfo = db.get('books').find({id: id}).value();

	res.render('books/info', {
		books: bookInfo
	});
});

router.get("/info/:id", function(req, res) {
  var id = req.params.id;
	var bookInfo = db.get('books').find({id: id}).value();

	res.render('books/info', {
		books: bookInfo
	});
});

router.post("/add", function(req, res) {
  req.body.id = shortid.generate();
  db.get("books").push(req.body).write();
  res.redirect('/books');
});

router.post("/set", function(req, res) {
  db.get('books')
    .find({ id: req.body.id })
    .assign({ title: req.body.title})
    .write()
  res.redirect("/books/info/" + req.body.id);
})

router.post("/remove", function(req, res) {
  db.get('books')
  .remove({ id: req.body.id })
  .write()
  res.redirect("/books");
})

module.exports = router;