const shortid = require("shortid");
var db = require("../db.js");

module.exports.index = function(req, res) {
  res.render("users/index", {
    users: db.get("users").value()
  });
};

module.exports.info = function(req, res) {
  var id = req.params.id;
	var userInfo = db.get('users').find({id: id}).value();

	res.render('users/info', {
		users: userInfo
	});
};

module.exports.add = function(req, res) {
  req.body.id = shortid.generate();
  var errors = [];
  console.log(req.body.name);
  if (req.body.name.length > 10) {
    errors.push('Không được nhập quá 10 ký tự');
    res.render('users/index', {
      errors: errors,
      users: db.get("users").value()
    })
  } 
  if (req.body.name.length <= 10){
    db.get("users").push(req.body).write();
    res.redirect('/users');
  }
};

module.exports.set = function(req, res) {
  db.get('users')
    .find({ id: req.body.id })
    .assign({ name: req.body.name})
    .write()
  res.redirect("/users/info/" + req.body.id);
};

module.exports.remove = function(req, res) {
  db.get('users')
  .remove({ id: req.body.id })
  .write()
  res.redirect("/users");
};