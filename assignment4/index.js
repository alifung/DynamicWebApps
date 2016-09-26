var express = require('express');
var app = express();



/*attempt at trying to reach api through routes... not so successful!
app.get(function(req, res) {
	//request playlist from database
	req.get('url' + 'data.q' + 'playlist'); //request URL depending on search query input?
	app.get('api.spotify.com/v1/search/:type?');
	req.query.type.search;
	req.protocol('https'); //is this related to the var http://
	res.send('Here are your playlist results'); //ideally what shows up after it's successful?
});

*/
app.get('/',function(req,res){
    res.send('<h1>yo peepz<h1>');
});


//last resort before 404! 
app.use(express.static(__dirname + '/public'));


//404 error! BUM BUM BUMMMM
app.get("*", function(req, res) {
	res.status(404);
	res.send('OH NO! 404 error!');
})



app.listen(3000); //same thing as http:createserver(app).listen(localhost#)