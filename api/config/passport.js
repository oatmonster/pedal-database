var passport = require( 'passport' );
var LocalStrategy = require( 'passport-local' ).Strategy;
var mongoose = require( 'mongoose' );
var User = mongoose.model( 'User' );

passport.use( new LocalStrategy( { usernameField: 'email' },
  function ( username, password, done ) {

    var user = new User();

    user.username = "test";
    user.email = "test@test.com";

    user.setPassword( "password" );

    if ( username != user.email ) {
      return done( null, false, {
        message: 'Invalid username'
      } );
    }

    if ( !user.validPassword( password ) ) {
      return done( null, false, {
        message: 'Invalid password'
      } );
    }

    return done( null, user );

    // User.findOne( { email: username }, function ( err, user ) {
    //   if ( err ) { return done( err ); }
    //   // Return if user not found in database.
    //   if ( !user ) {
    //     return done( null, false, {
    //       message: 'Invalid email or password'
    //     } );
    //   }
    //   // Return if password is wrong.
    //   if ( !user.validPassword( password ) ) {
    //     return done( null, false, {
    //       message: 'Invalid email or password'
    //     } );
    //   }
    //   // If credentials are correct, return the user object.
    //   return done( null, user );
    // } );
  }
) );