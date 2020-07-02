const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

var arrUsers = [
	{name: 'Nấu cơm'},
	{name: 'học bài'}
	{name: 'Loc'}
	{name: 'Loc'}
	{name: 'Loc'}
]

app.get('/', (request, response) => {
  response.render('index', {
    name: 'Nam'
  });
});

app.get('/users', (req, res) => {
  res.render('users/index', 
      users = arrUsers)
})

app.get('/users/todos', (req, res) => {
  var q = req.query.q;
  var result = arrUsers.filter(function(user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  })
  res.render('users/index', 
      users = result)
})

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
