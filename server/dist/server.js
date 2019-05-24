'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 5000;
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({ extended: true }));

app.get('/api/hello', function (req, res) {
  res.send({ express: 'Hello From Express' });
});
app.post('/api/world', function (req, res) {
  console.log(req.body);
  res.send('I received your POST request. This is what you sent me: ' + req.body.post);
});

app.listen(port, function () {
  return console.log('Listening on port ' + port);
});