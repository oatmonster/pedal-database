var passport = require( 'passport' );
var LocalStrategy = require( 'passport-local' ).Strategy;
var User = require( '../models/users' );
var client = require( '../models/db' );

passport.use( new LocalStrategy( { usernameField: 'email' },
  function ( username, password, done ) {

    const query = 'SELECT * FROM users WHERE email = $1';
    const params = [ username ];

    client.query( query, params, ( err, res ) => {
      if ( err ) {
        console.log( err.stack )
        return done( err );
      }
      if ( res.rowCount === 0 ) {
        return done( null, false, {
          message: 'Invalid email or password'
        } );
      }

      user = new User();
      user.email = res.rows[ 0 ].email;
      user.username = res.rows[ 0 ].username;
      user.salt = res.rows[ 0 ].salt;
      user.hash = res.rows[ 0 ].hash;

      if ( !user.validPassword( password ) ) {
        return done( null, false, {
          message: 'Invalid email or password'
        } );
      }

      return done( null, user );
    } );
  }
) );