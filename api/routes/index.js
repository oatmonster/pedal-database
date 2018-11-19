const express = require( 'express' );
const router = express.Router();
const jwt = require( 'express-jwt' );
var auth = jwt( {
  secret: 'THE_SECRET',
  userProperty: 'payload'
} );

var ctrlProfile = require( '../controllers/profile' );
var ctrlAuth = require( '../controllers/authentication' );

// profile
router.get( '/profile', auth, ctrlProfile.profileRead );

// authentication
router.post( '/register', ctrlAuth.register );
router.post( '/login', ctrlAuth.login );

module.exports = router;