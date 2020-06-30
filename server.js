const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (request, response) => {
  response.render('index', {
    users: [
      {
        name: 'Nam'
      },
      {
        name: 'Loc'
      }
    ]
  });
});


app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
