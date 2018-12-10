var express = require( 'express' );
var router = express.Router();
var jwt = require( 'express-jwt' );
var auth = jwt( {
  secret: 'THE_SECRET'
} );

//var ctrlProfile = require( '../controllers/profile' );
var ctrlAuth = require( '../controllers/authentication' );
var ctrlPedals = require( '../controllers/pedals' );
var ctrlParts = require( '../controllers/parts' );

// profile
//router.get( '/profile', auth, ctrlProfile.profileRead );

// authentication
router.post( '/register', ctrlAuth.register );
router.post( '/login', ctrlAuth.login );

// pedals
router.get( '/pedals', ctrlPedals.getPedals );

router.get( '/pedals/:id', ctrlPedals.getPedal );

// parts
router.get( '/parts/pedal/:id', ctrlParts.getPedalParts );

// user
router.get( '/user/pedals', auth, ctrlPedals.getBuildablePedals );
router.get( '/user/parts', auth, ctrlParts.getUserParts );

module.exports = router;