const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Creating geolocation Schema

//Create restaurant schema & model
const RestaurantSchema = new Schema({
  name : {
    type: String,
    required : [true, 'Name fields is required']
  },
  rating : {
    type: String,
  },
  delivery:{
    type: Boolean,
    default : false
  },
  postcode:{
    type: String,
    required: [true, 'postcode is required']
  }
  //Add in geo location
});

const Restaurant = mongoose.model('restaurants',RestaurantSchema);

module.exports = Restaurant;
