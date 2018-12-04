var utils = require('./fileutils.js');
function main() {
    //Get values from file
    let valueArray = utils.getArrayFromFile('dayone.txt');
    //Pass values into adder
    let result = addValues(valueArray);
    //Print result
    process.stdout.write(result + "");
}

function addValues(inputValues) {
    var result = 0;
    //loop through values
    inputValues.map(input => {
        //get first character
        let firstChar = input.charAt(0);
        let value = parseInt(input.substring(1), 10);
        if (firstChar == "+") {
            result += value;
        }
        else if (firstChar == "-") {
            result -= value;
        }

    })
    return result;
}

main();