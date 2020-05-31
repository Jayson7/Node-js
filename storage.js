const os = require('os');
// calling from os

var totalMem = os.totalmem();

var freeMem = os.freemem();

// total memory space
console.log('Total Memory : ' + totalMem);
// free memory space
console.log('Total Memory : ' + freeMem);

// used memory space 
let consumed = totalMem - freeMem;

console.log('Consumed Memory : ' + consumed);