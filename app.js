var express = require('express');
var app = express();

app.use( express.bodyParser() );

app.get('/', function(req, res, next) {
  res.send('works');
});

app.post('/', function(req, res){
  var postData = req.body;
  var postKeys = Object.keys( postData );
  var baseURL = 'http://siteinquestion.com/';
  var queryString = '';

  for (var key in postKeys) {
    if (key == 0) queryString += '?' + postKeys[key] + '=' + postData[ postKeys[key] ];
    else queryString += '&' + postKeys[key] + '=' + postData[ postKeys[key] ];
  }

  res.send(baseURL + queryString);
});

app.listen(3000);
console.log('Listening on port 3000');
