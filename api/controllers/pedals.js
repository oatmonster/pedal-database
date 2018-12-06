var client = require( '../models/db' );

module.exports.getPedals = async function ( req, res ) {

  client.query( 'SELECT * FROM pedals', ( err, result ) => {
    if ( err ) {
      console.error( err.stack );
      res.status( 500 );
    } else {
      res.status( 200 );
      res.send( result.rows );
    }
  } )
}

module.exports.getPedal = function ( req, res ) {

  client.query( 'SELECT * FROM pedals WHERE id = $1', [ req.params.id ], ( err, result ) => {
    if ( err ) {
      console.log( err.stack )
      res.status( 500 );
    } else {
      res.status( 200 );
      result.rows[ 0 ].videoUrl = result.rows[ 0 ].videourl;
      delete result.rows[ 0 ].videourl;
      res.send( result.rows[ 0 ] );
    }
  } );
}