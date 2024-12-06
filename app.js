/*

Tejbahadur Singh sample node.js project

*/
var http = require('http');
var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3005); // listen port
app.set('views', __dirname + '/app/server/views'); // view to load
app.set('view engine', 'ejs'); // view engine
app.use(express.static(__dirname + '/app/public')); // public directory containing public data like css, js, images

require('./app/routes')(app); // route location

/*

http server configuration

*/
http.createServer(app).listen(app.get('port'), function(){
	console.log('Sistem ' + app.get('port') + ' Portu Üzerinde Çalışıyor.');
});
