var express = require('express');
var app = express();
var movies = [{"_id":5495,"title":"test","releaseYear":"tetst","director":"tttt","genre":"tttt","__v":0},{"_id":5496,"title":"Harry Potter","releaseYear":"2000","director":"J.K Rowling","genre":"Stve","__v":0},{"_id":5497,"title":"C++","releaseYear":"O'relly","director":"batman","genre":"Old man","__v":0},{"__v":0,"_id":5499,"director":"nmv","genre":"ggg","releaseYear":"7868","title":"yyyyy"},{"_id":5500,"title":"fewf","releaseYear":"few","director":"fwe","genre":"efew","__v":0},{"_id":5501,"title":"refrferferf","releaseYear":"erferr","director":"ferref","genre":"ref","__v":0},{"_id":5502,"title":"feg","releaseYear":"gf","director":"gf","genre":"gf","__v":0}];
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use(express.static(__dirname));
app.get('/moviesbackend', function(req, res){
	  res.writeHead(200, {'content-type': 'text/json' });
		res.write(JSON.stringify( movies));
		res.end('\n');

});
app.get('/moviesbackend/:id', function(req, res) {
    var movieId = req.params.id;
    console.log(movieId);
    var movieInfo;
    for(var index in movies  ){
       if(movies[index]["_id"] == movieId ){
         console.log(movies[index]);
         movieInfo =  movies[index];
         break;
       }
    }
    res.writeHead(200, {'content-type': 'text/json' });
		res.write(JSON.stringify( movieInfo));
		res.end('\n');

});
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Movie app running on ' +  port);
});
