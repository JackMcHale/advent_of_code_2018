var utils = require('./fileutils.js');
function main() {
    //Get values from file
    let valueArray = utils.getArrayFromFile('dayone.txt');
    let result = findFirst(valueArray);
    //Print result
    process.stdout.write("Final answer is " + result + "\n");
}

function findFirst(inputValues) {
    var result = 0;
    var resultArray = [0];
    var superInt = 0;
    var foundDuplicate = false;
    //loop through values
    while (!foundDuplicate) {// && superInt <128000) {
        for (i = 0; i < inputValues.length; i++) {
            let input = inputValues[i];
            superInt++;
            //get first character
            let firstChar = input.charAt(0);
            let value = parseInt(input.substring(1), 10);
            if (firstChar == "+") {
                result += value;
            }
            else if (firstChar == "-") {
                result -= value;
            }
            if (resultArray.includes(result)) {
                foundDuplicate = true;
                break;
            }
            else {
                resultArray.push(result);
            }
        }
    }
    return result;
}

main();