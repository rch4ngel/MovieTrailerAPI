// Require/Import needed modules.
var express = require('express');
var videoApi = require('./videos/videoApi');
var videoController = require('./videos/videoController');

var app = express();

var port = process.env.PORT || 3000;

var mongoose = require('mongoose');

// Connect to mongo database
// Using Mongoose event emitters


mongoose.connect('mongodb://localhost/movie_trailer_db', function(err){
  if(err){
    console.log('Error: Unable to connect to movie_trailer_db');
  }
  else {
    console.log('Connected to Mongo Database')
  }
})

app.listen(port);

// Run
videoApi(app);
videoController(app);

// At the END of each session describe TODO comments to notify remaining functionality to implement
// TODO: SET UP MONGODB FOR VIDEOS!
