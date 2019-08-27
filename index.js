
const commandLine = require('node-run-cmd');

class devZeroFile{

    create( path, options ) {

        path = path.split( '/' );
        let name = path.pop();
        let cwd = path.join( '/' );

        let size = (options.size || 10)*1024;

        return new Promise( ( res, rej ) => {

            commandLine
                .run( `dd if=/dev/zero of=${name} count=${size} bs=1024`, { cwd: cwd } )
                .then(
                    exitCodes => {

                        if( options.format && ['ext2', 'ext3', 'ext4'].includes( options.format ) ){

                            commandLine
                                .run( `mkfs.${options.format} -m 1 ${name}`, { cwd: cwd } )
                                .then(
                                    c => res( true ),
                                    e => rej( e )
                                );

                        }else{
                            if( exitCodes[0] === 0 ){
                                res( true );
                            }
                            rej( `Exit code: ${exitCodes[0]}` );
                        }

                    },
                    err => rej( err )
                );

        } );

    }

}

module.exports = new devZeroFile();
