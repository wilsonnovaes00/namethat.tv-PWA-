const express = require('express'),
  app = express();


app.get('/', function(req, res) {
  res.send('Ola Mundo');
});

app.listen(3000);
