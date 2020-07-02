const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

var arrUsers = [
	{name: 'Nấu cơm'},
	{name: 'học bài'},
	{name: 'đi học'},
	{name: 'chơi game'},
	{name: 'dọn nhà'}
]

app.get('/', (request, response) => {
  response.render('index', {
    name: 'Nam'
  });
});

app.get('/todos', (req, res) => {
  res.render('todos/index', 
      todos = arrUsers)
})

app.get('/todos/search', (req, res) => {
  var q = req.query.q;
  var result = arrUsers.filter(function(user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  })
  res.render('todos/index', 
      todos = result)
})

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
