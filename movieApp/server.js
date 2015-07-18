var express = require('express');
var app = express();
var movies = [{"_id":5495,"title":"test","releaseYear":"tetst","director":"tttt","genre":"tttt","__v":0},{"_id":5496,"title":"Harry Potter","releaseYear":"2000","director":"J.K Rowling","genre":"Stve","__v":0},{"_id":5497,"title":"C++","releaseYear":"O'relly","director":"batman","genre":"Old man","__v":0},{"__v":0,"_id":5499,"director":"nmv","genre":"ggg","releaseYear":"7868","title":"yyyyy"},{"_id":5500,"title":"fewf","releaseYear":"few","director":"fwe","genre":"efew","__v":0},{"_id":5501,"title":"refrferferf","releaseYear":"erferr","director":"ferref","genre":"ref","__v":0},{"_id":5502,"title":"feg","releaseYear":"gf","director":"gf","genre":"gf","__v":0}];
var users = [{username: 1, password :1, _id: "473t4783"}];
var bodyParser = require('body-parser');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.redirect('/index.html');
});
app.post('/login', function(req, res){
    var userData = req.body;
    var userFound = false;
    for(var index in users){
      if(users[index].username == userData.username){
        userFound = true;
        console.log("bingo, user found");
        break;
      }
    }

	  res.writeHead(200, {'content-type': 'text/json' });
		res.write(JSON.stringify( {"validUser" : userFound}));
		res.end('\n');

});
app.post('/moviesbackend', function(req, res){
    var newMovie = req.body;
    newMovie["_id"] = new Date().getTime();
    movies.push(newMovie);
	  res.writeHead(200, {'content-type': 'text/json' });
		res.write(JSON.stringify( {"message" : "Movie Added"}));
		res.end('\n');

});
app.get('/moviesbackend', function(req, res){
	  res.writeHead(200, {'content-type': 'text/json' });
		res.write(JSON.stringify( movies));
		res.end('\n');

});
app.get('/moviesbackend/:id', function(req, res) {
    var movieId = req.params.id;
    //console.log(movieId);
    var movieInfo;
    for(var index in movies  ){
       if(movies[index]["_id"] == movieId ){
         //console.log(movies[index]);
         movieInfo =  movies[index];
         break;
       }
    }
    res.writeHead(200, {'content-type': 'text/json' });
		res.write(JSON.stringify( movieInfo));
		res.end('\n');

});
app.put('/moviesbackend/:id', function(req, res) {
    var movieId = req.params.id;
    var editedInfo = req.body;
    var movieInfo;
    for(var index in movies  ){
       if(movies[index]["_id"] == movieId ){
         //console.log(movies[index]);
          movies[index] = editedInfo;
         break;
       }
    }
    res.writeHead(200, {'content-type': 'text/json' });
		res.write(JSON.stringify( editedInfo));
		res.end('\n');

});

app.delete('/moviesbackend/:id', function(req, res) {
    var movieId = req.params.id, deletedMovie;;
    for(var index in movies  ){
       if(movies[index]["_id"] == movieId ){
         //console.log(movies[index]);
          deletedMovie = movies[index];
          movies[index] = null;
         break;
       }
    }
    movies = movies.filter(function(item) {
      return (item !== null);
    });

    //console.log(movies);
    res.writeHead(200, {'content-type': 'text/json' });
		res.write(JSON.stringify( deletedMovie));
		res.end('\n');

});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Movie app running on ' +  port);
});
