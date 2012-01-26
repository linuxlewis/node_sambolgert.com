var express = require('express');
var app = express.createServer(
    express.logger()
    );
app.register('.html', require('ejs'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.configure(function(){
    app.use(app.router);
    app.use('/static', express.static(__dirname + '/static'));
    app.use(express.errorHandler({
        dumpExceptions: true, showStack:true }));
    });

app.get('/', function(req, res){
        res.render('home.html', {title: 'Sam Bolgert Softwarepreneur' });
    });

app.get('/works', function(req, res){
        res.render('works.html', {title: 'Sam Bolgert Softwarepreneur | Works' });
    });

app.get('/contact', function(req, res){
        res.render('contact.html', {title: 'Sam Bolgert Softwarepreneur | Contact' });
    });

app.listen(1337);
console.log("Server running on port 46067...");

