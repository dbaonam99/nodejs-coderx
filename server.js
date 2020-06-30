const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.send('<ul>Todo list<li>Đi chợ</li><li>Nấu cơm</li><li>Rửa bát</li><li>Học coder.tokyo</li></ul>');
});


app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
