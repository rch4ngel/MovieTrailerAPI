var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var videoSchema = new Schema({
  title: String,
  storyline: String,
  trailer_youtube_url: String,
  poster_image_url: String,
  isTvShow: Boolean,
  season: String,
  episode: String,
  duration: String,
  rating: String
})

var Videos = mongoose.model('Videos', videoSchema);

module.exports = Videos;
