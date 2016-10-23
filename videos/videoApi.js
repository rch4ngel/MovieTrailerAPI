
// Require/Include videoModel
var Videos = require('./videoModel');

module.exports = function(app){
  console.log('Video App module loaded and running!');

  // Create Route to videos formated in JSON.
  app.get('/api/movies', function(req, res){
    Videos.find({"isTvShow" : "false"},{_id: 0, __v: 0}, function(err, movies){
      if(err) throw err;

      res.send(movies);
    });
  })

  app.get('/api/tvshows', function(req, res){
    Videos.find({"isTvShow" : "true"},{_id: 0, __v: 0}, function(err, tvShows){
      if(err) throw err;

      res.send(tvShows);
    });
  })
}
