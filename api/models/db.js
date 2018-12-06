const { Client } = require( 'pg' );

const connectionString = 'postgres://ulzgrkrn:rkSCKEgR3I8sTs4CGyVkPnmVh0lHXip3@stampy.db.elephantsql.com:5432/ulzgrkrn'

const client = new Client( {
  connectionString: connectionString,
} )

// client.connect( ( err ) => {
//   if ( err ) {
//     console.error( 'POSTGRES: Connection error', err.stack );
//   } else {
//     console.log( 'POSTGRES: Connected' );
//   }
// } );

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
let gracefulShutdown = function ( msg, callback ) {
  client.end( function () {
    console.log( 'POSTGRES: Disconnected through ' + msg );
    callback();
  } );
};

// For nodemon restarts
process.once( 'SIGUSR2', function () {
  gracefulShutdown( 'nodemon restart', function () {
    process.kill( process.pid, 'SIGUSR2' );
  } );
} );
// For app termination
process.on( 'SIGINT', function () {
  gracefulShutdown( 'app termination', function () {
    process.exit( 0 );
  } );
} );

module.exports = client;