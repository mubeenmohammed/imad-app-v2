var express = require('express');           //library used to create the web server
var morgan = require('morgan');             //library used to know output logs of our server
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article2', function (req, res){
     res.send('Article 2 requsted and will be available');
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/article3', function (req, res){
     res.send('Article 3 requsted and will be available');
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article1', function (req, res){
     res.send('Article 1 requsted and will be available');
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
