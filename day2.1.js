var utils = require('./fileutils.js');

function findDuo(inputArray) {
    var correctID = '';
    //loop through 
    inputArray.forEach((item, index, theArray) => {
        for (var i = index; i < theArray.length; i++) {
            var match = isMatchy(item, theArray[i]);
            if (match != '') {
                correctID = match;
            }
        }
    });
    return correctID;
}

function isMatchy(firstString, secondString) {
    var out = '';
    var mismatchCount = 0;
    var differentCharPosition = 0;
    for (var i = 0; i < firstString.length; i++) {
        var firstChar = firstString.charAt(i);
        var secondChar = secondString.charAt(i);
        if (firstChar != secondChar) {
            mismatchCount++;
            differentCharPosition = i;
        }
        if (mismatchCount > 1) {
            return '';
        }
    }
    if (mismatchCount == 1) {
        out = firstString.substring(0, differentCharPosition) + firstString.substring(differentCharPosition + 1);
    }
    return out;
}



function main() {
    //Get values from file
    let valueArray = utils.getArrayFromFile('daytwo.txt');
    //Pass values into adder
    let result = findDuo(valueArray);
    //Print result
    process.stdout.write(result + "\n");
}

main();