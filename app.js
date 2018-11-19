const express = require( 'express' );
const cors = require( 'cors' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );
const passport = require( 'passport' );

require( './api/models/db' );
require( './api/config/passport' );

var app = express();

app.use( passport.initialize() );
app.use( '/api', routesApi )

// Catch unauthorized errors. 
app.use( function ( err, req, res, next ) {
  if ( err.name === 'UnauthorizedError' ) {
    res.status( 401 );
    res.json( { "message": err.name + ": " + err.message } );
  }
} );

module.exports = app;