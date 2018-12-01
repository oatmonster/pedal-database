var passport = require( 'passport' );
var User = require( '../models/users' );
var client = require( '../models/db' );

module.exports.register = function ( req, res ) {
  let user = new User();

  user.email = req.body.email;
  user.username = req.body.username;
  user.setPassword( req.body.password );

  const query = 'INSERT INTO users(email, username, salt, hash) VALUES($1, $2, $3, $4) RETURNING *';
  const params = [ user.email, user.username, user.salt, user.hash ];

  client.query( query, params, ( err, result ) => {
    if ( err ) {
      console.log( err.stack )
    } else {
      console.log( "POSTGRES: Inserted " + JSON.stringify( result.rows[ 0 ] ) );
      let token = user.generateJwt();
      res.status( 200 );
      res.json( {
        "token": token
      } );
    }
  } );

}

module.exports.login = function ( req, res ) {
  passport.authenticate( 'local', function ( err, user, info ) {
    var token;

    // If Passport throws/catches an error.
    if ( err ) {
      res.status( 404 ).json( err );
      return
    }

    // If a user is found.
    if ( user ) {
      token = user.generateJwt();
      res.status( 200 );
      res.json( {
        "token": token
      } );
    } else {
      // If a user is not found.
      res.status( 401 ).json( info );
    }
  } )( req, res );
}