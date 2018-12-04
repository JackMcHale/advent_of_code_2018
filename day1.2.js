
function main() {
    //Get values from file
    var fs = require('fs');

    let datafile = fs.readFileSync('data/dayone.txt', 'utf8');
    //Parse values into array of strings
    let valueArray = datafile.split("\n");
    //Pass values into adder
    let result = findFirst(valueArray);
    //Print result
    process.stdout.write("Final" + result + "");
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
            process.stdout.write(result + "\n")
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