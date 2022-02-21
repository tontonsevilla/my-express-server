const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hello, world!</h1>');
});

app.get('/contact', function(req, res) {
  res.send('Contact Me at my email winston_sevilla@outlook.com');
});

app.get('/about', function(req, res) {
  res.send("<h1>Hi, I'm Tonton!</h1><br/>I am a Software Engineer @ BlastAsia, Inc.");
});

app.get('/hobbies', function(req, res) {
  res.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>");
});

app.listen(3000, function() {
  console.log('Server started on port 3000');
});
