import express from 'express';
import { json, urlencoded } from 'body-parser';
import mongoose from 'mongoose'

const app = express();
const port = process.env.PORT || 5000;
app.use(json());
app.use(urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user:password@ds239648.mlab.com:39648/db_name')
 

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('api/contacts',(req,res)=>{
  
});
app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});



app.listen(port, () => console.log(`Listening on port ${port}`));