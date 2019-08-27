# dev-zero-file

Create a file full of /dev/zero, and can format it in ext2/ext3/ext4

## Install

```
npm i dev-zero-file --save
```

## Using

```
const devZeroFile = require( 'dev-zero-file' );

devZeroFile
    .create( 'file.img', [options] )
    .then( 
        s => {}, 
        e => {} 
    );
```

### Options

`size` - file size, Mb, as default 10Mb

`format` - not important, must be 'ext2', 'ext3' or 'ext4', works only on Linux