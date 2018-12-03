var express = require( 'express' );
var router = express.Router();
var jwt = require( 'express-jwt' );
var auth = jwt( {
  secret: 'THE_SECRET',
  userProperty: 'payload'
} );

//var ctrlProfile = require( '../controllers/profile' );
var ctrlAuth = require( '../controllers/authentication' );
var ctrlPedals = require( '../controllers/pedals' );

// profile
//router.get( '/profile', auth, ctrlProfile.profileRead );

// authentication
router.post( '/register', ctrlAuth.register );
router.post( '/login', ctrlAuth.login );

// pedals
router.get( '/pedals', ctrlPedals.getPedals );
router.get( '/pedals/:id', ctrlPedals.getPedal );

module.exports = router;