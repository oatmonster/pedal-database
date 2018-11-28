var express = require( 'express' );
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var cors = require( 'cors' );
var passport = require( 'passport' );

require( './api/models/db' );
require( './api/config/passport' );

var routesApi = require( './api/routes/index' );

var app = express();

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( cors() );

app.use( passport.initialize() );

app.use( '/api', routesApi );

module.exports = app;