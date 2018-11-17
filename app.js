var express = require( 'express' );
var cors = require( 'cors' );
var bodyParser = require( 'body-parser' );
var app = express();

var posts = [
  { message: 'hello' },
  { message: 'hi' },
];

app.use( cors() );
app.use( bodyParser.json() );

app.get( '/posts', ( req, res ) => {
  res.send( posts );
} );

app.post( '/register', ( req, res ) => {
  var userData = req.body;
  res.sendStatus( 200 );
  console.log( userData );
} );

app.listen( 3000 );
