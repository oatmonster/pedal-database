var crypto = require( 'crypto' );
var jwt = require( 'jsonwebtoken' );

class User {
  constructor() {
    this.email;
    this.username;
    this.hash;
    this.salt;
  }

  setPassword( password ) {
    this.salt = crypto.randomBytes( 16 ).toString( 'hex' );
    this.hash = crypto.pbkdf2Sync( password, this.salt, 1000, 64, 'sha512' ).toString( 'hex' );
  }

  validPassword( password ) {
    let hash = crypto.pbkdf2Sync( password, this.salt, 1000, 64, 'sha512' ).toString( 'hex' );
    return this.hash === hash;
  }

  generateJwt() {
    let expiry = new Date();
    expiry.setDate( expiry.getDate() + 7 );

    return jwt.sign( {
      email: this.email,
      username: this.username,
      exp: parseInt( expiry.getTime() / 1000 ),
    }, 'THE_SECRET' );
  }
}

module.exports = User;