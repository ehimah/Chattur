'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _mongodb = require('mongodb');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://chattur:Password123*@ds026558.mlab.com:26558/chattur')
// var Conversation = mongoose.model('conversation', { name: String, message: String })
// var Message = mongoose.model('message', { name: String, message: String })
var router = _express2.default.Router();

router.get('/conversations', function (req, res) {});

router.get('/messages', function (req, res) {
  var message = new Message(req.body);
  message.save(function (err) {
    if (err) sendStatus(500);
    res.sendStatus(200);
  });
});

exports.default = router;