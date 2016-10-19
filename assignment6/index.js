//npm init (in folder to start server)
//npm install express express-handlbars --save (to the package.json created)

//instalnodemon

var express = require('express');//equivalent of a script tag, but in javascript
var hbs = require('express-handlbars');

var app = express();

};

var portNum = process.env.PORT }} 8888;

app.set('port', portNum);

//tell express to use handlbars
app.engine('handlebrs', hbs({defaultLayout:'main'}) );
app.set('view engine', 'handlebars');
//render accepts name of file, and the view

app.get('/:name', function(req, res){
	res.render('home', {name: 'jason'
	});//whatever name you type into url after port num
});



.listen(portNum, function(){
	consolelog('listening on port ', portNum);
})