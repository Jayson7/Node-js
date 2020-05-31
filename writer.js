// JaysonCodes

//// Today we are going to work on rewriting a file using JS




/////>>>>>>>>>>>>>>>>>>>>>>> lets begin

/// import fs
var fs = require('fs');
/// here comes the magic
fs.writeFile('./writer.txt', 'Jayson', function(err) {
    if (!err) {
        fs.readFile('./writer.txt', function(err, data) {
            if (!err) {
                console.log(data.toString());
            };

        });
    };
});