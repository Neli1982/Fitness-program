import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import {routes} from './src/routes';

const app = express();
const practise = express();
const exercise = express();
const PORT = process.env.PORT || 4000;
const HOST = '127.0.0.1';

app.use(cors());
app.use('/practises', practise);
practise.use('/exercises', exercise);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//mongoose
mongoose.Promise = Promise;
//mongoose.connect('mongodb://localhost/practises');
mongoose.connect('mongodb://localhost/exercises');
//mongoose.connect('mongodb://localhost/practise_exercises');

//Middleware
//app.use((req,res,next)=>{
//  console.log(`My middleware`);
//  next();
//});

//routes end points
routes(app);


app.get('/', (req, res, next)=>{
  res.send(`<h1>Express Web App</h1>`);
  next();
});
practise.get('/', (req, res, next)=>{
  res.send(`<h1>Practises loaded</h1>`);
  next();
});
exercise.get('/', (req, res, next)=>{
  res.send(`<h1>Exercise loaded</h1>`);
  next();
});

app.listen(PORT, HOST, ()=>{
  process.stdout.write(`Listen On ${HOST}:${PORT}`);
});
