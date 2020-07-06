const express = require("express");
const router = express.Router();
const shortid = require("shortid");

var db = require("../db.js");

router.get("/", function(req, res) {
  res.render("users/index", {
    users: db.get("users").value()
  });
});

router.get("/info/:id", function(req, res) {
  var id = req.params.id;
	var userInfo = db.get('users').find({id: id}).value();

	res.render('users/info', {
		users: userInfo
	});
});

router.post("/add", function(req, res) {
  req.body.id = shortid.generate();
  db.get("users").push(req.body).write();
  res.redirect('/users');
});

router.post("/set", function(req, res) {
  db.get('users')
    .find({ id: req.body.id })
    .assign({ name: req.body.name})
    .write()
  res.redirect("/users/info/" + req.body.id);
})

router.post("/remove", function(req, res) {
  db.get('users')
  .remove({ id: req.body.id })
  .write()
  res.redirect("/users");
})

module.exports = router;