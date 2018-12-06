var client = require( '../models/db' );

module.exports.getParts = function ( req, res ) {
  if ( req.params.type === 'pedal' ) {
    res.send( [ {
      id: 1,
      type: 'resistor',
      value: '100k R',
      count: '15'
    } ] );
  }
  else if ( req.params.type === 'user' && req.params.id === req.user.id ) {
    res.send( [ {
      id: 1,
      type: 'resistor',
      value: '100k R',
      count: '15'
    } ] );
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