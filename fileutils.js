exports.getArrayFromFile = function (filename) {
    //Get values from file
    var fs = require('fs');

    let datafile = fs.readFileSync('data/' + filename, 'utf8');
    //Parse values into array of strings
    return datafile.split("\n");
}