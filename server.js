const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (request, response) => {
  response.send('Hello');
});

app.get('/')

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
