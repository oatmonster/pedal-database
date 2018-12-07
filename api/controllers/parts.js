var client = require( '../models/db' );

module.exports.getPedalParts = function ( req, res ) {

  client.query( 'SELECT p.id, p.type, p.value, pp.count FROM parts p JOIN pedal_parts pp ON p.id = pp.part_id where pp.pedal_id = $1;', [ req.params.id ], ( err, result ) => {
    if ( err ) {
      console.error( err.stack );
      res.status( 500 ).send( { "message": "InternalError" } );
    } else {
      res.status( 200 );
      res.send( result.rows );
    }
  } );
}

module.exports.getUserParts = function ( req, res ) {
  client.query( 'SELECT p.id, p.type, p.value, up.count FROM users u JOIN user_parts up ON u.email = up.user_email JOIN parts p ON p.id = up.part_id WHERE u.email = $1;', [ req.user.email ], ( err, result ) => {
    if ( err ) {
      console.error( err.stack );
      res.status( 500 ).send( { "message": "InternalError" } );
    } else {
      res.status( 200 );
      res.send( result.rows );
    }
  } );
}