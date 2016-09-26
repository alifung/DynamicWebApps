var express = require('express');
var app = express();
var Request = require('request');
var url = 'https://api.spotify.com/v1/search';


//routes!
app.get(function(req, res) {
	//request playlist from database
	req.get('url' + 'data.q' + 'playlist');
	app.get('api.spotify.com/v1/search/:type?');
	req.query.type.search;
	req.protocol('https');
	res.send('Here are your playlist results');
});

//attempt at trying to retrieve server through 
//main page route
/*	var dataForThePage= {
		message: currentWord,
	};
})

//json serving route
app.get("search", function(req, res){
	var requestURL = 'http://api.spotify.com/v1/search?type=playlist&/' + searchWord;
	Request(requestURL, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var theData = JSON.parse(body);
			res.json(theData);
		}
	});
});

/*app.use(function(req, res) {
	response.writeHead(200, {"Content-Type": "text/plain" })
	response.end("Hello World\n");
});
*/
app.get("*", function(req, res) {
	res.status(404);
	res.send('OH NO! 404 error!');
})



app.listen(3000); //same thing as http:createserver(app).listen(localhost#)