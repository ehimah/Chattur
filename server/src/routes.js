import express from 'express'
import mongoose from 'mongoose'
import axios from 'axios'
import { MongoClient } from 'mongodb'
import downloadReport from './report'
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://chattur:Password123*@ds026558.mlab.com:26558/chattur')
// var Conversation = mongoose.model('conversation', { name: String, message: String })
// var Message = mongoose.model('message', { name: String, message: String })
const router = express.Router();

router.get('/conversations', (req, res) => {
  res.json({
    message: "A conversation"
  })
})

router.get('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) => {
    if (err)
      sendStatus(500);
    res.sendStatus(200);
  })
});

router.get('/tlm', (req, res) => {


  downloadReport('enyocommandroadlagos@enyoretail.com', 'Finance@123')
    .then(response => {
      console.log('tlm route: success =>', response)
      response.pipe(res)
    })
    .catch(error=>{
      console.log('tlm route: error =>', error)
    })
});


export default router;