const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');

//get a list of restaurants from the database
router.get('/restaurants', function(req, res, next){
  Restaurant.find({postcode : req.query.code}).then(function(restaurants){
    //res.send(restaurants);
    res.json(restaurants);
  }).catch(next);
});

//add a new restaurant to the db
router.post('/restaurants', function(req, res, next){
  //var restaurant = new Restaurant(req.body);
  //restaurant.save();
  //Above two lines can be replaced by using mongoose method Create
  Restaurant.create(req.body).then(function(restaurant){
    //res.send(restaurant);
    res.json(restaurants);
  }).catch(next);
  //This says to go to the next middleware which in this case is errorhandler
});

//update a restaurant in db
router.put('/restaurants/:id', function(req, res, next){
  Restaurant.findByIdAndUpdate({_id : req.params.id}, req.body).then(function(){
    Restaurant.findOne({_id : req.params.id}).then(function(restaurant){
          //res.send(restaurant);
          res.json(restaurants);
    });
  }).catch(next);
});

//delete the resaturant
router.delete('/restaurants/:id', function(req, res, next){
  Restaurant.findByIdAndRemove({_id : req.params.id}).then(function(restaurant){
    //res.send(restaurant);
    res.json(restaurants);
  }).catch(next);

});

router.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

module.exports = router;
