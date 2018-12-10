var client = require( '../models/db' );

module.exports.getPedalParts = function ( req, res ) {

  const query = `
    SELECT c.id, c.type, c.value, sc.schematic_component_count AS count
    FROM components c
    JOIN schematic_components sc
    ON c.id = sc.component_id
    WHERE sc.schematic_id = $1;
  `;

  client.query( query, [ req.params.id ], ( err, result ) => {
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

  const query = `
    SELECT c.id, c.type, c.value, uc.user_component_count AS count
    FROM users u 
    JOIN user_components uc 
    ON u.email = uc.user_email 
    JOIN components c ON c.id = uc.component_id 
    WHERE u.email = $1;
  `;

  client.query( query, [ req.user.email ], ( err, result ) => {
    if ( err ) {
      console.error( err.stack );
      res.status( 500 ).send( { "message": "InternalError" } );
    } else {
      res.status( 200 );
      res.send( result.rows );
    }
  } );
}