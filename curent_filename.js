// JaysonCodes

// this script give out informations about the current file

// strictly Node.js


// let file = require('path');

// // here comes the magic

// let file_details = file.parse(__filename);

// // printing out results now

// console.log(file_details);

//////////////////////////////////////////////////// uncomment the section above to see the magic of node js

// let checkout file's directory

var file = require('path');

// here comes the magic

var file_details = file.parse(__dirname);

// printing out results now

console.log(file_details);

//////////////////////////////////////////////////////////// uncomment the section above to the magic of node js