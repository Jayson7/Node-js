const fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);


///////////////////// uncoment the section below and comment the one above to see the magic of Node js




// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// });
// console.log(fs);