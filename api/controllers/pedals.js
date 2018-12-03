var client = require( '../models/db' );

module.exports.getPedals = function ( req, res ) {

  client.query( 'SELECT * FROM pedals', ( err, result ) => {
    if ( err ) {
      console.log( err.stack )
    } else {
      res.status( 200 );
      res.json( result.rows );
    }
  } )
}

module.exports.getPedal = function ( req, res ) {

  client.query( 'SELECT * FROM pedals WHERE id = $1', [ req.params.id ], ( err, result ) => {
    if ( err ) {
      console.log( err.stack )
    } else {
      res.status( 200 );
      res.json( result.rows[ 0 ] );
    }
  } );
}