var client = require( '../models/db' );

module.exports.getPedals = function ( req, res ) {

  client.query( 'SELECT * FROM schematics', ( err, result ) => {
    if ( err ) {
      console.error( err.stack );
      res.status( 500 ).send( { "message": "InternalError" } );
    } else {
      res.status( 200 );
      res.send( result.rows );
    }
  } );

}

module.exports.getPedal = function ( req, res ) {

  client.query( 'SELECT * FROM schematics WHERE id = $1', [ req.params.id ], ( err, result ) => {
    if ( err ) {
      console.log( err.stack );
      res.status( 500 ).send( { "message": "InternalError" } );;
    } else {
      res.status( 200 );
      result.rows[ 0 ].videoUrl = result.rows[ 0 ].videourl;
      delete result.rows[ 0 ].videourl;
      res.send( result.rows[ 0 ] );
    }
  } );
}

module.exports.getBuildablePedals = function ( req, res ) {
  const query = `
    SELECT s.id, s.name, s.type
    FROM schematics s
    WHERE not exists (
    SELECT *
    FROM schematic_components sc
    LEFT JOIN user_components uc
    ON uc.component_id = sc.component_id
    WHERE sc.schematic_id = s.id
    AND (uc.user_email = $1 OR uc.user_email IS NULL)
    AND (uc.user_component_count < sc.schematic_component_count OR uc.user_component_count is NULL));
  `
  const params = [ req.user.email ]

  client.query( query, params, ( err, result ) => {
    if ( err ) {
      console.error( err.stack );
      res.status( 500 ).send( { "message": "InternalError" } );
    } else {
      res.status( 200 );
      res.send( result.rows );
    }
  } );
}