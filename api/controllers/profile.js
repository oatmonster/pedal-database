var mongoose = require( 'mongoose' );
var User = mongoose.model( 'User' );

module.exports.profileRead = function ( req, res ) {

  if ( !req.user._id ) {
    res.status( 401 ).json( {
      "message": "UnauthorizedError: private profile"
    } );
  } else {
    User
      .findById( req.user._id )
      .exec( function ( err, user ) {
        res.status( 200 ).json( user );
      } );
  }

};