var Videos = require('./videoModel');
var starterMovies = require('./seedData.json')

module.exports = function(app){
  app.get('/api/setupVideos', function(req, res){
    Videos.create(starterMovies, function(err, results){
      if(err) throw err;
      res.send(results);
    });
  });
}
