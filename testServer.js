const express = require("express");
var cors = require('cors')
var app = express();

app.get('/', cors(), (req, res) => {
  res.send('Hello World!');
});

app.listen(5000, cors(), () => {
  console.log('Example backend-server listening on port 5000!');
});

app.use('/models', cors(), express.static('models'));

