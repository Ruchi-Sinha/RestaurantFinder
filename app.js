const express = require("express");
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
 var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
//set up express app
const app = express();


//connect to mongo db
mongoose.connect('mongodb://localhost/foodforum');
mongoose.promise = global.Promise;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(methodOverride());

//initialize routes
//this apends ''/api' in the beginning of all the routes
app.use('/api', routes)

//error handling middleware
app.use(function(err,req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message});
})

//Listen for request
app.listen(3000, function(){
  console.log("listening on port 3000")
});
