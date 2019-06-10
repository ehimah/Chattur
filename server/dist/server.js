'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 5000;

app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({ extended: true }));
app.use('/api', _routes2.default);

app.listen(port, function () {
  return console.log('Listening on port ' + port);
});