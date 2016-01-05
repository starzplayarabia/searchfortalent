'use strict';

var express = require('express');
var swig 	= require('swig');
var app     = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.route('/').get(function(req, res) {
    res.render('index', null);
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d", this.address().port);
});
