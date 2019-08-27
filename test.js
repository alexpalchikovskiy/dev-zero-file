
const f = require( './index' );

f.create( 'file.img', { size: 10 } )
    .then( s => console.log( s ), e => console.log( e ) );
