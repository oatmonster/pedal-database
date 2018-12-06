var client = require( '../models/db' );

module.exports.getParts = function ( req, res ) {
  res.status( 200 );
  if ( req.params.type == 'pedal' ) {
    res.send( [ {
      id: 1,
      type: 'resistor',
      value: '100k R',
      count: '15'
    } ] );
  }
  else if ( req.params.type == 'user' && req.params.id == req.user.id ) {
    res.status( 200 );
    res.send( [ {
      id: 1,
      type: 'resistor',
      value: '100k R',
      count: '15'
    } ] );
  }
  else {
    res.status( 401 ).send( {
      "message": "UnauthorizedError: private profile"
    } );;
  }


  // client.query( 'SELECT * FROM pedals', ( err, result ) => {
  //   if ( err ) {
  //     console.error( err.stack );
  //     res.status( 500 );
  //   } else {
  //     res.status( 200 );
  //     res.send( result.rows );
  //   }
  // } );
}