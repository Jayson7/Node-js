console.log('This file contains multiple sections of codes to execute');
//// codes by jayson


function d() {
    setTimeout(() => {
        console.log('please wait');

    }, 5000);
    var fs = require('fs');

    var prev = fs.readdirSync('../');
    var prev_prev = fs.readdirSync('./');

    console.log(prev);
    console.log(prev_prev);
};

d();