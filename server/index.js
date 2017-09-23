var express = require('express');
var jsonfile = require('jsonfile');
var bodyParser = require('body-parser');

var cors = require('cors');
var app = express();

app.use(bodyParser.json())
app.use(cors())

var contentData = './server/data/SoftwareDeveloper_Test02_content.json';

app.get('/api/contents', function (req, res) {
  jsonfile.readFile(contentData, function(err, obj) {
    if (err) {
      res.send(err);
    }
    res.send(obj);
  })
});

app.put('/api/contents', function (req, res) {
  jsonfile.writeFile(contentData, req.body, {spaces: 2}, function (err) {
    if (err) {
      console.error(err)
      res.send(err);
      return;
    }
    res.send('OK');
  })
});

app.listen(5090, function () {
  console.log('Server started on 5090');
});